import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import {Foto} from './model/foto.model'


import { Filesystem, Directory } from '@capacitor/filesystem';

import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})


export class FotoServiceService {

  constructor() { }
  public fotos: Foto[] = [];
  
  public async addNewToGallery() {       
    
    const capturedPhoto = await Camera.getPhoto({      
    
    resultType: CameraResultType.Uri,      
    
    source: CameraSource.Camera,      quality: 100    
    
    });

    this.fotos.unshift({
      filepath: '',
      webViewPath: capturedPhoto.webPath
    })

  }
}

