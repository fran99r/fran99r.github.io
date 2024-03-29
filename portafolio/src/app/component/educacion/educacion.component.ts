import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/servicio/portafolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  portafolio:any;
  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data=>{
      this.portafolio=data.educacion;
    });
  }

}
