import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course = null;
  constructor() { }

  ngOnInit() {
  }

}
