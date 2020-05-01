import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
  @Input() public event: IEvent;
  @Output() public eventClick = new EventEmitter();
  public someProperty: any = 'Some value printed using template variables';

  handleClickMe(): void {
    this.eventClick.emit(this.event.name);
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';

    return { bold: isEarlyStart, green: isEarlyStart };
  }
}
