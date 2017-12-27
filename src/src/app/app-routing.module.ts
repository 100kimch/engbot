import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import { Chat2Component } from './chat2/chat2.component';
import { BotBalloonComponent } from './bot-balloon/bot-balloon.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'chat2', component: Chat2Component },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
