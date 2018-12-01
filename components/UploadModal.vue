<template>
  <div class="upload-modal-container"> 
    <div class="upload-modal">
      <h2>Upload</h2>
      <el-upload
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
      >
        <i class="el-icon-upload"/>
        <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {}
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
  .upload-modal {
    h2 {
      padding: 5% 0;
    }
    padding: 1%;
    border-radius: 2px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: white;
    height: 45%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
