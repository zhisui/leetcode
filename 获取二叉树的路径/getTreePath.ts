/**
 * @file 获取二叉树所有路径
 */
type Tree = {
    value: number
    left?: Tree
    right?: Tree
  }
  const tree: Tree = {
    value: 1,
    left: {
      value: 2,
      right: { value: 5 },
    },
    right: { value: 3 },
  }
  const res: string[] = []
  let path = ''
  let rootVal
  let isFirst = true
  function treePath(root: Tree): string[] {
    if(isFirst){
      rootVal = root.value
      isFirst = false
    }
    if (root.value) {
      path += root.value
    }
    if ((!root.right) && (!root.left)) {
      res.push(path)
      path = rootVal
    }
     if (root.left) {
      path += '->'
      treePath(root.left)
    }
    if (root.right) {
      path += '->'
      treePath(root.right)
    }
    return res
  }
  console.log(treePath(tree)) // [ '1->2->5', '1->3' ]
