import { Routes } from '@angular/router';
import { WithArrayStoreComponent } from './with-array-store/with-array-store.component';
import { WithArrayComponent } from './with-array/with-array.component';
import { WithCustomStoreComponent } from './with-custom-store/with-custom-store.component';

export const routes: Routes = [
    {path : '', component : WithArrayComponent},
    {path : 'arraystore', component : WithArrayStoreComponent},
    {path : 'customstore', component : WithCustomStoreComponent},
];
