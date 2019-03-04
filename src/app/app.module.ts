import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductComponent,
    ProductAddComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
