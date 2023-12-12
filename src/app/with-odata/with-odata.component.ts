import { Component } from '@angular/core';
import 'devextreme/data/odata/store';

@Component({
  selector: 'app-with-odata',
  templateUrl: './with-odata.component.html',
  styleUrl: './with-odata.component.css'
})
export class WithOdataComponent {
  dataSource: any;

  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
      select: [
        'Product_ID',
        'Product_Name',
        'Product_Category',
        'Product_Cost',
        'Product_Sale_Price',
        'Product_Consumer_Rating',
      ],
      filter: ['Product_Current_Inventory', '>', 0],
    };
  }
}
