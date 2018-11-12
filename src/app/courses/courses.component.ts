import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private _courses: CoursesService) { }

  ngOnInit() {
    // this._courses.getAll().subscribe((courses) => {
    //   console.log(courses);
    // });
  }

  handleSearch(name) {

  }

}
