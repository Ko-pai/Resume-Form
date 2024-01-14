const profilePic = document.getElementById("profile-img");
const profileName = document.getElementById("profileName");

const phoneText = document.querySelector(".phoneText");
const emailText = document.querySelector(".emailText");
const addressText = document.querySelector(".addressText");

const linkedin = document.querySelector(".linkedin-link");
const git = document.querySelector(".git-link");
const twitter = document.querySelector(".twitter-link");

let localTakeData = localStorage.getItem("fileData");
let localTakeDataProfile = JSON.parse(localStorage.getItem("new"));

profilePic.src = localTakeData;
profileName.innerText = localTakeDataProfile.name;
phoneText.innerText = localTakeDataProfile.contactNumber;
addressText.innerText = localTakeDataProfile.address;
emailText.innerText = localTakeDataProfile.gmail;

linkedin.href = localTakeDataProfile.linkedin;
git.href = localTakeDataProfile.git;
twitter.href = localTakeDataProfile.twitter;

const abc = document.getElementById("butt");
abc.addEventListener("click", () => {
  abc.style.display = "none";
  window.print();
});
/*
function saveAsPDF(e) {
  e.preventDefault();
  let printPage = document.getElementById("bod");
  var opt = {
    margin: 1,
    filename: "one-point-five.pdf",
    image: { type: "jpeg", quality: 0.97 },
    html2canvas: { scale: 1.5 },
    jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
  };

  html2pdf().set(opt).from(printPage).save();
}
*/
