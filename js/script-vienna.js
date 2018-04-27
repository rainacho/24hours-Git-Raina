window.onload = function()

    {

    var styles = {
        hide: [
          {
            featureType: 'landscape.man_made',
            stylers: [{ "saturation": -100 }]
          },
          {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'poi.attraction',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'poi.park',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
        ]
      };

    var mapOptions = {

    center: new google.maps.LatLng(48.204969, 16.363717),
    zoom:13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles.hide

    };

    var locations = [
      ['Schloss Belvedere',48.191612, 16.381719],
      ['Supersense' ,48.216748, 16.388858],
      ['Opera House' ,48.203324, 16.369241],
      ['Lugeck' ,48.209670, 16.375158],
    ];

    var icons = [
      'img/Vienna-1.png',
      'img/Vienna-6.png',
      'img/Vienna-8.png',
      'img/Vienna-10.png',
    ]

    var map = new google.maps.Map(document.getElementById("mapArea-Cities"), mapOptions);

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for(i = 0; i < locations.length; i++){
        marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
             map: map,
             title: locations[i][0],
             // animation: google.maps.Animation.DROP,
             icon: icons[i]
         });

         google.maps.event.addListener(marker, "click", (function(marker, i){
             return function(){
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
             }
         })(marker, i));
    }
}
