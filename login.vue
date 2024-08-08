<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    submitForm() {
      this.login({ email: this.email, password: this.password })
        .then(() => {
          this.$router.push('/');
        });
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
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
