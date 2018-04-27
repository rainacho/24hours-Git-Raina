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

    center: new google.maps.LatLng(38.908990, -77.024705),
    zoom:12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles.hide

    };

    var locations = [
      ['Himitsu',38.941730, -77.024557],
      ['Union Market' ,38.908670, -76.997989],
      ['District Winery' ,38.873451, -77.000710],
      ['Korean War Veterans Memorial' ,38.887730, -77.047243],
      ['Primrose' ,38.927788, -76.990882],
    ];

    var icons = [
      'img/Washington-1.png',
      'img/Washington-3.png',
      'img/Washington-4.png',
      'img/Washington-5.png',
      'img/Washington-8.png',
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
