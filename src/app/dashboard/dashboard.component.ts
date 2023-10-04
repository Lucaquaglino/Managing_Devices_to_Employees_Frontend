import { Component, OnInit } from '@angular/core';
import { AppSerivceService } from '../app.service';
import { UserInfo } from '../interfaces/user-info';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
utenti:any;
dispositivi:any;
  constructor(private appService:AppSerivceService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadDispositivi();
  }

  loadUsers(): void {
    this.appService.getUsers().subscribe(
      (users: any) => {
        console.log(users);
        this.utenti = users;
      })
  }
loadDispositivi(): void {
  this.appService.getDispositivi().subscribe(
    (dispositivi: any) => {
      console.log(dispositivi);
      this.dispositivi = dispositivi;
    })


}
}
