// ====== COURSES DATA ======
const courses = [
  { id:'frontend', title:'Frontend Development', icon:'fa-code', c1:'#ff6ec7', c2:'#7b5cff', duration:'3 Months', desc:'Build beautiful, responsive websites from scratch.', topics:['HTML5 & Semantic Tags','CSS3, Flexbox & Grid','JavaScript ES6+','Responsive Design','React Basics','Real Projects'], outcomes:['Build personal portfolio','Create interactive websites','Deploy live projects'] },
  { id:'backend', title:'Backend Development', icon:'fa-server', c1:'#22d3ee', c2:'#7b5cff', duration:'3 Months', desc:'Power apps with servers, APIs and databases.', topics:['Node.js & Express','REST APIs','MongoDB / SQL','Authentication','Deployment'], outcomes:['Build full APIs','Database design','Secure backend apps'] },
  { id:'fullstack', title:'Full Stack Development', icon:'fa-layer-group', c1:'#34d399', c2:'#22d3ee', duration:'6 Months', desc:'Become a complete developer — frontend + backend.', topics:['HTML, CSS, JS','React','Node + Express','Databases','Auth & Deployment','Capstone Project'], outcomes:['Industry-ready skills','Build full apps solo','Strong portfolio'] },
  { id:'python', title:'Python Programming', icon:'fa-python', isBrand:true, c1:'#facc15', c2:'#22d3ee', duration:'2 Months', desc:'The most loved language — beginner friendly.', topics:['Syntax & Variables','Loops & Functions','OOP','File Handling','Mini Projects'], outcomes:['Strong programming logic','Build automation scripts','Foundation for AI/Data'] },
  { id:'dsa', title:'DSA & Logic Building', icon:'fa-brain', c1:'#a78bfa', c2:'#ff6ec7', duration:'4 Months', desc:'Master problem solving — the heart of coding.', topics:['Arrays & Strings','Linked List, Stack, Queue','Trees & Graphs','Sorting & Searching','Recursion & DP'], outcomes:['Crack coding interviews','Sharp logical thinking','Strong CS fundamentals'] },
  { id:'c', title:'C Programming', icon:'fa-c', c1:'#60a5fa', c2:'#7b5cff', duration:'2 Months', desc:'Learn the mother of all programming languages.', topics:['Basics & Operators','Loops & Functions','Pointers','Arrays & Strings','Structures'], outcomes:['Strong fundamentals','Memory understanding','Base for C++/Java'] },
  { id:'data', title:'Data Analytics', icon:'fa-chart-line', c1:'#34d399', c2:'#facc15', duration:'3 Months', desc:'Turn raw data into powerful insights.', topics:['Python for Data','NumPy & Pandas','Matplotlib & Seaborn','Excel','Real Datasets'], outcomes:['Analyze any dataset','Beautiful visualizations','Data-driven mindset'] },
  { id:'hacking', title:'Ethical Hacking', icon:'fa-shield-halved', c1:'#ef4444', c2:'#a78bfa', duration:'3 Months', desc:'Learn cyber security the legal & ethical way.', topics:['Networking Basics','Linux Essentials','Web Vulnerabilities','Penetration Testing','Tools: Nmap, Burp, Metasploit'], outcomes:['Find security flaws','Protect systems','Cyber career start'] },
  { id:'aws', title:'AWS Cloud', icon:'fa-cloud', c1:'#f59e0b', c2:'#22d3ee', duration:'2 Months', desc:'Deploy & scale apps on the world\'s biggest cloud.', topics:['EC2, S3, RDS','IAM & Security','Lambda','Deployment','Cost Optimization'], outcomes:['Deploy live apps','Cloud certifications ready','High-paying skill'] },
];

// ====== RENDER COURSES ======
const grid = document.getElementById('coursesGrid');
const courseSelect = document.getElementById('course');
courses.forEach(c=>{
  const card=document.createElement('div');
  card.className='course-card';
  card.style.setProperty('--c1',c.c1);
  card.style.setProperty('--c2',c.c2);
  const iconClass = c.isBrand ? `fa-brands ${c.icon}` : `fa-solid ${c.icon}`;
  card.innerHTML=`
    <div class="course-icon" style="background:linear-gradient(135deg,${c.c1},${c.c2})"><i class="${iconClass}"></i></div>
    <h3>${c.title}</h3>
    <div class="duration"><i class="fa-regular fa-clock"></i> ${c.duration}</div>
    <p>${c.desc}</p>
    <span class="more">View Details <i class="fa-solid fa-arrow-right"></i></span>`;
  card.addEventListener('click',()=>openModal(c));
  grid.appendChild(card);

  const opt=document.createElement('option');
  opt.value=c.title;opt.textContent=c.title;
  courseSelect.appendChild(opt);
});

// ====== MODAL ======
const modal=document.getElementById('modal');
const modalBody=document.getElementById('modalBody');
const modalClose=document.getElementById('modalClose');

function openModal(c){
  const iconClass = c.isBrand ? `fa-brands ${c.icon}` : `fa-solid ${c.icon}`;
  modalBody.innerHTML=`
    <div class="mod-icon" style="background:linear-gradient(135deg,${c.c1},${c.c2})"><i class="${iconClass}"></i></div>
    <h2>${c.title}</h2>
    <div class="mod-duration"><i class="fa-regular fa-clock"></i> ${c.duration}</div>
    <p style="color:#b8c0e0">${c.desc}</p>
    <h4>📚 What You'll Learn</h4>
    <ul>${c.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
    <h4>🚀 Outcomes</h4>
    <ul>${c.outcomes.map(t=>`<li>${t}</li>`).join('')}</ul>
    <a href="https://wa.me/919103799445?text=${encodeURIComponent('Hi! I want to enroll in '+c.title+' course at Next Gen Code.')}" target="_blank" class="btn btn-primary btn-block" style="margin-top:20px">
      <i class="fa-brands fa-whatsapp"></i> Enroll via WhatsApp
    </a>`;
  modal.classList.add('active');
  document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('active');document.body.style.overflow=''}
modalClose.addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// ====== HAMBURGER ======
const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
hamburger.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

// ====== CONTACT FORM -> WHATSAPP ======
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const parent=document.getElementById('parent').value.trim();
  const cls=document.getElementById('class').value.trim();
  const course=document.getElementById('course').value;
  const message=document.getElementById('message').value.trim();
  const text=`Hello Next Gen Code! 👋%0A%0A*Student:* ${name}%0A*Parent:* ${parent}%0A*Class:* ${cls}%0A*Course:* ${course}%0A%0A*Message:* ${message}`;
  window.open(`https://wa.me/919103799445?text=${text}`,'_blank');
});

// ====== YEAR ======
document.getElementById('year').textContent=new Date().getFullYear();
