import { Component } from '@angular/core';
import Users from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent   {
 
  title = 'vlog';
  userList?:Users[];
}
