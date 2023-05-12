import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ruter:Router) { }

  ngOnInit(): void {
   

    document.getElementById("radi").click();
  }

  kraj() {
    localStorage.setItem("korisnik", "");
  }

}
