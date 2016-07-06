<!-- Heavily inspired by Kevin Law :) -->
<html>
<head>
  <title>Henry Quinn</title>
  <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>
  <link rel="stylesheet" href="splash.css" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Ubuntu:500' rel='stylesheet' type='text/css'>
</head>

<body>
  <div class="container-fluid">
    <h5><span id="lastLogin"></span><?php echo $_SERVER['REMOTE_ADDR']; ?>
      <br>Welcome to HenryNeeds.coffee!
      <br>[hquinn@HenryNeeds ~]$<span class="command"></span>
    </h5>

    <div class="ls hide">
      <div class="row">
        <div class="col-md-12 col-sm-12 text-left">
      	  <h3>Henry E Quinn IV</h3>
          <h5><a href="mailto:henryquinniv@gmail.com">HenryQuinnIV@gmail.com</a> / <a href="https://github.com/quinncuatro">GitHub: Quinncuatro</a> / <a href="http://www.linkedin.com/in/henryquinniv">LinkedIn: HenryQuinnIV</a></h5>
        </div>
      </div>

<!-- EDUCATION --> 
      <h4>Education:</h4>
      <div class="row">
        <div class="col-md-3  col-sm-6 text-left">
          <p>Champlain College*</p>
        </div>
        <div class="col-md-3 col-sm-6 text-right">
          <p>May 2015</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 text-left">
          <p>Bachelor of Science in Computer Networking and Information Security</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <ul>
            <li>Specialization in Cyber Security</li>
            <li>Champlain College Rock Climbing Club</li>
          </ul>
        </div>
      </div>

<!-- PROJECTS -->
      <h4>Projects:</h4>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <ul>
            <li>
              <p>Google Maps Experiments- This is a prototype for a summer camp database and dashboard to help track camper and activity metrics.</p>
              <p>[<a href="https://github.com/Quinncuatro/GoogleMapsExperiments">GitHub</a>] [<a href="http://crashthebot.net/MapsExperiments/camp/">Demo</a>] Responsive HTML / JS / Google Maps API / PHP / MySQL</p>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <p>Mac's Punishment Board - A friend made the mistake of telling me about a domain he wanted. I decided to let our friends decide how he would earn it back.</p>
              <p>[<a href="http://www.mckeighry.com:3000/">Demo</a>] Meteor / JS / Mongo</p>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <p>Domain Coding Challenge - I ultimately decided on a coding challenge, to kickstart my friend into finally learning JavaScript.</p>
              <p>[<a href="https://github.com/Quinncuatro/MacCodeChallenge">GitHub</a>] [<a href="http://www.mckeighry.com/">Demo</a>] HTML / JS / PHP
            </li>
            <li>
              <hr>
            </li>
            <li>
              <p>Weather Checker - Grabs your location and gives you a faux interactive weather update.</p>
              <p>[<a href="https://github.com/Quinncuatro/WeatherChecker">GitHub</a>] [<a href="http://crashthebot.net/freecodecamp/weather/">Demo</a>] Responsive HTML / JS (jQuery/Typed) / Open Weather Map API / JSON</p>
            </li>
          </ul>
        </div>
      </div>
<!-- WORK EXPERIENCE -->
      <h4>Work Experience</h4>
      <div class="row">
        <div class="col-md-3 col-sm-6 text-left">
          <p class="bold">Job Title Job Title</p>
        </div>
        <div class="col-md-3 col-sm-6 text-right">
          <p>Date - Date</p>
        </div>
      </div>
    </div>
  </div>
</body>

<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='js/typed/js/typed.js'></script>
<script src='js/custom/intro.js'></script>

</html>
