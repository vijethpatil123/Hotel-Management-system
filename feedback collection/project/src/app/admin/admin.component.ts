import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';
import {Feedback} from '../feedback.model'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  feedbacks:Feedback[];
  constructor(private Admin: AdminService, private router: Router) { }

  ngOnInit() {
    this.showFeedback();
  }
  showFeedback()
  {
    this.Admin.getAllfeedback().subscribe( (data:Feedback[]) =>{

      this.feedbacks=data;
      console.log(this.feedbacks)
    })

  }

  deleteFeedback(userForm: NgForm)
  {
    const emailId=userForm.value.emailId;
    console.log(emailId)
    this.Admin.delete(emailId).subscribe( (data) =>{

      if(data)
      {
        location.reload();
      }
      else
      {
        window.alert('invalid emailid')
      }
    })
  }

}
