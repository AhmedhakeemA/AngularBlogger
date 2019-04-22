import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { FirstdataFormComponent } from './firstdata-form/firstdata-form.component';
import { SecoundDataFormComponent } from './secound-data-form/secound-data-form.component';
import { PostFeedsComponent } from './post-feeds/post-feeds.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ImagesAPiComponent } from './images-api/images-api.component';
import { AlbumsComponent } from './albums/albums.component';
import { PushCommentComponent } from './push-comment/push-comment.component';
import { CommentsCompComponent } from './comments-comp/comments-comp.component';
// import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { UsersComponent } from './users/users.component';
import { NewusersComponent } from './newusers/newusers.component';
import { MainPageDefaultComponent } from './main-page-default/main-page-default.component';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

const routes: Routes = [
  { path: "", component: LoginComponent },

  {
    path: "Dash",
    component: ShellComponent,
    children: [
      { path: "", component: MainPageDefaultComponent },
      { path: "main", component: FirstdataFormComponent },
      { path: "secound", component: SecoundDataFormComponent },
      { path: "feeds", component: PostFeedsComponent },
      { path: "NewComment", component: PushCommentComponent },
      { path: "AllComment", component: CommentsCompComponent },
      { path: "users", component: UsersComponent },
      { path: "newUser", component: NewusersComponent },
      { path: "comment", component: CommentCardComponent },
      { path: "comment/:id", component: CommentCardComponent },
      { path: "albums", component: AlbumsComponent },
      // { path: "te", component: TestcomponentComponent },
      { path: "albums/:id", component: ImagesAPiComponent },
      { path: "todos", component: TodosComponent },
      { path: "Newtodo", component: NewTodoComponent },
      { path: "**", component: ErrorPageComponent }

      // { path: 'comment/:id', component: ImagesAPiComponent }
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "errorPage", component: ErrorPageComponent },
  // { path: 'Error', component: ErrorPageComponent },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
