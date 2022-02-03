import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor(private route:ActivatedRoute) { }
  username:any;
  ngOnInit(): void { 
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.username=params.data;
    })
    
   

    
  
   }

}
