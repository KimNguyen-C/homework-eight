var homePage =`<div class="hero"></div>
      <div class="content">
        <h2>K-Town Restaurant</h2>
        <div class="photo-container">
          <img src="images/bbq1.jpg" alt="" />
          <img src="images/bbq2.jpg" alt="" />
          <img src="images/drunk1.jpg" alt="" />
          <img src="images/hotpot1.jpg" alt="" />
        </div>
        <p>
          Welcome to our BBQ & Hot Pot restaurant! We are dedicated to providing a unique dining experience that combines the best of both worlds.
        </p>
        <p>
          At our restaurant, you can enjoy the sizzling and savory flavors of BBQ alongside the comforting and customizable options of Hot Pot. Whether you’re in the mood for tender grilled meats or a steaming pot of broth filled with fresh ingredients, we have something for everyone.
        </p>
        <p>
          In addition to the delicious food, we also offer a warm and inviting atmosphere that is perfect for gathering with friends and family. Whether you’re celebrating a special occasion or simply enjoying a casual meal, our restaurant is the ideal destination for a memorable dining experience.
        </p>
        <p>
          We look forward to welcoming you to our BBQ & Hot Pot restaurant and providing you with an unforgettable culinary adventure.
        </p>
        <p>“As a BBQ and hot pot lover, I came to this restaurant is really satisfied! Their barbecued meat is tender and juicy, with just the right seasoning to make one bite after another irresistible. Hot pot soup base is rich in flavor, fresh and rich ingredients, let me eat a lot of pleasure. The service staff was also very professional and answered all my questions carefully. The overall environment is clean and tidy, and the decoration is warm and comfortable. I will come again next time I have the chance!” - Our Customer.</p>
      </div><button class="booking-button">Booking</button>
      <footer>
  <div class="footer-content">
    <p>&copy; 2025 KTown BBQ. All rights reserved.</p>
  </div>
</footer>`;

var menuPage =`<div class="home"><h1>We offer your favorite grill and hotpot</h1>
      <div class="menu"></div>
      <div class="two-images">
        <img class="drink" src="images/drink2.jpeg" alt="" />
        <span>Variety of Drinks</span>

        <img class="buffet-bar" src="images/buffet-image.jpg" alt="" />
        <span>Buffet Bar</span>
      </div><button class="booking-button">Booking</button><footer>
  <div class="footer-content">
    <p>&copy; 2025 KTown BBQ. All rights reserved.</p>
  </div>
</footer></div>`;

var bookingPage =`<h3>Reserve a Table</h3>

<form class="reservation-form">
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" required>

  <label for="phone">Phone Number</label>
  <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" placeholder="1234567890">

  <label for="guests">Number of Guests</label>
  <input type="number" id="guests" name="guests" min="1" max="20" required>

  <label for="date">Reservation Date</label>
  <input type="date" id="date" name="date" required>

  <label for="time">Reservation Time</label>
  <input type="time" id="time" name="time" required>

  <label for="notes">Special Requests / Notes</label>
  <textarea id="notes" name="notes" rows="4" placeholder="Let us know if you have any allergies or preferences..."></textarea>

  <button type="submit">Book Now</button>
</form><footer>
  <div class="footer-content">
    <p>&copy; 2025 KTown BBQ. All rights reserved.</p>
  </div>
</footer>`;

var contactPage =` <div class="contact"><div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207051.19136351734!2d-86.53319440546873!3d39.9219293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814abfba5b76461%3A0xd7d087d1e6a2f166!2sK-TOWN%20Korean%20BBQ%20%26%20Hot%20Pot!5e1!3m2!1svi!2sus!4v1744107421651!5m2!1svi!2sus"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="address">
        <ul>
          K-Town BBQ
        </ul>
        <ul>
          Sun-Thur : 11AM - 10Am
        </ul>
        <ul>
          Fri-Sat : 12PM - 11PM
        </ul>
        <ul>9220 ABCXYZ Street, Indianapolis, IN, 48203</ul>
        <ul>Phone number: 317-254-8935</ul>
      </div></div>
      <div class="threepics">
        <img src="images/ktown1.jpg" alt="">
        <img src="images/ktown2.jpg" alt="">
        <img src="images/ktown3.webp" alt="">
      </div><footer>
  <div class="footer-content">
    <p>&copy; 2025 KTown BBQ. All rights reserved.</p>
  </div>
</footer>`;


function loadPageContent(pageName){
    let pageContent = pageName + "Page";
    $("#app").html(eval(pageContent));
}
function initApp(){
    loadPageContent("home");
    $("nav a").on("click", (e) => {
        e.preventDefault();
        // let btnID = $(e.target).attr("id");
    let btnID = e.currentTarget.id;
    loadPageContent(btnID);
    
    });
}

$(document).ready(()=>{
   initApp();
});

