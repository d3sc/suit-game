// deklarasi variable
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image"),
  scoreCpuUi = document.querySelector(".scoreCpu"),
  scorePlayerUi = document.querySelector(".scorePlayer");

// membuat variable score permainan, yang dimulai dari 0
let scorePlayer = 0;
let scoreCpu = 0;

// menampilkan score kedalam halaman score
scorePlayerUi.textContent = scorePlayer;
scoreCpuUi.textContent = scoreCpu;

// mengulang image yang ada didalam class option image dengan foreach
optionImages.forEach((image, index) => {
  // membuat event listeners pada setiap image yang di foreach
  image.addEventListener("click", (e) => {
    // setiap opsi image diberikan class active.
    image.classList.add("active");

    // membuat proses loading
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "process ...";

    // menghapus index class active pada opsi gambar yang tidak dipilih oleh user
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    // memberikan class start pada container
    gameContainer.classList.add("start");

    // memberikan waktu untuk menampilkan hasil
    setTimeout(() => {
      // menghapus class start pada container
      gameContainer.classList.remove("start");

      // memasang gambar yang kita pilih ke bagian gambar user result
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      // membuat penentuan random giliran bot
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      // memasang gambar random yang sudah ditentukan bot
      cpuResult.src = cpuImages[randomNumber];

      // R = Rock, P = Papper, S = Scissors, lalu dilanjutkan dengan langsung manggil array dan dimasukkan kedalam variable cpuValue
      let cpuValue = ["R", "P", "S"][randomNumber];

      // R = Rock, P = Papper, S = Scissors, lalu dilanjutkan dengan langsung manggil array dan dimasukkan kedalam variable userValue
      let userValue = ["R", "P", "S"][index];

      // membuat peraturan permainan, dengan object
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

      // mengecek status permainan
      let outComeValue = outcomes[userValue + cpuValue];

      // mengatur score permainan
      if (outComeValue == "User") {
        scorePlayerUi.textContent = scorePlayer += 1;
        result.textContent = "kamu menang";
      } else if (outComeValue == "Cpu") {
        scoreCpuUi.textContent = scoreCpu += 1;
        result.textContent = "kamu kalah";
      } else {
        result.textContent = "seri";
      }
    }, 2500);
  });
});

// membuat function reload page
const restart = () => {
  location.reload();
};
