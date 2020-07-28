import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DetailRecipeComponent} from "./components/detail-recipe/detail-recipe.component";
import {HeaderComponent} from "./components/shared/header/header.component";
import {FooterComponent} from "./components/shared/footer/footer.component";
import {MenuRecipesComponent} from "./components/menu-recipes/menu-recipes.component";
import {MenuRecipesMobileComponent} from "./components/menu-recipes-mobile/menu-recipes-mobile.component";
import {ModalComponent} from "./components/shared/modal/modal.component";
import {RecipesComponent} from "./components/pages/recipes/recipes.component";
import {ThreeRichesComponent} from "./components/pages/three-riches/three-riches.component";
import {AppRoutingModule} from './app-routing.module'
import {DataService} from "./services/data.service";
import {YouTubePlayerModule} from "@angular/youtube-player";

import { DeviceDetectorService } from 'ngx-device-detector'
import {LocalDeviceDetectorService} from "./services/local-device-detector.service";

@NgModule({
  declarations: [
    AppComponent,
    DetailRecipeComponent,
    HeaderComponent,
    FooterComponent,
    MenuRecipesComponent,
    MenuRecipesMobileComponent,
    ModalComponent,
    RecipesComponent,
    ThreeRichesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    YouTubePlayerModule
  ],
  providers: [DataService, DeviceDetectorService, LocalDeviceDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
