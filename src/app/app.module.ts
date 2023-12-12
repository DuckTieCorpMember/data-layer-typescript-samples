import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RouterModule } from '@angular/router';
import {routes} from './app.routes';

import { AppComponent } from "./app.component";
import { MenuComponent } from './menu/menu.component';

import { WithArrayComponent } from './with-array/with-array.component';
import { WithArrayStoreComponent } from './with-array-store/with-array-store.component';
import { WithCustomStoreComponent } from './with-custom-store/with-custom-store.component';
import { WithAspNetComponent } from './with-asp-net/with-asp-net.component';
import { WithOdataComponent } from './with-odata/with-odata.component';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      DxDataGridModule
    ],
    declarations: [
      AppComponent,
      MenuComponent,
      WithArrayComponent,
      WithArrayStoreComponent,
      WithCustomStoreComponent,
      WithAspNetComponent,
      WithOdataComponent
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule { }
  
  platformBrowserDynamic().bootstrapModule(AppModule);