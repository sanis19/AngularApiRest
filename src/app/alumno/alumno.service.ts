import {Injectable} from '@angular/core';
import {Alumno} from './Alumno';
import {Http,Headers,Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlumnoService{

    private listaAlumnos: Array<Alumno> = [
        new Alumno(1,'Simon','I','111111111'),
        new Alumno(2,'Santiagp','II','222222222'),
        new Alumno(3,'Andres','III','333333333'),
        new Alumno(4,'Juan','IV','444444444'),
        new Alumno(5,'Pepe','V','555555555'),
        new Alumno(6,'Pedro','VI','666666666'),
        new Alumno(7,'Alberto','VII','777777777'),
        new Alumno(8,'David','VIII','888888888'),
        new Alumno(9,'Silver','IV','999999999'),
        new Alumno(10,'Llorente','X','000000000')
    ];
    public alumno: Alumno;
    public indexAlumno;
    results: Alumno[];
    private apiUrl = "http://localhost:3000/alumnos";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http ){
        this.results = [];
    }

    public getAlumnosList(){
        
        let promise = new Promise((resolve,reject) =>{
            let apiURL = this.apiUrl;
            this.http.get(apiURL)
                     .toPromise()
                     .then(
                        res => { //Succes
                            this.results = res.json().map(item =>{
                                return new Alumno(
                                  item.id,
                                  item.nombre,
                                  item.apellidos,
                                  item.dni
                                );

                            });
                            //this.results = res.json().results;
                            console.log("ENTRA EN SUCCESS");
                            resolve();
                        },
                        msg => { //Error
                            console.log("ENTRA EN ERROR");
                            reject(msg);
                        }
                     );
        });
        console.log(promise);
        console.log("Entra en el modo get alumno"+this.results.length);
        return promise;
    }


    public addAlumno(alumno: Alumno){
        //console.log("El nombre es " + alumno.nombre);
        //console.log("Service: el numero de alumnos es "+ this.listaAlumnos.length);
        //this.listaAlumnos = [...this.listaAlumnos,alumno];
        //console.log("Service: el numero de alumnos es "+ this.listaAlumnos.length);

        console.log("Entra en el modo add alumno");
       
        return this.http
        .post(this.apiUrl, JSON.stringify(alumno), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Alumno)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred',error);
        return Promise.reject(error.message || error);
    }

    public delete(alumno: Alumno){
        const url = `${this.apiUrl}/${alumno.id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
    }

    public update(alumno: Alumno,index){
       // this.listaAlumnos[index] = alumno;

        const url = `${this.apiUrl}/${alumno.id}`;
    return this.http
      .put(url, JSON.stringify(alumno), {headers: this.headers})
      .toPromise()
      .then(() => alumno)
      .catch(this.handleError);
    }

    public prepareUpdate(alumno: Alumno,index){
        this.alumno=alumno;
        this.indexAlumno = index;
    }

    public getElementById(apellido: string){
       /* const url = `${this.apiUrl}/${alumno.id}`;
        return this.http.get(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);*/
          console.log(apellido);
    }


}