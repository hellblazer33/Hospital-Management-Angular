import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/postService/post.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private postService:PostService,private router: Router) { }

  name:any;
  email:any;
  password:any;
  

  ngOnInit(): void {
    
  }
  createPost() {
    const postData = {
      name: this.name,
      email:this.email,
      password:this.password,
     
      

    };

    this.postService.createPost2(postData).subscribe(
      (response) => {
        console.log('Registration Successfull', response);
        
        // Handle success response here
      },
      (error) => {
        console.error('Error creating post:', error);
        // Handle error response here
      }
    );
    this.router.navigate(['login'])
  }

}
