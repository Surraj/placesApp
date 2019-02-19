import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'


@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


	url_register= "https://wanmuz-rest-api-week5.herokuapp.com/api/register"

	constructor(private toastController: ToastController, private http: HttpClient) { }

	ngOnInit() {
	}


	data = {
		username : '',
		password : '',
		confirmPassword: ''
	}



	async presentToast() {
		const toast = await this.toastController.create({
			message: 'You have registered successfully',
			duration: 2000
		});
		toast.present();
	}

	async presentToast2() {
		const toast = await this.toastController.create({
			message: 'Please confirm password correctly',
			duration: 2000
		});
		toast.present();
	}
	post(){
		
		this.http.post(this.url_register,this.data)
		.subscribe(data => {
			console.log(data)
		}, error => {
				console.log(JSON.stringify(error));
			});
		console.log(this.data)
		this.presentToast();

	}


	registerUser(){
		if(this.data.password== this.data.confirmPassword){
			this.post()
			
		}
		else{
			this.presentToast2()
		}

	}
}
