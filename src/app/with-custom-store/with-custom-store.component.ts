import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { Service } from '../app.service';

@Component({
  selector: 'app-with-custom-store',
  templateUrl: './with-custom-store.component.html',
  styleUrl: './with-custom-store.component.css',
  providers: [Service]
})
export class WithCustomStoreComponent {
  store: CustomStore;

  constructor(service: Service) {
    this.store = new CustomStore({
      key: "ID",
      load: (options) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(service.getCustomers());
          }, 2000);
        });
      }
    });
  }
}
