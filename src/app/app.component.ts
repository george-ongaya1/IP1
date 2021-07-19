import { Component } from '@angular/core';
import { Goal } from './goal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  goals:Goal[]=
  [
{
  id:1,name:"finding nemo"
}
,
{
  id:2,name:"buy cookies"
}
,
{
  id:3,name:"getting an old phone case"
}
,
{
  id:4,name:"getting a shiny phone case"
}
,
{
  id:5,name:"getting a better phone case"
}
,
{
  id:6,name:"getting a latest phone case"
}



  ]
}
