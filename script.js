/* the function .check will return the boolean value of the input */
document.getElementById("give-Advice").addEventListener("click", () => {
  const likesCats = document.getElementById("likes-Cats").checked;
  const isAllergic = document.getElementById("is-Allergic").checked;
  const ownsOne = document.getElementById("owns-One").checked;
  let name = document.getElementById("name").value;

  /** the boolean will be stored in a variable to start the conditionals **/
  if (likesCats === true && isAllergic === true && ownsOne === true) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! try buying something against your allergies!";
  } else if (likesCats === true && isAllergic === true && ownsOne === false) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! consider buying a different pet!";
  } else if (likesCats === true && isAllergic === false && ownsOne === true) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! take care of your pet!";
  } else if (likesCats === false && isAllergic === true && ownsOne === true) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! do not think about a cat then!";
  } else if (likesCats === false && isAllergic === false && ownsOne === true) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! great! give your pet in adoption";
  } else if (likesCats === false && isAllergic === false && ownsOne === false) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! please fill in the form";
  } else if (likesCats === false && isAllergic === true && ownsOne === false) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! buying a dog will be risky, consider another pet";
  } else if (likesCats === true && isAllergic === false && ownsOne === false) {
    document.getElementById("form").innerHTML =
      "Hi " + name + "! go to the closest pet store and buy a cat!";
  }

  /*** this function will refresh the website in 3 seconds after the advice is displayed  ***/
  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
  }
  window.onload = timedRefresh(3000);
});
