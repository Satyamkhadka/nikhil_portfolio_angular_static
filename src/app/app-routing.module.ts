//ng modules
import { NgModule } from '@angular/core';

//comoonents
// import { ContactComponent } from './contact/contact.component';
// import { BlogsComponent } from './blogs/blogs.component';
// import { BlogComponent } from './blog/blog.component';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';


const routes: Routes = [

  { path: '', component: FrontpageComponent },
  // { path: 'blog/:id', component: BlogComponent },
  // { path: 'blogs/:cat', component: BlogsComponent },
  // { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
