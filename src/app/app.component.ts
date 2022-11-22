import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Application';
  selectedValue =  '';
  myForm: FormGroup;

  activeState: boolean[] = [true, false, false];

    button(index: number) {
        this.activeState[index] = !this.activeState[index];
    }


  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      fName: 'Sammy',
      lName: '',
      email: '',
      gender: ''
    });
  }

  onSubmit(form: FormGroup) {

  }
}
