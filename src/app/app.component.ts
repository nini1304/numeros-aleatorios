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

  abrirInicio() {

    this.router.navigate(['']);

  }


  obtenerValores(): void {
    console.log('Valor de a:', this.valuea);
    console.log('Valor de b:', this.valueb);
  }

  obtenerCuatroDigitosCentrales(): string {
    // Realiza la multiplicación
    let resultado = (this.valuea * this.valueb).toString();

    // Si la longitud no es par, agrega ceros a la izquierda
    if (resultado.length % 2 !== 0) {
      resultado = "0" + resultado;
    }

    // Calcula la posición de inicio para los 4 dígitos centrales
    const start = Math.floor((resultado.length - 4) / 2);

    // Obtiene los 4 dígitos centrales
    const digitosCentrales = resultado.substring(start, start + 4);
    console.log('Digitos centrales:', digitosCentrales);

    return digitosCentrales;
  }
}
