let top =110
let down =95
let times = 100
let money = 10000

function stock(top,down,times,money){
  while(times-->0){
  let Magnification= Math.random()>=0.5?top:down
  // console.log("Magnification"+Magnification)
  money= money*Magnification/100
  }
  return money
}
console.log(stock(top,down,times,money))
