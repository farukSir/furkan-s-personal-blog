import { Component, OnInit } from '@angular/core';
//service
import { BlogService } from "../blog.service";

//blog-http service

import { BlogHttpService} from '../blog-http.service';

@Component({
  selector: 'app-home', //name of the component
  templateUrl: './home.component.html', //design of the component
  styleUrls: ['./home.component.css'],
  providers :[]
  
})
export class HomeComponent implements OnInit {



  public allBlogs = [];

  constructor(public blogHttpService : BlogHttpService,private blogService:BlogService) {

    console.log("Home component constructor service is called");
   }

  ngOnInit() {

    console.log("Home component oninit is called");
    

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log(data);
        this.allBlogs = data["data"];

      },

      error => {

        console.log("some error occured");
        console.log(error.errorMessage);

      }
    )
   
    console.log(this.allBlogs );

  }

}
