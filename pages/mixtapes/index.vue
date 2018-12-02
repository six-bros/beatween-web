<template>
  <section>
    <div class="main-list-container">
      <h1 class="main-list-header">Discover Mixtapes</h1>
      <el-row 
        :gutter="20"
        class="main-list"
      >
        <el-col 
          v-for="item in sampleBeatsArray"
          :key="item.index"
          :id="item.id"
          :span="4"
          class="main-list-item"
        >
          <div
            :style="{ 'background-image': 'url(' +item.albumImage+ ')' }"
            class="main-list-item-image"
            @click="selectBlock"
          />
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
import axios from 'axios'
export default {
  data() {
    return {
      sampleBeatsArray: []
    }
  },
  mounted() {
    this.loadIndexData()
  },
  methods: {
    selectBlock(e) {
      let selectedId = e.path[1].id
      const selectedTrack = this.sampleBeatsArray.filter(
        item => item.id == selectedId
      )
      this.$store.commit('setSelectedTrack', selectedTrack[0])
      this.$router.push(`mixtapes/${selectedId}`)
    },
    loadIndexData() {
      console.log('this')
      axios
        .get('http://10.100.0.22/api/music/mixtapes', this.randomData)
        .then(res => {
          this.sampleBeatsArray = res.data
        })
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
