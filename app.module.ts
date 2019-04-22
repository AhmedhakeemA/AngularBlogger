import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashComponent } from './dash/dash.component';
import { FirstdataFormComponent } from './firstdata-form/firstdata-form.component';
import { SecoundDataFormComponent } from './secound-data-form/secound-data-form.component';
import { PostFeedsComponent } from './post-feeds/post-feeds.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ImagesAPiComponent } from './images-api/images-api.component';
import { ServiceApiService } from  '../app/service-api.service';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from "./albums.service";
import { CommentsCompComponent } from './comments-comp/comments-comp.component';
import { PushCommentComponent } from './push-comment/push-comment.component';
import { CommentServiceService } from './comment-service.service';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { UsersComponent } from './users/users.component';
import { NewusersComponent } from './newusers/newusers.component';
import { UserServiceService } from './user-service.service';
import { MainPageDefaultComponent } from './main-page-default/main-page-default.component';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShellComponent,
    DashComponent,
    FirstdataFormComponent,
    SecoundDataFormComponent,
    PostFeedsComponent,
    CommentCardComponent,
    ErrorPageComponent,
    ImagesAPiComponent,
    AlbumsComponent,
    CommentsCompComponent,
    PushCommentComponent,
    // TestcomponentComponent,
    UsersComponent,
    NewusersComponent,
    MainPageDefaultComponent,
    TodosComponent,
    NewTodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [ServiceApiService, AlbumsService, CommentServiceService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
