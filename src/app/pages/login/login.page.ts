import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { NavController } from '@ionic/angular'
import { PlacesService } from '../../services/places.service'
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular'

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	url_login= 'https://wanmuz-rest-api-week5.herokuapp.com/api/login'
	message

	constructor(public http: HttpClient, private navCtrl: NavController, private placesService:PlacesService, private storage:Storage, 
				public alertController: AlertController ) {}

	ngOnInit() {
	}

	data = {
		username: '',
		password: ''
	}



	login(){
		this.http.post(this.url_login,this.data)
		.subscribe(data => {
			if(data["token"]){
				this.storage.set('TOKEN_KEY',data["token"])
				this.navCtrl.navigateRoot('places')
				console.log(data["token"])
			}else{
				this.presentAlert()
			}
		}, error => {
			console.log(JSON.stringify(error));
		});
		console.log(this.data)
		
	}
	async presentAlert() {
    const alert = await this.alertController.create({
      header: 'User not Found/ Wrong Password',
      message: 'The user is not found/The password is typed incorrectly. </br> Please try again.',
      buttons: ['TRY AGAIN']
    });

    await alert.present();
  }

}
