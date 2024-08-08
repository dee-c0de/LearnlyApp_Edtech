<template>
  <div>
    <h2>Product List</h2>
    <input v-model="searchTerm" placeholder="Search for products..." @input="filterProducts">
    <div class="product-list">
      <div class="product" v-for="product in filteredProducts" :key="product._id">
        <img :src="product.imageURL" alt="Product Image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>\${{ product.price }}</p>
        <button v-if="isAuthenticated" @click="editProduct(product)">Edit</button>
        <button v-if="isAuthenticated" @click="deleteProduct(product._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    ...mapState(['products', 'isAuthenticated']),
    filteredProducts() {
      return this.products.filter(product => 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'deleteProduct']),
    filterProducts() {
      this.fetchProducts();
    },
    editProduct(product) {
      this.$router.push({ name: 'EditProduct', params: { id: product._id } });
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 20px;
  width: 200px;
  text-align: center;
}

.product img {
  width: 100%;
  height: auto;
}
</style>
