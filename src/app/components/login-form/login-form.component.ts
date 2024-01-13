import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm!: FormGroup;

  ngOnInit():void{
    this.loginForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }

  get userName(){
    return this.loginForm.get('userName')!;
  }

  get password(){
    return this.loginForm.get('password')!;
  }

  submit(){
    if(this.loginForm.invalid){
      console.log('não Enviou o formulário');
      return;
    }
    console.log('Enviou o formulário');
  }

}
