import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brewerieslist',
  templateUrl: './brewerieslist.component.html',
  styleUrls: ['./brewerieslist.component.css']
})
export class BrewerieslistComponent implements OnInit {

  public breweriesData: Brewery[];
  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    http.get<Brewery[]>(baseUrl + 'Breweries/GetAllBreweries').subscribe(result => {
      this.breweriesData = result;
      

      //http.get<string[]>(baseUrl + 'Login').subscribe(result => {
      //  console.log(result);
      //}, error => console.error(error));

    }, error => console.error(error));}

  ngOnInit(): void {


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
