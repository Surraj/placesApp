import { PlacesService } from './../../services/places.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
	results:Observable<any>;
	data: string =''
	

  constructor(private placesService: PlacesService, private navCtrl: NavController ) { }

  ngOnInit() {
    this.results = this.placesService.searchData(this.data)
  }


}
