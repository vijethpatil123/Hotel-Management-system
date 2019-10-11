import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginAdmin(userForm: NgForm)
  {
    
     const userName=userForm.value.userName;
     const password=userForm.value.password;
     
     console.log(userName)
     console.log(password)

     this.Auth.getAdminDetails(userName,password).subscribe(data =>{
       console.log(data)

       if (data.success)
       {
         this.router.navigate(['admin'])
       }
       else
       {
         window.alert("error")
       }
     })

  }
  
}

