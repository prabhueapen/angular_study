import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  contacts =  [
     {  id:  1,  name:  'Contact 1', email: 'contact1@email.com' },
     {  id:  2,  name:  'Contact 2', email: 'contact2@email.com' },
     {  id:  3,  name:  'Contact 3', email: 'contact3@email.com' },
     {  id:  4,  name:  'Contact 4', email: 'contact4@email.com' }
   ];
   let shipping = [
    {
      "type": "Overnight",
      "price": 25.99
    },
    {
      "type": "2-Day",
      "price": 9.99
    },
    {
      "type": "10-Day",
      "price": 0
    },
    {
      "type": "Postal",
      "price": 2.99
    }
  ]
   return {contacts,shipping};

  }
  

  // genId(contacts: Contact[]): number {
  //   return contacts.length > 0 ? Math.max(...contacts.map(hero => hero.id)) + 1 : 11;
  // }
}
 