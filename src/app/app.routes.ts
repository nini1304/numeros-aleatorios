import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {CuadradosMediosComponent} from "./components/cuadrados-medios/cuadrados-medios.component";
import {ProductosMediosComponent} from "./components/productos-medios/productos-medios.component";
import {LinealComponent} from "./components/lineal/lineal.component";

export const routes: Routes = [

  { path: '', component: InicioComponent},
  { path: 'cuadrados-medios', component: CuadradosMediosComponent},
  { path: 'productos-medios', component: ProductosMediosComponent},
  { path: 'lineal', component: LinealComponent}

];
