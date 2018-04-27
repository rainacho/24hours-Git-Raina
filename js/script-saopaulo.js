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

    center: new google.maps.LatLng(-23.5482555,-46.6618248),
    zoom:13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles.hide

    };

    var locations = [
      ['A Casa do Porco Bar', -23.544859, -46.644687],
      ['Petí Gastronomia' ,-23.528438, -46.682468],
      ['Around SP' ,-23.554326, -46.677450],
      ['Fitó' ,-23.568113, -46.694898],
      ['Al Janiah' ,-23.557486, -46.645239],

    ];

    var icons = [
      'img/Saopaulo-1.png',
      'img/Saopaulo-4.png',
      'img/Saopaulo-5.png',
      'img/Saopaulo-6.png',
      'img/Saopaulo-7.png'
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
