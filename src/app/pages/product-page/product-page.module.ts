import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RolstorProductPageComponent} from './rolstor-product-page/rolstor-product-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularMaterialModule} from '../../angular-material/angular-material.module';
import {ContainerModule} from '../../containers/container.module';
import {CommonComponentModule} from '../../components/common-component.module';
import {CorniceProductPageComponent} from './cornice-product-page/cornice-product-page.component';
import {JalosieProductPageComponent} from './jalosie-product-page/jalosie-product-page.component';
import {AccessoryProductPageComponent} from './accessory-product-page/accessory-product-page.component';
import {RolstorHttpService} from './service/rolstor-http.service';
import {CorniceHttpService} from './service/cornice-http.service';
import {JalosieHttpService} from './service/jalosie-http.service';
import {AccessoryHttpService} from './service/accessory-http.service';

const routes: Routes = [
  {path: 'rolstor', component: RolstorProductPageComponent},
  {path: 'cornice', component: CorniceProductPageComponent},
  {path: 'jalousie', component: JalosieProductPageComponent},
  {path: 'accessory', component: AccessoryProductPageComponent}
];


@NgModule({
  declarations: [
    RolstorProductPageComponent,
    CorniceProductPageComponent,
    JalosieProductPageComponent,
    AccessoryProductPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
    ContainerModule,
    CommonComponentModule
  ],
  providers: [
    RolstorHttpService,
    CorniceHttpService,
    JalosieHttpService,
    AccessoryHttpService
  ]
})
export class ProductPageModule {
}
