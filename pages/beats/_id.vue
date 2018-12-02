<template>
  <div>
    <upload-modal v-if="isDisplayed"/>
    <section class="beat-detail-container">
      <div class="beat-detail-top">
        <img
          :src="currentImage"
          alt="Image"
          class="beat-detail-album"
        >
        <div class="beat-detail-top-right">
          <div class="beat-detail-tr-content">
            <div class="beat-detail-tr-songInfo">
              <h1>{{ getTitle }}</h1>
              <p>{{ getBeatMakerName }}</p>
              <hr
                noshadow
                color="black"
              >
            </div>
            <div class="beat-detail-tr-buttons">
              <el-button 
                type="primary"
                icon="el-icon-download"
              >Download</el-button>
              <el-button
                type="primary"
                icon="el-icon-upload"
                @click="openModal"
              >Upload to Collaborate</el-button>
            </div>
          </div>
          <div class="beat-detail-tr-sound">
            <audio
              :src="audioUrl"
              controls
            />
          </div>
        </div>
      </div>
      <div class="beat-detail-bottom">
        <div class="beat-detail">
          <h1>Status</h1>
        </div>
        <div class="beat-detail">
          <h1>Collaboration</h1>
          <div>
            No Collaboration Yet
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UploadModal from '../../components/UploadModal.vue'
import { fbStorage } from '../../services/fireinit.js'
import axios from 'axios'
export default {
  components: {
    UploadModal
  },
  data() {
    return {
      isPlayed: false,
      audioUrl: null,
      userData: null,
      loading: false
    }
  },
  computed: {
    currentParam() {
      return this.$route.params.id
    },
    currentId() {
      return this.$store.state.selectedTrack.id
    },
    currentImage() {
      return this.$store.state.selectedTrack.albumImage
    },
    isDisplayed() {
      return this.$store.state.displayModal
    },
    getTitle() {
      return (this.userData) ? this.userData.title : ''
    },
    getBeatMakerName() {
      return (this.userData && this.userData.users[0]) ? this.userData.users[0].name : ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      console.log(this.currentId)
      this.loadUserData()
      this.loadSong()
      this.$nuxt.$loading.finish()
    })
  },
  methods: {
    async loadSong() {
      let ref = fbStorage.ref().child('beat.mp3')
      let url = await ref.getDownloadURL()
      this.audioUrl = url
    },
    async playSong() {
      this.isPlayed = !this.isPlayed
    },
    loadUserData() {
      axios.get(`http://10.100.0.22/api/music/${this.currentId}`).then(res => {
        this.userData = res.data
        console.log(this.userData)
      })
    },
    openModal() {
      this.$store.commit('setDisplayModal', true)
    }
  }
}
</script>

<style lang="scss" scoped>
%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.beat-detail-container {
  padding: 10vh 0 4vh 0;
  margin: 0 2vw;
  .beat-detail-top {
    display: flex;
    .beat-detail-album {
      background: black;
      flex: 1 1 20%;
      height: 20vw;
    }
    .beat-detail-top-right {
      flex: 1 1 80%;
      .beat-detail-tr-content {
        display: flex;
        height: 50%;
        .beat-detail-tr-songInfo {
          @extend %flex-center;
          padding-left: 7%;
          flex-direction: column;
          align-items: flex-start;
          flex: 1 1 60%;
          hr {
            height: 2%;
            margin: 3% 0;
            width: 3vw;
          }
        }
        .beat-detail-tr-buttons {
          @extend %flex-center;
          flex: 1 1 20%;
          flex-direction: column;
          margin-right: 7%;
          button {
            width: 100%;
          }
          button + button {
            margin-left: 0;
            margin-top: 5%;
          }
        }
      }
      .beat-detail-tr-sound {
        padding: 0 5%;
        height: 50%;
        /* background: gray; */
      }
    }
  }
  .beat-detail-bottom {
    margin-top: 2vh;
    height: 45vh;
    display: flex;
    justify-content: space-between;
    .beat-detail {
      padding: 1.5%;
      width: 49%;
      border-radius: 2px;
      border: 1px solid gray;
      button {
        width: 10%;
      }
    }
  }
}
</style>
