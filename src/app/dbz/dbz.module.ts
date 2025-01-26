import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/nain-page.component';
import { ListComponent } from './components/list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent
  ],

  exports: [
    MainPageComponent
  ],

  imports: [
    CommonModule
  ]
})
export class DbzModule { }
