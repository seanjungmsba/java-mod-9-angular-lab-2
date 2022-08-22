import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  @Input()
  messageString: string;

  loggingSvce = new LoggingService(); // create a new instance of the service

  // use the instance of the logging service in our event handler
  onSendMessage() {
    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
