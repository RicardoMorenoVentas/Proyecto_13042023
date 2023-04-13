import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
    moneda_origen:number = 0;
    opcion_seleccionada:string = "";
    moneda_resultado:number = 0;

    calcular(){
      switch(this.opcion_seleccionada){
        case "USD":
          this.moneda_resultado = this.moneda_origen * 1.10;
          break;
        case "YEN":
          this.moneda_resultado = this.moneda_origen * 146.67;
          break;
        case "AUD":
          this.moneda_resultado = this.moneda_origen * 1.64;
          break;
      }
    }
}
