import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public taskList:any;

  constructor(private api:ApiService)
  {
     this.getTaskList()
  }
  
  getTaskList()
  {
    this.api.getApiData().subscribe((res:any)=>{
      console.log(res);
      this.taskList=res;
    })
  }
}
