import { Component } from '@angular/core';
import { Customer, Service } from '../app.service';

@Component({
  selector: 'app-with-array',
  templateUrl: './with-array.component.html',
  styleUrl: './with-array.component.css',
  providers: [Service],
})
export class WithArrayComponent {
  customers: Customer[];

  constructor(service: Service) {
    this.customers = service.getCustomers();
  }
}
