import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './modules/login/login.component';
import { FactsComponent } from './modules/facts/facts.component';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [AppComponent, LoginComponent, FactsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, InfiniteScrollModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
