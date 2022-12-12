import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'days-list',
    pathMatch: 'full'
  },
  {
    path: 'days-create',
    loadChildren: () => import('./days/days-create/days-create.module').then( m => m.DaysCreatePageModule)
  },
  {
    path: 'days-list',
    loadChildren: () => import('./days/days-list/days-list.module').then( m => m.DaysListPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./template/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'days-arquivado',
    loadChildren: () => import('./days/days-arquivado/days-arquivado.module').then( m => m.DaysArquivadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
