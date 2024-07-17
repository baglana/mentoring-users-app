import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Material, MATERIALS_REGEX_CONSTANT } from '@users/materials/data-access';
import { SafePipe } from 'safe-pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'users-materials-content',
  standalone: true,
  imports: [NgIf, MatDialogModule, MatButtonModule, MatCardModule, MatIconModule, PdfViewerModule, SafePipe],
  templateUrl: './materials-content.component.html',
  styleUrls: ['./materials-content.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsContentComponent {
  public readonly data: Material = inject(MAT_DIALOG_DATA);
  public readonly MATERIALS_REGEX_CONSTANT = MATERIALS_REGEX_CONSTANT;

  public getEmbedUrl() {
    const matches = this.data.material_link.match(MATERIALS_REGEX_CONSTANT.video);
    return 'https://www.youtube.com/embed/' + matches?.[1];
  }
}
