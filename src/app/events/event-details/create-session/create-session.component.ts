import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession, restrictedWords} from '../../shared';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  ///declaram ficare field, de data asta ca default
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  ngOnInit() {
    //definirea controlarelor, setam fiecae form control pentru fiecare field
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400), restrictedWords])

    //cream un formular din aceste fielduri
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  // private restrictedWords (control: FormControl): {[key:string]: any} {
  //   // @ts-ignore
  //   return control.value.includes('foo') ? {'restrictedWords': 'foo'} : null;
  // }


  saveSession(formValues: any) {
    let session: ISession = {
      id: formValues.id,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
    console.log(session);
  }

  //pentru ca avem un model pentru session, il vom folosi sa validam sesiunea creata, si se si potriveste in cazul nostru.
  //vom trimite aceste formValues intr-un service, care va salva sesiunea pentru noi, vom putea pasa deoarece se potriceste c
  //cu session model
  //vom importa ISession si vom mapa valorile, pentru a vedea ca valorile pasate sunt corecte, in saveSession
  cancel() {
    this.cancelAddSession.emit();
  }
}
