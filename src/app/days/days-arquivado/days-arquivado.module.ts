import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DaysArquivadoPageRoutingModule } from './days-arquivado-routing.module';
import { DaysArquivadoPage } from './days-arquivado.page';
import { FooterComponent } from 'src/app/template/footer/footer.component';
import { BackMenuComponent } from 'src/app/template/back-menu/back-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysArquivadoPageRoutingModule
  ],
  declarations: [DaysArquivadoPage,BackMenuComponent,FooterComponent]
})
export class DaysArquivadoPageModule {}
