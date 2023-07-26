import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/postService/post.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  constructor(private postService:PostService,private router: Router) { }

 
  name:any;
  photo:any="../../../assets/pic1.png";
  email:any;
  date:any;
  visittime:any;
  number:any;
  doctor:any;
  injury:any;
  

  ngOnInit(): void {
    this.doctor = localStorage.getItem("doctor");
    console.log(this.doctor)
  }
  createPost() {
    const postData = {
      name: this.name,
      photo:this.photo,
      email:this.email,
      date:this.date,
      visittime:this.visittime,
      number:this.number,
      doctor: localStorage.getItem("doctor"),
      injury:this.injury
      

    };

    this.postService.createPost(postData).subscribe(
      (response) => {
        console.log('Appointment created successfully:', response);
        
        // Handle success response here
      },
      (error) => {
        console.error('Error creating appointment:', error);
        // Handle error response here
      }
    );
    this.router.navigate(['appointments'])
  }

}
