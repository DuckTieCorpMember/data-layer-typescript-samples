import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { createStore } from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'app-with-asp-net',
  templateUrl: './with-asp-net.component.html',
  styleUrl: './with-asp-net.component.css'
})
export class WithAspNetComponent {
  url: string;
  dataSource: any;

  constructor() {
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

    this.dataSource = createStore({
      key: 'OrderID',
      loadUrl: `${this.url}/Orders`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }
}
