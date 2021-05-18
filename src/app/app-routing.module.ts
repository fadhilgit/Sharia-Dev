import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'finished',
    loadChildren: () => import('./pages/finished/finished.module').then( m => m.FinishedPageModule)
  },
  {
    path: 'buktipembayara',
    loadChildren: () => import('./pages/buktipembayara/buktipembayara.module').then( m => m.BuktipembayaraPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'regiter',
    loadChildren: () => import('./pages/regiter/regiter.module').then( m => m.RegiterPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
