<template>
  <section 
    :class="{ forHome: isHomePage }"
    class="Header-Container"
  >
    <div class="Header-Section-Left">
      <div class="Header-Logo">
        <p>Beatween</p>
      </div>
      <div class="Header-Section-Left-Tabs">
        <nuxt-link 
          to="/"
          class="Header-Tab"
        >Home</nuxt-link>
        <nuxt-link 
          to="/beats"
          class="Header-Tab"
        >Beats</nuxt-link>
        <nuxt-link 
          to="/mixtapes"
          class="Header-Tab"
        >Mixtapes</nuxt-link>
      </div>
    </div>
    <div 
      v-if="!isLogged"
      class="Header-Section-Right"
    >
      <nuxt-link 
        to="/login"
        class="Header-Tab"
      >Login</nuxt-link>
      <nuxt-link 
        to="/"
        class="Header-Tab"
      >Sign Up</nuxt-link>
    </div>
    <div 
      v-if="isLogged" 
      class="Header-Section-Right"
    >
      <nuxt-link 
        to="/"
        class="Header-Tab"
      >Account</nuxt-link>
      <nuxt-link 
        to="/"
        class="Header-Tab"
      >Notification</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLogged: false
    }
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'index' ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.Header-Container {
  background: white;
  display: flex;
  position: fixed;
  height: 8vh;
  width: 100vw;
  padding: 0 7.5vw;
  z-index: 1;
  .Header-Logo {
    margin: 0 3vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.5rem;
      color: black;
      font-weight: bold;
    }
  }
  .Header-Section-Right {
    display: flex;
    flex: 1 1 50%;
    justify-content: flex-end;
    align-items: center;
    .Header-Tab-Profile {
      height: 3vh;
      color: black;
    }
  }
  .Header-Section-Left {
    display: flex;
    flex: 1 1 50%;
    .Header-Section-Left-Tabs {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 1vw;
    }
  }
  .Header-Tab {
    text-decoration: none;
    color: #bebebe;
    margin-left: 3vw;
    transition: 0.25s;
    &:hover {
      color: black;
    }
  }
}
.forHome {
  background: none;
  .Header-Section-Left {
    .Header-Logo {
      p {
        color: white;
      }
    }
  }
}
.nuxt-link-exact-active.nuxt-link-active {
  color: black;
}
.nuxt-link-active {
  color: black;
}
</style>
