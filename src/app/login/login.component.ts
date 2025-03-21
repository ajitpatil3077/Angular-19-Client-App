import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message= "Login page displayed";
  today:Date = new Date();
  amount =10;
  user: User = new User;
  userId:number = 0;

  constructor(private usersService: UsersService) {

  }

  getUserId(event:Event)
  {
    this.userId = Number((event.target as HTMLInputElement).value);
  }

  setUserId()
  {
    this.userId = 1;
  }

  getUserIdTemplate(val:string){
    this.userId = Number(val);
    this.getUser();
  }

  getUser() {
    console.log("getUser method " + this.userId);
    this.usersService.getUserbyId(this.userId).subscribe((data: User) => {
      console.log(`before `+ data);
      this.user = data;
      console.log(`after `+ data);
    });
  }

  // ngOnInit(): void {
  //   // this.usersService.getUsers().subscribe((data: { message: string | undefined; }) => {
  //   //   this.message = data.message;


  //   });

  // }

}

export class User {
  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  gender!: string;
  ip_address!: string;
  job_title!: string;
}




