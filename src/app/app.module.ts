import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { LeftSidebarComponent } from './main-layout/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './main-layout/right-sidebar/right-sidebar.component';
import { SearchBarComponent } from './main-layout/search-bar/search-bar.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './products/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    SearchBarComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
