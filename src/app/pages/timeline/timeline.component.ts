import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  cursosProfes: Observable<any>;
  aux;
  testP;
  profes;
  timelineChart;

  constructor(private db: AngularFirestore) {
    this.cursosProfes = db.collection('cursos').valueChanges();
    this.testP = [['Nombre', 'Tarea', 'Desde', 'Hasta']];

    this.cursosProfes
      .pipe(
        map(d => {
          for (let i = 0; i < d.length; i++) {
            const aux = [];
            aux.push(d[i].profesor);
            aux.push(d[i].tipoCurso);
            const ini = new Date(d[i].fechaIni);
            aux.push(ini);
            const final = new Date(d[i].fechaFinal);
            aux.push(final);
            this.testP.push(aux);
          }
          return this.testP;
        })
      )
      .subscribe(datos => {
        this.timelineChart = {
          chartType: 'Timeline',
          dataTable: datos,
          options: {
            showRowLabels: true,
            timeline: { groupByRowLabel: true }
          }
        };
      });
  }

  ngOnInit() {}
}
