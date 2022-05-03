import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})

export class LikeWidgetComponent implements OnInit {

  @Input() public likes = 0;
  @Input() public id = null;
  @Output() public liked = new EventEmitter<void>();

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public fa = {
    faThumbsUp
  }

  like(): void {
    this.liked.emit();
  }

}
