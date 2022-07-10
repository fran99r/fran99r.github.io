import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AcercaDeMiComponent } from './component/acerca-de-mi/acerca-de-mi.component';
import { SeparadorComponent } from './component/separador/separador.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { Separador1Component } from './component/separador1/separador1.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PortafolioService } from 'src/servicio/portafolio.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeMiComponent,
    SeparadorComponent,
    ExperienciaComponent,
    EducacionComponent,
    Separador1Component,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [PortafolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
