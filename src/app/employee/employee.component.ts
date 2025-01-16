import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: false,
  
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
        ourform= new FormGroup({
          name:new FormControl("",[Validators.required]),
          address:new FormControl("",[Validators.required])
        })

        submitform()
        {
          const data={name:this.ourform.value.name,address:this.ourform.value.address}
          console.log(data);
        }
}
