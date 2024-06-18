<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" alt="" />

      <div class="cont">
        <h1 class="text-white" style="flex-wrap: wrap">
          <span>Huge Saving</span> on UHD Television
        </h1>
        <p class="hint text-white mb-5">
          Sale up to 70% off on selected items*
        </p>
        <v-btn
          class="px-10 py-3 mt-3 mb-3 d-flex align-center"
          rounded
          variant="outlined"
          color="white"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.banner {
  .parent {
    height: 390px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cont {
      color: white;
      position: absolute;
      padding: 40px 0 0 100px;
      left: 40px;
      top: 20px;
      width: 600px;
      text-align: start;

      h1 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 10px;
        span {
          color: rgb(45, 251, 223);
        }
      }
    }
  }
}

// Media Queries
@media (max-width: 992px) {
  .banner {
    .parent {
      .cont {
        h1 {
          font-size: 30px;
        }
        width: 500px;
        left: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        h1 {
          font-size: 30px;
        }
        width: 500px;
        left: 0;
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .cont {
        padding-left: 20px;
        padding-top: 20px;
        width: 80%;
        left: 0;
        h1 {
          font-size: 24px;
        }
        .hint {
          font-size: 12px;
        }
        button {
          height: 30px !important;
          font-size: 11px !important;
        }
      }
    }
  }
}
</style>
