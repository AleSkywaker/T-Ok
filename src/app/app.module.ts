import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos de terceros
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Componentes
import { AppComponent } from './app.component';
import { GraficoD3Component } from './pages/grafico-d3/grafico-d3.component';
import { GraficaAmComponent } from './pages/grafica-am/grafica-am.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { GoogleChartsComponent } from './pages/google-charts/google-charts.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { FormularioComponent } from './shared/formulario/formulario.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { MaterialFormuComponent } from './shared/material-formu/material-formu.component';

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
    FormularioComponent,
    ContactFormComponent,
    MaterialFormuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2GoogleChartsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
