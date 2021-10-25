Array.prototype.MyForEach = function(fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

let arr = [1, 2, 3, 4, 5]
arr.MyForEach(item => {
  console.log(item)
})