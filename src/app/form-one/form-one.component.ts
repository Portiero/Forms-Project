import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { doc, getFirestore, setDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css'],
})
export class FormOneComponent implements OnInit {
  public formOne!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formOne = new FormGroup({
      fullName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', Validators.required),
      gender: new FormControl(''),
      occupation: new FormControl(''),
      idType: new FormControl(''),
      idNumber: new FormControl(''),
      issueAuthority: new FormControl(''),
      issuedState: new FormControl(''),
      issuedDate: new FormControl(''),
      expiryDate: new FormControl(''),
    });

    this.formOne.valueChanges.subscribe();
  }

  get fullName() {
    return this.formOne.get('fullName');
  }

  get dateOfBirth() {
    return this.formOne.get('dateOfBirth');
  }

  get email() {
    return this.formOne.get('email');
  }

  get number() {
    return this.formOne.get('mobileNumber');
  }

  onSubmit() {
    const firebase = getFirestore();
    const data = doc(firebase, 'form/hobla');
    updateDoc(data, this.formOne.value);
    this.formOne.reset();
  }
}
