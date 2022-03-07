import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../task';
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) {}

  getTasks = (): Observable<Task[]> => {
    return this.httpClient.get<Task[]>(this.apiUrl);
  };
}
