import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  searchInput = new FormControl('');
  searchForm = new FormGroup({searchInput: this.searchInput});
  constructor() { }

  ngOnInit() {}

  submit() {
    this.onSearch.emit(this.searchInput.value);
  }
}
