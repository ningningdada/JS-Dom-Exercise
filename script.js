console.log(document.getElementsByTagName("li").length);
console.log(document.querySelectorAll("#onbed li").length);
console.log(document.querySelectorAll("#offbed li").length);

function count1Function() {
  const value = document.getElementsByTagName("li").length;
  document.getElementById("result1").innerHTML = `There are ${value} tasks for morning routine. (There are ${value} list tags on this page.) `;
}

function count2Function() {
  const value = document.querySelectorAll("#onbed li").length;
  document.getElementById("result2").innerHTML = `There are ${value} tasks on the bed. (There are ${value} elements inside the first ID.) `;
}

function count3Function() {
  const value = document.querySelectorAll("#offbed li").length;
  document.getElementById("result3").innerHTML = `There are ${value} tasks off the bed. (There are ${value} elements inside the second ID. `;
}

document.getElementById('count1').addEventListener('click', e => {
  count1Function();
})

document.getElementById('count2').addEventListener('click', e => {
  count2Function();
})

document.getElementById('count3').addEventListener('click', e => {
  count3Function();
})