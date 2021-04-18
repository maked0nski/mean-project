import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  // @ts-ignore
  RegisterForm: FormGroup;


  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.RegisterForm = this.fb.group({

      firstName: ['',[
        Validators.required,
        Validators.pattern(/[А-я]/)
        ]
        ],

      secondName: ['',[
           Validators.required,
           Validators.pattern(/[А-я]/)
         ]
         ],

      phone: [null],

      email: ['', [Validators.required, Validators.email]],
      login: ['',[
        Validators.required,
        Validators.pattern(/[A-z+0-9]/)
      ]
      ],
        password: [null]
    })
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.RegisterForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.RegisterForm.controls;

    /** Проверяем форму на валидность */
    if (this.RegisterForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.RegisterForm.value);
  }
}
