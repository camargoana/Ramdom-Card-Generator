function randomCard(){
  var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suit = ["heart", "diamond", "spade", "club"];

  var randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  var randomSuitNumber = Math.floor(Math.random() * suit.length);
    
  document.querySelector('.card-value p').innerHTML = cardNumber[randomCardNumber];
  document.querySelector('.card').className = `card ${suit[randomSuitNumber]}`;
}

function counter(){
  var tag = document.querySelector('.counter');
  var num = parseInt(tag.innerHTML);
  num = num-1;
  if(num===0){
    tag.innerHTML = 10;
    randomCard();
  }else{
    tag.innerHTML = `0${num}`;
  }
}

function onClickRandom(){
  randomCard();
  let tag = document.querySelector('.counter');
  tag.innerHTML = "10";
}

function onClickResize(){
  let width = document.querySelector('#cardWidth').value;
  let height = document.querySelector('#cardHeight').value;
  let cardTag = document.querySelector('.card');
  cardTag.style.width = width;
  cardTag.style.height = height;
}

window.onload = function(){
    randomCard();
    const myTimeout = setInterval(counter, 1000);
    document.querySelector('#randomButton').onclick = onClickRandom;
    document.querySelector('#resizeButton').onclick = onClickResize;
}