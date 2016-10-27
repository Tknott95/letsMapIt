import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  title = 'app works!';

  //Zoom Level
  zoom: number = 10;

  // Start Position | WINDSOR COLORADO
  lat: number = 40.466581;
  lng: number = -104.921348;

  // Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;



  // Markers
  markers: marker[] = [];


  constructor(private _markerService: MarkerService){
    this.markers = this._markerService.getMarkers();
  }
  
  clickedMarker(marker: marker, index: number){
    console.log('Clicked Marker: '+marker.name+' at index '+index);
  }
  
  mapClicked($event: any){
    console.log('map clicked at latitude: '+$event.coords.lat+' and logitude: '+$event.coords.lng);
    var newMarker = {
        name: "Untitled",
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, $event: any){
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

  }


  //draggable values are yes and no as string

  addMarker(){
    console.log("Marker Added via Form");
    if(this.markerDraggable == 'yes') { 
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

}

//Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
