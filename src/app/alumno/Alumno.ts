export class Alumno {

    id:number;
    nombre: string;
    apellidos: string;
    dni: string;

    constructor(id:number,nombre: string, apellidos: string, dni: string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
    }


}