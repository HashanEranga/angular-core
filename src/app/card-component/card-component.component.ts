import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../Models/Course";

@Component({
  selector: 'card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent {
  @Input()
  course !:Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseCardClicked(course: Course) {
    console.log(course.description + " Card Component clicked")
    this.courseEmitter.emit(this.course)
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  applyCardClass() {
    return {
      'beginner' : this.course.category == 'BEGINNER',
      'intermediate' : this.course.category == 'INTERMEDIATE',
      'advanced' : this.course.category == 'ADVANCED',
    }
  }

  applyTagClass() {
    return {
      'beginner' : this.course.category == 'BEGINNER',
      'intermediate' : this.course.category == 'INTERMEDIATE',
      'advanced' : this.course.category == 'ADVANCED',
    }
  }
}
