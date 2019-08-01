import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';
  titleAlert: string = 'This is required';
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      name: [null, Validators.required],
      description: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500)
        ])
      ],
      validate: ''
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(validate => {
      if (validate == '1') {
        this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = 'necesitas especificar 3 caracteres';
      } else {
        this.rForm.get('name').setValidators(Validators.required);
      }
      this.rForm.get('name').updateValueAndValidity();
    });
  }
  log(x) {
    console.log(x);
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }
}
