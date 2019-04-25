import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';
//import { ToastsManager } from 'ng2-toastr';
import { FormsModule }   from '@angular/forms';

//router module used for setting the application level route
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';

import { NotfoundComponent } from './notfound/notfound.component';
//for service
import { BlogService } from './blog.service';
//for 
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //ToastsManager.forRoot(),
    BrowserAnimationsModule,
    //ToastModule.forRoot(),
    
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:' ', redirectTo:'home',pathMatch:'full'},
      {path:'about', component:AboutComponent},
      {path:'blog/:blogId', component:BlogViewComponent},// pass variable blogId 'blog/:blogId'
      {path:'create', component:BlogCreateComponent},
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'**', component:NotfoundComponent}

    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
