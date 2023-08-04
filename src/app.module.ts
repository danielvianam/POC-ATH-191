import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

@NgModule({
  exports: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routing)],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
