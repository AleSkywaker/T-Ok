import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoD3Component } from './pages/grafico-d3/grafico-d3.component';
import { GraficaAmComponent } from './pages/grafica-am/grafica-am.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { GoogleChartsComponent } from './pages/google-charts/google-charts.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { FormularioComponent } from './shared/formulario/formulario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GraficoD3Component,
    GraficaAmComponent,
    MapasComponent,
    GoogleChartsComponent,
    TimelineComponent,
    NavbarComponent,
    DatePickerComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2GoogleChartsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
