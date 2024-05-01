import { Component, OnInit } from '@angular/core';

import { FotoServiceService} from '../foto-service.service'; 
import {Foto} from '../model/foto.model'

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent implements OnInit {
  public fotos: Foto[] = [];

  constructor(private fotoService: FotoServiceService) { 
    this.fotos = this.fotoService.fotos;
  }

  ngOnInit() {}
 
  tomarFoto() {
    this.fotoService.addNewToGallery();
  }
 

}
