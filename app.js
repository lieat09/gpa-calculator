// let hero = document.querySelector(".hero");
// let slider = document.querySelector(".slider");
// let animation = document.querySelector("section.animation-wrapper");

// const time_line = new TimelineMax();

// //parameter1 要控制的對象
// //parameter2 是duration
// //parameter3 是控制對象的原始狀態
// //parameter4 是控制對象的動畫結束後的狀態
// //parameter5 提早開始跑 (-=1.2) 提早1.2秒
// time_line
//   .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
//   .fromTo(
//     hero,
//     1.2,
//     { width: "80%" },
//     { width: "100%", ease: Power2.easeInOut }
//   )
//   .fromTo(
//     slider,
//     1,
//     { x: "-100%" },
//     { x: "0%", ease: Power2.easeInOut },
//     "-=1.2"
//   )
//   .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

// setTimeout(() => {
//   animation.style.pointerEvents = "none";
// }, 2500);

//禁止整個網頁的Enter Key
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//防止Form內部的Button交出表單
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//選擇select內的option之後改變相對應顏色
let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target); //e.target就是<select>
  });
});

//改變credit之後，GPA也要更新
let credits = document.querySelectorAll(".class-credit");
credits.forEach((credits) => {
  credits.addEventListener("change", () => {
    setGPA();
  });
});

//新增form
let addButton = document.querySelector(".plus-button");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader");

  //製作五個小元素
  //ClassCategory
  let newClassCategory = document.createElement("input");
  newClassCategory.setAttribute("type", "text");
  newClassCategory.setAttribute("list", "opt");
  newClassCategory.classList.add("class-type");

  // ClassNumber
  let newClassNumber = document.createElement("input");
  newClassNumber.setAttribute("type", "text");
  newClassCategory.classList.add("class-number");

  // ClassCredit
  let newClassCredit = document.createElement("input");
  newClassCredit.setAttribute("type", "number");
  newClassCredit.setAttribute("min", "0");
  newClassCredit.setAttribute("max", "6");
  newClassCredit.classList.add("class-credit");
  newClassCredit.addEventListener("change", () => {
    setGPA();
  });

  //Select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  //新增垃圾桶
  newTrashButton = document.createElement("button");
  newTrashButton.classList.add("trash-button");
  newItag = document.createElement("i");
  newItag.classList.add("fas");
  newItag.classList.add("fa-trash");
  newTrashButton.appendChild(newItag);

  //設定垃圾桶的事件及動畫
  //這裡的動畫是使用animation
  newTrashButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  //新增到頁面
  newDiv.appendChild(newClassCategory);
  newDiv.appendChild(newClassNumber);
  newDiv.appendChild(newClassCredit);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newTrashButton);
  newForm.appendChild(newDiv);
  document.querySelector(".all-inputs").appendChild(newForm);

  //新增form的動畫
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});

//垃圾桶按鈕的事件及動畫
//這裡的動畫是使用transition、transform製作
let allTrashButton = document.querySelectorAll(".trash-button");
allTrashButton.forEach((trashButton) => {
  trashButton.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
});
allTrashButton.forEach((trashButton) => {
  let form = trashButton.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA();
  });
});

// 排序演算法
//merge sorted
let sortDescBtn = document.querySelector(".sort-descending");
let sortAsceBtn = document.querySelector(".sort-ascending");
sortDescBtn.addEventListener("click", () => {
  handleSorting("descending"); //大到小
});
sortAsceBtn.addEventListener("click", () => {
  handleSorting("ascending"); //小到大
});

//----------------------------------------------------------------
//function

//改變select內option的顏色
function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "white";
  }
}

// 計算GPA
function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll(".select");
  let sum = 0; // GPA 分子
  let creditSum = 0; // GPA 分母

  //計算分子
  for (let i = 0; i < credits.length; i++) {
    //先確認credits是否為NaN
    if (!isNaN(credits[i].valueAsNumber)) {
      creditSum += credits[i].valueAsNumber;
    }
  }

  //計算分母
  for (let i = 0; i < formLength; i++) {
    //先確認credits是否為NaN
    if (!isNaN(credits[i].valueAsNumber)) {
      sum += credits[i].valueAsNumber * convertor(selects[i].value);
    }
  }

  //計算GPA值
  let result;
  if (creditSum == 0) {
    result = (0.0).toFixed(2);
  } else {
    result = (sum / creditSum).toFixed(2);
  }

  document.getElementById("result-gpa").innerText = result;
}

// 轉換GPA為分數
function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function handleSorting(direction) {
  let graders = document.querySelectorAll("div.grader");
  let objectArray = [];
  for (let i = 0; i < graders.length; i++) {
    let className = graders[i].children[0].value;
    let classNumber = graders[i].children[1].value;
    let classCredit = graders[i].children[2].value;
    let classGrade = graders[i].children[3].value;
    if (
      !(
        className == "" &&
        classNumber == "" &&
        classCredit == "" &&
        classGrade == ""
      )
    ) {
      let classObject = {
        className,
        classNumber,
        classCredit,
        classGrade,
      };
      objectArray.push(classObject);
    }
  }

  //取得 objectArray 後，把成績string換成數字.
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].classGradeNumber = objectArray[i].classGrade;
  }
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].classGradeNumber = convertor(
      objectArray[i].classGradeNumber
    );
  }
  objectArray = mergeSort(objectArray);

  //決定是大到小還是小到大
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }

  //根據 objectArray 內容更新網頁
  let allInputs = document.querySelector("div.all-inputs");
  allInputs.innerHTML = "";
  for (let i = 0; i < objectArray.length; i++) {
    allInputs.innerHTML += `<form>
      <div class="grader">
        <input
          type="text"
          placeholder="class category"
          class="class-type"
          list="opt"
          value=${objectArray[i].className}
          /><!--
        --><input
          type="text"
          placeholder="class number"
          class="class-number"
          value=${objectArray[i].classNumber}
          /><!--
        --><input
          type="number"
          placeholder="credits"
          min="0"
          max="6"
          class="class-credit"
          value=${objectArray[i].classCredit}
        /><!--
        --><select name="select" class="select">
            <option value=""></option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option></select
        ><!--
        --><button class="trash-button">
            <i class="fas fa-trash"></i>
        </button>
      </div>
    </form>`;
  }

  //select 可直接用JS更改
  graders = document.querySelectorAll("div.grader");
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objectArray[i].classGrade;
  }

  //加回事件監聽器
  // select 事件
  allSelects = document.querySelectorAll("select");
  allSelects.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  // credit 事件
  let allCredits = document.querySelectorAll(".class-credit");
  allCredits.forEach((credit) => {
    credit.addEventListener("change", () => {
      setGPA();
    });
  });

  // trashButton 事件
  let allTrashButton = document.querySelectorAll(".trash-button");
  allTrashButton.forEach((trashButton) => {
    trashButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "scaleDown 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener(
        "animationend",
        (e) => {
          e.target.remove();
          setGPA();
        }
      );
    });
  });
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i].classGradeNumber > a2[j].classGradeNumber) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
