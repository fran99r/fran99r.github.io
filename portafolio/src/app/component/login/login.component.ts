import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router, private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }
  
  form:FormGroup;

  ngOnInit(): void {
  }
  
  goBack():void{
    this.router.navigate(['']);
  }

  get Password(){
    return this.form.get("password");
  }
 
  get email(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    event.preventDefault; 
 
    if (this.form.valid){
    alert("Todo salio bien ¡Enviar formuario!")
    }else{     
      this.form.markAllAsTouched(); 
    }
 
  }
}
