import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuktipembayaraPageRoutingModule } from './buktipembayara-routing.module';

import { BuktipembayaraPage } from './buktipembayara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuktipembayaraPageRoutingModule
  ],
  declarations: [BuktipembayaraPage]
})
export class BuktipembayaraPageModule {}
