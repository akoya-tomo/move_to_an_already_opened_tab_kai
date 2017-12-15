
function safeGetValue(value, default_value) {
  return value === undefined ? default_value : value;
}

function saveOptions(e) {

}

function setCurrentChoice(result) {
  // elem = document.querySelector("#")
  // elem.value = safeGetValue(result.)

  document.getElementById("submit_button").addEventListener("click", saveOptions);
}

function onError(error) {
  //  console.log(`Error: ${error}`);
}

document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get().then(setCurrentChoice, onError);
});