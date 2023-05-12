import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  constructor(private servis:ServisPrviService) { }

  ngOnInit(): void {

    document.getElementById("radi").click();
  }

  sviPredmet: Predmet[];




}
