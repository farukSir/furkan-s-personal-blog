import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "./../blog.service";
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers: [Location]
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  
  constructor(private _route: ActivatedRoute, private router: Router, private blogService: BlogService, private blogHttpService: BlogHttpService, private location: Location) {

    //this.toastr.setRootViewContainerRef(vcr);

  }


  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    //this.currentBlog = this.blogService.getSingleBlog(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )
  }

  editThisBlog(): any {

    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

      data => {
        console.log(data);
        //this.toastr.success('Blog edited successfully', 'Success!');
        alert("'Blog edited successfully', 'Success!'");
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("Blog edit error occured");
      }


    )




  }// end delete this blog 

  goBackToPreviousPage(): any {

    this.location.back();

  }

}
