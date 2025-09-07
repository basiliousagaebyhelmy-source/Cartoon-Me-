const CHAR_INFO = {
  spongebob: { 
    name: "سبونج بوب", 
    vibe: "مرح، متفائل، دايمًا شايف الجانب الحلو.", 
    img: "https://i.ibb.co/dQXrznV/spongebob.jpg" 
  },
  tom: { 
    name: "توم", 
    vibe: "عنيد ومغامر، بس بيتعلم من كل مطاردة!", 
    img: "https://i.ibb.co/ZWbN9q3/tom.jpg" 
  },
  naruto: { 
    name: "ناروتو", 
    vibe: "شجاع ومثابر، عنده روح فريق وما بيستسلمش.", 
    img: "https://i.ibb.co/Z86DK0y/naruto.jpg" 
  },
  elsa: { 
    name: "إلسا", 
    vibe: "هادئة وقوية، وبتعرف تسيطر على نفسها.", 
    img: "https://i.ibb.co/pjFYc9c/elsa.jpg" 
  },
};

const QUIZ = [
  { q: "أكتر حاجة توصفك لما تصحى بدري؟", options: [
    { text: "طاقة وحماس! يوم جديد ✨", v: "spongebob" },
    { text: "مش مزاجي خالص.. قهوة الأول ☕", v: "tom" },
    { text: "أبدأ تدريب وجري!", v: "naruto" },
    { text: "هدوء وموسيقى خفيفة 🎵", v: "elsa" },
  ]},
  { q: "اختار النشاط المفضل في الويكند:", options: [
    { text: "الخروج مع الصحاب والضحك", v: "spongebob" },
    { text: "ألعاب فيديو/أنمي", v: "naruto" },
    { text: "تجارب طبخ أو DIY", v: "tom" },
    { text: "قراءة كتاب أو فيلم هادي", v: "elsa" },
  ]},
  { q: "لو حصلت مشكلة فجأة، رد فعلك؟", options: [
    { text: "أضحك وأفكها بهزار 😄", v: "spongebob" },
    { text: "أدخل على طول أحاول أحل!", v: "naruto" },
    { text: "أخطط بهدوء وأقسم الخطوات", v: "elsa" },
    { text: "أتفاوض وأدور على حلول 😉", v: "tom" },
  ]},
  { q: "اختار وجبة سريعة مفضلة:", options: [
    { text: "بيتزا 🍕", v: "spongebob" },
    { text: "برجر 🍔", v: "tom" },
    { text: "سوشي 🍣", v: "naruto" },
    { text: "سلطة 🥗", v: "elsa" },
  ]},
  { q: "ستايلك في اللبس أقرب لـ:", options: [
    { text: "ملون ومرح", v: "spongebob" },
    { text: "عملي وبسيط", v: "naruto" },
    { text: "شيك وكلاسيك", v: "elsa" },
    { text: "مجنون وجريء", v: "tom" },
  ]},
  { q: "لو معاك قوة خارقة، تختار إيه؟", options: [
    { text: "أنشر السعادة حواليا ✨", v: "spongebob" },
    { text: "قوة وسرعة خارقة!", v: "naruto" },
    { text: "التحكّم في الجليد ❄️", v: "elsa" },
    { text: "أكون دايمًا محظوظ 😎", v: "tom" },
  ]},
  { q: "إيه أكتر حاجة بتضحكك؟", options: [
    { text: "المواقف الغريبة والعفوية 😂", v: "spongebob" },
    { text: "اللقطات الكوميدية في الأنمي", v: "naruto" },
    { text: "تعليقات الأصحاب الساخرة", v: "tom" },
    { text: "النكت البسيطة واللطيفة", v: "elsa" },
  ]},
  { q: "لو كنت بطل فيلم، نوع الفيلم هيكون؟", options: [
    { text: "كوميدي ومليان مفاجآت", v: "spongebob" },
    { text: "أكشن ومغامرة", v: "naruto" },
    { text: "دراما فيها صراعات", v: "tom" },
    { text: "خيال وسحر", v: "elsa" },
  ]},
  { q: "تحب تسافر فين أكتر؟", options: [
    { text: "شاطئ وبحر 🏖️", v: "spongebob" },
    { text: "جبال وتسلق 🏔️", v: "naruto" },
    { text: "مدينة مزدحمة وحياة سريعة 🌆", v: "tom" },
    { text: "أماكن هادية وثلج ❄️", v: "elsa" },
  ]},
  { q: "لو عندك يوم أجازة، إزاي تقضيه؟", options: [
    { text: "ألعب مع الحيوانات أو أخرج", v: "spongebob" },
    { text: "أتمرن وأتحدى نفسي", v: "naruto" },
    { text: "أقضيها نوم وكسل 😴", v: "tom" },
    { text: "أرتب وأهتم بالبيت/نفسي", v: "elsa" },
  ]},
];

let idx = 0;
const scores = { spongebob: 0, tom: 0, naruto: 0, elsa: 0 };
const answers = Array(QUIZ.length).fill(null);

const $quiz = document.getElementById("quiz");
const $bar = document.getElementById("bar");
const $step = document.getElementById("step");
const $next = document.getElementById("nextBtn");
const $back = document.getElementById("backBtn");

function render() {
  if (idx >= QUIZ.length) return renderResult();
  const data = QUIZ[idx];
  $quiz.innerHTML = `
    <div class="q">${data.q}</div>
    <div class="options">
      ${data.options.map((o, i) => `
        <button class="option" aria-checked="${answers[idx] === i}" data-i="${i}">${o.text}</button>
      `).join("")}
    </div>
  `;
  $bar.style.width = Math.round((idx / QUIZ.length) * 100) + "%";
  $step.textContent = `سؤال ${idx + 1} من ${QUIZ.length}`;
  $next.disabled = answers[idx] === null;
  $back.disabled = idx === 0;

  $quiz.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => {
      answers[idx] = Number(btn.dataset.i);
      $quiz.querySelectorAll(".option").forEach(b => b.setAttribute("aria-checked", "false"));
      btn.setAttribute("aria-checked", "true");
      $next.disabled = false;
    });
  });
}

function renderResult() {
  $bar.style.width = "100%";
  $step.textContent = "خلصت!";
  answers.forEach((a, i) => { if (a !== null) scores[QUIZ[i].options[a].v]++; });
  const total = answers.length;
  const entries = Object.entries(scores).map(([k,v]) => [k, Math.round((v/total)*100)]);
  const top = entries.reduce((a, b) => a[1] >= b[1] ? a : b);
  const info = CHAR_INFO[top[0]];

  $quiz.innerHTML = `
    <div class="result">
      <img src="${info.img}" alt="${info.name}" class="char-pic">
      <h2>أنت: ${info.name} 🎉</h2>
      <p class="muted">${info.vibe}</p>
      <div class="card" style="text-align:start;">
        <strong>تفاصيل النتيجة:</strong>
        ${entries.map(([k,p]) => `
          <p>
            <img src="${CHAR_INFO[k].img}" class="char-pic" style="width:40px;height:40px;vertical-align:middle;margin-right:8px;">
            ${CHAR_INFO[k].name} — ${p}%
            <div class="bar-container"><div class="bar" style="width:${p}%"></div></div>
          </p>
        `).join("")}
      </div>
      <button class="btn primary" onclick="location.reload()">إعادة الاختبار</button>
    </div>
  `;
}

$next.addEventListener("click", () => { idx++; render(); });
$back.addEventListener("click", () => { if (idx > 0) idx--; render(); });

render();
