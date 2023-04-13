import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent {

  form: FormGroup = this.fb.group({
    comunidad_seleccionada : "Madrid",
    direccion: "",
    email_intro: "",
    forma_pago: "",
    telefono_introducido: ""
  });

  aceptado:boolean = false;

  changeBool(a:void) : void{
    this.aceptado = !this.aceptado;
  }

  constructor(private fb: FormBuilder){}

}
