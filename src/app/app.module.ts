import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConversorComponent } from './conversor/conversor.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    CalculadoraComponent,
    ConversorComponent,
    FormularioCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
