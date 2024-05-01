import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CamaraComponent } from './camara/camara.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  { path: 'camara', component: CamaraComponent },
  {
    path: '',
    redirectTo: '/camara',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'producto/:id',
    component: ProductoDetalleComponent
 },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
