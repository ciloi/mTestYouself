<!--  -->
<template>
  <div id="pagination">
    <div  v-show="pageNum">
          <span class="pre page" v-show="preBtn" @click="changePages(--currentPage)"><</span>
         <span class="page"
          v-for="(item,index) in 1"
          :class="{'current-page active-page':currentPage==index}"
          @click="changePages(index)">{{index+1}}</span>

         <strong v-show="currentPage - 2 >= 1">...</strong>
          <!-- 末尾补齐 -->
          <!-- <span class="page"
          v-show="currentPage+1+1 > pageNum && pageNum>1"
          @click="changePages(currentPage-1)">{{currentPage+1-2}}</span> -->

          <span class="page"
          v-show="currentPage > 1"
          @click="changePages(currentPage-1)">{{currentPage+1-1}}</span>

          <span class="page current-page active-page"
          v-show="currentPage != 0 && currentPage+1 != pageNum"          
          @click="changePages(currentPage)">{{currentPage+1}}</span>

          <span class="page"
           v-show="currentPage+1+1 < pageNum" 
          @click="changePages(currentPage+1)">{{currentPage+1+1}}</span>

          <!-- 首部补齐 -->
          <!-- <span class="page"
          v-show="currentPage < 1  && pageNum>1"
          @click="changePages(currentPage-1)">{{currentPage+1+2}}</span> -->

         <strong v-show="currentPage + 2 < pageNum-1">...</strong>
         
           <span class="page" v-show="pageNum != 1"
          v-for="(item,index) in 1"
          :class="{'current-page active-page':currentPage==pageNum-1+index}"
          @click="changePages(pageNum-1+index)">{{pageNum-1+index+1}}</span>
      
      <span class="next page" v-show="nextBtn" @click="changePages(++currentPage)">></span>
    </div>
      
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageNum: {
      type: Number,
      default: 0
    }
  },
  watch:{
    'pageNum':function(curVal, oldVal){
      //监听页数改变之后及时出现nextBtn
      if(this.pageNum>1 && this.currentPage+1 != this.pageNum){
        this.nextBtn = true
      }
      //监听页数改变之后，但是当前页大于总页数，状态不更改的情况
      if(this.pageNum<this.currentPage+1){
        this.currentPage=0;
        this.preBtn =false
      }
      //只有一页数据的时候特殊处理
      if(this.pageNum == 1){
        this.preBtn = false
        this.nextBtn =false
      }

    }
  },
  data() {
    return {
      currentPage: 0,
      nextBtn: this.pageNum > 1 ? true : false,
      preBtn: false
    };
  },
  methods: {
    changePages(pages) {
      this.currentPage = pages;
      this.$emit("getPageChanged", pages);

      if (this.currentPage == this.pageNum - 1) {
        //last page
        this.nextBtn = false;
        //preBtn
        if (this.currentPage + 1 > 1) {
          this.preBtn = true;
        }
      } else if (this.currentPage == 0) {
        //first page
        this.preBtn = false;
        //nextBtn
        if (this.pageNum > 1) {
          this.nextBtn = true;
        }
      } else {
        this.preBtn = true;
        this.nextBtn = true;
      }
    }
  }
};
</script>
<style scoped>
#pagination {
  text-align: center;
  background-color: #f5f5f5;
  padding: 10px 0;
}
.page {
  border-radius: 100%;
  background-color: #fff;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  margin: 0 2px;
  font-size: 12px;
}
.active-page {
  background-color: #26a2ff;
  color: #fff;
}
</style>