import { Component, OnInit } from '@angular/core';
import {Alumno} from './../alumno/Alumno';
import {AlumnoService} from './../alumno/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrls: ['./update-alumno.component.css']
})
export class UpdateAlumnoComponent implements OnInit {

  constructor(private router: Router,private alumnoservice:AlumnoService) { }
  alumno;

  ngOnInit() {
    this.alumno = new Alumno(this.alumnoservice.alumno.id, this.alumnoservice.alumno.nombre,
      this.alumnoservice.alumno.apellidos,
      this.alumnoservice.alumno.dni);
  }

  public update(){
    this.alumnoservice.update(this.alumno,this.alumnoservice.indexAlumno);
    this.router.navigate(['/alumno']);
  }
  public back(){
    this.router.navigate(['/alumno']);
  }
}
