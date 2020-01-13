import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ShelvesComponent } from './shelves/shelves.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      { 
        path: '',
        component: MainComponent
      },
      { 
        path: 'product',
        component: ProductComponent
      },
      { 
        path: 'shelves',
        component: ShelvesComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
