import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;


  // older, more common output style
  @Output() select = new EventEmitter<string>();
  // newer output style
  // select = output<string>();


  imagePath = computed(() => {
    return 'assets/images/users/' + this.user.avatar;
  });

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
