import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {path:"",component:CategoriesComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"addproduct",component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
