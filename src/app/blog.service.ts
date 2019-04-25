import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

   //declare service
   public allBlogs = [
    {
      "blogId": 1,
      "lastModified": "2017-10-20T 12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is a Blog Body",
      "description": "This is Blog 1 Description",
      "title": "This is Blog 1"
    },
    {
      "blogId": 2,
      "lastModified": "2017-10-21T 22:47:50.678Z",
      "created": "2017-10-20T12:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is Big Text</h1> <p>Small Text</p> ",
      "description": "This is the description of the example Blog and this is Edited",
      "title": "This is an Example Blog"
    },
    {
      "blogId": 3,
      "lastModified": "2017-11-14T 15:54:68.954Z",
      "created": "2017-11-19T12:21:47.554Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is Blog body.This is the Blog body.This is the Blog body",
      "description": "This is the Third blog description",
      "title": "This is the third blog"
    }
  ]


 //declare object
  public currentBlog;


 

  constructor() { 

    console.log("service constructor is called");
  }

  //methode to return all the blogs
  public getAllBlogs():any{

    return this.allBlogs;

  }


  //methode to get a particular Blog

  public getSingleBlogInformation(currentBlogId): any {

    //usin a for of loop here from typescript
    for (let blog of this.allBlogs) {

      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }

    }

    console.log(this.currentBlog);

    return this.currentBlog;
  }//end blog Info function
  

}
