import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsModule } from '../charts/charts.module';
import { DashboardComponent } from './dashboard.component';
import { routes } from './dashboard.routes';

@NgModule({
  exports: [],
  imports: [RouterModule.forChild(routes), ChartsModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
