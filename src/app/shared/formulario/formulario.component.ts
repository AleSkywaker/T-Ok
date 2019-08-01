import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // color = new FormControl('');
  colorNuevo;
  registerForm: FormGroup;
  submitted = false;
  cursos: Observable<any>;
  constructor(private db: AngularFirestore) {
    this.cursos = db.collection('cursos').valueChanges();

    this.cursos.subscribe(datos => {
      console.log('Datos', datos);
    });
  }

  curso = {
    curso: '',
    tipoCurso: '',
    pais: '',
    profesor: '',
    fechaFinal: '',
    fechaIni: '',
    color: ''
  };

  ngOnInit() {
    this.registerForm = new FormGroup({
      tipoCurso: new FormControl(''),
      curso: new FormControl(''),
      profesor: new FormControl(''),
      color: new FormControl(''),
      pais: new FormControl(''),
      fechaIni: new FormControl(''),
      fechaFinal: new FormControl('')
    });
    console.log('cursos', this.cursos);
  }

  cambio(e) {
    this.colorNuevo = e.target.value;
  }
  onSubmit(valor) {
    this.curso.curso = valor.curso;
    this.curso.profesor = valor.profesor;
    this.curso.pais = valor.pais;
    this.curso.fechaIni = valor.fechaIni;
    this.curso.fechaFinal = valor.fechaFinal;
    if (valor.color === 'yellow') {
      this.curso.tipoCurso = 'Preparacion';
    } else if (valor.color === 'red') {
      this.curso.tipoCurso = 'Curso';
    } else if (valor.color === 'blue') {
      this.curso.tipoCurso = 'Coaching';
    }
    this.curso.color = valor.color;

    console.log('SUCCESS!! :-)\n\n', this.curso);
    this.db.collection('cursos').add(this.curso);
  }
}
