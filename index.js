function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll(".ranked-list li")
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (parseInt(rank[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}
