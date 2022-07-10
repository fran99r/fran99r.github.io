import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/servicio/portafolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  portafolio:any;
  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data=>{
      this.portafolio=data;
    });
  }

}
