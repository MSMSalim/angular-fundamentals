import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input() public title: string;
  @ViewChild("modalcontainer") public containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $ : any) {}

  ngOnInit(): void {}

  public closeModal() : void {
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
