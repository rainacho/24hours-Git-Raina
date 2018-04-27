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

    center: new google.maps.LatLng(31.205952, 121.468342),
    zoom:12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles.hide

    };

    var locations = [
      ['yuz museum', 31.170372, 121.461872],
      ['dong liang' ,31.218119, 121.451646],
      ['dashu wujie' ,31.195722, 121.440553],
      ['shanghai tower' ,31.233535, 121.505623],
    ];

    var icons = [
      'img/Shanghai-1.png',
      'img/Shanghai-5.png',
      'img/Shanghai-6.png',
      'img/Shanghai-7.png'
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
