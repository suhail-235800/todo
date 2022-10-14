import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'first_project';

  list:any[]=[];
  listd:any[]=[];
  
  EnterSubmit(item:String,bo:any,date:any)
    {
      
      if(item!="")
this.list.push({item});
this.listd.push({date});
bo.value=""

}
  remove(i:number)
  {
this.list.splice(i,1);
this.listd.splice(i,1);
  }


}