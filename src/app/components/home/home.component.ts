import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userList: User[] = [];
  constructor(private usersService : UsersService){

  }
  async getUsers($event: string): Promise<void>{
    const name = $event;
    try {
      const response = await this.usersService.getUserByName(name);
      this.userList = response.items.slice(0,10)
      console.log(this.userList)
    } catch (error) {
      console.error(error);
    }

  } 
}
