<template>
  <section>
    <div class="main-list-container">
      <h1 class="main-list-header">Discover Beats</h1>
      <el-row 
        :gutter="20"
        class="main-list"
      >
        <el-col 
          v-for="item in sampleBeatsArray"
          :key="item.index"
          :id="item.beatId"
          :span="4"
          class="main-list-item"
        >
          <div 
            class="main-list-item-image"
            @click="selectBlock"
          >Bg</div>
          <div class="main-list-item-content">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <nuxt-child/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sampleBeatsArray: [
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '123245'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '124345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '125345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '127345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12a345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12s345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12d345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12f345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12q345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '123w45'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12h345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '1234l5'
        }
      ]
    }
  },
  methods: {
    selectBlock(e) {
      this.$router.push(`beats/${e.path[1].id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-list-container {
  padding: 10vh 2vw 4vh 2vw;
  .main-list-header {
    margin-bottom: 4vh;
  }
  .main-list {
    .main-list-item {
      margin-bottom: 4vh;
      cursor: pointer;
      .main-list-item-image {
        background: black;
        height: 15vw;
      }
      .main-list-item-content {
        padding-top: 1vh;
      }
    }
    /* .main-list-item + .main-list-item {
      padding-left: 1vw;
    } */
  }
}
</style>
