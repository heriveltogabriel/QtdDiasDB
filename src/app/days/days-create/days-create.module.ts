import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DaysCreatePageRoutingModule } from './days-create-routing.module';
import { DaysCreatePage } from './days-create.page';
import { BackMenuComponent } from 'src/app/template/back-menu/back-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysCreatePageRoutingModule,
  ],
  
  declarations: [DaysCreatePage,BackMenuComponent]
})
export class DaysCreatePageModule {}
