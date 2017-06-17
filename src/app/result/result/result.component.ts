import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../providers/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public garages;
  public numberEl;
  public searchTitle:string = '-1';

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    console.log(this.apiService.getData());

    this.apiService.getData().subscribe( (response) => {
      this.garages = response.json().garages;

      for (let item of this.garages) {
        let average = 0;
        for (let review of item.reviews) {
          average += parseInt(review.value);
        }
        item.averageReview = Math.floor(average / item.reviews.length);
      }

      this.numberEl = this.garages.length;
      console.log(this.garages);
    });
  }

  showInfoWindow = ($event) => {
    console.log($event);
  }

  onChangeSearch = (value: string) => {
    console.log('value', value);
    this.searchTitle = value;
  }

}
