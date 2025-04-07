import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
async register(fullName:string, email:string,password:string){
    const data= {
      fullName: fullName,
      email: email,
      password:password
    }
    let rep = fetch('http://localhost:3333/register',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },body: JSON.stringify(data)
    }).then(response=> response.json())
}

async login(email:string, password:string){
    const data= {
      email: email,
      password: password
    }
    let rep= fetch('http://localhost:3333/login',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },body: JSON.stringify(data)
    }).then(response=> response.json())
}

}
