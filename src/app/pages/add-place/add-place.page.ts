import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Storage } from '@ionic/storage'

@Component({
	selector: 'app-add-place',
	templateUrl: './add-place.page.html',
	styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {


	data_addplace={
		name:'',
		description:'',
		country:''
	}

	url = 'https://wanmuz-rest-api-week5.herokuapp.com/api/places'
	token_key



	constructor(private placesService:PlacesService, private http: HttpClient, private storage: Storage) { }

	ngOnInit() {
		this.storage.get("TOKEN_KEY").then((val)=>{
			this.token_key =val
			console.log(this.token_key)
		})
	}
	

	addPlace(){
		var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token_key);

		const httpOptions = {
			headers: headers_object
		};

		this.http.post(this.url,this.data_addplace,httpOptions).subscribe(response=>{
			console.log(response)
		})
		console.log(headers_object)

	}



}
