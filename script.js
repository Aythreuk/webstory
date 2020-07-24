let chapterArray = document.getElementsByClassName("storyContent");
let chapterText = document.getElementById("story");
let chapterTitle = document.getElementById("chapterTitle");
let nextButton = document.getElementById("nextButton");
let backImage = document.getElementsByTagName("body")[0];
let chapterLines = [];
let bgMusic = new Audio();
const soundEffect = new Audio();
soundEffect.volume = 0.5;
bgMusic.loop = true;

document.getElementById('emFont').style.fontFamily = 'AlmendraItalics';

const EFFECTS = {
  CRASH: "Audio/Crash.wav",
  METAL: "Audio/Metal.wav",
  DOOR: "Door.wav",
  WHISPER: "Audio/Whisper.wav",
  GORE: "Audio/Gore.wav",
  FOOTSTEPS: "Audio/Footsteps.wav",
  GROWL: "Audio/Growl.wav",
  ROAR: "Audio/Roar.wav",
  COINS: "Audio/Coins.wav",
  FEMALE_LAUGH: "Audio/Female_laugh.wav",
  SHARPEN: "Audio/Sharpen.wav",
  MAGIC: "Audio/Magic.wav",
  NIGHT: "Audio/Night.WAV",
  BANG: 'Audio/Bang.wav',
  FAIR: 'Audio/Fair.wav',
  CHEER: 'Audio/Cheer.wav',
  DARKNESS: 'Audio/Darkness.wav',
  FEMALE_PAIN: 'Audio/Female_pain.wav',
  MELEE: 'Audio/Melee.wav',
  WATER: 'Audio/Water.wav',
  LIGHT_FOOTSTEPS: 'Audio/Light_footsteps.wav',
  DOOR2: 'Audio/Door2.wav',
  FEMALE_SHOUT: 'Audio/Female_shout.wav',
  RUMMAGE: 'Audio/Rummage.wav',
  KICK: 'Audio/Kick.wav',
  MALE_PAIN: 'Audio/Male_pain.wav',
  BOAR: 'Audio/Boar.wav',
  WHOOSH: 'Audio/Whoosh.wav',
  FALL: 'Audio/Fall.wav',
};

class Effect {
  constructor (chapter, line, effect) {
    this.chapter = chapter,
    this.line = line,
    this.effect = effect
  }
}
const effectList = [];
//CHAPTER 1
effectList.push(new Effect(1, 2, EFFECTS.METAL));
effectList.push(new Effect(1, 9, EFFECTS.WHISPER));
effectList.push(new Effect(1, 12, EFFECTS.GORE));
effectList.push(new Effect(1, 8, EFFECTS.FOOTSTEPS));
//CHAPTER 2
effectList.push(new Effect(2, 1, EFFECTS.GROWL));
effectList.push(new Effect(2, 2, EFFECTS.ROAR));
effectList.push(new Effect(2, 3, EFFECTS.DOOR));
effectList.push(new Effect(2, 5, EFFECTS.COINS));
effectList.push(new Effect(2, 9, EFFECTS.FEMALE_LAUGH));
//CHAPTER 3
effectList.push(new Effect(3, 1, EFFECTS.FOOTSTEPS));
effectList.push(new Effect(3, 3, EFFECTS.METAL));
//CHAPTER 4
effectList.push(new Effect(4, 6, EFFECTS.SHARPEN));
effectList.push(new Effect(4, 12, EFFECTS.ROAR));
effectList.push(new Effect(4, 13, EFFECTS.CRASH));
effectList.push(new Effect(4, 16, EFFECTS.MAGIC));
//CHAPTER 5
effectList.push(new Effect(5, 3, EFFECTS.NIGHT));
effectList.push(new Effect(5, 4, EFFECTS.COINS));
//CHAPTER 6
effectList.push(new Effect(6, 2, EFFECTS.DOOR));
effectList.push(new Effect(6, 4, EFFECTS.FEMALE_LAUGH));
effectList.push(new Effect(6, 6, EFFECTS.COINS));
//CHAPTER 7
effectList.push(new Effect(7, 1, EFFECTS.BANG));
effectList.push(new Effect(7, 4, EFFECTS.FAIR));
effectList.push(new Effect(7, 7, EFFECTS.CHEER));
//CHAPTER 8
effectList.push(new Effect(8, 3, EFFECTS.DARKNESS));
effectList.push(new Effect(8, 6, EFFECTS.COINS));
effectList.push(new Effect(8, 7, EFFECTS.FEMALE_PAIN));
effectList.push(new Effect(8, 10, EFFECTS.MELEE));
//CHAPTER 9
effectList.push(new Effect(9, 3, EFFECTS.WATER));
effectList.push(new Effect(9, 7, EFFECTS.WATER));
//CHAPTER 10
effectList.push(new Effect(10, 1, EFFECTS.LIGHT_FOOTSTEPS));
effectList.push(new Effect(10, 3, EFFECTS.FAIR));
effectList.push(new Effect(10, 5, EFFECTS.DOOR2));
effectList.push(new Effect(10, 8, EFFECTS.FEMALE_SHOUT));
effectList.push(new Effect(10, 9, EFFECTS.ROAR));
effectList.push(new Effect(10, 10, EFFECTS.MELEE));
//CHAPTER 11
effectList.push(new Effect(11, 3, EFFECTS.RUMMAGE));
effectList.push(new Effect(11, 5, EFFECTS.KICK));
//CHAPTER 12
effectList.push(new Effect(12, 3, EFFECTS.NIGHT));
effectList.push(new Effect(12, 5, EFFECTS.MALE_PAIN));
effectList.push(new Effect(12, 6, EFFECTS.BOAR));
//CHAPTER 13
effectList.push(new Effect(13, 8, EFFECTS.DARKNESS));
//CHAPTER 14
effectList.push(new Effect(14, 3, EFFECTS.WHOOSH));
effectList.push(new Effect(14, 4, EFFECTS.DARKNESS));
effectList.push(new Effect(14, 5, EFFECTS.ROAR));
effectList.push(new Effect(14, 6, EFFECTS.FEMALE_SHOUT));
//CHAPTER 15
effectList.push(new Effect(15, 3, EFFECTS.FEMALE_LAUGH));
effectList.push(new Effect(15, 6, EFFECTS.MALE_PAIN));
//CHAPTER 16
effectList.push(new Effect(16, 2, EFFECTS.FALL));
effectList.push(new Effect(16, 4, EFFECTS.FEMALE_LAUGH));
//CHAPTER 17
//NO EFFECTS 

const playEffect = (curChapter, curLine) => {
  const filtered = effectList.filter(({ chapter, line, effect }) => {
    console.log(chapter, line, curChapter, curLine);
    return (
      parseInt(chapter) === parseInt(curChapter) &&
      parseInt(line) === parseInt(curLine)
    );
  });
  console.log(filtered);
  if (filtered.length != 0) {
    const filteredEffect = filtered[0];

    soundEffect.src = filteredEffect.effect;
    soundEffect.play();
    console.log("sound played");
  }
};

const TRACKS = {
  BURDEN: "Audio/Music/Burden.mp3",
  MYSTERY: "Audio/Music/Mystery.mp3",
  STELLA: 'Audio/Music/Stella.mp3',
  ALL_DRIED_OUT: 'Audio/Music/All Dried Out.mp3',
  GRIN_ARCHAIC: 'Audio/Music/Grin Archaic.mp3',
  PANCAKES: 'Audio/Music/Pancakes.mp3',
  CASUAL_FRIDAY: 'Audio/Music/Casual Friday.mp3',
};

const chapterMusic = [TRACKS.BURDEN, TRACKS.BURDEN, TRACKS.ALL_DRIED_OUT, TRACKS.GRIN_ARCHAIC , TRACKS.PANCAKES , TRACKS.PANCAKES , TRACKS.PANCAKES, 
  TRACKS.BURDEN, TRACKS.ALL_DRIED_OUT , TRACKS.ALL_DRIED_OUT , TRACKS.ALL_DRIED_OUT, TRACKS.ALL_DRIED_OUT, TRACKS.ALL_DRIED_OUT, TRACKS.BURDEN, TRACKS.CASUAL_FRIDAY , TRACKS.CASUAL_FRIDAY, TRACKS.STELLA];
let currentTrack = "";
// bgMusic.volume = 0.5;

function chapterTrack(chapterNumber) {
  let thisChaptersTrack = chapterMusic[chapterNumber - 1];
  if (currentTrack != thisChaptersTrack) {
    bgMusic.src = thisChaptersTrack;
    currentTrack = thisChaptersTrack;
    bgMusic.play();
  }
}

function toggleNextButton() {
  nextButton.disabled = !nextButton.disabled;
}

// Disable next button on page load
toggleNextButton();

const currentPos = {
  chapter: 0,
  line: 0,
};

function chapterClick(buttonId) {
  nextButton.innerHTML = "Next";
  chapterText.innerHTML = "";
  const a = buttonId - 1;
  // Set new chapter and line position
  currentPos.chapter = buttonId;
  currentPos.line = 0;
  // Splitting lines into an array
  let b = chapterArray[a].textContent.trim();
  chapterLines = [];
  chapterLines = b.split("\n");
  displayContent();
  updateBackground(currentPos.chapter.toString());
}

function nextClick() {
  if (currentPos.line < chapterLines.length) {
    displayContent();
  } else if (currentPos.line == chapterLines.length) {
    currentPos.chapter++;
    chapterClick(currentPos.chapter);
    nextButton.innerHTML = "Next";
    updateBackground(currentPos.chapter);
  }
}

function displayContent() {
  chapterText.append(chapterLines[currentPos.line] + "\n");
  chapterTitle.firstChild.innerHTML = "Chapter " + currentPos.chapter;
  currentPos.line += 1;
  playEffect(currentPos.chapter, currentPos.line);
  if (currentPos.line == chapterLines.length) {
    if (currentPos.chapter != 17) {
      nextButton.innerHTML = "Next chapter";
    } else {
      nextButton.disabled = true;
      nextButton.innerHTML = "The End";
    }
  }
  nextButton.disabled = true;
  (currentPos.line < chapterLines.length || currentPos.chapter < 17) &&
    setTimeout(toggleNextButton, 500);
  console.log(
    "Current chapter: " +
      currentPos.chapter +
      " | Current line: " +
      currentPos.line +
      " | Chapter length: " +
      chapterLines.length
  );
}

function goNextChapter() {
  currentPos.chapter += 1;
  currentPos.line = 1;
}

function updateBackground(a) {
  chapterTrack(parseInt(a));
  switch (a) {
    case "1":
      backImage.style.backgroundImage =
        "url(backgrounds/chpt1_castledepths.jpg)";
      break;
    case "2":
      backImage.style.backgroundImage = "url(backgrounds/chpt2_valley.jpg)";
      break;
    case "3":
      backImage.style.backgroundImage =
        "url(backgrounds/chpt3_castle_nighttime.jpg)";
      break;
    case "4":
      backImage.style.backgroundImage = "url(backgrounds/chpt4_tower.jpg)";
      break;
    case "5":
      backImage.style.backgroundImage = "url(backgrounds/chpt5_tavern.jpg)";
      break;
    case "6":
      backImage.style.backgroundImage =
        "url(backgrounds/chpt6_marketplace.jpg)";
      break;
    case "7":
      backImage.style.backgroundImage = "url(backgrounds/chpt7_festival.jpg)";
      break;
    case "8":
      backImage.style.backgroundImage = "url(backgrounds/chpt8_alley.jpg)";
      break;
    case "9":
      backImage.style.backgroundImage = "url(backgrounds/chpt9_lake.jpg)";
      break;
    case "10":
      backImage.style.backgroundImage = "url(backgrounds/chpt10_messyroom.jpg)";
      break;
    case "11":
      backImage.style.backgroundImage = "url(backgrounds/chpt11_cottage.png)";
      break;
    case "12":
      backImage.style.backgroundImage = "url(backgrounds/chpt12_boar.jpg)";
      break;
    case "13":
      backImage.style.backgroundImage = "url(backgrounds/chpt13_hunter.jpg)";
      break;
    case "14":
      backImage.style.backgroundImage =
        "url(backgrounds/chpt14_wilderness.jpg)";
      break;
    case "15":
      backImage.style.backgroundImage = "url(backgrounds/chpt15_closeness.jpg)";
      break;
    case "16":
      backImage.style.backgroundImage = "url(backgrounds/chpt16_trap.png)";
      break;
    case "17":
      backImage.style.backgroundImage = "url(backgrounds/chpt17_kiss.jpg)";
      break;
  }
}
