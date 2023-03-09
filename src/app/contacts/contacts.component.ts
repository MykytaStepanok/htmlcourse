import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = 46.744311;
  lng = 36.801126;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 17,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }
  mapInitializer(){
    this.map = new google.maps.Map<Element>(this.gmap.nativeElement,
    this.mapOptions);
    this.marker.setMap(this.map);
  }

}
