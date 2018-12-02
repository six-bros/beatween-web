<template>
  <div>
    <!-- <upload-modal/> -->
    <section class="mix-detail-container">
      <div class="mix-detail-top">
        <div class="mix-detail-album">IMG</div>
        <div class="mix-detail-top-right">
          <div class="mix-detail-tr-content">
            <div class="mix-detail-tr-songInfo">
              <h1>The Awesome Beat for Rapper</h1>
              <p>Startup Weekend Seoul</p>
              <hr
                noshadow
                color="black"
              >
            </div>
            <div class="mix-detail-tr-buttons">
              <el-button 
                type="primary"
                icon="el-icon-download"
              >Download</el-button>
            </div>
          </div>
          <div class="mix-detail-tr-sound">
            <audio
              :src="audioUrl"
              controls
            />
          </div>
        </div>
      </div>
      <div class="mix-detail-bottom">
        <div class="mix-detail">
          <h1>Status</h1>
        </div>
        <div class="mix-detail">
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
      userData: null,
      isPlayed: false,
      audioUrl: null
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
    }
  },
  mounted() {
    this.loadUserData()
    this.loadSong()
    console.log(this.currentId)
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
      })
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
.mix-detail-container {
  padding: 10vh 2vw 4vh 2vw;
  .mix-detail-top {
    display: flex;
    .mix-detail-album {
      background: black;
      flex: 1 1 20%;
      height: 20vw;
    }
    .mix-detail-top-right {
      flex: 1 1 80%;
      .mix-detail-tr-content {
        display: flex;
        height: 50%;
        .mix-detail-tr-playBtn {
          @extend %flex-center;
          flex: 1 1 20%;
        }
        .mix-detail-tr-songInfo {
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
        .mix-detail-tr-buttons {
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
      .mix-detail-tr-sound {
        padding: 0 5%;
        height: 50%;
        /* background: gray; */
      }
    }
  }
  .mix-detail-bottom {
    margin-top: 2vh;
    height: 45vh;
    display: flex;
    justify-content: space-between;
    .mix-detail {
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
