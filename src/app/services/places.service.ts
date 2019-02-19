import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  url = 'https://wanmuz-rest-api-week5.herokuapp.com/api/places'
  url_id='http://wanmuz-rest-api-week5.herokuapp.com/api/places'
  url_login='https://wanmuz-rest-api-week5.herokuapp.com/api/login'

  data = {
    username: '',
    password: ''
  }

  constructor(private http:HttpClient , private storage: Storage, private navCtrl: NavController) { }



  searchData(title : string): Observable<any> {
    return this.http.get(this.url).pipe(
      map(results =>results
        )
      );
  }

  getDetails(id) {
    return this.http.get(`${this.url}/${id}`)
  }



}



// getAllNotification(){
  // console.log(this.httpHeaders)
  // return this.http.get(this.apiUrl+'notification/get-all-sf-notifications-by-reseller', this.httpHeaders)
  // }

