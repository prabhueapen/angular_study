import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  constructor(private contactService: ContactService) { }

  ngOnInit() {

    console.log("contact ContactListComponent");

    this.contactService.getContacts().subscribe((data : any[])=>{ 
      console.log("data");
      console.log(data);
      this.contacts = data;
  })
  }

}
