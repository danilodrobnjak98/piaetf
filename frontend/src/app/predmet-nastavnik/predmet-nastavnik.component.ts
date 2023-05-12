import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predmet-nastavnik',
  templateUrl: './predmet-nastavnik.component.html',
  styleUrls: ['./predmet-nastavnik.component.css']
})
export class PredmetNastavnikComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //document.getElementById("radi").click();
    document.getElementById("bam").click();
  }

}
