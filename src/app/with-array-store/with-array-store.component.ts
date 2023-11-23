import { Component } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import { Service } from '../app.service';


@Component({
  selector: 'app-with-array-store',
  templateUrl: './with-array-store.component.html',
  styleUrl: './with-array-store.component.css',
  providers: [Service],
})
export class WithArrayStoreComponent {
  store: ArrayStore;

  constructor(service: Service) {
    this.store = new ArrayStore({
      key: "ID",
      data: service.getCustomers(),
    });
  }
}
