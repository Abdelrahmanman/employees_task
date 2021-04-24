import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesttPipe } from './filters/test/testt.pipe';



@NgModule({
  declarations: [TesttPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
