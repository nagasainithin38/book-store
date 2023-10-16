import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { BookCardComponent } from './book-card/book-card.component';
import { DisplayComponent } from './display/display.component';
import { CartCardComponent } from './cart-card/cart-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    BookCardComponent,
    DisplayComponent,
    CartCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
