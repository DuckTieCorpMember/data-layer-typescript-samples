import { Routes } from '@angular/router';
import { WithArrayStoreComponent } from './with-array-store/with-array-store.component';
import { WithArrayComponent } from './with-array/with-array.component';
import { WithAspNetComponent } from './with-asp-net/with-asp-net.component';
import { WithCustomStoreComponent } from './with-custom-store/with-custom-store.component';
import { WithOdataComponent } from './with-odata/with-odata.component';

export const routes: Routes = [
    {path : '', component : WithArrayComponent},
    {path : 'arraystore', component : WithArrayStoreComponent},
    {path : 'customstore', component : WithCustomStoreComponent},
    {path : 'aspnet', component : WithAspNetComponent},
    {path : 'odata', component: WithOdataComponent}
];
