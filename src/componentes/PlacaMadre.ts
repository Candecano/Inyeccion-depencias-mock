import { Icomponente } from './Icomponente';

export class PlacaMadre implements Icomponente{
     nombre= "Placa Madre";
        agregar(){
            console.log(`Se añade ${this.nombre}`);
        }
}