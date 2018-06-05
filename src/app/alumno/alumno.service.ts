import {Injectable} from '@angular/core';
import {Alumno} from './Alumno';

@Injectable()
export class AlumnoService{

    private listaAlumnos: Array<Alumno> = [];
    public alumno: Alumno;
    public indexAlumno;

    constructor(){}

    public getAlumnosList(): Array<Alumno>{
        if(this.listaAlumnos.length>0){
            return this.listaAlumnos;
        }else{
            return this.mockAlumnos();
        }
    }

    private mockAlumnos(): Array<Alumno>{
        this.listaAlumnos = [
            new Alumno('Simon','I','111111111'),
            new Alumno('Santiagp','II','222222222'),
            new Alumno('Andres','III','333333333'),
            new Alumno('Juan','IV','444444444'),
            new Alumno('Pepe','V','555555555'),
            new Alumno('Pedro','VI','666666666'),
            new Alumno('Alberto','VII','777777777'),
            new Alumno('David','VIII','888888888'),
            new Alumno('Silver','IV','999999999'),
            new Alumno('Llorente','X','000000000')
        ];
        return this.listaAlumnos;
    }

    public addAlumno(alumno: Alumno){
        //console.log("El nombre es " + alumno.nombre);
        //console.log("Service: el numero de alumnos es "+ this.listaAlumnos.length);
        this.listaAlumnos = [...this.listaAlumnos,alumno];
        //console.log("Service: el numero de alumnos es "+ this.listaAlumnos.length);
    }

    public delete(alumno: Alumno){
        // console.log("Service: el numero de alumnos es "+ this.listaAlumnos.length);
        for(var i=0;i<this.listaAlumnos.length;i++){
            if(this.listaAlumnos[i]["nombre"]==alumno.nombre){
                this.listaAlumnos.splice(i,1);
            }
        }
      //  console.log("Service: el numero de alumnos es "+ this.listaAlumnos.length);
        
    }

    public update(alumno: Alumno,index){
        this.listaAlumnos[index] = alumno;
    }

    public prepareUpdate(alumno: Alumno,index){
        this.alumno=alumno;
        this.indexAlumno = index;
    }


}