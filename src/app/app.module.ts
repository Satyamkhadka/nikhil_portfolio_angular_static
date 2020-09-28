import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgxMdModule } from 'ngx-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { NavigationComponent } from './navigation/navigation.component';
// import { BlogsComponent } from './blogs/blogs.component';
// import { BlogCategoryComponent } from './blog-category/blog-category.component';
// import { BlogComponent } from './blog/blog.component';
// import { ContactComponent } from './contact/contact.component';

//mat modules
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    NavigationComponent,
    // BlogsComponent,
    // BlogCategoryComponent,
    // BlogComponent,
    // ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMdModule.forRoot()
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
