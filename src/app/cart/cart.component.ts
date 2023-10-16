import { Component, Input, OnInit } from '@angular/core';
import { cartList } from '../books';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {



total:number=0; 
@Input()
cartList:Array<cartList>=[]

buynow(){
  alert(`Your total is €${this.getTotal()  }`)
  this.cartList.splice(0,this.cartList.length)
}

getTotal():number{
 
    this.total=0
    for(let i=0;i<this.cartList.length;i++){
  this.total+=this.cartList[i].book.price.value*this.cartList[i].quantity
    }
  return this.total
}

increase(idx:number){
  this.cartList[idx].quantity+=1
}

decrease(idx:number){
  this.cartList[idx].quantity-=1
  if(this.cartList[idx].quantity==0){
    this.cartList.splice(idx,1)
  }
}

}
