import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {RecipesComponent} from "./components/pages/recipes/recipes.component";
import {ThreeRichesComponent} from "./components/pages/three-riches/three-riches.component";

const routes: Routes = [
  {
    path: 'recetas',
    component: RecipesComponent,
  },
  {
    path: 'tres-riches',
    component: ThreeRichesComponent,
  },
  {
    path: '**',
    component: RecipesComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
