const QUESTIONS = [
 {cat:"أنواع البيانات",q:"أي نوع بيانات هو الأنسب لتخزين العدد العشري 3.75؟",opts:["int","char","double","bool"],a:2,ex:"double مناسب لتخزين الأعداد العشرية."},
 {cat:"الإخراج",q:"ما الذي سيظهر على الشاشة؟",code:'int x = 5;\nint y = 8;\ncout << x << y;',opts:["13","5 8","58","x y"],a:2,ex:"تُطبع القيمتان تباعاً دون مسافة أو فاصل، لذلك يظهر 58."},
 {cat:"الإخراج",q:"ما ناتج تنفيذ الكود التالي؟",code:'int x = 7;\ncout << x << endl;\ncout << "x";',opts:["7 ثم x في السطر نفسه","7 ثم x في سطر جديد","x ثم 7","77"],a:1,ex:"endl ينقل الإخراج إلى سطر جديد، ثم تُطبع الحرف x."},
 {cat:"الإدخال",q:"ما التعليمة الصحيحة لقراءة قيمتين مخزنتين في المتغيرين a و b؟",opts:["cout >> a >> b;","cin << a << b;","cin >> a >> b;","input(a,b);"],a:2,ex:"تُستخدم cin مع العامل >> لقراءة القيم."},
 {cat:"المكتبات",q:"أي مكتبة تُستخدم عادةً للوصول إلى الدوال الرياضية مثل sqrt؟",opts:["<string>","<cmath>","<iostream>","<bool>"],a:1,ex:"توفّر cmath دوالاً رياضية مثل sqrt."},
 {cat:"القسمة الصحيحة",q:"ما قيمة x بعد تنفيذ التعليمة؟",code:'int x = 9 / 2;',opts:["4.5","5","4","خطأ ترجمة"],a:2,ex:"القسمة بين عددين صحيحين تعطي الجزء الصحيح فقط؛ النتيجة 4."},
 {cat:"القسمة العشرية",q:"ما قيمة x في المثال التالي؟",code:'double x = 9.0 / 2;',opts:["4","4.5","5","9.2"],a:1,ex:"وجود 9.0 يجعل القسمة عشرية، والناتج 4.5."},
 {cat:"باقي القسمة",q:"ما قيم التعبيرات بالترتيب: 10 % 3 ، 3 % 10 ، 8 % 4 ؟",opts:["1 ، 3 ، 0","3 ، 1 ، 2","1 ، 0 ، 4","0 ، 3 ، 1"],a:0,ex:"باقي القسمة هو 1 ثم 3 ثم 0."},
 {cat:"أولوية العمليات",q:"ما ناتج التعبير التالي؟",code:'int x = 5, y = 2;\ncout << x + y * 3;',opts:["21","11","15","35"],a:1,ex:"تُنفذ الضرب أولاً: 2×3=6 ثم 5+6=11."},
 {cat:"أولوية العمليات",q:"ما ناتج التعبير الحسابي التالي في C++؟",code:'cout << 3 + 8 * 2 / 4 - 5;',opts:["2","6","-1","7"],a:1,ex:"الضرب والقسمة من اليسار إلى اليمين: 8×2=16، ثم 16/4=4؛ وبعدها 3+4−5=2. الإجابة الصحيحة هي 2.",fix:true},
 {cat:"الزيادة السابقة",q:"ما القيمة التي تُطبع أولاً؟",code:'int x = 5;\ncout << ++x;',opts:["5","6","4","لا شيء"],a:1,ex:"++x يزيد المتغير أولاً، ثم يستخدم القيمة الجديدة."},
 {cat:"الزيادة اللاحقة",q:"ما القيمة التي تُطبع أولاً؟",code:'int x = 5;\ncout << x++;',opts:["6","4","5","خطأ"],a:2,ex:"x++ يستخدم القيمة القديمة أولاً، ثم يزيد المتغير."},
 {cat:"تتبّع التنفيذ",q:"ما القيم النهائية للمتغيرات x و y و z؟",code:'int x = 5, y = 10;\nint z = ++x + y++;',opts:["x=5, y=11, z=15","x=6, y=11, z=16","x=6, y=10, z=16","x=6, y=11, z=15"],a:1,ex:"++x يجعل x=6 قبل الجمع، وy++ يستخدم 10 في الجمع ثم تصبح y=11؛ إذن z=16."},
 {cat:"if",q:"ما الذي سيظهر على الشاشة؟",code:'int x = 7;\nif (x > 5)\n    cout << "A";\ncout << "B";',opts:["A","B","AB","لا شيء"],a:2,ex:"الشرط صحيح، فتُطبع A ثم تُطبع B لأنها خارج if."},
 {cat:"if",q:"ما الذي سيظهر على الشاشة؟",code:'int x = 3;\nif (x > 5)\n    cout << "A";\ncout << "B";',opts:["AB","A","B","لا شيء"],a:2,ex:"الشرط غير صحيح، فلا تُطبع A، وتُطبع B لأنها خارج if."},
 {cat:"الأقواس",q:"ما ناتج الكود؟",code:'int x = 7;\nif (x > 5) {\n    cout << "A";\n    cout << "B";\n}\ncout << "C";',opts:["AC","ABC","C فقط","BC"],a:1,ex:"القوسان يجعلان A وB ضمن if، ثم C خارجها؛ فيظهر ABC."},
 {cat:"if-else",q:"ما الناتج؟",code:'int x = 4;\nif (x > 5) {\n    cout << "A";\n} else {\n    cout << "B";\n}\ncout << "C";',opts:["AC","BC","ABC","C"],a:1,ex:"الشرط غير صحيح، فتُنفذ else وتُطبع B، ثم C."},
 {cat:"الشروط المتداخلة",q:"إذا كان mark = 75، فما التصنيف الذي سيُطبع؟",code:'if (mark >= 90)\n    cout << "Excellent";\nelse if (mark >= 70)\n    cout << "Good";\nelse if (mark >= 60)\n    cout << "Pass";\nelse\n    cout << "Fail";',opts:["Excellent","Good","Pass","Fail"],a:1,ex:"75 لا تحقق شرط 90، لكنها تحقق شرط 70، لذلك النتيجة Good."},
 {cat:"باقي القسمة والشروط",q:"أي شرط يحدد أن العدد n زوجي؟",opts:["n / 2 == 0","n % 2 == 0","n % 2 == 1","n * 2 == 0"],a:1,ex:"العدد زوجي إذا كان باقي قسمته على 2 يساوي صفراً."},
{cat:"القيمة المطلقة",q:"إذا كانت قيمة n تساوي -7، فما القيمة المطلقة للعدد؟",opts:["-7","7","0","14"],a:1,ex:"القيمة المطلقة تمثل بُعد العدد عن الصفر، لذلك |−7| = 7."},
 {cat:"المجموع والمتوسط",q:"أدخل المستخدم الأعداد 2.0 و 4.0 و 6.0. ما متوسطها الحسابي؟",opts:["12","6","4","3"],a:2,ex:"المجموع 12، والمتوسط 12 ÷ 3 = 4."},
 {cat:"مساحة الدائرة",q:"إذا كان نصف قطر دائرة r = 2، فما مساحة الدائرة تقريباً باستخدام π ≈ 3.14؟",opts:["6.28","12.56","3.14","4.00"],a:1,ex:"مساحة الدائرة = π × r × r = 3.14 × 2 × 2 = 12.56."},
 {cat:"if-else",q:"إذا كانت علامة النجاح 60، فما الذي سيُطبع عندما mark = 59؟",code:'if (mark >= 60)\n    cout << "passed";\nelse\n    cout << "failed";',opts:["passed","failed","59","لا شيء"],a:1,ex:"59 أقل من 60، لذا ينفذ البرنامج فرع else ويطبع failed."},
 {cat:"المقارنة",q:"ما أفضل شرط للتمييز بين العددين a و b وطباعة العدد الأكبر، مع التعامل مع حالة التساوي؟",opts:["if (a > b) الأكبر a، else إذا a == b التساوي، وإلا b","if (a < b) اطبع a دائماً","if (a == b) اطبع الأكبر","استخدام a % b"],a:0,ex:"نقارن أولاً a > b، ثم نختبر التساوي، وإلا يكون b أكبر."},
 {cat:"الشروط المتداخلة",q:"ما الفكرة الصحيحة لإيجاد الأكبر بين ثلاثة أعداد a و b و c؟",opts:["مقارنة a مع b فقط ثم التوقف","اعتبار a الأكبر دائماً","استخدام سلسلة if / else if لمقارنة القيم وتحديد الأكبر","جمع الأعداد ثم قسمتها على 3"],a:2,ex:"يمكن استخدام شروط متتابعة لمقارنة الأعداد الثلاثة وتحديد الأكبر، مع مراعاة حالات التساوي والقيم السالبة."}
];

// تصحيح صياغة سؤال أولوية العمليات: الحساب الفعلي يعطي 2.
QUESTIONS[9].opts = ["2","6","-1","7"];
QUESTIONS[9].a = 0;
QUESTIONS[9].ex = "تُنفذ * و/ من اليسار إلى اليمين: 8×2=16 ثم 16/4=4؛ وبعدها 3+4−5=2.";

const $ = id => document.getElementById(id);
const state = {name:"", index:0, answers:Array(QUESTIONS.length).fill(null), remaining:45*60, interval:null, submitted:false};
$("year").textContent = new Date().getFullYear();

function showScreen(id){["welcome-screen","quiz-screen","result-screen"].forEach(x=>$(x).classList.toggle("hidden",x!==id));window.scrollTo({top:0,behavior:"smooth"});}
function startQuiz(name){
 state.name=name.trim(); state.index=0; state.answers=Array(QUESTIONS.length).fill(null);state.remaining=45*60;state.submitted=false;
 showScreen("quiz-screen"); renderQuestion(); renderGrid(); updateTimer(); clearInterval(state.interval);
 state.interval=setInterval(()=>{state.remaining--;updateTimer();if(state.remaining<=0){clearInterval(state.interval);submitQuiz(true);}},1000);
}
function updateTimer(){const m=Math.floor(state.remaining/60),s=state.remaining%60;$("timer").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");$("timer").parentElement.classList.toggle("warning",state.remaining<=300);}
function renderQuestion(){
 const q=QUESTIONS[state.index];$("progress-text").textContent=`السؤال ${state.index+1} من ${QUESTIONS.length}`;$("answered-text").textContent=`تمت الإجابة عن ${state.answers.filter(x=>x!==null).length}`;$("progress-bar").style.width=((state.index+1)/QUESTIONS.length*100)+"%";$("question-category").textContent=q.cat;$("question-points").textContent="4 درجات";$("question-text").textContent=q.q;
 const code=$("question-code");if(q.code){code.classList.remove("hidden");code.querySelector("code").textContent=q.code;}else{code.classList.add("hidden");}
 const list=$("options-list");list.innerHTML="";
 q.opts.forEach((opt,i)=>{const b=document.createElement("button");b.type="button";b.className="option"+(state.answers[state.index]===i?" selected":"");b.setAttribute("aria-pressed",state.answers[state.index]===i?"true":"false");const key=document.createElement("span");key.className="option-key";key.textContent=String.fromCharCode(65+i);const label=document.createElement("span");label.className="option-text";label.textContent=opt;b.append(key,label);b.addEventListener("click",()=>{state.answers[state.index]=i;renderQuestion();renderGrid();});list.appendChild(b);});
 $("prev-btn").disabled=state.index===0;$("next-btn").textContent=state.index===QUESTIONS.length-1?"مراجعة التسليم":"التالي ←";
 renderGrid();
}
function renderGrid(){const g=$("question-grid");g.innerHTML="";QUESTIONS.forEach((q,i)=>{const b=document.createElement("button");b.type="button";b.className="grid-btn"+(i===state.index?" current":"")+(state.answers[i]!==null?" answered":"");b.textContent=i+1;b.setAttribute("aria-label",`السؤال ${i+1}`);b.addEventListener("click",()=>{state.index=i;renderQuestion();});g.appendChild(b);});$("answered-text").textContent=`تمت الإجابة عن ${state.answers.filter(x=>x!==null).length}`;}
function requestSubmit(){const unanswered=state.answers.filter(x=>x===null).length;$("modal-message").textContent=unanswered?`لديك ${unanswered} سؤال/أسئلة دون إجابة. هل تريد التسليم على أي حال؟`:"أجبت عن جميع الأسئلة. هل تريد تسليم إجاباتك النهائية؟";$("confirm-modal").classList.remove("hidden");}
function submitQuiz(auto=false){if(state.submitted)return;state.submitted=true;clearInterval(state.interval);$("confirm-modal").classList.add("hidden");const correct=state.answers.reduce((n,a,i)=>n+(a===QUESTIONS[i].a?1:0),0);const score=correct*4;const pct=Math.round(score);
 $("score-number").textContent=score;$("score-percent").textContent=pct+"%";$("correct-count").textContent=`${correct}/${QUESTIONS.length}`;$("result-title").textContent=score>=90?"أداء مميّز!":score>=75?"عمل رائع!":score>=60?"نتيجة جيدة، واصل التقدّم!":"كل محاولة فرصة للتعلّم";$("result-subtitle").textContent=`${state.name}، ${auto?"انتهى الوقت وتم تسليم الاختبار تلقائياً.":"لقد أنهيت الاختبار بنجاح."}`;$("result-emoji").textContent=score>=75?"✓":"↗";$("review-count").textContent=`${correct} صحيحة من ${QUESTIONS.length}`;const list=$("review-list");list.innerHTML="";
 QUESTIONS.forEach((q,i)=>{const ok=state.answers[i]===q.a;const item=document.createElement("article");item.className="review-item "+(ok?"correct":"wrong");const head=document.createElement("div");head.className="review-item-head";const title=document.createElement("strong");title.textContent=`السؤال ${i+1} · ${q.cat}`;const status=document.createElement("span");status.className="review-state";status.textContent=ok?"✓ إجابة صحيحة":"✕ إجابة غير صحيحة";head.append(title,status);const question=document.createElement("p");question.className="review-question";question.textContent=q.q;item.append(head,question);if(q.code){const pre=document.createElement("pre");pre.className="review-code";pre.textContent=q.code;item.appendChild(pre);}const your=document.createElement("div");your.className="review-answer";const yourLabel=document.createElement("b");yourLabel.textContent="إجابتك: ";your.append(yourLabel,document.createTextNode(state.answers[i]===null?"لم تتم الإجابة":q.opts[state.answers[i]]));item.appendChild(your);if(!ok){const right=document.createElement("div");right.className="review-answer";const l=document.createElement("b");l.textContent="الإجابة الصحيحة: ";right.append(l,document.createTextNode(q.opts[q.a]));item.appendChild(right);}const exp=document.createElement("div");exp.className="review-answer";const el=document.createElement("b");el.textContent="التوضيح: ";exp.append(el,document.createTextNode(q.ex));item.appendChild(exp);list.appendChild(item);});
 showScreen("result-screen");
}
$("start-form").addEventListener("submit",e=>{e.preventDefault();const n=$("student-name").value.trim();if(!n){$("name-error").textContent="يرجى كتابة الاسم قبل البدء.";return;}if(n.length<2){$("name-error").textContent="يرجى إدخال اسم من حرفين على الأقل.";return;}$("name-error").textContent="";startQuiz(n);});
$("prev-btn").addEventListener("click",()=>{if(state.index>0){state.index--;renderQuestion();}});
$("next-btn").addEventListener("click",()=>{if(state.index<QUESTIONS.length-1){state.index++;renderQuestion();}else requestSubmit();});
$("finish-btn").addEventListener("click",requestSubmit);
$("cancel-submit").addEventListener("click",()=>$("confirm-modal").classList.add("hidden"));
$("confirm-submit").addEventListener("click",()=>submitQuiz(false));
$("restart-btn").addEventListener("click",()=>{clearInterval(state.interval);$("student-name").value=state.name;showScreen("welcome-screen");});
$("print-btn").addEventListener("click",()=>window.print());
document.addEventListener("keydown",e=>{if($("quiz-screen").classList.contains("hidden")||!$("confirm-modal").classList.contains("hidden"))return;if(["1","2","3","4"].includes(e.key)){const idx=Number(e.key)-1;if(QUESTIONS[state.index].opts[idx]!==undefined){state.answers[state.index]=idx;renderQuestion();}}if(e.key==="ArrowLeft"&&state.index<QUESTIONS.length-1){state.index++;renderQuestion();}if(e.key==="ArrowRight"&&state.index>0){state.index--;renderQuestion();}});
  
