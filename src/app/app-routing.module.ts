import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { PageUserNotFoundComponent } from './pages/page-user-not-found/page-user-not-found.component';
import { PageUserComponent } from './pages/page-user/page-user.component';

const routes: Routes = [
  {
    path: "",
    component: PageSearchComponent
  },
  {
    path: "user/:userName",
    component: PageUserComponent
  },
  {
    path: "notFound",
    component: PageUserNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
