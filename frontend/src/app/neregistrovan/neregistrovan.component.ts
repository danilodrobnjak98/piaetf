import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neregistrovan',
  templateUrl: './neregistrovan.component.html',
  styleUrls: ['./neregistrovan.component.css']
})
export class NeregistrovanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("btn").click();
  }

  
}
