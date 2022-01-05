
export default class TreeTool {
  constructor (tree) {
    this.tree = tree
  }

  // 获取指定节点的所有子树
  getTreeNode (id) {
    const list = Array.isArray(this.tree) ? [...this.tree] : [this.tree]
    for (const ele of list) {
      if (ele.id === id) {
        return ele.children
      }
      ele.children && list.push(...ele.children)
    }
    return null
  }

  // 获取指定树所有id
  getTreeIds (treeArr) {
    const ids = []
    const list = Array.isArray(treeArr) ? [...treeArr] : [treeArr]
    for (const ele of list) {
      if (ele) {
        ids.push(ele.id)
        ele.children && list.push(...ele.children)
      }
    }
    return ids
  }

  // 遍历树
  eachTree (func) {
    const list = Array.isArray(this.tree) ? [...this.tree] : [this.tree]
    for (let i = 0; i < list.length; i++) {
      func(list[i])
      list[i].children && list.splice(i + 1, 0, ...list[i].children)
    }
  }

  // 获得树
  getTree () {
    return this.tree
  }

  // 查询所有路径
  findPath (func) {
    const list = Array.isArray(this.tree) ? [...this.tree] : [this.tree]
    const path = []; const visitedSet = new Set()
    while (list.length) {
      const node = list[0]
      if (visitedSet.has(node)) {
        path.pop()
        list.shift()
      } else {
        visitedSet.add(node)
        node.children && list.unshift(...node.children)
        path.push(node)
        if (func(node)) return path
      }
    }
    return null
  }
}
