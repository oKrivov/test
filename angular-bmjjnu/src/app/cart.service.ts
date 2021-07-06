import { Injectable } from '@angular/core';
import {Product} from "./products";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
    const qwe = {asd:'qweqwe'}
      const newProduct: Product = {id: 123, price:213 }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
}