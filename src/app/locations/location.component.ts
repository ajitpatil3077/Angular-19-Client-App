import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
immport {ApiService} from ''

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor, FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {

  country = [""];
  state = [""];
  city = [""];

  constructor(){
    this.country = [""];
  }

  // setState(){
  //   if(this.country == "India"){
  //     this.states = ["MH", "Delhi", "UP"];
  //   }
  //   else if (this.country == "US"){
  //     this.states = ["New York", "Washington", "New Jersey"];
  //   }

  // }

  setState(){
    this.apiService.getCities(this.selectedCountry).subscribe(cities => {
      this.cities = cities;
      this.selectedCity = null; // Reset city selection

  }

  ngOnInit(): void {
  }

  title = 'demoapp';
}
