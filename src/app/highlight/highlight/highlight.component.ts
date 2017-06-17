import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../providers/api.service';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {

  public garages;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe( (response) => {
      this.garages = response.json().garages;

      for (let item of this.garages) {
        let average = 0;
        for (let review of item.reviews) {
          average += parseInt(review.value);
        }
        item.averageReview = Math.floor(average / item.reviews.length);
      }

      console.log(this.garages);

    });
  }

}
