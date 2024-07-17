import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Material, MATERIALS_REGEX_CONSTANT } from '@users/materials/data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'users-materials-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, NgSwitch, NgSwitchCase, NgSwitchDefault, DatePipe],
  templateUrl: './materials-card.component.html',
  styleUrls: ['./materials-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsCardComponent {
  @Input({ required: true }) material!: Material;
  @Output() private readonly deleteMaterial = new EventEmitter<Material>();
  protected readonly MATERIALS_REGEX_CONSTANT = MATERIALS_REGEX_CONSTANT;

  public onDelete(material: Material): void {
    this.deleteMaterial.emit(material);
  }
}
