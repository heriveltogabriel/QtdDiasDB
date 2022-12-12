import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DaysListPageRoutingModule } from './days-list-routing.module';
import { DaysListPage } from './days-list.page';
import { HeaderComponent } from 'src/app/template/header/header.component';
import { FooterComponent } from 'src/app/template/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysListPageRoutingModule,
    
  ],
  declarations: [DaysListPage,HeaderComponent,FooterComponent]
})
export class DaysListPageModule {}
