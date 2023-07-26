import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctorService/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {

  doctors: any=[];

  constructor(private doctor:DoctorService,private router: Router) {
   }

  ngOnInit(): void {
    this.doctor.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  myFunction(data:any){
    localStorage.setItem("doctor",data);
    this.router.navigate(['appointmentform'])

  }
  
}
