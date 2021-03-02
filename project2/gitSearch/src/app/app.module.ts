import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { User } from './user.info/user.info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RepositoriesComponent,
    User.InfoComponent,
    NavbarComponent,
    HighlightDirective,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
