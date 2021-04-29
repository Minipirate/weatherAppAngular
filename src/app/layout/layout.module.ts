import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class LayoutModule { }
