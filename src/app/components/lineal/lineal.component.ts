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
  selector: 'app-lineal',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe,HttpClientModule
  ],
  templateUrl: './lineal.component.html',
  styleUrl: './lineal.component.css'
})
export class LinealComponent {
  value = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;
  a= 0;
  Xi1= 0;
  c= 0;
  P=0;
  g=0;
  m= 0;
  Xi= 0;
  ri= 0;
  aux=false;

  numerosAleatorios: NumerosAleatorios[] = [];



  private _httpClient = inject(HttpClient);

  displayedColumns: string[] = ['i','Xi-1' ,'c','Operacion', 'Xi','Operacion2', 'ri'];
  data = new MatTableDataSource<NumerosAleatorios>(this.numerosAleatorios);



  resultsLength = 0;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;

  }

  validateNonNegative(event: any, value: string) {
    const inputValue = event.target.value;

    if (inputValue < 0 || inputValue % 1 !== 0) {
      event.target.value = 0; // Si el valor es negativo, se corrige a 0
      alert('El valor no puede ser negativo ni decimal');
      if(value=='value'){
        this.value=0;
      }else if(value=='value2'){
        this.value2=0;
      }else if(value=='value3') {
        this.value4 = 0;
      }else if(value=='value4') {
        this.value5 = 0;
      }else if(value=='value5') {
        this.value5 = 0;
      }
    }
  }
  vaciarX(){
    this.value=0;
    this.vaciarTabla();
    this.g=0;
    this.m=0;
    this.a=0;

  }
  vaciarK(){
    this.value2=0;
    this.vaciarTabla();
    this.g=0;
    this.m=0;
    this.a=0;

  }
  vaciarC(){
    this.value3=0;
    this.vaciarTabla();
    this.g=0;
    this.m=0;
    this.a=0;

  }
  vaciarP(){
    this.value4=0;
    this.vaciarTabla();
    this.g=0;
    this.m=0;
    this.a=0;

  }
  vaciarD(){
    this.value5=0;
    this.vaciarTabla();
    this.g=0;
    this.m=0;
    this.a=0;

  }
  vaciarTodo(){
    this.vaciarTabla();
    this.value=0;
    this.value2=0;
    this.value3=0;
    this.value4=0;
    this.value5=0;
    this.g=0;
    this.m=0;
    this.a=0;
  }

  vaciarTabla() {
    this.numerosAleatorios = [];
    this.data.data = this.numerosAleatorios;
  }

  generarNumerosAleatorios() {
    if(this.value==0 || this.value2==0 || this.value3==0 || this.value4==0 || this.value5==0){
      alert('Por favor, ingrese todos los valores')
    }else{
      this.vaciarTabla();
      this.Xi1 = this.value;
      this.aux= false;
      for(let i = 1; i <= this.value4; i++) {
        this.a= (1+4*this.value2);
        this.c= this.value3;
        this.P= this.value4;
        this.g= Math.ceil(Math.log(this.P) / Math.log(2));
        this.m= Math.pow(2,this.g);
        if(this.verificarPrimos(this.c,this.m)){
          this.Xi= (this.a*this.Xi1+this.c)%this.m;
          this.ri= parseFloat((this.Xi/(this.m-1)).toFixed(this.value5));
          this.numerosAleatorios.push({
            i: i,
            a: this.a,
            Xi1: this.Xi1,
            c: this.c,
            P: this.P,
            g: this.g,
            m: this.m,
            Xi: this.Xi,
            ri: this.ri
          });
          this.Xi1 = this.Xi;
        }else{
          alert('Los valores de c y m no son primos entre sí')
          break;
        }


        this.data.data = this.numerosAleatorios;

        console.log(this.numerosAleatorios);
      }
    }



  }

  verificarPrimos(a:number,b:number){
    return this.verificar(a, b) === 1;

  }

  verificar(a:number,b:number){
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;

  }

}

export interface NumerosAleatorios {
  i:number;
  a:number;
  Xi1:number;
  c:number;
  P:number;
  g:number;
  m:number;
  Xi:number;
  ri:number;
}
