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
          <div class="collaboration">
            <div class="collaboration-item">
              <img
                class="icons"
                src="../../static/clap.png"
              >
              <p><b>Clap</b></p>
              <p>20</p>
            </div>
            <div class="collaboration-item">
              <img 
                class="icons" 
                src="../../static/donation.png"
              >
              <p><b>Donate</b></p>
              <p>10</p>
            </div>
            <div class="collaboration-item">
              <img 
                class="icons" 
                src="../../static/share.png"
              >
              <p><b>Share</b></p>
              <p>3</p>
            </div>
          </div>
        </div>
        <div class="beat-detail">
          <h1>Collaboration</h1>
          <div class="collaboration">
            <div class="collaboration-item">
              <img 
                class="collaboration-image"
                src="../../static/beatmaker.jpeg"
              >
              <p><b>BeatMaker</b></p>
              <p>{{ getBeatMakerName }}</p>
              <h3>No Collaboration Yet</h3>
            </div>
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
      return this.userData ? this.userData.title : ''
    },
    getBeatMakerName() {
      return this.userData && this.userData.users[0]
        ? this.userData.users[0].name
        : ''
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
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
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
    .collaboration {
      display: flex;
      height: 80%;
      justify-content: center;
      align-items: center;
      .collaboration-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icons {
          width: 4vw;
          height: 4vw;
          margin-bottom: 2vh;
        }
      }
      .collaboration-item + .collaboration-item {
        margin-left: 5vw;
      }
      .collaboration-image {
        width: 7.5vw;
        margin-bottom: 1vh;
        border-radius: 100%;
      }
      p {
        text-align: center;
      }
      h3 {
        margin-top: 2.5vh;
      }
    }
  }
}
</style>
