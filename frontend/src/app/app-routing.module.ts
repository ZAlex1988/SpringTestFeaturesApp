import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './Components/list-page/list-page.component';
import { AppComponent } from './Components/app.component';

const routes: Routes = [{ 
  path: 'app-component', component: AppComponent },
{ path: 'list-page-component', component: ListPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
