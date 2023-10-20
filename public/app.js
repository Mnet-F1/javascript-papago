/*
  source ~ : 번역할 텍스트, 번역할 언어의 타입
  target ~ : 번역된 결과 텍스트, 번역할 언어의 타입
*/

const [sourceSelect, targetSelect] =
  document.getElementsByClassName("form-select");
console.log(sourceSelect, targetSelect);

const [sourceTextArea, targetTextArea] =
  document.getElementsByClassName("textarea");
console.log(sourceTextArea, targetTextArea);

let targetLanguage = "en";

sourceTextArea.addEventListener("input", (event) => {
  const target = event.target.value;
  console.log(target);
});

targetTextArea.addEventListener("input", (event) => {
  const target = event.target.value;
  console.log(target);
});

targetSelect.addEventListener("change", (event) => {
  const text = event.target.value;
});

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    const responseData = xhr.responseText;
    const result = JSON.parse(responseData);
    console.log(result);
  }
};

const url = "https://openapi.naver.com/v1/papago/detectLangs";
xhr.open("POST", url);

xhr.send();
