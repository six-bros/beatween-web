<template>
  <transition name="modal">
    <div class="upload-modal-container"> 
      <div class="upload-modal">
        <div class="upload-top">
          <h2>Upload to Collborate</h2>
          <el-upload
            :file-list="fileList"
            :auto-upload="false"
            :on-exceed="handleExceed"
            :limit="1"
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
          >
            <i class="el-icon-upload"/>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          </el-upload>
        </div>
        <div class="upload-bottom">
          <el-button
            type="success"
            round
            @click="navigatePage"
          >Submit</el-button>
          <el-button
            type="danger"
            round
            @click="closeModal"
          >Cancel</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handleExceed(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    closeModal() {
      this.$store.commit('setDisplayModal', false)
    },
    navigatePage() {
      this.$router.push('/mixtapes')
    }
  }
}
</script>

<style lang="scss">
.upload-modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.25s;
  .upload-modal {
    h2 {
      padding: 7.5% 0;
      text-align: center;
    }
    .upload-demo {
      margin-bottom: 10%;
    }
    padding: 1%;
    border-radius: 2px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: white;
    height: 52.5%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .upload-top {
      height: 90%;
    }
    .upload-bottom {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
