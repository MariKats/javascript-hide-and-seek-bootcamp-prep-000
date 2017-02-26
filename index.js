function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = list.length; i < l; i++) {
    let children = list[i].children
  for (let j = 0, k = children.length; j < k; j++) {
    children[j].innerHTML =  parseInt(children[j].innerHTML, 10) + n
  }
 }
}
