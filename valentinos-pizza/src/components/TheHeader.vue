<template>
  <header class="header">
    <div class="green-bar"></div> <!-- Green bar across the top -->
    <div class="header-content">
      <div class="logo-container">
        <a href="/" class="logo-link">
          <img src="../assets/pizzalogo.jpg" alt="Valentino's Pizza Logo" class="logo">
        </a>
      </div>
      <nav class="main-nav">
        <ul>
          <li><router-link to="/menu" class="nav-link">Menu</router-link></li>
          <li><router-link to="#catering" class="nav-link">Catering</router-link></li>
          <li><router-link to="#coupons" class="nav-link">Coupons</router-link></li>
          <li><router-link to="#hours" class="nav-link">Hours</router-link></li>
          <li><router-link to="#order" class="order-link">Order Now</router-link></li>
          <li><router-link to="#login" class="login-link"><i class="fa-regular fa-user"></i></router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  
<script>
  export default {
    name: 'TheHeader'
  }
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cooper+Black&display=swap'); /* Import Cooper Black font */

.header {
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center items horizontally */
    background-color: white; /* Set background to white */
    padding: 0; /* Remove default padding */
    transition: background-color 0.3s ease-in-out; /* Smooth background color transition */
    width: 100%; /* Full width */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
    position: fixed; /* Fix header to top */
    top: 0; /* Align to top of the page */
    z-index: 1000; /* Ensure the header stays on top */
    height: 140px; /* Fixed height */
}

.green-bar {
    width: 100%; /* Full width */
    height: 4px; /* Height of the green bar */
    background-color: #00A550; /* Green color */
}

.header-content {
    display: flex; /* Use flexbox for layout */
    justify-content: space-between; /* Space out children */
    align-items: center; /* Center items vertically */
    width: 100%; /* Full width */
    max-width: 1200px; /* Maximum width */
    margin: auto; /* Center horizontally */
    padding: 15px 30px; /* Padding around content */
}

.logo-container {
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center items vertically */
    margin-left: -25px; /* Move logo to the left */
}

.logo {
    width: 150px; /* Fixed width */
    height: auto; /* Maintain aspect ratio */
    display: inline-block; /* Inline block element */
    vertical-align: middle; /* Align vertically in the middle */
}

.logo-link {
    display: inline-block; /* Inline block element */
    text-decoration: none; /* Remove text decoration */
}

.main-nav{
    flex-grow: 1; /* Allow nav to grow to take available space */
    display: flex;
    justify-content: center;
}

.main-nav ul {
    list-style-type: none; /* Remove list style */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
    display: flex; /* Use flexbox for layout */
    justify-content: space-between;
    gap: 25px; /* Space between items */
    font-family: 'Cooper Black', serif; /* Set font */
    font-size: 20px; /* Font size */
}

.nav-link, .order-link, .login-link {
    font-weight: bold; /* Bold text */
    text-transform: uppercase; /* Uppercase text */
    text-decoration: none; /* Remove text decoration */
    padding: 10px 20px; /* Padding around links */
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out; /* Smooth color transitions */
}

.nav-link {
    color: #333; /* Dark text color */
}

.nav-link:hover {
    color: #E21717; /* Change text color to red on hover */
}

.order-link {
    color: white; /* White text color */
    background-color: #E21717; /* Red background color */
    border-radius: 25px; /* Rounded corners */
    border: 2px solid transparent; /* Transparent border */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
}

.order-link:hover {
    color: #E21717; /* Change text color to red */
    background-color: white; /* Change background to white */
    border-color: #E21717; /* Change border color to red */
}

.login-link {
    color: #333; /* Dark text color */
}

.login-link:hover {
    color: #E21717; /* Change text color to red */
    text-decoration: none; /* Remove text decoration */
}

.login-link i {
    font-size: 24px; /* Set icon size */
}
</style>
  