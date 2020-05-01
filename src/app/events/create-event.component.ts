import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  public isDirty: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.router.navigate(["/events"]);
  }
}
