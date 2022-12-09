import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContenidoModule } from './contenido/contenido.module';
import { SharedModule } from './shared/shared.module';
import { ClientesModule } from './clientes/clientes.module';

// importo modulo del escaner QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// importo modulo del generador QR
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContenidoModule,
    ClientesModule,
    // Generador y escaner
    QRCodeModule,
    ZXingScannerModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
