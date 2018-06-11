import { Component, OnInit } from '@angular/core';
import {Alumno} from './Alumno';
import {AlumnoService} from './alumno.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']/*,
  providers: [AlumnoService] //Sirve para injectar el componente, se puede poner aqui o en el app.model.ts
*/
})
export class AlumnoComponent implements OnInit {

  public listaAlumnos: Array<Alumno>;
  public loading: boolean = false;
  public buscarApellido : string;

  constructor(private router: Router,private alumnoservice:AlumnoService) { }

  ngOnInit() {
    this.refreshAlumnos();
  }

  private refreshAlumnos(){
    console.log("Entra en el modo refreshAlumnos");
    //this.listaAlumnos = this.alumnoservice.getAlumnosList();
    this.loading = true;
    this.alumnoservice.getAlumnosList().then(_=>this.loading=false);
  }

  public update(alumno: Alumno, index){
   // this.alumnoservice.addAlumno(this.alumno);
  // console.log("El nombre es " + alumno.nombre + " el index es "+index);
   this.alumnoservice.prepareUpdate(alumno,index);
   this.router.navigate(['/update-alumno']);
   
  }

  public delete(alumno: Alumno){
    // console.log("El nombre es " + alumno.nombre);
     this.alumnoservice.delete(alumno);
     this.refreshAlumnos();
  }

  public buscar(){
    this.alumnoservice.getElementById(this.buscarApellido);
  }

}
