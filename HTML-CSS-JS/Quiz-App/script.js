let ques = document.querySelector(".question");
let answer = document.querySelector(".answer");
let par = document.getElementsByTagName("p");
let button = document.querySelector(".btn");
let quiz = document.querySelector(".quiz");

//variable declartion
let index = 0;
let score = 0;
let count = 0;
//request data from json
let req = new XMLHttpRequest();

req.onreadystatechange = function () {
  if (req.readyState === 4 && req.status === 200) {
    let res = JSON.parse(req.responseText);
    let rightAnswer = res[index]["right-answer"];
    let length = res.length;

    //getData
    GetData(res, length);
    //paraghraph click
    changeColor(res, index);

    //button click
    button.addEventListener("click", () => {
      button.style.visibility = "hidden";
      ques.innerHTML = "";
      answer.innerHTML = "";
      index++;
      GetData(res, length);
      changeColor(res, index);
      console.log(score);

      if (count === length + 1) {
        addResult(length);
      }
    });
  }
};

req.open("GET", "question.json", true);
req.send();

//request data from json

//getData
function GetData(obj, length) {
  if (count < length) {
    let h3 = document.createElement("h3");
    let qData = obj[index]["title"];
    h3.innerHTML = qData;
    ques.appendChild(h3);

    //paragraph
    for (let i = 1; i <= 4; i++) {
      let p = document.createElement("p");
      let pData = obj[index][`answer_${i}`];
      p.innerHTML = pData;
      answer.appendChild(p);
    }

    //button
    button.style.visibility = "hidden";
  }

  count++;
}
//changeColor
function changeColor(res, index) {
  for (let i = 1; i <= par.length; i++) {
    let j = i - 1;
    par[j].addEventListener("click", () => {
      button.style.visibility = "visible";
      let rightAnswer = res[index]["right-answer"]; // Retrieve right answer for this question
      if (res[index][`answer_${i}`] == rightAnswer) {
        par[j].style.background = "green"; // Change color on correct answer
        score++;
      } else {
        par[j].style.background = "red"; // Change color on wrong answer

        for (let k = 1; k <= par.length; k++) {
          let correctIndex = k - 1;
          if (res[index][`answer_${k}`] == rightAnswer) {
            par[correctIndex].style.background = "green";
            break;
          }
        }
      }
    });
  }
}

//add results
function addResult(length) {
  let divRes = document.createElement("div");
  divRes.className = "result";

  let par = document.createElement("p");
  let msg = `Your score is ${score} from ${length}`;
  let txt = document.createTextNode(msg);
  par.appendChild(txt);

  divRes.appendChild(par);
  ques.appendChild(divRes);
}
