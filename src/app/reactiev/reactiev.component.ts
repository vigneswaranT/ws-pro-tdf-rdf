import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiev',
  templateUrl: './reactiev.component.html',
  styleUrls: ['./reactiev.component.css']
})
export class ReactievComponent implements OnInit {
  registerForm!: FormGroup;
  submitted=false; 

  constructor(private formBuilder: FormBuilder)
 { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    }
    get f() { 
      return this.registerForm.controls;
     }
  
    onSubmit() {
        this.submitted = true;
  
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
  
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
  }



