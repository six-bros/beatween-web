<template>
  <section class="beat-detail-container">
    <div class="beat-detail-top">
      <div class="beat-detail-album">IMG</div>
      <div class="beat-detail-top-right">
        <div class="beat-detail-tr-content">
          <div class="beat-detail-tr-playBtn">
            <el-button 
              type="primary" 
            >Play</el-button>
          </div>
          <div class="beat-detail-tr-songInfo">
            <h1>Title</h1>
            <p>Author</p>
          </div>
          <div class="beat-detail-tr-buttons">
            <el-button 
              type="primary"
              icon="el-icon-download"
            >Download</el-button>
            <el-button
              type="primary"
              icon="el-icon-upload"
            >Upload to Collaborate</el-button>
          </div>
        </div>
        <div class="beat-detail-tr-sound">
          SoundWave
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
</template>

<script>
import UploadModal from '../../components/UploadModal.vue'
export default {
  components: {
    UploadModal
  },
  computed: {
    currentParam() {
      return this.$route.params.id
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
  padding: 10vh 2vw 4vh 2vw;
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
        .beat-detail-tr-playBtn {
          @extend %flex-center;
          flex: 1 1 20%;
        }
        .beat-detail-tr-songInfo {
          @extend %flex-center;
          flex-direction: column;
          align-items: flex-start;
          flex: 1 1 60%;
        }
        .beat-detail-tr-buttons {
          @extend %flex-center;
          flex: 1 1 20%;
          flex-direction: column;
          button {
            width: 100%;
          }
          button + button {
            margin-left: 0;
            margin-top: 10%;
          }
        }
      }
      .beat-detail-tr-sound {
        padding: 0 7%;
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
    }
  }
}
</style>
