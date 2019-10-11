import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface adminResponse{
  success:boolean;
}
@Injectable({
  providedIn: 'root'
})



export class AuthService {
  constructor(private http: HttpClient) { }

  getAdminDetails(userName,password)
  {
     return this.http.post<adminResponse>('/api/adminLogin', {
       userName,
       password
     })
  }
}
