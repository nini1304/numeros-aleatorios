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
import {DatePipe} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-productos-medios',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe,HttpClientModule
  ],
  templateUrl: './productos-medios.component.html',
  styleUrl: './productos-medios.component.css'
})
export class ProductosMediosComponent {
  value = 0;
  value2 = 0;
  value3 = 0;
  Yi='';
  Xi=0;
  Xi1=0;
  Xi11=0;
  ri=0;
  aux1=0;
  aux2=0;
  numerosAleatorios: NumerosAleatorios[] = [];
  mensaje = '';
  flag = false;


  private _httpClient = inject(HttpClient);

  displayedColumns: string[] = ['i', 'Xi1' ,'Xi','Yi','Xi11', 'ri'];
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

  vaciarX1(){
    this.value2=0;
    this.vaciarTabla();
    this.mensaje='';
  }
  vaciarN(){
    this.value3=0;
    this.vaciarTabla();
    this.mensaje='';
  }
  vaciarTodo(){
    this.vaciarTabla();
    this.value=0;
    this.value2=0;
    this.value3=0;
    this.mensaje='';
  }

  vaciarTabla() {
    this.numerosAleatorios = [];
    this.data.data = this.numerosAleatorios;
  }

  generarNumerosAleatorios() {
    this.flag = false;
    this.vaciarTabla();
    this.aux1=this.value;
    this.aux2 = this.value2;
    const cantidadDigitos = this.aux1.toString().length;

    for(let i = 1; i <= this.value3; i++) {
      this.Xi1 = this.aux1;
      this.Xi = this.aux2;
      const aux = this.Xi * this.Xi1;
      this.Yi = aux.toString();
      if (this.Yi.length % 2 !== 0) {
        this.Yi = "0" + this.Yi;
      }
      // Calcula la posición de inicio para los 'cantidadDigitos' centrales
      const start = Math.floor((this.Yi.length - cantidadDigitos) / 2);
      const digitosCentrales = this.Yi.substring(start, start + cantidadDigitos);
      this.Xi11 = parseInt(digitosCentrales);

      if(this.flag==false){
        if (this.Xi11 === 0 || this.numerosAleatorios.some(elemento => elemento.Xi11 === this.Xi11)) {
          this.mensaje = `La secuencia se degenera en la posición ${i} con el valor: ${this.Xi11}`;
          this.flag = true;
        }
      }


      this.ri=this.Xi11/(Math.pow(10,cantidadDigitos));
      this.numerosAleatorios.push({i: i, Xi1: this.Xi1, Xi: this.Xi, Yi: this.Yi,Xi11:this.Xi11, ri: this.ri});
      this.aux1 = this.Xi;
      this.aux2 = this.Xi11;



    }
    this.data.data = this.numerosAleatorios;

    console.log(this.numerosAleatorios);

  }

}

export interface NumerosAleatorios {
  i: number;
  Xi1:number;
  Xi: number;
  Yi: string;
  Xi11:number;
  ri: number;
}
