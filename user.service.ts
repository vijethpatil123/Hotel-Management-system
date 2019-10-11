import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Feedback} from 'src/app/feedback.model'

interface feedbackResponse{
  success:boolean;
}

interface getFeedbackAll{
 feedbacks:Feedback[];

}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getFeedbackDetails(emailId, quality, qualityDesc, quantity, quantityDesc, price, priceDesc, service, serviceDesc)
  {
     return this.http.post<feedbackResponse>('/api/feedbackSubmit', {
       emailId, quality, qualityDesc, quantity, quantityDesc, price, priceDesc, service, serviceDesc
     })
  }

  getAllfeedback()
  {
    return this.http.get('/api/getfeedbackAll');
  }

  
}
