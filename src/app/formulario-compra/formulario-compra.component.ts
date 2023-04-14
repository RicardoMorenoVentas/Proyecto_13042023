import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent {

  // Atributos
  private _comunidad_seleccionada: string = "Madrid";
  private _direccion: string = "";
  private _email_intro: string = "";
  private _forma_pago: string = "Efectivo";
  private _telefono_introducido: string = "";
  private _aceptado: boolean = false;

  constructor(){}

  // Getters & Setters
  public get comunidad_seleccionada(): string {
    return this._comunidad_seleccionada;
  }
  public set comunidad_seleccionada(value: string) {
    this._comunidad_seleccionada = value;
  }

  public get direccion(): string {
    return this._direccion;
  }
  public set direccion(value: string) {
    this._direccion = value;
  }

  public get email_intro(): string {
    return this._email_intro;
  }
  public set email_intro(value: string) {
    this._email_intro = value;
  }

  public get forma_pago(): string {
    return this._forma_pago;
  }
  public set forma_pago(value: string) {
    this._forma_pago = value;
  }

  public get telefono_introducido(): string {
    return this._telefono_introducido;
  }
  public set telefono_introducido(value: string) {
    this._telefono_introducido = value;
  }

  public get aceptado(): boolean {
    return this._aceptado;
  }
  public set aceptado(value: boolean) {
    this._aceptado = value;
  }

  // Métodos
  changeBool(a:void) : void{
    this._aceptado = !this._aceptado;
  }
}
