import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  studentName:String="Jayashree";
  studentMark:number=550;
  joinDate:Date=new Date(0);
  message :String="This is Event Binding"
  fontColor:String="red"

  displayMessage(){
    alert(this.message)
  }
}
