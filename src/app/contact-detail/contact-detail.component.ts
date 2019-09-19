import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: any;
  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    console.log( 'contact-detail' )
     this.contactService.getContact(params.get('id')).subscribe(c =>{
        console.log(c);
        this.contact = c;
    })  
    console.log( 'contact-detail_end' ) 
    });

  }
}