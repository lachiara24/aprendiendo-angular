import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ContenidoModule } from './contenido/contenido.module';
import { SharedModule } from './shared/shared.module';
import { ClientesModule } from './clientes/clientes.module';

// importo modulo del escaner QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// importo modulo del generador QR
import { QRCodeModule } from 'angularx-qrcode';
import { LectorQRComponent } from './componentes/lector-qr/lector-qr.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ClienteItemComponent } from './componentes/cliente-item/cliente-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LectorQRComponent,
    ClienteComponent,
    ClienteItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContenidoModule,
    ClientesModule,
    HttpClientModule,
    // Generador y escaner
    QRCodeModule,
    ZXingScannerModule,
    FontAwesomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
