import { Component, OnInit } from '@angular/core';
import {Alumno} from './../alumno/Alumno';
import {AlumnoService} from './../alumno/alumno.service';
import {Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']//,
 // providers: [AlumnoService]
})
export class AgregarAlumnoComponent implements OnInit {

  alumno = new Alumno(0,"","","");

  constructor(private Location:Location,private router: Router,private alumnoservice:AlumnoService) { }

  ngOnInit() {
  }

  public add(){
    //console.log("Entra en el metodo add");
    //console.log("El nombre es " + this.alumno.nombre);
    //console.log("el numero de alumnos es "+ this.alumnoservice.getAlumnosList().length);
    this.alumnoservice.addAlumno(this.alumno);
   // console.log("el numero de alumnos es "+ this.alumnoservice.getAlumnosList().length);
   //this.router.navigate(['/alumno']);
   this.Location.back();
  }
}
