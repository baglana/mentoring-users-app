import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FoldersAddButtonComponent } from '../folders-add-button/folders-add-button.component';

@Component({
  selector: 'users-folders-add-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './folders-add-dialog.component.html',
  styleUrls: ['./folders-add-dialog.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersAddDialogComponent {
  private readonly dialogRef: MatDialogRef<FoldersAddButtonComponent> = inject(MatDialogRef<FoldersAddButtonComponent>);
  private readonly fb = inject(FormBuilder);
  protected readonly formGroup = this.fb.group({
    title: ['', Validators.required],
  });

  public onAddFolder(): void {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.value);
    }
  }
}
