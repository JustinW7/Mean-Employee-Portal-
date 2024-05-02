import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }