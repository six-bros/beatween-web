<template>
  <section class="main-container">
    <div class="main-landing">
      <div class="main-landing-content">
        <div class="main-landing-content-writing">
          <h1>Collaborate with Beat Makers<br>and Rappers around the world</h1>
          <hr
            noshadow
            color="white"
          >
          <p>The easiest way to find beats and use it to release your own mixtape.<br>Our multi-signature blockchain provides a transparent and fair way to<br>share the revenue between collaborators.</p>
        </div>
      </div>
    </div>
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
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        },
        {
          title: 'sample',
          description: 'description',
          imageUrl: 'image-url',
          beatId: '12345'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  .main-landing {
    background: url('../static/background-cover.jpeg');
    background-color: rgba(17, 24, 31, 0.5);
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .main-landing-content {
      display: flex;
      padding-left: 7.5vw;
      .main-landing-content-writing {
        margin-left: 2.5vw;
        h1 {
          font-size: 2.5rem;
          color: #f15d59;
        }
        hr {
          height: 0.75vh;
          width: 4vw;
          margin: 5vh 0;
        }
        p {
          color: white;
        }
      }
    }
  }
}
</style>
