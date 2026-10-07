const I={
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
 cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 drop:'<path d="M12 3s6 6 6 11a6 6 0 01-12 0c0-5 6-11 6-11z"/>',
 scope:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>',
 book:'<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6"/><path d="M16 5a3 3 0 010 6M18 14c2 1 3 3 3 6"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 heart:'<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z"/>',
 flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/>'
};
const ic=n=>`<div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg></div>`;
const $=s=>document.querySelector(s);
const fill=(sel,arr,fn)=>$(sel).innerHTML=arr.map(fn).join('');

fill('#creds',[
 ['Fellow of the Royal College of Physicians (FRCP)','shield'],
 ['Member of the Royal College of Physicians – Gastroenterology (MRCP Gastroenterology)','shield'],
 ['Member of the Royal College of General Practitioners (MRCGP)','shield'],
 ['Fellow of the Academy of Medical Educators (FAcadMEd)','cap'],
 ['Certificate of Completion of Training (CCT-UK) in Hepatology','book'],
 ['Certificate of Completion of Training (CCT-UK) in Gastroenterology','book']
],c=>`<div class="card cred fade">${ic(c[1])}<h3>${c[0]}</h3></div>`);

fill('#exp',[
 ['Complex Liver Disease','Autoimmune liver conditions and transplant medicine.','drop'],
 ['Diabetes & Fatty Liver','Early assessment and proactive management of diabetes and fat-related liver disease.','flask'],
 ['Recurrent Abdominal Pain','Definitive assessment of persistent abdominal and biliary pain.','plus'],
 ['Pancreatic Disorders','Pancreatitis, pancreatic cysts and pancreatic cancer.','plus'],
 ['Bile Duct Diseases','Bile duct stones, IgG4 cholangiopathy and stricture management.','drop'],
 ['Advanced Endoscopy','ERCP, EUS, SpyGlass and advanced therapeutic endoscopy.','scope'],
 ['Early Cancer Detection','Advanced endoscopic techniques supporting early detection and treatment of gastrointestinal conditions.','scope'],
 ['Endoscopic Feeding Treatments','Bespoke endoscopic-guided feeding treatments and endosuturing techniques.','heart']
],c=>`<article class="card fade">${ic(c[2])}<h3>${c[0]}</h3><p>${c[1]}</p></article>`);

fill('#clin',[
 ['Complex Liver Disease Clinic','Comprehensive care for autoimmune liver conditions and liver transplant medicine.'],
 ['Diabetes & Fatty Liver Clinic','Early assessment and proactive management of diabetes and fatty liver disease.'],
 ['Recurrent Undiagnosed Abdominal Pain Clinic','A bespoke service for patients experiencing persistent abdominal or biliary symptoms.'],
 ['Pancreatic & Biliary Care','Specialist assessment and management of pancreatic and bile duct conditions.']
],c=>`<article class="card fade" style="border-top:3px solid var(--blue)"><h3>${c[0]}</h3><p>${c[1]}</p></article>`);

fill('#whyg',[
 ['UK-Trained','Advanced specialist training in the UK.','cap'],
 ['Advanced Endoscopy','Expertise across ERCP, EUS, SpyGlass and therapeutic endoscopy.','scope'],
 ['Liver Expertise','Complex liver disease and transplant medicine.','drop'],
 ['Patient-Centred Care','Clear communication and personalised treatment planning.','heart'],
 ['International Educator','Active contribution to medical education and professional training.','globe'],
 ['Academic Expertise','Research, publications and international medical education.','book']
],c=>`<div class="card fade">${ic(c[2])}<h3>${c[0]}</h3><p>${c[1]}</p></div>`);

fill('#rev',[
 "Dr Farooq Khan is an amazing medical professor @ KCH, Dubai Hills. His smile is so magnetic & contagious. He is a caring Dr, who understands the anxious mentality of …",
 "I honestly can’t thank Dr. Farooq Khan enough for everything he’s done for me. I spent years dealing with unexplained symptoms, did countless tests, saw around 8 different doctors, and still had no answers.",
 "The care and attention provided by Dr.Farooq Khan are merely exceptional. He always takes the time to address my concern with high professionalism and care...",
 "I would give Dr. Farooq 5,000 stars if I could! His expertise in his field is truly exceptional.",
 "I cannot describe how much of a comfort Dr. Farooq was amidst an uncomfortable health situation. He’s calm and concise and explains things very well."
],t=>`<figure class="card fade" style="margin:0"><blockquote class="q" style="margin:0">${t}</blockquote><small>★★★★★ Verified patient review</small></figure>`);

const SV=[
 ['Gastroenterology Specialist in Dubai','Specialist care for digestive and liver conditions.','Digestive'],
 ['Bile Duct Treatment Dubai','Specialist care for bile duct stones and strictures.','Pancreatic & biliary'],
 ['Stomach Doctor Dubai','Specialist assessment of stomach and digestive symptoms.','Digestive'],
 ['Gallbladder Stones Surgery in Dubai','Specialist care for gallbladder and biliary stone disease.','Pancreatic & biliary'],
 ['GI Cancer Treatment Dubai','Specialist care for gastrointestinal cancers.','Cancer'],
 ['Pancreatic Cancer Treatment Dubai','Specialist care for pancreatic conditions including cancer.','Cancer'],
 ['Diabetes Care','Specialist care linking diabetes and fatty liver disease.','Metabolic & weight'],
 ['Weight Loss Treatment','Specialist care for weight management.','Metabolic & weight'],
 ['Endoscopic Sleeve Gastroplasty','Specialist care for endoscopic weight loss options.','Metabolic & weight'],
 ['Gastric Balloon','Specialist care for endobariatric options.','Metabolic & weight'],
 ['Gastroplasty','Specialist care for weight-related procedures.','Metabolic & weight'],
 ['Acid Reflux Treatment','Specialist care for reflux and heartburn.','Digestive'],
 ['Endoscopy','Diagnostic and therapeutic endoscopy.','Endoscopy'],
 ['Peroral Endoscopic Myotomy (POEM)','Specialist care for swallowing and motility disorders.','Endoscopy'],
 ['Cancer Treatment','Specialist care across gastrointestinal cancer pathways.','Cancer'],
 ['Constipation Treatment','Specialist care for bowel symptoms.','Digestive']
];
let cat='All';
const cats=['All',...new Set(SV.map(s=>s[2]))];
$('#chips').innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c==='All'}" data-c="${c}">${c}</button>`).join('');
function draw(){
 const q=$('#q').value.toLowerCase().trim();
 const r=SV.filter(s=>(cat==='All'||s[2]===cat)&&(s[0]+s[1]).toLowerCase().includes(q));
 $('#svc').innerHTML=r.map(s=>`<article class="card svc"><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');
 $('#none').hidden=r.length>0;
}
$('#chips').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;
 document.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));draw()});
$('#q').addEventListener('input',draw);draw();

// config wiring
document.querySelectorAll('.js-book').forEach(a=>{if(CONFIG.BOOKING_URL){a.href=CONFIG.BOOKING_URL;a.target='_blank';a.rel='noopener'}else if(a.closest('#contact')){a.href='tel:'+CONFIG.PHONE_TEL}});
document.querySelectorAll('.js-wa').forEach(a=>a.href='https://wa.me/'+CONFIG.WHATSAPP+'?text='+encodeURIComponent('Hello, I would like to book an appointment with Dr. Farooq Khan.'));
document.querySelectorAll('.js-photo').forEach(p=>{if(CONFIG.DOCTOR_PHOTO){const i=new Image();i.src=CONFIG.DOCTOR_PHOTO;i.alt='Dr. Farooq Khan, Consultant Hepatologist & Gastroenterologist';p.prepend(i);p.querySelector('.ph').remove()}});
if(CONFIG.HOSPITAL_PHOTO){const i=new Image();i.src=CONFIG.HOSPITAL_PHOTO;i.alt="King's College Hospital Dubai, Dubai Hills";i.loading='lazy';$('#hosp').prepend(i)}else $('#hosp').remove();
const mq=encodeURIComponent(CONFIG.MAP_QUERY);
$('#dir').href='https://www.google.com/maps/dir/?api=1&destination='+mq;
$('#mapl').href='https://www.google.com/maps/search/?api=1&query='+mq;

// nav
const b=$('#burger'),m=$('#menu');
b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰'};
m.addEventListener('click',e=>{if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false);b.textContent='☰'}});

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));
