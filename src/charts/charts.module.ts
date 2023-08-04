import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';

@NgModule({
  exports: [ChartComponent],
  imports: [CommonModule],
  declarations: [ChartComponent],
})
export class ChartsModule {}
