import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input - older style, more common, less efficient
  // x = input - newer signals, more efficient, less common
  @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();


  // older, more common output style
  @Output() select = new EventEmitter<string>();
  // newer output style
  // select = output<string>();


  imagePath = computed(() => {
    return 'assets/images/users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id)
  }
}
