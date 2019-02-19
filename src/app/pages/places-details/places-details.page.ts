import { PlacesService } from './../../services/places.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.page.html',
  styleUrls: ['./places-details.page.scss'],
})
export class PlacesDetailsPage implements OnInit {
	information = null;

  constructor(private activatedRoute:ActivatedRoute, private placesService:PlacesService) { }

  ngOnInit() {
  	  	let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.placesService.getDetails(id).subscribe(result =>{
      this.information = result;
      console.log(this.information)
    });
  }

}
