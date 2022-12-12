import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { HttpClientModule } from '@angular/common/http';
import localeBr from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeBr, 'pt-br')
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers:  [NativePageTransitions, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
