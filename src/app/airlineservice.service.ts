import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AirlineserviceService {
  constructor(private http:HttpClient){}


  postDetails(data){
    this.http.post<JSON>('http://localhost:3000/addUser',data).subscribe()
}
 

}
