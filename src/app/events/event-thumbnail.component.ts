import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
  @Input() public event: any;
  @Output() public eventClick = new EventEmitter();
  public someProperty: any = "Some value printed using template variables";

  handleClickMe(): void {
    this.eventClick.emit(this.event.name);
  }
}
