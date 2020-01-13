import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteFoundComponent } from './note-found/note-found.component';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from './layout/layout.module';


const routes: Routes = [ //array de objetos (json) kye:value é onde definimos nossa rota path
  { 
  path: '',
  loadChildren: () => import('./layout/layout.module').then(n =>LayoutModule)
},
  {
  path:'login',
component: LoginComponent,
},

{path:'not-found',
component: NoteFoundComponent
},

{ path: '**', redirectTo:'not-found'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
