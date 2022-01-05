<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    @select-all="selectAll"
    @select="select"
    :tree-props="{children: 'children'}"
    ref="tableTree"
  >
    <el-table-column
      type="selection"
      width="55"
    >
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import {isEmpty,isEqual} from "lodash"
import treeTool from '@/utils/treeTool'
  export default {
    data() {
      return {
        myTree:null,
        selected:new Set(),
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
    },
    created(){
      this.myTree = new treeTool(this.tableData)
    },
    methods: {
      change(){
        this.myTree.eachTree(node=>{
          if(this.selected.has(node.id)){
            node.isDisabled = true
            this.$refs.tableTree.toggleRowSelection(node, true);
          }else{
            node.isDisabled = false
            this.$refs.tableTree.toggleRowSelection(node, false);
          }
        })
        this.tableData = this.myTree.getTree()
      },
     // 添加所有节点id到set中
      addNodes (arr) {
        arr.forEach(element => {
          this.selected.add(element)
        })
      },
      // 添加所有节点id到set中
      deleteNodes (arr) {
        arr.forEach(element => {
          this.selected.delete(element)
        })
      },
      // select 方法
      select (nodes,row) {
        const childNodes = this.myTree.getTreeIds(this.myTree.getTreeNode(row.id))
        // 判断是添加还是删除
        if(row.isDisabled){
          // 删除自己
          this.selected.delete(row.id)
          // 删除所有子集
          this.deleteNodes(childNodes)
        }else{
          // 添加自己
          this.selected.add(row.id)
          // 添加所有子集
          this.addNodes(childNodes)
        }
        // 判断父级是否需要被选中
        this.selectParent(row.id)
        this.change()
      },
      selectAll () {
        if (isEqual(this.selected, new Set(this.myTree.getTreeIds(this.myTree.getTree())))) {
          this.selected = new Set()
        } else {
          this.selected = new Set(this.myTree.getTreeIds(this.myTree.getTree()))
        }
        console.log(this.selected,"selectAll")
        this.change()
      },
      // 判断父级是否需要选中
      selectParent (id) {
        const that = this
        // 获取所有路径
        const parentNodes = that.myTree.findPath(node => node.id === id)
        if (parentNodes) {
          parentNodes.forEach((ele) => {
            // 子集ids
            const ids = that.myTree.getTreeIds(that.myTree.getTreeNode(ele.id))
            if (!isEmpty(ids)) {
              const allInSelect = ids.every(id => {
                return that.selected.has(id)
              })
              if (allInSelect) {
                that.selected.add(ele.id)
              }else{
                that.selected.delete(ele.id)
              }
            }
          })
        }
      }
    },
  }
</script>
