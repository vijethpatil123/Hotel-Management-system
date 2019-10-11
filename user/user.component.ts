import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private User: UserService, private router: Router) { }

  ngOnInit() {
  }
submitFeedback(userForm: NgForm)
{
  const emailId=userForm.value.email;
     const quality=userForm.value.r1;
     //console.log(f1)
     const qualityDesc=userForm.value.f1d;
     const quantity=userForm.value.r2;
     //console.log(f2)
     const quantityDesc=userForm.value.f2d;
     const price=userForm.value.r3;
     //console.log(f3)
     const priceDesc=userForm.value.f3d;
     const service=userForm.value.r4;
     //console.log(f1)
     const serviceDesc=userForm.value.f4d;
     

     this.User.getFeedbackDetails(emailId, quality, qualityDesc, quantity, quantityDesc, price, priceDesc, service, serviceDesc).subscribe(data =>{
      console.log(data)

      if (data.success)
      {
        location.reload();
      }
      else
      {
        window.alert("error")
      }
    })
}





}



