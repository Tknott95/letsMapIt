export class Init{
    load() {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found...creating...');

            var markers = [
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

            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log('Loading markers... ');
        }
    }
}