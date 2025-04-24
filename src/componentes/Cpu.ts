import { Icomponente } from './Icomponente';

export class Cpu implements Icomponente{
    nombre= "CPU";
    agregar(){
        console.log(`Se añade ${this.nombre}`);
    }
}