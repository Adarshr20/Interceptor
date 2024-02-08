import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Interceptor';

  constructor(private http:HttpClient){}

  public fake() {
   this.http.get('https://fake.typicode.com/todos/1').subscribe((data=>console.log(data)
   ));
   
   

  }
  public real() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data=>console.log(data)
    ));
  }
}
