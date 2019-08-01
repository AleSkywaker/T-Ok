import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficoD3Component } from './pages/grafico-d3/grafico-d3.component';
import { GraficaAmComponent } from './pages/grafica-am/grafica-am.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { GoogleChartsComponent } from './pages/google-charts/google-charts.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'grafico', component: GraficoD3Component },
  { path: 'am', component: GraficaAmComponent },
  { path: 'mapa', component: MapasComponent },
  { path: 'google', component: GoogleChartsComponent },
  { path: 'time', component: TimelineComponent },
  { path: 'date', component: DatePickerComponent },
  { path: 'form', component: ContactFormComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
