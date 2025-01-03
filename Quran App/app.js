let surah_all = [
  "سورة الفاتحة",
  "سورة البقرة",
  "سورة آل عمران",
  "سورة النساء",
  "سورة المائدة",
  "سورة الأنعام",
  "سورة الأعراف",
  "سورة الأنفال",
  "سورة التوبة",
  "سورة يونس",
  "سورة هود",
  "سورة يوسف",
  "سورة الرعد",
  "سورة إبراهيم",
  "سورة الحجر",
  "سورة النحل",
  "سورة الإسراء",
  "سورة الكهف",
  "سورة مريم",
  "سورة طه",
  "سورة الأنبياء",
  "سورة الحج",
  "سورة المؤمنون",
  "سورة النور",
  "سورة الفرقان",
  "سورة الشعراء",
  "سورة النمل",
  "سورة القصص",
  "سورة العنكبوت",
  "سورة الروم",
  "سورة لقمان",
  "سورة السجدة",
  "سورة الأحزاب",
  "سورة سبأ",
  "سورة فاطر",
  "سورة يس",
  "سورة الصافات",
  "سورة ص",
  "سورة الزمر",
  "سورة غافر",
  "سورة فصلت",
  "سورة الشورى",
  "سورة الزخرف",
  "سورة الدخان",
  "سورة الجاثية",
  "سورة الأحقاف",
  "سورة محمد",
  "سورة الفتح",
  "سورة الحجرات",
  "سورة ق",
  "سورة الذاريات",
  "سورة الطور",
  "سورة النجم",
  "سورة القمر",
  "سورة الرحمن",
  "سورة الواقعة",
  "سورة الحديد",
  "سورة المجادلة",
  "سورة الحشر",
  "سورة الممتحنة",
  "سورة الصف",
  "سورة الجمعة",
  "سورة المنافقون",
  "سورة التغابن",
  "سورة الطلاق",
  "سورة التحريم",
  "سورة الملك",
  "سورة القلم",
  "سورة الحاقة",
  "سورة المعارج",
  "سورة نوح",
  "سورة الجن",
  "سورة المزمل",
  "سورة المدثر",
  "سورة القيامة",
  "سورة الإنسان",
  "سورة المرسلات",
  "سورة النبأ",
  "سورة النازعات",
  "سورة عبس",
  "سورة التكوير",
  "سورة الإنفطار",
  "سورة المطففين",
  "سورة الانشقاق",
  "سورة البروج",
  "سورة الطارق",
  "سورة الأعلى",
  "سورة الغاشية",
  "سورة الفجر",
  "سورة البلد",
  "سورة الشمس",
  "سورة الليل",
  "سورة الضحى",
  "سورة الشرح",
  "سورة التين",
  "سورة العلق",
  "سورة القدر",
  "سورة البينة",
  "سورة الزلزلة",
  "سورة العاديات",
  "سورة القارعة",
  "سورة التكاثر",
  "سورة العصر",
  "سورة الهمزة",
  "سورة الفيل",
  "سورة قريش",
  "سورة الماعون",
  "سورة الكوثر",
  "سورة الكافرون",
  "سورة النصر",
  "سورة المسد",
  "سورة الإخلاص",
  "سورة الفلق",
  "سورة الناس",
];

let ul = document.querySelector(".surado");
// let audio = document.createElement('audio');
let currentAudioIndex;
let audioFiles = [];
let audio; // Define audio variable outside of the function

async function listOfSuwar(num) {
  const suwar = await fetchData(
    `https://api.alquran.cloud/v1/surah/${num}/ar.alafasy`
  );
  console.log(suwar);

  let surahBoard = "";
  let previousJuz = null;
  let previousHizb = null;

  let audioFiles = [];

  suwar.data.ayahs.forEach((ayah) => {
    if (ayah.juz !== previousJuz) {
      surahBoard += `<h4 class='juz'>جز: ${ayah.juz}</h4>`;
      previousJuz = ayah.juz;
    }
    if (ayah.hizbQuarter !== previousHizb) {
      surahBoard += `<h4 class='hisib'>حزب: ${ayah.hizbQuarter}</h4>`;
      previousHizb = ayah.hizbQuarter;
    }

    surahBoard += `   
            <span class="ayahs">${ayah.text} </span> <span class="numberSurah">${ayah.numberInSurah}</span>`;
    audioFiles.push(ayah.audio);
  });

  let surahs = document.querySelector(".main");
  surahs.innerHTML = `
        <div class="top">
            <h3>${suwar.data.name}</h3>
            <h5>number of Ayahs:${suwar.data.numberOfAyahs}</h5>
            <h5>revelation Type: ${suwar.data.revelationType}</h5>
            <audio controls class="surah-audio" src="${audioFiles[0]}"></audio>
            <button id="prev">
            <i class="fa-solid fa-backward-step"></i>
        </button>
        <button id="play">
            <i class="fa-solid fa-play"></i>
        </button>
        <button id="pause" class="hide">
            <i class="fa-solid fa-pause"></i>
        </button>
        <button id="next">
            <i class="fa-solid fa-forward-step"></i>
        </button>
        </div>
        <div class="ayado">
            ${surahBoard}
        </div>`;

  let audioElement = surahs.querySelector(".surah-audio");
  let playButton = surahs.querySelector("#play");
  let pauseButton = surahs.querySelector("#pause");
  let prevButton = surahs.querySelector("#prev");
  let nextButton = surahs.querySelector("#next");

  playButton.addEventListener("click", () => {
    audioElement.play();
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
  });

  pauseButton.addEventListener("click", () => {
    audioElement.pause();
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
  });

  prevButton.addEventListener("click", () => {
    let currentAudioIndex = audioFiles.indexOf(audioElement.src);
    if (currentAudioIndex > 0) {
      currentAudioIndex--;
      audioElement.src = audioFiles[currentAudioIndex];
      audioElement.play();
    }
  });

  nextButton.addEventListener("click", () => {
    let currentAudioIndex = audioFiles.indexOf(audioElement.src);
    if (currentAudioIndex < audioFiles.length - 1) {
      currentAudioIndex++;
      audioElement.src = audioFiles[currentAudioIndex];
      audioElement.play();
    }
  });

  // autoplay next audio
  audioElement.addEventListener("ended", () => {
    let currentAudioIndex = audioFiles.indexOf(audioElement.src);
    if (currentAudioIndex < audioFiles.length - 1) {
      ++currentAudioIndex;
      let ayahsChanged = document.querySelectorAll("span");
      ayahsChanged[currentAudioIndex].style.background = "red";
      audioElement.src = audioFiles[currentAudioIndex];
      audioElement.play();
    } else {
      audioElement.pause();
    }
  });
}

// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
}

let output = "";
surah_all.forEach((surah, index) => {
  output += `<li data=${++index}> ${surah} </li>`;
});
ul.innerHTML = output;

ul.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    // console.log(e.target.getAttribute('data'));
    listOfSuwar(e.target.getAttribute("data"));
  }
});
