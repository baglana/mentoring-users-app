import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FoldersCardComponent } from '../folders-card/folders-card.component';
import { Folder } from '@users/materials/data-access';
import { FoldersAddButtonComponent } from '@users/materials/feature-folders-create';
import { NgFor } from '@angular/common';

@Component({
  selector: 'users-folders-list',
  standalone: true,
  imports: [FoldersCardComponent, FoldersAddButtonComponent, NgFor],
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListComponent {
  @Input({ required: true }) folders!: Folder[];
  @Output() private readonly deleteFolder = new EventEmitter<Folder>();
  @Output() private readonly openFolder = new EventEmitter<number>();

  public onDeleteFolder(folder: Folder): void {
    this.deleteFolder.emit(folder);
  }

  public onOpenFolder(id: number): void {
    this.openFolder.emit(id);
  }
}
