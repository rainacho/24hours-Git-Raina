<?
include("includes/database.php");
?>

<?
    $stmt = $pdo->prepare("SELECT * FROM `article` WHERE `id`=2;");
    $stmt->execute();
?>

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
        </header>

        <?
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        ?>
        <section class="section-title">
            <div class="row">
                <p class="font_small"><?=$row['date'];?></p>
                <h2><?=$row['title'];?></h2>
            </div>
        </section>

        <section class="section-article">
              <div class="row">
                  <img class="photo-big" src="uploads/<?= $row['pic1']; ?>"/>
              </div>
              <div class="row">
                  <h3><?=$row['subTitle1'];?></h3>
                  <p class="long-copy"><?=$row['content1'];?></p>
                  <h3><?=$row['subTitle2'];?></h3>
                  <p class="long-copy"><?=$row['content2'];?></p>
              </div>
        </section>
        <?
        }
        ?>

        <section class="section-googleMap">
            <div class="row">
               <div id="mapArea-Cities"></div>
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
        <script src="js/script-shanghai.js"></script>
        <script src="//cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
        <script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//cdn.jsdelivr.net/selectivizr/1.0.3b/selectivizr.min.js"></script>
        <script src="vendors/js/jquery.waypoints.min.js"></script>
        <script src="js/script-scroll.js"></script>
    </body>

</html>
