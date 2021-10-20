import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'business', redirectTo: 'business/index', pathMatch: 'full'},
  { path: 'business/index', component: IndexComponent },
  { path: 'business/create', component: CreateComponent },
  { path: 'business/edit/:idBusiness', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
