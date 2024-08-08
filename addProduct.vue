<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Product Name:</label>
        <input type="text" v-model="name" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="description" required></textarea>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="price" required>
      </div>
      <div>
        <label for="imageURL">Image URL:</label>
        <input type="text" v-model="imageURL" required>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      imageURL: ''
    };
  },
  methods: {
    ...mapActions(['addProduct']),
    submitForm() {
      const newProduct = {
        name: this.name,
        description: this.description,
        price: this.price,
        imageURL: this.imageURL
      };
      this.addProduct(newProduct);
      this.$router.push('/');
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form div {
  display: flex;
  flex-direction: column;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
