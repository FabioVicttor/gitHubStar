import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageUserNotFoundComponent } from './pages/page-user-not-found/page-user-not-found.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { CardRepositoriosComponent } from './components/card-repositorios/card-repositorios.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PageSearchComponent,
    PageUserComponent,
    PageUserNotFoundComponent,
    CardUserComponent,
    CardRepositoriosComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
