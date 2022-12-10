import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/Cliente';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cliente-item',
  templateUrl: './cliente-item.component.html',
  styleUrls: ['./cliente-item.component.css']
})
export class ClienteItemComponent {
  @Input() cliente: Cliente = {
    "nombre": "0", "dni": "0", "f_pago": "0", "f_venc": "0"
  };

  faTrash = faTrash;
}
