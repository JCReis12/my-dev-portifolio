const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const icons=()=>window.lucide&&lucide.createIcons();
const CH=["lb","pc","y","tx"];

/* Atributos (barras animam ao entrar na tela) */
$('#attrs').innerHTML=ATTRS.map(([n,v,d,fill,txt])=>{const f=Math.floor(v/10),part=v%10?'▒':'',seg='█'.repeat(f)+part+'░'.repeat(10-f-(part?1:0));
 return `<div class="at"><div class="r1"><span><u class="sq" style="background:${fill}"></u>${esc(n)}</span><b style="color:${txt}"><span class="sg">[${seg}]</span> ${v}%</b></div><div class="trk"><i data-w="${v}" style="background:${fill}"></i></div><p>${esc(d)}</p></div>`}).join('');
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){$$('i[data-w]',e.target).forEach(b=>b.style.width=b.dataset.w+'%');o.unobserve(e.target)}}),{threshold:.2}).observe($('#attrs'));

/* Filtros reutilizáveis */
function mount(id,filters,items,tpl,after){const box=$('#'+id),bar=$(`.filters[data-t=${id}]`);
 const draw=f=>{box.innerHTML=items.filter(x=>f==='todos'||x.c===f).map(tpl).join('');$$('button',bar).forEach(b=>b.classList.toggle('on',b.dataset.f===f));icons();after&&after()};
 bar.innerHTML=filters.map(([f,l,i])=>`<button data-f="${f}">${i?`<i data-lucide="${i}"></i>`:''}${l}</button>`).join('');
 bar.onclick=e=>{const b=e.target.closest('button');b&&draw(b.dataset.f)};draw('todos')}

/* Arsenal + item equipado */
function equip(name){const s=SKILLS.find(x=>x.n===name),dt=EQUIP_DETAIL[name]||{sub:s.c.toUpperCase()+" • "+s.r,d:s.d.replace('…','.'),s:["+"+s.l+" XP","+"+s.p+" DPS","+"+(s.p-5)+" RES","< 0.1s"]};
 $('#equip').innerHTML=`<div class="eh"><span>DETALHES DO ITEM EQUIPADO</span><b>ITEM ${s.r}</b></div><div class="eb"><span class="ic ${s.col}"><i data-lucide="${s.i}"></i></span><div><h3>${esc(name==='Java'?'Java Architecture':name)}</h3><small>${esc(dt.sub)}</small></div></div><p class="d">${esc(dt.d)}</p><div class="est"><span>ESTABILIDADE: <b class="lb">${dt.s[0]}</b></span><span>PERFORMANCE: <b class="pc">${dt.s[2]==='+90 RES'?dt.s[1]:dt.s[1]}</b></span><span>REUTILIZAÇÃO: <b class="pc">${dt.s[2]}</b></span><span>TEMPO DE REFORMA: <b>${dt.s[3]}</b></span></div>`;
 $$('.sk').forEach(c=>c.classList.toggle('on',c.dataset.n===name));icons()}
mount('skills',SKILL_FILTERS,SKILLS,s=>`<button class="sk" data-n="${esc(s.n)}"><div class="r1"><span class="rar ${s.rc}">${s.r}</span><span>LVL.${s.l}</span></div><span class="ic ${s.col}"><i data-lucide="${s.i}"></i></span><h5>${esc(s.n)}</h5><p>${esc(s.d)}</p><div class="pw"><span class="${s.col}">POW: ${s.p}%</span><i data-lucide="arrow-right"></i></div></button>`,()=>{const cur=$('#equip .eb h3');});
$('#skills').onclick=e=>{const c=e.target.closest('.sk');c&&equip(c.dataset.n)};
equip('Java');

/* Projetos */
mount('projects',PROJ_FILTERS,PROJECTS,p=>`<article class="panel pcard"><div class="hd"><span>[QUEST #0${p.i} • RANK: ${p.r}]</span><b>MISSÃO CONCLUÍDA - EXP +1500</b></div><img src="assets/images/projeto-${p.i}.png" alt="Arte do projeto ${esc(p.t)}" loading="lazy"><div class="bd"><h3>${esc(p.t)}</h3><p class="ds">${esc(p.d)}</p><p class="eq">EQUIPMENT / RUNTIME:</p><div class="chs">${p.s.map((t,i)=>`<span class="${CH[i]}">${esc(t)}</span>`).join('')}</div></div><div class="acts"><a class="btn" href="${p.repo||'#'}" ${p.repo?'target="_blank" rel="noopener"':'data-pending="Repositório"'}><i data-lucide="code-xml"></i>[VER REPO]</a><a class="btn blue ${p.a[2]}" href="${p.repo||'#'}" ${p.repo?'target="_blank" rel="noopener"':'data-pending="'+esc(p.a[0])+'"'}><i data-lucide="${p.a[1]}"></i>[${p.a[0]}]</a></div></article>`);

/* Links sem destino real: avisam em vez de apontar para URL inventada */
document.addEventListener('click',e=>{const a=e.target.closest('[data-pending]');if(a){e.preventDefault();alert(`Link "${a.dataset.pending}" pendente: substitua pela URL real no HTML/JS.`)}});

/* Navegação: menu mobile, scrollspy, som */
const nav=$('#nav'),bg=$('.burger');bg.onclick=()=>bg.setAttribute('aria-expanded',nav.classList.toggle('open'));nav.onclick=()=>nav.classList.remove('open');
const spy=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&$$('nav a').forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))),{rootMargin:'-45% 0px -50%'});
$$('main section').forEach(s=>spy.observe(s));
$('#snd').onclick=e=>{const b=e.currentTarget,on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);b.innerHTML=`<i data-lucide="${on?'volume-2':'volume-x'}"></i>`;icons()};
addEventListener('keydown',e=>{if(e.key==='Tab'&&!e.shiftKey&&document.activeElement===document.body){e.preventDefault();$('#form input').focus();$('#contact').scrollIntoView()}});

/* Formulário → mailto (sem backend) */
$('#form').onsubmit=e=>{e.preventDefault();const f=e.target;
 location.href=`mailto:dev@email.com?subject=${encodeURIComponent('Contato via portfólio: '+f.n.value)}&body=${encodeURIComponent(f.m.value+'\n\n'+f.n.value+' <'+f.e.value+'>')}`;$('#stby').textContent='TRANSMISSÃO ENVIADA — ABRINDO SEU EMAIL'};
addEventListener('load',icons);
