import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';


enum State {
  timeSelect = 0,
  timer = 1,
  finished = 2
}

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {
  _state = State;
  state: State = State.timeSelect;
  minutes: number;
  seconds: number;

  constructor(private notification: NotificationService) { }
  ngOnInit() { }

  startTimer(time: number) {
    this.notification.askForNotifications();
    this.state = State.timer;
    this.seconds = 0;
    this.minutes = time;

    let timerInterval = setInterval(() => {
      if(this.seconds === 0) {
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      
      if(this.minutes === 0 && this.seconds === 0) {
        clearInterval(timerInterval);
        this.state = State.finished
        this.notification.notify("Time is up. Good job young grasshopper!")
        this.notification.playSound();
      }
    }, 1000);
  }

}
