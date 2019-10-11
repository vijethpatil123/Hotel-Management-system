import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FeedbackUserComponent } from './feedback-user/feedback-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UserComponent,
    AdminComponent,
    FeedbackUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component:FirstComponent
      },
      {
        path: 'user',
        component:UserComponent
      },
      {
        path: 'admin',
        component:AdminComponent
      },
      {
        path: 'first',
        component:FirstComponent
      },
      {
        path: 'feedback',
        component:FeedbackUserComponent
      },
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
