import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './shared/edit/edit.component';
import { ListComponent } from './shared/list/list.component';

const routes: Routes = [
  {component: ListComponent, path: ""},
  {component: EditComponent, path: "carolina"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
