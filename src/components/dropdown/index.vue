<!--  -->
<template>
  <div id="dropdown" class="dropdown">
    <span @click="showThisList($event)">{{titleName}}
        <i class="iconfont" v-show="!isShowThisList">&#xe6a6;</i>
        <i class="iconfont" v-show="isShowThisList">&#xe6a5;</i>
    </span>
    <div :style="{width:DropdownWidth+'px'}" :class="RightPos?'rightposition':'leftposition'" 
    class="dropdown-box" v-show="isShowThisList">
        <mt-checklist
        title=""
        v-model="value"
        :options="dorpDownOpt">
        </mt-checklist>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checklist } from "mint-ui";
Vue.component(Checklist.name, Checklist);

export default {
  name: "Dropdown",
  props: {
    DropdownWidth: {
      type: Number,
      default: 180
    },
    titleName: {
      type: String,
      default: ""
    },
    dorpDownOpt: {
      type: Array,
      default: []
    },
    RightPos: {
      type: Boolean,
      default: false
    },
    choosedItem: {
      type: Array,
      default: []
    }
  },
  // watch: {
  //   choosedItem: {
  //     handler(cruVal,oldVal){
  //       this.value = cruVal
  //     },
  //     deep:true
  //   }
  // },
  // computed: {
  //   value: {
  //     get: function() {
  //       return this.choosedItem;
  //     },
  //     set: function(newVal) {
  //       this.choosedItem = newVal;
  //     }
  //   }
  // },
  
  data() {
    return {
      value: [],
      isShowThisList: false
    };
  },
  watch: {
    value(cruVal, oldVal) {
      this.$emit("ChoosedChange", this.value);
    }
  },
  methods: {
    showThisList(e) {
      this.isShowThisList = !this.isShowThisList;

      return false;
    },
    handleBodyClick(e) {
      const notOutside = this.$el.contains(event.target);
      if (!notOutside) {
        // hide this dropdown
        this.isShowThisList = false;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      document
        .querySelector("body")
        .addEventListener("click", this.handleBodyClick);
    });
  },
  beforeDestroy() {
    document
      .querySelector("body")
      .removeEventListener("click", this.handleBodyClick);
  }
};
</script>
<style scoped>
#dropdown {
  position: relative;
  display: inline-block;
  margin: 0 20px;
}
.iconfont {
  position: relative;
  top: 2px;
  font-weight: bold;
}
.dropdown-box {
  overflow: hidden;
  position: absolute;
  top: 20px;
  max-height: 400px;
  overflow-y: auto;
}
.rightposition {
  right: 0;
}
.leftposition {
  left: 0;
}
</style>