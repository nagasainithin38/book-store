import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
changeToInt(arg0: string): number {

  return parseFloat(arg0)
}


  @Output() returnToParent:EventEmitter<Book>;
  
  
  @Input()
  book!:Book

constructor(){
  this.returnToParent=new EventEmitter<Book>();
}

  addToCart(){
    // console.log(this.book)
     this.returnToParent.emit(this.book)
  }


}
