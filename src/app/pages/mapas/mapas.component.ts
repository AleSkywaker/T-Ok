import {
  Component,
  NgZone,
  AfterViewInit,
  OnDestroy,
  AfterContentInit,
  OnInit
} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_dark from '@amcharts/amcharts4/themes/dark.js';
import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {
  private chart: am4maps.MapChart;
  constructor(public zone: NgZone) {}

  ngOnInit() {}
  ngAfterContentInit() {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create map instance
      const chart = am4core.create('chartdiv', am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_worldHigh;

      // Set projection
      chart.projection = new am4maps.projections.Mercator();

      // Center on the groups by default
      chart.homeZoomLevel = 6;
      chart.homeGeoPoint = { longitude: 10, latitude: 51 };

      // Polygon series
      const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.exclude = ['AQ'];
      polygonSeries.useGeodata = true;
      polygonSeries.nonScalingStroke = true;
      polygonSeries.strokeOpacity = 0.5;

      // Image series
      const imageSeries = chart.series.push(new am4maps.MapImageSeries());
      const imageTemplate = imageSeries.mapImages.template;
      imageTemplate.propertyFields.longitude = 'longitude';
      imageTemplate.propertyFields.latitude = 'latitude';
      imageTemplate.nonScaling = true;

      const image = imageTemplate.createChild(am4core.Image);
      image.propertyFields.href = 'imageURL';
      image.width = 50;
      image.height = 50;
      image.horizontalCenter = 'middle';
      image.verticalCenter = 'middle';

      const label = imageTemplate.createChild(am4core.Label);
      label.text = '{label}';
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'top';
      label.dy = 20;

      imageSeries.data = [
        {
          latitude: 40.416775,
          longitude: -3.70379,
          imageURL: '../../../assets/amcharts_weather_icons/animated/day.svg',
          width: 32,
          height: 32,
          label: 'Madrid: +40C'
        },
        {
          latitude: 48.856614,
          longitude: 2.352222,
          imageURL: 'https://www.amcharts.com/lib/images/weather/animated/thunder.svg',
          width: 32,
          height: 32,
          label: 'Paris: +18C'
        },
        {
          latitude: 52.520007,
          longitude: 13.404954,
          imageURL: 'https://www.amcharts.com/lib/images/weather/animated/cloudy-day-1.svg',
          width: 32,
          height: 32,
          label: 'Berlin: +13C'
        },
        {
          latitude: 52.229676,
          longitude: 21.012229,
          imageURL: 'https://www.amcharts.com/lib/images/weather/animated/day.svg',
          width: 32,
          height: 32,
          label: 'Warsaw: +22C'
        },
        {
          latitude: 41.872389,
          longitude: 12.48018,
          imageURL: 'https://www.amcharts.com/lib/images/weather/animated/day.svg',
          width: 32,
          height: 32,
          label: 'Rome: +29C'
        },
        {
          latitude: 51.507351,
          longitude: -0.127758,
          imageURL: 'https://www.amcharts.com/lib/images/weather/animated/rainy-7.svg',
          width: 32,
          height: 32,
          label: 'London: +10C'
        },
        {
          latitude: 59.329323,
          longitude: 18.068581,
          imageURL: 'https://www.amcharts.com/lib/images/weather/animated/rainy-1.svg',
          width: 32,
          height: 32,
          label: 'Stockholm: +8C'
        }
      ];
      this.chart = chart;
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
