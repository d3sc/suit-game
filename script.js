const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image"),
  scoreCpuUi = document.querySelector(".scoreCpu"),
  scorePlayerUi = document.querySelector(".scorePlayer");

// let scoreCpu = localStorage.getItem("scoreCpu");
// let scorePlayer = localStorage.getItem("scorePlayer");
// scorePlayerUi.textContent = scorePlayer;
// scoreCpuUi.textContent = scoreCpu;
// console.log(scoreCpu);
// console.log(scorePlayer);

let scorePlayer = 0;
let scoreCpu = 0;
scorePlayerUi.textContent = scorePlayer;
scoreCpuUi.textContent = scoreCpu;

optionImages.forEach((image, index) => {
  scorePlayerUi.textContent = scorePlayer;
  scoreCpuUi.textContent = scoreCpu;
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];

      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      let outComeValue = outcomes[userValue + cpuValue];

      if (outComeValue == "User") {
        // localStorage.setItem("scoreCpu", parseInt(scoreCpu) + 1);
        scorePlayerUi.textContent = scorePlayer += 1;
        console.log(scorePlayer);
      } else if (outComeValue == "Cpu") {
        // localStorage.setItem("scorePlayer", parseInt(scorePlayer) + 1);
        scoreCpuUi.textContent = scoreCpu += 1;
        console.log(scoreCpu);
      }

      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});

const restart = () => {
  location.reload();
};
