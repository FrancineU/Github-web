import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { User } from './user.info/user.info.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RepositoriesComponent,
    User.InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
