import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

@Injectable()
export class MarkerService extends Init{

    // runs any constructor or intitalization in init class
    constructor(){
        super(); 
        console.log('MarkerService Initialed...');
        this.load();
        }

    getMarkers(){
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }

    addMarker(newMarker){
        // Fetch markers
        var markers = JSON.parse(localStorage.getItem('markers'));
        // Push to array

        markers.push(newMarker);

        // Set to local storage again
        localStorage.setItem('markers', JSON.stringify(markers));
        }

        updateMarker(marker, newLat, newLng){
            // Fetch markers
            var markers = JSON.parse(localStorage.getItem('markers'));

            for(var i = 0;i < markers.length;i++){
                if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
                    markers[i].lat = newLat;
                    markers[i].lng = newLng;
                }
            }
            //set to Local Sorage
            localStorage.setItem('markers', JSON.stringify(markers));
        }

        removeMarker(marker){
            // Fetch markers
            var markers = JSON.parse(localStorage.getItem('markers'));

            for(var i = 0;i < markers.length;i++){
                if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
                    markers.splice(i, 1);
                }
            }
            //set to Local Sorage
            localStorage.setItem('markers', JSON.stringify(markers));
        
        }

}