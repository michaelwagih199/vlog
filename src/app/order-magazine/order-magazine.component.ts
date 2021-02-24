import { Component, OnInit, Input } from '@angular/core';
import Users from '../models/users';
import { UserService } from '../models/service/user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-order-magazine',
  templateUrl: './order-magazine.component.html',
  styleUrls: ['./order-magazine.component.css']
})
export class OrderMagazineComponent implements OnInit {

  user: Users = new Users();
  submitted = false;
  isValid = false
  alertMessage:any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    if (this.user.username && this.user.email && this.user.orderCopies) {
      this.userService.create(this.user).then(() => {
        console.log('Created new item successfully!');
        this.submitted = true;
        this.alertMessage = "تم الحفظ"
        this.isValid= true
        this.user = new Users()
      });
    } else {
      this.alertMessage = "ادخل كل البيانات المطلوبة"
      this.isValid= true
    }
    
  }



}
