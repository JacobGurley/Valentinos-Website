<template>
  <div class="item-list">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <i class="fas fa-pepper-hot"></i> {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: Array,
  },
};
</script>

<style scoped>
.item-list {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.item-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item-list li {
  padding: 10px 0;
  font-size: 18px;
  color: #555;
  display: flex;
  align-items: center;
}

.item-list li i {
  color: #f57c00;
  margin-right: 10px;
}

.item-list li:hover {
  color: #d32f2f;
  cursor: pointer;
  transition: color 0.3s ease;
}
</style>
