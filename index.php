<?php ?>
<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>24hours</title>
        <link rel="stylesheet" href="vendors/css/normalize.css">
        <link rel="stylesheet" href="vendors/css/grid.css">
        <link rel="stylesheet" href="vendors/css/ionicons.min.css">
        <link rel="stylesheet" href="css/stylesheet.css">
        <link rel="stylesheet" href="css/mediaqueries.css">

        <!-- FONTS -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto" rel="stylesheet">

    </head>

    <body>
        <header>
            <nav>
                <div class="row">
                    <div class="logo">
                        <a href="http://rainadesign.co/project/24hours/"><img src="img/logo.png"/></a>
                    </div>
                    <a class="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a>
                    <div class="mainNavi js--nav-links">
                        <ul>
                          <li><a href="http://rainadesign.co/project/24hours/">MAPS</a></li>
                          <li><a href="#cities">CITIES</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="clearfix"></div>
            <div class="row">
                <h2 class="long-copy feature">
                    The <b>one-stop resource</b> for our travel guides, which tell you what to do when you've got<b> 24 hours</b> to get to know a city.
                </h2>
            </div>
        </header>
        <section class="section-googleMap">
            <div class="row">
               <div id="mapArea"></div>
            </div>
        </section>

        <section class="section-cities" id="cities">
            <div class="row">
                  <h3>Select Cities</h3>
                  <ul class="showcase-cities">
                      <li>
                          <figure class="city-photo"><img src="uploads/SaoPaulo1.jpg" alt="SaoPaulo"></figure>
                          <a class="btn" href="Saopaulo.php">São Paulo, Brazil</a>
                      </li>
                      <li>
                          <figure class="city-photo"><img src="uploads/Shanghai1.jpg" alt="Shanghai"></figure>
                          <a class="btn" href="Shanghai.php">Shanghai, China</a>
                      </li>
                      <li>
                          <figure class="city-photo"><img src="uploads/Bangkok1.jpg" alt="Bangkok"></figure>
                          <a class="btn" href="Bangkok.php">Bangkok, Thailand</a>
                      </li>
                      <li>
                          <figure class="city-photo"><img src="uploads/Vienna1.jpg" alt="Vienna"></figure>
                          <a class="btn" href="Vienna.php">Vienna, Austria</a>
                      </li>
                      <li>
                          <figure class="city-photo"><img src="uploads/Washington1.jpg" alt="Washington"></figure>
                          <a class="btn" href="Washington.php">Washington, D.C.</a>
                      </li>
                  </ul>
              </div>
        </section>

        <section class="section-footer">
            <div class="row">
                <p>24HOURS © 2018</p>
            </div>
        </section>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClnRocpwzGFtlIqm4L-zugc3nYwpP1baY&libraries=places"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/selectivizr@1.0.3/selectivizr.min.js"></script>
    <script src="vendors/js/jquery.waypoints.min.js"></script>
    <script src="js/script-scroll.js"></script>
    <script src="js/script.js"></script>

    </body>

</html>
