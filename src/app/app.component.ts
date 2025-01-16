import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  texted="";
  heading="";
  title = 'nileshangularapp';
  myname:string="nilesh";
  buttonvalue="click";
  setofnames=["saquib","nilesh","Vatan"]
  employees=[
    {
        "name":"saquib",
        "address":"dubai"
    },
    {
        "name":"nilesh",
        "address":"India"
    }
  ]
  constructor()
  {
     
  }
  myfunc()
{
    this.heading="Hello from button";
}
}

