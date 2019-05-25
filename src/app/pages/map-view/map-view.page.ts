import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.page.html',
  styleUrls: ['./map-view.page.scss'],
})
export class MapViewPage implements OnInit {

  title = 'GeoPoints';
  lat = 51.678418;
  lng = 7.809007;
  locationMark = false;
  zoom = 17;

  click(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationMark = true;
    console.log(event);
  }

  constructor() { }
  ngOnInit() {
  }

}

// CREATE TABLE `dev_geopoint`.`users` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NULL , `mail` TEXT NULL , `password` TEXT NULL , `loc_initial` POINT NULL , `loc_mark1` POINT NULL , `loc_mark2` POINT NULL , PRIMARY KEY (`id`(100))) ENGINE = InnoDB;
