import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { SubmittedComponent } from './submitted/submitted.component';

const routes: Routes = [
  { path: '', component: FormOneComponent },
  { path: 'form-two', component: FormTwoComponent },
  { path: 'submitted', component: SubmittedComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
