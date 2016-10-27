import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

@Injectable()
export class MarkerService extends Init{
    constructor(){//runs any constructor or intitalization in init class
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

}