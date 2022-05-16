import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiscountOffers } from 'src/app/classandtypes/DiscountOffers';
import { ICategory } from 'src/app/classandtypes/ICategory';
import { IProduct } from 'src/app/classandtypes/IProduct';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productList:ProductService) {
      this.Discount=DiscountOffers['No Discount'];
      this.hasDiscount=this.Discount===DiscountOffers['No Discount']?false:true;
      this.name="Gdo Store";
      this.logo="../../assets/imgs/g.png"
      this.CategoryList=[
        {
          ID:1,
          Name:"cat1",
        },
        {
          ID:2,
          Name:"cat2",
        }
      ]
      this.ClintName="Mohamed";
      this.IsPurchased=true;
    }
    Discount:DiscountOffers;
    hasDiscount:boolean;
    name:string;
    logo:string;
    ProdList:IProduct[]=[];
    CategoryList:ICategory[];
    ClintName:string;
    IsPurchased:boolean;

  ngOnInit(): void {
  }
  clickBuy(){
    this.IsPurchased = this.IsPurchased?false:true;
  }
  renderValues(){
    this.ProdList = this.productList.GetAllProducts();
    return this.ProdList;
  }
  @Output() childEvent = new EventEmitter();
  sendData(){
    this.childEvent.emit(this.renderValues());
  }

}
