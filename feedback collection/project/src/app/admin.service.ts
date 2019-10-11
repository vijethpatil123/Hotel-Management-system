import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Feedback} from 'src/app/feedback.model'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  feedbacks:Feedback[];
  constructor(private http: HttpClient) { }
  getAllfeedback()
  {
    return this.http.get('/api/getfeedbackAll');
  }

  delete(emailId)
  {
    console.log(emailId)
    return this.http.post('/api/deleteFeedbacks',{
      emailId
    });
  }
}
