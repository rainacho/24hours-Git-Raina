window.onload = function()

    {

    var mapOptions = {

    center: new google.maps.LatLng(28.0339, 1.6596),
    zoom:2.0,
    mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var locations = [
      ['São Paulo', -23.5505, -46.6333],
      ['Shanghai', 31.2304, 121.4737],
      ['Bangkok' , 13.7563, 100.5018],
      ['Vienna' , 48.2082, 16.3738],
      ['Washington, D.C.' ,38.9072, -77.0369]
    ];

    var icons = [
      'img/Saopaulo.png',
      'img/Shanghai.png',
      'img/Bangkok.png',
      'img/Vienna.png',
      'img/Washington.png'
    ]

    var map = new google.maps.Map(document.getElementById("mapArea"), mapOptions);

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
