import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title= 'Calculadora';
  valor2:number=0;
  valor1:number=0; 
  total:number=0;  


   
suma():void { 
    this.total=Number(this.valor1)+Number(this.valor2);
 } 
 resta():void { 
  this.total=Number(this.valor1)-Number(this.valor2);
} 
multiplicar():void { 
  this.total=Number(this.valor1)*Number(this.valor2);
} 
dividir():void { 
  this.total=Number(this.valor1)/Number(this.valor2);
} 

//constructor
  constructor() { }

  ngOnInit() {
  }

}