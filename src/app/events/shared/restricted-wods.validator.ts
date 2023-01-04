import {FormControl} from "@angular/forms";

export function restrictedWords (control: FormControl): {[key:string]: any} {
  // @ts-ignore
  return control.value.includes('foo') ? {'restrictedWords': 'foo'} : null;
}
