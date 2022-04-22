import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-brewerieslist',
  templateUrl: './brewerieslist.component.html',
  styleUrls: ['./brewerieslist.component.css']
})
export class BrewerieslistComponent implements OnInit {

  public breweriesData: Brewery[];
  baseUrl: string;
  lat: number;
  lng: number;
  brewName: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    http.get<Brewery[]>(baseUrl + 'Breweries/GetAllBreweries').subscribe(result => {
      this.breweriesData = result;
    }, error => console.error(error));}

  ngOnInit(): void {
   
  }
  displayStyle = "none";

  openBreweryLocationPopup(lati, long, name) {
    this.displayStyle = "block";
    if (lati !== null || long !== null) {

      var strLatitude = lati;
      var strLongitude = long;
      this.lat = + lati;
      this.lng = + long;
      this.brewName = name;
      var loader = new Loader({
        apiKey: 'todo - replace with an API Key',
        version: "weekly",
        libraries: ["places"]
      });

      const mapOptions = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 4
      };

      // Promise
      loader
        .load()
        .then((google) => {
          const map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              zoom: 7,
              center: { lat: this.lat, lng: this.lng },
            }
          );

          new google.maps.Marker({
            position: { lat: this.lat, lng: this.lng },
            map,
            title: name,
          });

        })
        .catch(e => {
          // do something
        });

    }
    else {
      this.brewName = "No latitude and longitude found for Brewery " + name;
    }

  }
  closeBreweryPopup() {
    this.displayStyle = "none";
  }



}

interface Brewery {
  id: string
  name: string
  brewery_Type: string;
  street: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  county_Province: string;
  postal_Code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_Url: string;
  updated_At: string;
  created_At: string;
}
