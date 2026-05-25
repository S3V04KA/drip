import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { HeroComponent } from './hero/hero';
import { VisionComponent } from './vision/vision';
import { LecturesComponent } from './lectures/lecture';
import { TeamComponent } from './team/team';
import { FaqComponent } from './faq/faq';
import { PartnersComponent } from './partners/partners';
import { ContactsComponent } from './contacts/contacts';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    VisionComponent,
    LecturesComponent,
    TeamComponent,
    FaqComponent,
    PartnersComponent,
    ContactsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
