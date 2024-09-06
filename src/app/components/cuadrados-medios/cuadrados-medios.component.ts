import {Component, inject, ViewChild} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSort, MatSortModule, SortDirection} from "@angular/material/sort";
import {merge, Observable, of as observableOf} from 'rxjs';
import {DatePipe} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {catchError, map, startWith, switchMap} from "rxjs";


@Component({
  selector: 'app-cuadrados-medios',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe,HttpClientModule],
  templateUrl: './cuadrados-medios.component.html',
  styleUrl: './cuadrados-medios.component.css'
})
export class CuadradosMediosComponent {
  value = 0;
  value2 = 0;
  Yi=0;
  resultado='';
  Xi=0;
  ri=0;
  aux2=0;
  numerosAleatorios: NumerosAleatorios[] = [];
  mensaje = '';
  flag = false;


  private _httpClient = inject(HttpClient);

  displayedColumns: string[] = ['i', 'Yi','Resultado' ,'Xi', 'ri'];
  data = new MatTableDataSource<NumerosAleatorios>(this.numerosAleatorios);



  resultsLength = 0;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;

  }

  validateNonNegative(event: any) {
    const inputValue = event.target.value;

    if (inputValue < 0) {
      event.target.value = 0; // Si el valor es negativo, se corrige a 0
      alert('El valor no puede ser negativo');
    }
  }
  vaciarX(){
    this.value=0;
    this.vaciarTabla();
    this.mensaje='';
  }
  vaciarN(){
    this.value2=0;
    this.vaciarTabla();
    this.mensaje='';
  }
  vaciarTodo(){
    this.vaciarTabla();
    this.value=0;
    this.value2=0;
    this.mensaje='';
  }

  vaciarTabla() {
    this.numerosAleatorios = [];
    this.data.data = this.numerosAleatorios;
  }

  generarNumerosAleatorios() {
    this.flag = false;
    this.vaciarTabla();
    this.aux2 = this.value;
    const cantidadDigitos = this.aux2.toString().length;

    for(let i = 1; i <= this.value2; i++) {
      this.Yi = this.aux2;
      const aux = Math.pow(this.Yi, 2);
      this.resultado = aux.toString();
      if (this.resultado.length % 2 !== 0) {
        this.resultado = "0" + this.resultado;
      }
      // Calcula la posición de inicio para los 'cantidadDigitos' centrales
      const start = Math.floor((this.resultado.length - cantidadDigitos) / 2);
      const digitosCentrales = this.resultado.substring(start, start + cantidadDigitos);
      this.Xi = parseInt(digitosCentrales);

      if(this.flag==false){
        if (this.Xi === 0 || this.numerosAleatorios.some(elemento => elemento.Xi === this.Xi)) {
          this.mensaje = `La secuencia se degenera en la posición ${i} con el valor: ${this.Xi}`;
          this.flag = true;
        }
      }


      this.ri=this.Xi/(Math.pow(10,cantidadDigitos));
      this.numerosAleatorios.push({i: i, Yi: this.Yi, Resultado: this.resultado, Xi: this.Xi, ri: this.ri});
      this.aux2 = this.Xi;



    }
    this.data.data = this.numerosAleatorios;

    console.log(this.numerosAleatorios);

  }
}

export interface NumerosAleatorios {
  i: number;
  Yi: number;
  Resultado: string;
  Xi: number;
  ri: number;
}






