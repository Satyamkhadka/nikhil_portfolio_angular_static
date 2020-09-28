import { environment } from './../../environments/environment';
import { FrontpageService } from './../_service/frontpage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  person = {
    firstname: "Nimesh",
    lastname: "Khatiwada",
    instagram: "https://www.instagram.com/nimeshkhatiwada/",
    facebook: "https://www.facebook.com/nimesh.khatiwada.73",
    google: "https://www.facebook.com/nimesh.khatiwada.73",
    twitter: "https://www.facebook.com/nimesh.khatiwada.73",
    contact: "9825952054",
    address: "Jhapa arjundhara"
  }
  constructor(private frontpage: FrontpageService) { }

  ngOnInit() {
    // this.env = environment;
    // this.getPeople(this.env.personId);

  }
  // getPeople(id: number) {
  //   this.frontpage.getPerson(id).subscribe(data => {
  //     if (data) {
  //       this.person = data;
  //       // console.log(data)Jhapa arjundhara
  //     } else {
  //       alert("error. please inform developer");
  //     }
  //   })
  // }

}
