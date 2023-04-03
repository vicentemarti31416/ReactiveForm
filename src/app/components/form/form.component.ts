import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup;
  isSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      username: ['', Validators.required, Validators.minLength(5)],
      email: ['', Validators.required, Validators.email]
    })
  }

  public submit(): void {
    this.isSubmit = true;
    if (this.form.status === 'VALID') {
      console.log(this.form.value);
      console.log(this.form);
    }
  }

}
