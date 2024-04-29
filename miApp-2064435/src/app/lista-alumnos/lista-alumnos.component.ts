import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { alumno } from '../model/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit {

  result: string = '';
  alumnos: alumno[] = []; // ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
  
  constructor(
    private alertController: AlertController,
    private actionSheetController: ActionSheetController
  ) {}

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  agregarAlumno(): void {
    this.alumnos.push(this.alumno); 
    this.alumno = { nombre: '', presente: false }
  }

  ngOnInit() {}


  async addToFavorites(alumno: string) {
  
  }

  async confirmDelete(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Eliminar',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
      
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
}

