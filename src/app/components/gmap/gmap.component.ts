import { Component, OnInit } from '@angular/core';
import { Constructions } from '../../shared/shared'

interface Item {
  lat: number;
  lng: number;
}


@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})

export class GmapComponent implements OnInit {

  title = 'Просмотрите ваши борды';
  item = Constructions;
  initialLat = 43.2282987;
  initialLlng = 76.8833408;

  constructor() { }

  ngOnInit(): void {
  }

}
