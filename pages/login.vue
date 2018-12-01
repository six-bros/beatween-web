<template>
  <section class="signup-container">
    <div class="signup-content">
      <img 
        src="logo-img.png" 
        alt="Image"
      >
      <input 
        v-model="email"
        placeholder="Email"
        type="text"
      >
      <input 
        v-model="password"
        placeholder="Password"
        type="password"
      >
      <el-button
        type="success" 
        round
        @click="login"
      >Login</el-button>
      <el-button
        type="primary" 
        round
      >Sign Up</el-button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      randomData: {
        name: 'Test',
        email: 'test',
        password: 'test',
        profileImage: 'testing',
        privateId: 'test'
      }
    }
  },
  methods: {
    login() {
      const { email, password } = this
      const userData = {
        email,
        password
      }
      axios.post('http://10.100.0.22/api/users', this.randomData).then(res => {
        console.log(res)
      })
      // this.$store.dispatch('GET_USER_INFO', userData)
    }
  }
}
</script>

<style lang="scss" scoped>
.signup-container {
  padding: 10vh 2vw 4vh 2vw;
  background: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .signup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70%;
    width: 40%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    img {
      width: 50%;
    }
    input {
      width: 50%;
      height: 7.5%;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0.24);
      &::placeholder {
        margin-left: 50px;
      }
    }
    button {
      margin: 2.5% 0;
    }
    input + input {
      margin-top: 2.5%;
      margin-bottom: 2.5%;
    }
    button + button {
      margin-left: 0;
      margin-top: 0;
    }
  }
}
</style>
