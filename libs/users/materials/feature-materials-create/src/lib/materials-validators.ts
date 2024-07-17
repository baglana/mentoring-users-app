import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MATERIALS_REGEX_CONSTANT, MaterialType } from '@users/materials/data-access';

export class MaterialsValidators {
  // Expose validator as public static function
  // function that receives an argument from the user and
  // creates a validator function
  static ofType(type: string): ValidatorFn {
    // returns a function which takes an Anstract control as an input
    return (control: AbstractControl): { [key: string]: unknown } | null => {
      if (control.value) {
        switch (type) {
          case MaterialType.Audio:
            if (!MATERIALS_REGEX_CONSTANT.audio.test(control.value)) {
              return {
                invalidUrl: MaterialType.Audio,
              };
            }
            break;
          case MaterialType.Video:
            if (!MATERIALS_REGEX_CONSTANT.video.test(control.value)) {
              return {
                invalidUrl: MaterialType.Video,
              };
            }
            break;
          case MaterialType.Pdf:
            if (!MATERIALS_REGEX_CONSTANT.pdf.test(control.value)) {
              return {
                invalidUrl: MaterialType.Pdf,
              };
            }
            break;
        }
      }
      // Validation passed; To signal this we need to return null
      return null;
    };
  }
}
