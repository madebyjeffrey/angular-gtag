import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: 'test', component: PageComponent },
  { path: 'deeply/nested/path/test', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
