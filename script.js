let isOperator = false;
let isResult = false;

const result = document.querySelector('.result');

function numberOnClick(num) {
  isOperator && (isOperator = false);
  if (isResult) {
    isResult = false;
    result.innerHTML = num;
    return;
  }
  result.innerHTML += num;
}

function operatorOnClick(opt) {
  if (isOperator) return;
  isOperator = true;
  result.innerHTML += opt;
}

function clearOnClick() {
  result.innerHTML = '';
  isOperator = false;
  isResult = false;
}

function backSpaceOnClick() {
  result.innerHTML = result.innerHTML.slice(0, -1);
}

function resultOnClick() {
  result.innerHTML = eval(result.innerHTML);
  isResult = true;
}
