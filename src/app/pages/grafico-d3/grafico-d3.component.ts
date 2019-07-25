import { Component, NgZone, AfterViewInit, OnDestroy, AfterContentInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_dark from '@amcharts/amcharts4/themes/dark.js';
// import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh';
import * as d3 from 'd3';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-grafico-d3',
  templateUrl: './grafico-d3.component.html',
  styleUrls: ['./grafico-d3.component.css']
})
export class GraficoD3Component implements AfterViewInit, OnDestroy, AfterContentInit {
  radius = 10;
  constructor() {}

  ngAfterContentInit() {
    d3.select('p').style('color', 'red');
  }

  colorMe() {
    d3.select('button').style('color', 'red');
  }

  clicked(event: any) {
    d3.select(event.target)
      .append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', () => {
        return this.radius;
      })
      .attr('fill', 'red');
  }
  ngAfterViewInit() {}
  ngOnDestroy() {}
}
