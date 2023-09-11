import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserGitHub } from 'src/app/interfaces/userGitHub.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  template:`
  <section class="container mt-3">
   <button class="btn btn-danger" [routerLink]="['/home']">Volver a Home</button>
    <div class="card shadow p-2">
      <figure class="figure">
        <img [src]="myUser?.avatar_url" class="figure-img img-fluid rounded" alt="">
        <figcaption class="figure-caption text-start">{{myUser?.bio}}</figcaption>
      </figure>
      <p>{{myUser?.name}}</p>
      <p>{{myUser?.followers}}</p>
      <p>{{myUser?.created_at}}</p>
      <p>{{myUser?.following}}</p>
    </div>
  </section>
`,
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit{

  myUser!: UserGitHub | any;

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService,
    ){
  }
//Del ciclo de vida del componente
  ngOnInit(): void {
      //Capturar el id de la url
      this.activateRoute.params.subscribe(async (params:any)=>{
        const login = params.userlogin;
        this.myUser = await this.usersService.getUserByLogin(login);
        console.log(JSON.stringify(this.myUser))
      })
  }
}
