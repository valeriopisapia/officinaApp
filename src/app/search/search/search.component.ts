import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onChangeSearch = new EventEmitter<string>();
  searchText: string = 'asdasd';

  constructor() { }

  ngOnInit() {

  }

  onSubmit = (f: NgForm) => {
    let value:string = f.value.first;
    this.onChangeSearch.emit(value);
  }

}
