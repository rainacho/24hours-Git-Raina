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

    center: new google.maps.LatLng(13.757881, 100.542405),
    zoom:12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles.hide

    };

    var locations = [
      ['Museum Siam',13.744177, 100.494167],
      ['Chatuchak Market' ,13.800138, 100.551049],
      ['Sri Trat' ,13.736913, 100.568074],
      ['Sinchai Travel ' ,13.718886, 100.512772],
      ['Chang Chui' ,13.789227, 100.470533],
    ];

    var icons = [
      'img/Bangkok-1.png',
      'img/Bangkok-5.png',
      'img/Bangkok-10.png',
      'img/Bangkok-11.png',
      'img/Bangkok-12.png',
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
