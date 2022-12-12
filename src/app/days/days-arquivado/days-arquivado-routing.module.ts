import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaysArquivadoPage } from './days-arquivado.page';

const routes: Routes = [
  {
    path: '',
    component: DaysArquivadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysArquivadoPageRoutingModule {}
