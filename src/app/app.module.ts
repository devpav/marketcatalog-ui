import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './routings/app-routing.module';
import {AppComponent} from './app.component';
import {MarketCatalogStoreModule} from './store/market-catalog-store.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {CommonComponentModule} from './components/common-component.module';
import {ContainerModule} from './containers/container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MarketCatalogStoreModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        CommonComponentModule,
        ContainerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
