import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'product', loadChildren: '../pages/product-page/product-page.module#ProductPageModule' },
  { path: 'swagger', redirectTo: '/swagger-ui.html' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
