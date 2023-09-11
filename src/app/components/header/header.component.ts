import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchForm: FormGroup;
  @Output() nombreEmitido: EventEmitter<string>;

  constructor(){
    this.nombreEmitido = new EventEmitter();
    this.searchForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        this.validatorName
      ])
    },[]);
  }


  validatorName(control: AbstractControl){
    if(control.value === 'mariogiron'){
      return { 'validatorName':true}
    }
    return null
  }

  async getData(): Promise<any> {
    /* try {
      let name = this.searchForm.value.name
      let response = await this.usersService.getUserByName(name)
      console.log(response)
    }catch(err){
      console.error(err);
    } */
    //observable
    this.nombreEmitido.emit(this.searchForm.value.name);
  }
}
