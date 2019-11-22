import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  widgets = [];

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  widgetId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CourseServiceClient) { }


  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse(course) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.courseId = params.get(course.id);

      this.service.findModulesForCourse(course.id)
        .then(modules => this.modules = modules);
    });
  }

  selectModule(module) {

      this.activatedRoute.paramMap.subscribe(params => {
        this.courseId = params.get('courseId');
        this.moduleId = params.get('mid');
        this.lessonId = params.get('lid');
        this.service.findLessonsForModule(module.id)
      .then(lessons => this.lessons = lessons);
  });
  }

  selectLesson(lesson) {

      this.activatedRoute.paramMap.subscribe(params => {
        this.courseId = params.get('cid');
        this.moduleId = params.get('mid');
        this.lessonId = params.get('lid');
        this.topicId = params.get('tid');
      this.service.findTopicsForLesson(lesson.id)
        .then(topics => this.topics = topics);
    });
  }

  selectTopic(topic) {


      this.activatedRoute.paramMap.subscribe(params => {
        this.courseId = params.get('cid');
        this.moduleId = params.get('mid');
        this.lessonId = params.get('lid');
        this.topicId = params.get('tid');
        this.widgetId = params.get('wid');

      this.service.findWidgetsForTopic(topic.id)
      .then(widgets => this.widgets = widgets);
  });
  }


}
