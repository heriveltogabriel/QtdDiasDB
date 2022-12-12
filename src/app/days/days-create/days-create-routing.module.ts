import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaysCreatePage } from './days-create.page';

const routes: Routes = [
  {
    path: '',
    component: DaysCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysCreatePageRoutingModule {}
