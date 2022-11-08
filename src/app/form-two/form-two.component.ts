import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { doc, getFirestore, setDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css'],
})
export class FormTwoComponent implements OnInit {
  formTwo!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formTwo = this.fb.group({
      addressType: '',
      nationality: '',
      state: '',
      district: '',
      blockNumber: '',
      wardNumber: '',
      fatherName: '',
      motherName: '',
      grandfather: '',
      spouseName: '',
      fatherInLaw: '',
      motherInLaw: '',
    });
  }

  onSubmit() {
    const firebase = getFirestore();
    const pokus = doc(firebase, 'form/hobla');
    updateDoc(pokus, this.formTwo.value);
    this.formTwo.reset();
  }
}
