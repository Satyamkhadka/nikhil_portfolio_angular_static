// import { environment } from './../../environments/environment';
import { FrontpageService } from './../_service/frontpage.service';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  ngOnInit() {
  }

  people = {
    firstname: "Nimesh",
    lastname: "Khatiwada",
    instagram: "https://www.instagram.com/nimeshkhatiwada/",
    facebook: "https://www.facebook.com/nimesh.khatiwada.73",
    google: "https://www.facebook.com/nimesh.khatiwada.73",
    twitter: "https://www.facebook.com/nimesh.khatiwada.73",
    about: `
    
          <center>
          <br> <br> <br>
          <b>
          A tech enthusiast and maybe geek of some sorts, bit sarcastic, nocturnal, master procastinator and funny sometimes
          </b>
          <br> <br> <br>
          
          Guitar hobbyist
          </center>


    
    `,

  };
  //env;
  constructor(private frontpage: FrontpageService, private meta: Meta) {
    // this.env = environment;
    // this.getPeople(this.env.personId);

  }

  // getPeople(id: number) {
  //   this.frontpage.getPerson(id).subscribe(data => {
  //     if (data) {
  //       this.people = data;
  //       // let test = this.meta.addTags([
  //       //   { property: 'og:url', content: 'https://satyamkhadka.com.np' },
  //       //   { property: 'og:type', content: 'article' },
  //       //   { property: 'og:title', content: 'Satyam Khadka' },
  //       //   { property: 'og:description', content: 'Personal Site and Blogs' },
  //       //   { property: 'og:image', content: this.env.url + this.people.dp.formats.small.url },
  //       // ]);

  //     } else {
  //       alert("error. please inform developer");
  //     }
  //   })
  // }
  notready() {
    alert(' यो चै अहिले बनेको छैन है गाइच ।  .. under active development.. regards satyam.. ')
  }

}
