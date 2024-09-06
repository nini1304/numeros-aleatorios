import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {CuadradosMediosComponent} from "./components/cuadrados-medios/cuadrados-medios.component";

export const routes: Routes = [

  { path: '', component: InicioComponent},
  { path: 'cuadrados-medios', component: CuadradosMediosComponent}

];
