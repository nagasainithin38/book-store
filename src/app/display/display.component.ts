import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {



@Input()
bookdata:Array<Book>=[]

@Output()
returnBook:EventEmitter<Book>;

constructor(){
  this.returnBook=new EventEmitter<Book>();
}
catchBook(x: Book){
this.returnBook.emit(x);
}
}
