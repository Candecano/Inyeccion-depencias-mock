import { Icomponente } from './componentes/Icomponente';
export class Computadora{
    private componentes: Icomponente[];
    constructor( componentes: Icomponente []){
        this.componentes = componentes;
    }

    armar (){
        this.componentes.forEach (componente => componente.agregar());
        console.log ("Computadora ensamblada");

    }
}