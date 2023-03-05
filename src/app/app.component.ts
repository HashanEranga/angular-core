import {Component} from '@angular/core';
import {COURSES} from "../assets/db-data";
import {Course} from "./Models/Course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IntroApp';

  COURSES = COURSES;

  onCourseCardClicked(course: Course) {
    console.log("App Component course card clicked!")
    console.log(course)
  }
}
