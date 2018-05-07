import { Component } from '@angular/core'; // importar clases de librerias
import { Calculadora} from './Calculadora';

// anotaciones
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//definir la clase
export class AppComponent {
  //properties, son publicos y no es necesario los getters
  title = 'app';
  hello = 'Hello David';
  resultado;
  campo1:number;
  campo2:number;
  operator="";


  calcular(){
   let cal = new Calculadora();
   this.resultado = cal.calcular(this.campo1,this.campo2,this.operator);
  }

  limpiar(){
    this.resultado = '';
    this.operator  ='';
    this.campo1 = null;
    this.campo2 = null;
  }
}