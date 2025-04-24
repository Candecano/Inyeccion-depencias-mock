import { Icomponente } from './Icomponente';

export class Ram implements Icomponente{
     nombre="RAM";
        agregar(){
            console.log(`Se añade ${this.nombre}`);
        }
}