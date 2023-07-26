import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointmentService/appointment.service';

@Component({
  selector: 'app-appointment-dashboard',
  templateUrl: './appointment-dashboard.component.html',
  styleUrls: ['./appointment-dashboard.component.scss']
})
export class AppointmentDashboardComponent implements OnInit {
  appointments: any=[];
  constructor(private appointment:AppointmentService) { }

  ngOnInit(): void {
    this.appointment.getAppointments().subscribe((appointments) => {
      this.appointments = appointments;
    });
  }

}
