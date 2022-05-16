import { Component } from '@angular/core';
import { IProduct } from './classandtypes/IProduct';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';
  products:IProduct[]=[];
}
