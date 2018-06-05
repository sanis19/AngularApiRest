import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component'
import { AlumnoComponent } from './alumno/alumno.component'
import { ProductComponent } from './product/product.component'
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { routing} from './router';
import {AlumnoService} from './alumno/alumno.service';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    AlumnoComponent,
    ProductComponent,
    AgregarAlumnoComponent,
    UpdateAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [AlumnoService],
  //primer componente que se arranca
  bootstrap: [AppComponent]
})
export class AppModule { }
