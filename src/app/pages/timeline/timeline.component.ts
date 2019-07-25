import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartReadyEvent,
  ChartErrorEvent,
  ChartSelectEvent,
  ChartMouseOverEvent,
  ChartMouseOutEvent
} from 'ng2-google-charts';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public timelineChart = {
    chartType: 'Timeline',
    dataTable: [
      ['Nombre', 'Tarea', 'Desde', 'Hasta'],
      ['Joaquin', 'Preparacion', new Date(1789, 3, 30), new Date(1797, 2, 4)],
      ['Joaquin', 'Curso', new Date(1797, 2, 4), new Date(1801, 2, 4)],
      ['Joaquin', 'Coaching', new Date(1801, 2, 4), new Date(1809, 2, 4)]
    ],
    options: {
      showRowLabels: true,
      timeline: { groupByRowLabel: true }
    }
  };
  constructor() {}

  ngOnInit() {}
}
