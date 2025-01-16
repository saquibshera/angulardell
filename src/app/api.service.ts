import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datastruc } from './interfaces/Myemployee';
import { emp } from './interfaces/Myemployee';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private url="https://saquibwebapp-cfbzg3djcqajfdfa.canadacentral-01.azurewebsites.net";
  constructor(private http:HttpClient) { }
//api 
  getemployees()
  {
         return this.http.get<datastruc>(this.url+"/api/Employee/GetEmployees");
  }
  Addemployee(employee:emp){

          return this.http.post(this.url+"/api/Employee/Addemployee",employee)
  }
  updateemployee(id:number,employee:emp)
  {
        return this.http.put(this.url+"/api/Employee/updateemployee?id="+id,employee);
  }
  deleteemployee(id:number)
  {
      return this.http.delete<string>(this.url+"/api/Employee/deleteemp?id="+id);
  }
}
