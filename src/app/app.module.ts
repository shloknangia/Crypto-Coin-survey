import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TheFormComponent } from './the-form/the-form.component';
import { CoinServiceService } from './coin-service.service';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { YesNoPipe } from './yes-no.pipe';


// we can have different pages
const routes = [
  { path: '', component: TheFormComponent },
  { path: 'submitted', component: FormSubmittedComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    TheFormComponent,
    FormSubmittedComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CoinServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
