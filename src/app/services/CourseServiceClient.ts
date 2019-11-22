import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://localhost:8080/api/courses')
      .then(response => response.json())

  findModulesForCourse = (courseId) =>
    fetch(`http://localhost:8080/api/courses/${courseId}/modules`)
      .then(response => response.json())

  findTopicsForLesson = (lessonId) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
      .then(response => response.json())

  findLessonsForModule = (moduleId) =>
    fetch(`http://localhost:8080/api/modules/${moduleId}/lessons`)
      .then(response => response.json())

  findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
      .then(response => response.json())
}
