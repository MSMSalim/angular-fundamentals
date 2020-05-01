import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css'],
})
export class CollapsibleWellComponent implements OnInit {
  @Input() public title: string;
  public visible: boolean;

  constructor() {}

  ngOnInit(): void {}

  public toggleContent(): void {
    this.visible = !this.visible;
  }
}
