import { Component, OnInit } from '@angular/core';
import Users from '../models/users';
import { UserService } from '../models/service/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  title = 'vlog';
  userList?:Users[];


  ngOnInit(): void {
    this.retrieveTutorials()
  }

  constructor(private userService: UserService,) { }

  retrieveTutorials(): void {
    this.userService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.userList = data;
    });
  }

}
