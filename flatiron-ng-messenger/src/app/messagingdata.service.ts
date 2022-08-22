import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class MessagingDataService {
  constructor(private loggingSvce: LoggingService) {
    loggingSvce.log("Messaging Data Service constructor completed");
  }
}
