function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for(let i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children

    for(let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var node = document.getElementById("grand-node")
  var nextNode = node.children[0]

  while(nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}