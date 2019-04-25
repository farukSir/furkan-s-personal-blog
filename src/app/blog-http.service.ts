import { Injectable } from '@angular/core';

//importing http client to make the requests

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable releated code

import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'MGJkNWYzYmQwZGY1MmFjNTEzMzNlNjRlMDhkMmY2YmYyZDdmMjZjNTlkMDZiZGNkZjU3Yzg5MzEwMTY3Y2Q5MmY4ZDg4YmIzYzViNDVmZjcwNDAzMjRiOGM0NjIyYTBlNWIzNTMzNGIyMDIzYzEyMWQwNzY5ZDliZGMxMzcyZmExOA==';

  constructor(private _http:HttpClient) {

    console.log("blog-http service was called");
 }


  //exception handler
 private handleError(err: HttpErrorResponse) {
  console.log("Handle error Http calls")
  console.log(err.message);
  return Observable.throw(err.message)
}


  //methode to return all the blogs
  public getAllBlogs():any{

   //return this.allBlogs;

   let myResponse = this._http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken );
   console.log(myResponse);
   return myResponse;
}


  //methode to get a particular Blog

  public getSingleBlogInformation(currentBlogId): any {

    
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken );
    return myResponse;


  }//end blog Info function


  createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  } // end create blog

  deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }// end delete blog

  editBlog(blogId,blogData): any {

    
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }// end delete blog

}
