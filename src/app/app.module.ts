import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContenidoModule } from './contenido/contenido.module';
import { SharedModule } from './shared/shared.module';
import { ClientesModule } from './clientes/clientes.module';

// importo modulo del escaner QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContenidoModule,
    ClientesModule,
    // Escaner
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
