import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }
 
  addToCart(product) {
    if(product.quantity == 0){
      product.quantity++;
      this.items.push(product);
      console.table(this.items);
    }else {
      for(let item of this.items){
        if(item.name == product.name){
          product.quantity++;
        }
    }
    }
  }
 

  
  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }


 }
