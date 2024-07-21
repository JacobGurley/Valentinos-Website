<template>
  <div>
    <TheHeader /> <!-- Include the header component -->

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <a href="#" @click.prevent="openMaps">
          <h1>Valentino's Pizza</h1>
          <i class="location-icon fas fa-map-marker-alt"></i>
          <h2>LOS ALAMITOS</h2>
          <p>10511 Los Alamitos Blvd.</p>
        </a>
        <a href="tel:+15627950400" class="phone-number">(562) 795-0400</a>
        <a href="#order" class="order-link">Order Now</a> <!-- Order Now button -->
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-us" id="about">
      <div class="about-content">
        <h2><i class="fas fa-pizza-slice"></i> About Us</h2>
        <p>
          Valentino's Pizza has been serving the cities of Los Alamitos, Long Beach, Cypress, and Seal Beach for almost 40 years! Valentino's was founded in 1984 by the current owner Lee, and has been family run ever since. This pizza shop frequently provides pizzas for Los Alamitos's Friday Night Lights, local businesses, and the Casa Youth Shelter.
        </p>
      </div>
    </section>


    <!-- Menu Highlights Section -->
    <section class="menu-highlights" id="menu">
      <h2>Best Sellers</h2>
      <div class="menu-items">
        <div class="menu-item">
          <img src="../assets/pizza1.jpg" alt="Margherita Pizza">
          <h3>Margherita Pizza</h3>
          <p>Classic margherita pizza with fresh tomatoes, mozzarella, and basil.</p>
        </div>
        <div class="menu-item">
          <img src="../assets/pizza2.jpg" alt="Pepperoni Pizza">
          <h3>Pepperoni Pizza</h3>
          <p>Loaded with pepperoni and topped with mozzarella cheese.</p>
        </div>
        <div class="menu-item">
          <img src="../assets/pizza3.jpg" alt="Veggie Pizza">
          <h3>Veggie Pizza</h3>
          <p>A medley of fresh vegetables on a crispy crust.</p>
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <section class="locations" id="locations">
      <h2>Our Location</h2>
      <div class="location">
        <h3>Los Alamitos</h3>
        <p>10511 Los Alamitos Blvd, Los Alamitos, CA 90720</p>
        <p>Phone: (562) 795-0400</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Valentino's Pizza. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import TheHeader from './TheHeader.vue';

export default {
  name: 'HomePage',
  components: {
    TheHeader
  },
  setup() {
    onMounted(() => { //Lazy Loads hero image
      const heroSection = document.querySelector('.hero');
      const img = new Image()
      img.src = require('@/assets/hero.jpg');
      img.onload = () => {
        heroSection.style.backgroundImage = `url(${img.src})`;
        heroSection.classList.add('lazyloaded');
      };
    });
  const openMaps = () => { //Opens Maps when user clicks on address
    const address = '10511 Los Alamitos Blvd, Los Alamitos, CA 90720';
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const url = isIOS
      ? `https://maps.apple.com/?q=${encodeURIComponent(address)}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    window.open(url, '_blank');
  };  

  return {
    openMaps
  };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cooper+Black&display=swap'); /* Import Cooper Black font */
/* General styles */
body {
  margin: 0;
  background-color: #f4f4f4;
}

/* Hero Section */
.hero {
  position: relative;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
}

.hero.lazyloaded {
  background: url('../assets/hero.jpg');
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
}

.hero-content {
  position: absolute;
  text-align: center;
  padding: 100px;
  padding-bottom: 0; /* Remove bottom padding */
}

.hero-content a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-content a:hover {
  transform: scale(1.05); /* Scale up by 10% */
}

.hero h1 {
  font-size: 60px; /* Fixed font size */
  margin: 0 0 15px;
  font-family: 'Cooper Black', serif;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.location-icon {
  font-size: 36px; /* Fixed font size */
  margin-bottom: 10px;
}

.hero h2 {
  font-size: 36px; /* Fixed font size */
  margin: 10px 0;
  font-family: 'Cooper Black', serif;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.hero p {
  font-size: 24px; /* Fixed font size */
  margin: 10px 0 10px;;
  font-family: 'Cooper Black', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.hero .phone-number{
  margin-top: 20px; /* Add more space above the phone number */
  display: block;
  font-size: 24px; /* Ensure font size is the same as other hero texts */
  text-align: center; /* Ensure it's centered */
  font-family: 'Cooper Black', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: text-decoration 0.3s ease;
}
.hero .phone-number:hover {
  text-decoration: underline; /* Underline on hover */
  transform: none;
}


.order-link {
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #E21717;
  color: white;
  border-radius: 25px;
  border: 2px solid transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  display: inline-block;
  margin-top: 30px; /* Add space between text and button */
  font-size: 20px; /* Fixed font size */
}

.order-link:hover {
  color: #E21717;
  background-color: white;
  border-color: #E21717;
}

/* About Us Section */
.about-us {
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 25%, #f0f0f0 100%);
  border-top: 5px solid #00A550;
  border-bottom: 5px solid #00A550;
  animation: slideIn 2s;
}

.about-us .about-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  border: 2px solid #ddd;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  border-radius: 15px;
  position: relative;
}

.about-us h2 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #E21717;
  font-family: 'Cooper Black', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-us h2 i {
  margin-right: 15px;
  font-size: 48px;
  color: #E21717;
}

.about-us p {
  font-size: 20px;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  text-align: justify;
}

@keyframes slideIn {
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

/* Menu Highlights Section */
.menu-highlights {
  padding: 50px 20px;
  text-align: center;
}

.menu-highlights h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.menu-items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.menu-item {
  width: 30%;
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.menu-item img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s;
}

.menu-item:hover img {
  transform: scale(1.05);
}

.menu-item h3 {
  font-size: 24px;
  margin-top: 10px;
}

.menu-item p {
  font-size: 16px;
}

/* Locations Section */
.locations {
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.locations h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.location {
  margin-bottom: 20px;
}

.location h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.location p {
  font-size: 18px;
}

/* Footer */
.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content p {
  margin: 10px 0;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .hero {
    min-height: 50vh; /* Further reduce height for smaller screens */
  }

  .hero h1 {
    font-size: 2.5rem; /* Adjusted font size */
  }

  .location-icon {
    font-size: 1.5rem; /* Adjusted font size */
  }

  .hero h2 {
    font-size: 2rem; /* Adjusted font size */
  }

  .hero p {
    font-size: 1.25rem; /* Adjusted font size */
  }

  .order-link {
    font-size: 1rem; /* Adjusted font size */
  }
}
</style>
