import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMessage() {
    const previousChat = document.querySelector('#previousChat');
    const texts = document.querySelector('#texts');
    const botBalloon = document.querySelector('#botBalloon');

    previousChat.classList.remove('show');
    botBalloon.classList.remove('answer');

   // previousChat.innerHTML = texts.value;
    previousChat.classList.add('show');
    //texts.value = '';
    botBalloon.classList.add('answer');
  }

}
