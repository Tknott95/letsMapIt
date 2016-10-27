import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  //Zoom Level
  zoom: number = 10;

  // Start Position | WINDSOR COLORADO
  lat: number = 40.466581;
  lng: number = -104.921348;
  // Markers
  markers: marker[] = [
    {
      name: 'Fort Collins',
      lat: 40.548776,
      lng: -105.065905,
      draggable: true
    },
    {
      name: 'Greeley',
      lat: 40.414137,
      lng: -104.771171,
      draggable: true
    },
    {
      name: 'Johnstown',
      lat: 40.349805,
      lng: -104.949745,
      draggable: true
    }
  ];


  constructer(){

  }
  
  
}

//Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
