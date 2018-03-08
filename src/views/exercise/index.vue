<!--  -->
<template>
  <div id="exercise">
      <Dropdown @ChoosedChange="choosedType" :dorpDownOpt="TopicType" titleName="题目类型"/>
      <Dropdown @ChoosedChange="choosedDifficulty" :dorpDownOpt="TopicDifficulty" titleName="难度"/>
      <Dropdown @ChoosedChange="choosedLabel" :dorpDownOpt="TopicLabel" titleName="标签" 
      :RightPos=RightPos  @childEvent="getLabels"/>
  <ul class="choosed-list">
    <li class="fl choosed-li" v-for="(item, index) in choosedAll" :key="index">{{item}} 
      <i class="iconfont" @click="delItem(index)">&#xe69a;</i>
    </li>
  </ul>
  </div>
</template>

<script>
import Dropdown from "@/components/dropdown/idnex";
export default {
  name: "doExercise",
  data() {
    return {
      choosedTypeArr: [],
      choosedDifficultyArr: [],
      choosedLabelArr: [],
      choosedAll: [],
      TopicType: ["单选题", "多选题", "填空题"],
      TopicDifficulty: ["简单", "普通", "进阶", "深度"],
      TopicLabel: [],
      RightPos: true
    };
  },
  components: {
    Dropdown
  },
  watch: {
    choosedTypeArr: {
      handler(curVal, oldVal) {
        this.concatArr();
      },
      deep: true
    },
    choosedDifficultyArr: {
      handler(curVal, oldVal) {
        this.concatArr();
      },
      deep: true
    },
    choosedLabelArr: {
      handler(curVal, oldVal) {
        this.concatArr();
      },
      deep: true
    }
  },
  methods: {
    choosedType(choosedData) {
      this.choosedTypeArr = choosedData;
    },
    choosedDifficulty(choosedData) {
      this.choosedDifficultyArr = choosedData;
    },
    choosedLabel(choosedData) {
      this.choosedLabelArr = choosedData;
    },
    concatArr() {
      this.choosedAll = [
        ...this.choosedTypeArr,
        ...this.choosedDifficultyArr,
        ...this.choosedLabelArr
      ];
    },
    delItem(index) {
      this.choosedAll.splice(index, 1);
    },
    getLabels() {
      if (this.TopicLabel.length > 0) {
        return;
      }
      this.$axios.get("/api/exercise/tab/list").then(
        response => {
          this.TopicLabel = response.data.data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>
<style scoped>
#exercise {
  padding-top: 10px;
}
.choosed-list {
  margin: 14px;
}
.choosed-li {
  background-color: #5cb85c;
  padding: 2px;
  margin: 0 4px;
  color: #fff;
}
</style>