import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { LeftSidebarComponent } from './main-layout/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './main-layout/right-sidebar/right-sidebar.component';
import { SearchBarComponent } from './main-layout/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    SearchBarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
