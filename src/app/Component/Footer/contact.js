/**
 <div class="text-center">
 <h1 class="foreground">Get In Touch</h1>
 </div>
 <div class="row">
 <div class="col-xs-12 col-sm-6">
 <p class="text-center">
 Got any questions? Contact us via <a href="mailto:info@hoyosgarces.com">email</a>, or leave us a message below.
 </p>
 <footer-mailer></footer-mailer>
 </div>
 <div class="col-xs-12 col-sm-6">
 <p class="text-center">
 Pay us a visit to any of out offices! We will gladly give you a tour of out plantations.
 </p>
 <div class="row">
 <div class="col-xs-6" *ngFor="#contact of contacts">
 <div class="map-container">
 <iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ97b_o6ZtLZARSoUL0y-X47s&key=AIzaSyA1-uzb8oTG0M5q6OQ5zFJ_IGoiWL6RzFQ" allowfullscreen></iframe>
 </div>
 <address>
 <strong>{{ contact.name }}</strong><br />
 {{ contact.addr }}<br />
 {{ contact.city }}<br />
 {{ contact.hours }}<br />
 {{ contact.phone }}
 </address>
 </div>
 </div>
 </div>
 </div>