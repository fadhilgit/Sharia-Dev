import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuktipembayaraPage } from './buktipembayara.page';

const routes: Routes = [
  {
    path: '',
    component: BuktipembayaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuktipembayaraPageRoutingModule {}
