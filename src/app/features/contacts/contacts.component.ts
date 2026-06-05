import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  name = signal('');
  email = signal('');
  message = signal('');

  onSubmit() {
    console.log('Form submitted', {
      name: this.name(),
      email: this.email(),
      message: this.message()
    });
    // Здесь будет логика отправки
  }
}
