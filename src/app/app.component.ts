import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'numeros-aleatorios';
  valuea = 0;
  valueb = 0;

  constructor(private router: Router) {
  }

  abrirCuadradosMedios() {

    this.router.navigate(['/cuadrados-medios']);

  }

  abrirProductosMedios() {

    this.router.navigate(['/productos-medios']);

  }

  abrirLineal() {

    this.router.navigate(['/lineal']);

  }

  abrirInicio() {

    this.router.navigate(['']);

  }





}
