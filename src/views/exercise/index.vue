<!--  -->
<template>
  <div id="exercise">
      <Dropdown @ChoosedChange="choosedType"
      :choosedItem="choosedTypeArr"
      :dorpDownOpt="TopicType" titleName="题目类型"/>
      <Dropdown @ChoosedChange="choosedDifficulty" 
      :choosedItem="choosedDifficultyArr"
      :dorpDownOpt="TopicDifficulty" titleName="难度"/>
      <Dropdown @ChoosedChange="choosedLabel" 
      :choosedItem="choosedLabelArr"
      :dorpDownOpt="TopicLabel" titleName="标签" 
      :RightPos=RightPos />
  <div class="clearfix">
    <ul class="choosed-list">
    <li class="fl choosed-li" v-for="(item, index) in choosedTypeArr" 
    :key="index" >{{item}} 
      <i class="iconfont" @click="delItem(choosedTypeArr,index)">&#xe69a;</i>
    </li>
  </ul>
   <ul class="choosed-list">
    <li class="fl choosed-li" v-for="(item, index) in choosedDifficultyArr" :key="index">{{item}} 
      <i class="iconfont" @click="delItem(choosedDifficultyArr,index)">&#xe69a;</i>
    </li>
  </ul>
   <ul class="choosed-list">
    <li class="fl choosed-li" v-for="(item, index) in choosedLabelArr" :key="index">{{item}} 
      <i class="iconfont" @click="delItem(choosedLabelArr,index)">&#xe69a;</i>
    </li>
  </ul>
  </div>
  <div class="tb">
    <div class="tb-header clearfix">
      <span class="tb-id tb-item" style="color:#2c3e50">id</span>
      <span class="tb-type tb-item">类型</span>
      <span class="tb-tifficulty tb-item" style="color:#2c3e50">难度</span>
      <span class="tb-label tb-item">标签</span>
    </div>
    <ul v-show="totalPage" class="tb-body">
      <li v-for="(item, index) in contentList" :key="index">
        <router-link class="clearfix" to='/'>
          <span class="tb-id tb-item">{{item.number}}</span>
          <span class="tb-type tb-item" :class="item.type">{{item.type | TYPE}}</span>
          <span class="tb-tifficulty ordinary tb-item" :class="item.difficulty | DIFFICULTYCLASS">{{item.difficulty | DIFFICULTY}}</span>
          <span class="tb-label tb-item">
            <span v-for="(lableItem,labelIndex) in item.tab">{{lableItem}},</span>
          </span>
         </router-link>
      </li>
    
    
    </ul>
    <div class="no-data" v-show="!totalPage">暂无数据呐</div>
      
  </div>
  <Pagination :pageNum='totalPage'
  @getPageChanged="PageNumChanged"/>
  </div>
</template>

<script>
import { selectTabList, selectList } from "@/api/exercise";
import Pagination from "@/components/pagination/index";
import Dropdown from "@/components/dropdown/index";
export default {
  name: "doExercise",
  data() {
    return {
      totalPage: 0,
      choosedTypeNameArr: {
        单选题: "single",
        多选题: "multiple",
        填空题: "gapFilling"
      },
      choosedDifficultyNameArr: {
        简单: "easy",
        普通: "normal",
        进阶: "hard",
        深度: "crazy"
      },
      TopicType: ["单选题", "多选题", "填空题"],
      TopicDifficulty: ["简单", "普通", "进阶", "深度"],
      TopicLabel: [],
      RightPos: true,
      choosedTypeArr: [],
      choosedDifficultyArr: [],
      choosedLabelArr: [],
      paramData: {
        count: 1,
        pageSize: 10,
        option: { error: false, collect: false },
        type: ["single", "multiple", "gapFilling"],
        difficulty: ["easy", "normal", "hard", "crazy"],
        knowledgePoint: {}
      },
      contentList: []
    };
  },
  components: {
    Dropdown,
    Pagination
  },
  watch: {
    choosedTypeArr: {
      handler(curVal, oldVal) {
        this.paramData.type = [];
        curVal.forEach(item => {
          this.paramData.type.push(this.choosedTypeNameArr[item]);
        });
        this.getQuestionList();
      },
      deep: true
    },
    choosedDifficultyArr: {
      handler(curVal, oldVal) {
        this.paramData.difficulty = [];
        curVal.forEach(item => {
          this.paramData.difficulty.push(this.choosedDifficultyNameArr[item]);
        });
        this.getQuestionList();
      },
      deep: true
    },
    choosedLabelArr: {
      handler(curVal, oldVal) {
        this.paramData.knowledgePoint = {};
        curVal.forEach(item => {
          this.paramData.knowledgePoint[item] = true;
        });
        this.getQuestionList();
      },
      deep: true
    }
  },
  created() {
    this.getdata();
  },
  methods: {
    PageNumChanged(page) {
      this.paramData.count = page + 1;
      this.getQuestionList();
    },
    choosedType(choosedData) {
      this.choosedTypeArr = choosedData;
    },
    choosedDifficulty(choosedData) {
      this.choosedDifficultyArr = choosedData;
    },
    choosedLabel(choosedData) {
      this.choosedLabelArr = choosedData;
    },
    delItem(choosedArr, index) {
      choosedArr.splice(index, 1);
    },
    async getdata() {
      let lables = await selectTabList();
      this.TopicLabel = lables.data.data;
      this.TopicLabel.forEach(element => {
        this.paramData.knowledgePoint[element] = true;
      });
      this.getQuestionList();
    },
    getQuestionList() {
      selectList(this.paramData).then(
        response => {
          this.contentList = response.data.data.rows;
          this.totalPage =
            this.contentList.length > 0 ? response.data.data.total : 0;
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
  margin: 0 4px 8px;
  color: #fff;
}
.tb {
  padding: 0 8px;
  line-height: 24px;
}
.single {
  color: rgb(238, 59, 74);
}
.multiple {
  color: rgb(45, 183, 245);
}
.gapFilling {
  color: rgb(25, 190, 107);
}
.ordinary {
  background-color: rgb(45, 209, 207);
}
.simple {
  background-color: rgb(52, 202, 134);
}
.deeply {
  background-color: rgb(52, 134, 202);
}
.advanced {
  background-color: rgb(49, 160, 205);
}
.tb-header {
  font-weight: bold;
}
.tb-item {
  float: left;
  width: 54px;
  text-align: center;
  overflow: hidden;
}
.tb .tb-item {
  font-size: 12px;
}
.tb-id {
  color: #08c;
}
.tb-body {
  min-height: 330px;
}
.tb-body li {
  margin-bottom: 10px;
}
.tb-type {
}
.tb-tifficulty {
  color: #fff;
}
.tb-label {
  width: auto;
  min-width: 50px;
  max-width: 187px;
  white-space: nowrap;
  margin-left: 10px;
}
.no-data{
  text-align: center;
  padding: 20px 0;
}
</style>