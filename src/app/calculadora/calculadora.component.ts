import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
    numero_primero:number = 0;
    numero_segundo:number = 0;
    salida:number = 0;

    operador(a: string) : void {
      switch (a) {
        case "+":
          this.salida =  (this.numero_primero + this.numero_segundo)
          break;

        case "-":
          this.salida =  (this.numero_primero - this.numero_segundo)
          break;

        case "*":
          this.salida =  (this.numero_primero * this.numero_segundo)
          break;

        case "/":
          this.salida =  (this.numero_primero / this.numero_segundo)
          break;
      }
    }
}
