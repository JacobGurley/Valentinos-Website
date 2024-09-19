<template>
    <div class="menu-category">
      <div class="icon-wrapper">
        <i :class="icon"></i>
      </div>
      <p class="category-title">{{ title }}</p>
      <div class="price-list">
        <div
          class="price-item"
          v-for="(item, index) in prices"
          :key="index"
        >
          <div class="size">{{ item.size }}</div>
          <div class="price">{{ item.price }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuCategory',
    props: {
      title: String,
      prices: Array,
      icon: String,
    },
  };
  </script>
  
  <style scoped>
  .menu-category {
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .icon-wrapper {
    font-size: 50px;
    color: #f57c00;
    margin-bottom: 20px;
  }
  
  .category-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #d32f2f;
  }
  
  .price-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .price-item {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
  
  .size {
    font-weight: 500;
  }
  
  .price {
    font-weight: 700;
    color: #f57c00;
  }
  
  .price-item:hover {
    background-color: #fff8e1;
    border-radius: 8px;
    padding: 10px;
    cursor: default;
  }
  </style>
  