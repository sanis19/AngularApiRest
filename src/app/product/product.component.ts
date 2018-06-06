//app/todos/todo-form/todo-form.component.ts
import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/product.model'


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
    model = new ProductModel(0,'','','',0);
    version:number;
    productId:string; 
    description:string;
    imageUrl:string;
    price:number;  



  crearProduct():void { 
 } 
  ngOnInit() {
    
  }

}