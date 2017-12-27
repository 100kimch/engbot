import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MainDirective } from './main/main.directive';
import { InputboxComponent } from './inputbox/inputbox.component';
import { BotBalloonComponent } from './bot-balloon/bot-balloon.component';
import { AppRoutingModule } from './app-routing.module';
import { Chat2Component } from './chat2/chat2.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MainDirective,
    InputboxComponent,
    BotBalloonComponent,
    Chat2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
