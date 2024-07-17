import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { FoldersAddButtonComponent } from '@users/materials/feature-folders-create';
import { FoldersListComponent } from '@users/materials/feature-folders-list';
import { LetDirective } from '@ngrx/component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Material, MaterialsFacade } from '@users/materials/data-access';
import { Router } from '@angular/router';
import { MaterialsListComponent } from '../materials-list/materials-list.component';
import { MaterialsAddButtonComponent } from '@users/materials/feature-materials-create';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'users-materials-list-container',
  standalone: true,
  imports: [
    FoldersAddButtonComponent,
    FoldersListComponent,
    LetDirective,
    MatProgressBarModule,
    MaterialsListComponent,
    MaterialsAddButtonComponent,
    NgSwitch,
    NgSwitchCase,
  ],
  templateUrl: './materials-list-container.component.html',
  styleUrls: ['./materials-list-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsListContainerComponent {
  private readonly router = inject(Router);
  private readonly materialsFacade = inject(MaterialsFacade);
  public readonly openedFolder$ = this.materialsFacade.openedFolder$;
  public readonly materialsStatus$ = this.materialsFacade.materialsStatus$;
  public readonly folderMaterials$ = this.materialsFacade.folderMaterials$;

  constructor() {
    this.materialsFacade.loadFolder();
    this.materialsFacade.loadMaterials();
  }

  public deleteMaterial(material: Material): void {
    this.materialsFacade.deleteMaterial(material.id);
  }

  public goToFolders(): void {
    this.router.navigate(['/materials']);
  }
}
