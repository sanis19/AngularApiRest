export class Calculadora{
    
    SUMAR:string = "Sumar";
    RESTAR:string = "Restar";
    MULTIPLICAR:string = "Multiplicar";
    DIVIDIR:string = "Dividir";

    sum(a: number, b: number): number{
        
        return (a-0)+(b-0);
    }

    rest(a: number, b: number): number{
        return a - b;
    }

    mult(a: number, b: number): number{
        return a * b;
    }

    div(a: number, b: number): number{
        return a / b;
    }

    calcular(a: number, b: number,operador: string):number{
        var resultado;
        if(this.SUMAR==operador){
            resultado = this.sum(a,b);
        }else if(this.RESTAR==operador){
            resultado = this.rest(a,b);
        }else if(this.MULTIPLICAR==operador){
            resultado = this.mult(a,b);
        }else if(this.DIVIDIR==operador){
            resultado = this.div(a,b);
        }

        return resultado;
    }
}