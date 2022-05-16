import { Injectable } from '@angular/core';
import { IProduct } from '../classandtypes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    this.ProductList=[
    {
      ID:1,
      Name:"Prod1",
      Quantity:50,
      Price:200,
      Img:"../../assets/imgs/p1.png"
    },
    {
      ID:2,
      Name:"Prod2",
      Quantity:20,
      Price:300,
      Img:"../../assets/imgs/p2.png"
    },
    {
      ID:3,
      Name:"Prod3",
      Quantity:50,
      Price:250,
      Img:"../../assets/imgs/p2.png"
    }]
  }
  ProductList:IProduct[];
  GetAllProducts(){
    return this.ProductList || null;
  }
  GetProductByID(ID:Number){
    return this.ProductList.filter((prod)=>{prod.ID===ID}) || null;
  }
}
