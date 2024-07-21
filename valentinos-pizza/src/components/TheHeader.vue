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
            <li><a href="#menu" class="nav-link">Menu</a></li>
            <li><a href="#catering" class="nav-link">Catering</a></li>
            <li><a href="#coupons" class="nav-link">Coupons</a></li>
            <li><a href="#contact" class="nav-link">Contact Us</a></li>
            <li><a href="#hours" class="nav-link">Hours</a></li>
            <li><a href="#order" class="order-link">Order Now</a></li>
            <li><a href="#login" class="login-link"><i class="fa-regular fa-user"></i></a></li> <!-- Login icon -->
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white; /* Set background to white */
    padding: 0;
    transition: background-color 0.3s ease-in-out;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
    position: fixed;
    top: 0;
    z-index: 1000; /* Ensure the header stays on top */
    height: 140px; /* Fixed height */
  }

  .green-bar {
    width: 100%;
    height: 4px;
    background-color: #00A550;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 15px 30px;
  }
  
  .logo-container {
    width: 150px;
  }
  
  .logo {
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  }

  .logo-link {
    display: inline-block;
    text-decoration: none;
  }

  .main-nav{
    flex: 1;
    text-align: right;
  }
  
  .main-nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    gap: 25px;
    font-family: 'Cooper Black', serif;
    font-size: 20px;
  }
  
  .nav-link, .order-link, .login-link {
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 20px;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  .nav-link {
    color: #333;
  }

  .nav-link:hover {
    color: #E21717; /* Changes text color to red on hover */
  }

  .order-link {
    color: white;
    background-color: #E21717;
    border-radius: 25px;
    border: 2px solid transparent; /* Ensures the border size does not change the button size on hover */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .order-link:hover {
    color: #E21717; /* Text color changes to red */
    background-color: white; /* Background color changes to white */
    border-color: #E21717; /* Border color changes to red */
  }

  .login-link {
    color: #333;
  }

  .login-link:hover {
    color: #E21717;
    text-decoration: none;
  }

  .login-link i {
    font-size: 24px; /* Adjust the icon size as needed */
  }
</style>
  