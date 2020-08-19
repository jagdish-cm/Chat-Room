import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat/chat.component';
import { OnlineComponent } from './chat/online/online.component';
import { StyleChangerDirective } from './chat/style-changer.directive';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  declarations: [AppComponent, NavComponent, LoginComponent, ChatComponent, OnlineComponent, StyleChangerDirective],
  imports: [
    BrowserModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ScrollingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
