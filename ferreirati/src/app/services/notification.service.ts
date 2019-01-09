import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  permission: string;

  constructor() { 
    if ("Notification" in window) {
      this.permission = Notification.permission;
    }
  }
    
  askForNotifications() {
    if (("Notification" in window) && !["granted", "denied"].includes(Notification.permission)) {
      let self = this;
      Notification.requestPermission().then(function (permission) {
        self.permission = permission;
      });
    }
  }

  notify(message: string) {
    if (this.permission === "granted") {
      var notification = new Notification(message);
    }
  }

  playSound() {
    let url = "https://firebasestorage.googleapis.com/v0/b/otiagobrito-12.appspot.com/o/media%2Fsound.mp3?alt=media&token=8704a674-8da7-4770-bde0-4621c4211a92";
    let snd = new Audio(url);
    snd.play();
  }
}
