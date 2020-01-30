//
// Q1
let avg = items.reduce(function(x, y) {
  return x + y.price
}, 0)
avg = "The average price is $" + (avg / items.length).toFixed(2)
//console.log(avg)
document.querySelector("#answer1").innerHTML = avg

//
// Q2
let range = items.filter(function(item) {
  return item.price > 14.0 && item.price < 18.0
})
let final = range
  .map(function(item2) {
    return item2.title + "\n"
  })
  .join("")

//console.log(final)
document.querySelector("#answer2").innerHTML = final

//
// Q3
let gbp = items.filter(function(item1) {
  return item1.currency_code == "GBP"
})
let gbp2 = gbp.map(function(items3) {
  return items3.title + " costs &pound;" + items3.price
})

//console.log(gbp2)
document.querySelector("#answer3").innerHTML = gbp2

//
// Q4 - use .filter
let wood = items.filter(function(item4) {
  return item4.materials.includes("wood")
})
let woodTitle = wood
  .map(function(w) {
    return w.title + " is made of wood" + "\n"
  })
  .join("")

//console.log(woodTitle)
document.querySelector("#answer4").innerHTML = woodTitle

//
// Q5 - use .filter
let eight = items.filter(function(item5) {
  return item5.materials.length >= 8
})
let two = eight
  .map(function(item6) {
    return (
      item6.title +
      " has " +
      item6.materials.length +
      " materials \n \n" +
      item6.materials.join("\n") +
      "\n \n"
    )
  })
  .join("")

//console.log(two)
document.querySelector("#answer5").innerHTML = two

//
// Q6 - use .filter
let sellers = items.filter(function(item6) {
  return item6.who_made == "i_did"
})
var answer = sellers.length + " were made by their sellers"
document.querySelector("#answer6").innerHTML = answer
