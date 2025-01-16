import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { emp } from '../interfaces/Myemployee';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit  {
  iseditmode:boolean=false;
  currentemployeeid=0;
   ourform= new FormGroup({
            name:new FormControl("",[Validators.required]),
            address:new FormControl("",[Validators.required])
          })
  datanew:emp[]=[]
  constructor(private service:ApiService)
  {
       
  }
   ngOnInit(): void {
     this.loademployees();
   }
  loademployees(){
    // this.http.get<datastruc>("https://localhost:7194/api/Employee/GetEmployees").subscribe(res=>{
    //   console.log(res.status);
    //   console.log(res.data)
    //     this.datanew=res.data
      
   // })
   this.service.getemployees().subscribe(res=>{
        console.log(res.data);
        this.datanew=res.data

   })

  }
  submitform()
  {
    if(this.iseditmode==true)
    {
      const employee:any={id:0,name:this.ourform.value.name,address:this.ourform.value.address}
      this.service.updateemployee(this.currentemployeeid,employee).subscribe(res=>{
        console.log(res);
        this.loademployees();
      })
    }
    else{
    const employee:any={id:0,name:this.ourform.value.name,address:this.ourform.value.address}
    console.log(employee)
    this.service.Addemployee(employee).subscribe(res=>{
      console.log(res);
      this.loademployees();
    })
  }
  }

  editemployee(employee:emp)
  {
        this.ourform.patchValue(employee);
        this.iseditmode=true;
        this.currentemployeeid=employee.id
  }
  deleteemployee(id:number)
  {
        this.service.deleteemployee(id).subscribe(response=>
          {console.log(response)
       
          this.loademployees();
  })
  }

}
