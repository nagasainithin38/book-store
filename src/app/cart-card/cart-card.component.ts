import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartList } from '../books';
@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})

export class CartCardComponent  {

  
  
  @Input()
  cartitem!:cartList
  
  @Input()
  index!:number
  

  
  @Output()
  quantitydec:EventEmitter<number>;
  
  @Output()
  quantityinc:EventEmitter<number>;
  

  constructor(){
    this.quantitydec=new EventEmitter<number>();
    this.quantityinc=new EventEmitter<number>();
  }

  decrease(){
    this.quantitydec.emit(this.index)
  }

increase(){

    this.quantityinc.emit(this.index)
}

}
