const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
$('#attrs').innerHTML=ATTRS.map(([n,v,d])=>`<div class="attr"><div><span>${esc(n)}</span><span class="y">${v}%</span></div><i class="bar y"><b data-w="${v}"></b></i><p>${d}</p></div>`).join('');
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){$$('b[data-w]',e.target).forEach(b=>b.style.width=b.dataset.w+'%');o.unobserve(e.target)}}),{threshold:.3}).observe($('#attrs'));
function mount(id,filters,items,tpl){const box=$('#'+id),bar=$(`.filters[data-target=${id}]`);
 const draw=f=>{box.innerHTML=items.filter(x=>f==='todos'||x.c===f).map(tpl).join('');$$('button',bar).forEach(b=>b.classList.toggle('on',b.dataset.f===f))};
 bar.innerHTML=filters.map(([f,l])=>`<button data-f="${f}">${l}</button>`).join('');
 bar.onclick=e=>e.target.dataset.f&&draw(e.target.dataset.f);draw('todos')}
mount('skills',SKILL_FILTERS,SKILLS,s=>`<article class="card"><div class="k"><span>${s.c.toUpperCase()}</span><span>LVL.${s.p}</span></div><h5>${esc(s.n)}</h5><p>${esc(s.d)}</p><p class="y">POW: ${s.p}%</p></article>`);
mount('projects',PROJ_FILTERS,PROJECTS,p=>`<article class="card proj"><div class="thumb">[ QUEST #0${p.i} · assets/images/projeto-${p.i}.png ]</div><div class="k"><span>MISSÃO CONCLUÍDA</span><span class="y">EXP +1500</span></div><h5>${esc(p.t)}</h5><p>${esc(p.d)}</p><div class="tech">${p.s.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="acts"><a class="btn" href="#" data-pending="Repositório">&lt;&gt; VER REPO</a><a class="btn blue" href="#" data-pending="${esc(p.a)}">${p.a}</a></div></article>`);
document.addEventListener('click',e=>{const a=e.target.closest('[data-pending]');if(a){e.preventDefault();alert(`Link "${a.dataset.pending}" pendente: substitua pela URL real no código.`)}});
const nav=$('#nav'),bg=$('.burger');bg.onclick=()=>bg.setAttribute('aria-expanded',nav.classList.toggle('open'));nav.onclick=()=>nav.classList.remove('open');
const spy=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&$$('nav a').forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))),{rootMargin:'-40% 0px -55%'});
$$('main section').forEach(s=>spy.observe(s));
$('#form').onsubmit=e=>{e.preventDefault();const f=e.target;
 location.href=`mailto:dev@email.com?subject=${encodeURIComponent('Contato via portfólio: '+f.n.value)}&body=${encodeURIComponent(f.m.value+'\n\n'+f.n.value+' <'+f.e.value+'>')}`;$('#stby').textContent='TRANSMISSÃO ENVIADA AO CLIENTE DE EMAIL'};
