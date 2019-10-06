import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { LeftSidebarComponent } from './main-layout/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './main-layout/right-sidebar/right-sidebar.component';
import { SearchBarComponent } from './main-layout/search-bar/search-bar.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './products/star/star.component';
import { LoadingOverlayComponent } from './shared/components/loading-overlay/loading-overlay.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { HomeComponent } from './welcome/home/home.component';
import { ProductDetailGuard } from './core/guards/products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    SearchBarComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    LoadingOverlayComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
