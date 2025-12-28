import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavCardComponent } from './components/nav-card/nav-card.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';

import { ContainerComponent } from './components/layout/container/container.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ConstructorComponent } from './components/sections/constructor/constructor.component';
import { ContactComponent} from './components/sections/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavCardComponent,
    ProjectsCardComponent,
    ContainerComponent,
    HeroComponent,
    ConstructorComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
