import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
 }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  plus(i){
    i.quantity++;
  }

  minus(i){
    if(this.items[i].quantity == 1){
      this.items[i].quantity = 0;
      this.items.splice(i,1);
    }else{
      this.items[i].quantity--;
    }
  }

  removeItem(i){
    this.items[i].quantity = 0;
    this.items.splice(i,1);
  }

  sum(){
    var sum = 0;
    for(let i = 0; i < this.items.length; i++ ){
      sum += this.items[i].price* this.items[i].quantity; 
    }
      return sum;

}

}

