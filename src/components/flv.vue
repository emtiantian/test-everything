<template>
  <video
    :id="id"
    controls
    autoplay
    muted
    :width="width"
    :height="height"
    v-show="show"
  ></video>
</template>

<script>
import flvjs from "flv.js";
export default {
  props: {
    url: { type: String, require: true },
    width: { type: Number, default: 600 },
    height: { type: Number, default: 400 },
    show: { type: Boolean, default: true },
    hasAudio: { type: Boolean, default: false },
  },
  data() {
    return {
      id: "",
      flvPlayer: null,
    };
  },
  created() {
    this.id = this.uuid();
  },
  mounted() {
    this.create();
  },
  watch: {
    url: function (val) {
      if (val) {
        this.create();
      }
    },
  },
  methods: {
    uuid() {
      return Math.random().toString(36).substr(2);
    },
    create() {
      if (flvjs.isSupported()) {
        let videoElement = document.getElementById(this.id);
        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: this.url,
          hasAudio: this.hasAudio,
        });
        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load();
        this.flvPlayer.play();
      }
    },
    play() {
      this.flvPlayer.play();
    },
    pause() {
      this.flvPlayer.pause();
    },
    reset() {
      this.pause();
      this.unload();
    },
    unload() {
      this.flvPlayer.unload();
    },
    destroy() {
      this.flvPlayer.destroy();
    },
  },
  destroyed() {
    if (this.flvPlayer) {
      this.pause();
      this.unload();
      this.destroy();
      this.flvPlayer = null;
    }
  },
};
</script>

<style></style>
