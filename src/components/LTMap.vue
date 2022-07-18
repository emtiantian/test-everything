<template>
  <div id="viewDiv"></div>
</template>

<script>
export default {
  mounted() {
    this.addScript(
      "http://221.0.82.174:65198/mapnew/LTMap/js?v=1.1&key=8f3af0c09ad78210bf50e46518ae9352"
    ).then(() => {
      this.init();
    });
  },
  methods: {
    addScript(url) {
      return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = url;
        script.onload = function () {
          resolve("loaded");
        };
        document.head.appendChild(script);
      });
    },
    init() {
      window.require(["LTMap"], function () {
        var ltmap = new LTMap();
        var baseLayer = ltmap.createTileLayer({
          id: "vec", //服务ID
          url: "http://221.0.82.174:65198/mapnew/arcgis/rest/services/KFQ_DZDTDTPM/ltmap/rzLclz9dZWMn7ahhsGRcbzhRCzsOweqo/MapServer", //服务地址
        });

        ltmap.createMap("viewDiv", {
          type: "2D", //地图类型
          wkid: 4528, //坐标系代号，默认值为4528，可以不指定
          baseLayers: [baseLayer], //底图
          /*  zoom: 15,//初始级别 
				center:[40597995.33, 4172073.02] */
          extent: {
            //可以用zoom和center初始化地图，不过大多数时候更推荐用四至范围（extent)
            xmax: 40614843.14928137,
            xmin: 40576580.38865747,
            ymax: 4183793.2991265524,
            ymin: 4149173.8196338685,
          },
        });
      });
    },
  },
};
</script>

<style  scoped>
#viewDiv {
  width: 100%;
  height: 100%;
}
</style>