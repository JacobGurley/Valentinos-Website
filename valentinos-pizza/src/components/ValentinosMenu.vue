<template>
  <div>
    <TheHeader />
    <section class="menu">
      <!-- Pizza Section -->
      <div class="menu-section pizza">
        <h2>Pizza</h2>
        <div class="menu-items">
          <MenuCategory
            title="Cheese & One Topping"
            :prices="pizzaPrices"
            icon="fas fa-pizza-slice"
          />
          <MenuCategory
            title="Additional Toppings"
            :prices="toppingPrices"
            icon="fas fa-pepper-hot"
          />
        </div>
      </div>
      <!-- Toppings Section -->
      <div class="menu-section toppings">
        <h2>Toppings</h2>
        <div class="menu-items">
          <ItemList :items="toppings" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import ItemList from './ItemList.vue';
import MenuCategory from './MenuCategory.vue';

export default {
  name: 'ValentinosMenu',
  components: {
    TheHeader,
    ItemList,
    MenuCategory,
  },
  data() {
    return {
      toppings: [
        'Pepperoni',
        'Italian Sausage',
        'Ham',
        'Bacon',
        'Canadian Bacon',
        'Chicken',
        'Salami',
        'Meatballs',
        'Mushrooms',
        'Jalapenos',
        'Black Olives',
        'Green Peppers',
        'Tomatoes',
        'Pineapple',
        'Onions',
        'Fresh Garlic',
        'Anchovies',
      ],
      pizzaPrices: [
        { size: 'Small', price: '$13.99' },
        { size: 'Medium', price: '$15.99' },
        { size: 'Large', price: '$16.99' },
        { size: 'X-Large', price: '$19.99' },
      ],
      toppingPrices: [
        { size: 'Small', price: '$1.45' },
        { size: 'Medium', price: '$1.75' },
        { size: 'Large', price: '$2.00' },
        { size: 'X-Large', price: '$2.25' },
      ],
    };
  },
};
</script>

<style scoped>
.menu {
  padding: 40px 20px;
  padding-top: 160px;
  font-family: 'Roboto', sans-serif;
  background-color: #fff8f0;
}

.menu-section {
  margin-bottom: 60px;
}

.menu-section h2 {
  font-family: 'Poppins', sans-serif;
  color: #d32f2f;
  margin-bottom: 30px;
  text-align: center;
  font-size: 36px;
  position: relative;
}

.menu-section h2::after {
  content: '';
  width: 60px;
  height: 4px;
  background-color: #f57c00;
  display: block;
  margin: 10px auto 0;
  border-radius: 2px;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

@media (max-width: 768px) {
  .menu {
    padding-top: 120px;
  }

  .menu-section h2 {
    font-size: 28px;
  }
}
</style>
