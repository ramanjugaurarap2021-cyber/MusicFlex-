const $=s=>document.querySelector(s);
const P={home:'<path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>',
search:'<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M16.5 16.5L21 21" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
library:'<rect x="3" y="4" width="4" height="16" rx="1"/><rect x="9" y="4" width="4" height="16" rx="1"/><path d="M15 5.5l4-1 2 14-4 1z"/>',
user:'<circle cx="12" cy="8" r="4.5"/><path d="M3.5 21c0-4.5 3.8-7 8.5-7s8.5 2.5 8.5 7z"/>',
play:'<path d="M7 4.5v15l13-7.5z"/>',pause:'<rect x="6" y="4.5" width="4" height="15" rx="1"/><rect x="14" y="4.5" width="4" height="15" rx="1"/>',
next:'<path d="M5 5v14l10-7zM16 5h3v14h-3z"/>',prev:'<path d="M19 5v14L9 12zM5 5h3v14H5z"/>',
heart:'<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.8-8 11-8 11z"/>',
shuffle:'<path d="M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
repeat:'<path d="M4 11V9a3 3 0 013-3h12l-3-3M20 13v2a3 3 0 01-3 3H5l3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'};
P.down='<path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>';P.expand='<path d="M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';P.tune='<path d="M4 7h9M19 7h1M4 17h1M11 17h9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="16" cy="7" r="2.6" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="8" cy="17" r="2.6" fill="none" stroke="currentColor" stroke-width="2.2"/>';
P.lyrics='<path d="M4 6h16M4 12h10M4 18h13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>';P.layers='<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>';
const LOGO='icons/icon-192.png';
P.gear='<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
const ic=(n,s=24)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor">${P[n]}</svg>`;
// Demo library. A real music provider can be plugged in here later.
const S=[['Midnight Drive','Kairo',214,250,'Electronic'],['Paper Lanterns','Mika Sato',187,20,'Indie'],['Golden Hour Static','Luna Vale',201,40,'Pop'],['Neon Tides','Nova Reyes',228,190,'Dance'],['Slow Bloom','Arlo & Echo',176,330,'Lo-fi'],['Pixel Rain','Kairo',193,280,'Electronic'],['Velvet Sky','Luna Vale',240,300,'Chill'],['Echoes in Blue','The Hollow Pines',205,210,'Indie'],['Sunday Static','Mika Sato',182,50,'Jazz'],['Wildfire Hearts','The Hollow Pines',219,5,'Rock'],['Low Orbit','Nova Reyes',211,170,'Lo-fi'],['Cherry Static','Arlo & Echo',168,345,'Pop']].map(([t,a,d,h,g])=>({t,a,d,h,g}));
// Original demo lyrics (written for this prototype)
const LY=["Headlights paint the empty road|City lights are fading slow|Radio hums a quiet tune|Under a pale and sleepy moon|Windows down, we let it go|Nowhere left we need to know|Midnight drive, just you and me|Chasing what we cannot see","Paper lanterns in the air|Little wishes floating there|Hold my hand, we'll watch them climb|Carry hopes across the time|Warm light on the river bend|Every ending finds a friend|Let them rise, let them glow|Where they go, we both know","Golden hour on your face|Static dreams in a quiet place|Turn the dial, find our song|Sing it soft and sing along|Sunlight spilling through the haze|Counting down these perfect days|Hold the light before it's gone|Golden hour carries on","Neon tides along the shore|Dancing like we did before|Pulse of bass beneath our feet|Every heartbeat finds the beat|Colors crash and melt away|Stay with me until the day|Ride the wave, feel it rise|Neon tides in your eyes","Take it slow, there's time to grow|Little seeds in morning snow|Rain will fall and sun will stay|Petals open day by day|Nothing's lost and nothing's late|Good things bloom to those who wait|Breathe in deep and let it be|Slow bloom, set me free","Pixel rain on a screen of blue|Every drop a memory of you|Eight bit hearts and a blinking light|Starting over every night|Press start, we're off again|Level up and find a friend|Falling code in a neon street|Pixel rain, a perfect beat","Velvet sky above the town|Stars are slowly settling down|Whisper low and stay awhile|Let the night become a smile|Soft horizon, deep and wide|Nothing here we need to hide|Float with me on silver air|Velvet sky, we're almost there","Echoes in blue, a distant call|Footsteps in an empty hall|Memories like water flow|Where they end, I do not know|Singing to the evening tide|Nothing left for me to hide|Echoes fade but still remain|Blue and gentle like the rain","Sunday morning, coffee steam|Records spinning like a dream|Static crackles, sweet and low|Nowhere that we have to go|Newspaper and window light|Everything is feeling right|Play it slow, play it twice|Sunday static, paradise","Wildfire hearts and restless skies|Fire burning in our eyes|Raise your voice above the flame|Never gonna be the same|Run with me through the night|Chasing down the morning light|Wildfire hearts, we won't go down|Burning bright across the town","Low orbit, quiet and bright|Floating through the silent night|Earth below a tiny glow|Drifting where the soft winds blow|Weightless thoughts and slowing time|Every star begins to rhyme|Hold me close, don't let me fall|Low orbit, above it all","Cherry static, sugar sweet|Dancing on the radio beat|Spin me round and spin me twice|Everything is feeling nice|Pop the bubbles, paint the town|Nothing's gonna let us down|Cherry static in my heart|Never let this feeling part"].map(t=>t.split('|'));
const DEF={theme:'System',acc:'#fa2d48',style:'ios',quality:'Auto',eq:'Flat',xfade:true,xlen:'6 s',gapless:true,norm:true,autoplay:true,speed:'1x',sleep:'Off',lyricsBtn:true,lsize:'Medium',alyr:true,rem:false,awake:false,mini:true,mono:false,lim:false,start:'Home',explicit:true,priv:false,save:false,wifi:false,anim:true,hap:true,gm:'Liquid',gt:45,gb:20,ged:true,gtint:false,bar:'Auto'};
const MIX=[{n:'Chill Mix',ids:[0,1,4,6]},{n:'Pixel Beats',ids:[5,2,10,3]},{n:'Night Drive',ids:[0,3,8,9]},{n:'Focus Flow',ids:[4,7,10,11]},{n:'Sunday Vibes',ids:[1,8,2,11]}];
const GEN=['Pop','Indie','Electronic','Lo-fi','Rock','Jazz','Chill','Dance'];
const NAMES={ios:'iOS',pixel:'Pixel',vinyl:'Vinyl',neon:'Neon',orbit:'Orbit'};
let st={tab:'home',query:'',lib:'p',cur:-1,queue:[],playing:false,pos:0,liked:[1,4],shuffle:false,rep:0,user:null,
lyr:false,set:{...DEF}};
try{const d=JSON.parse(localStorage.getItem('mf')||'null');if(d){st.liked=d.liked||st.liked;st.user=d.user||null;Object.assign(st.set,d.set||{})}}catch(e){}
st.tab={Home:'home',Search:'search',Library:'library'}[st.set.start]||'home';
const save=()=>{try{localStorage.setItem('mf',JSON.stringify({liked:st.liked,user:st.user,set:st.set}))}catch(e){}};
const fmt=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const art=(i,sz)=>`<div class="art" style="--h:${S[i].h};width:${typeof sz=='number'?sz+'px':sz};aspect-ratio:1"></div>`;
const MATD={Liquid:20,Frost:34,Clear:8,Solid:0};
function glass(){const s=st.set,r=document.documentElement,dark=s.theme==='Dark'||(s.theme==='System'&&matchMedia('(prefers-color-scheme: dark)').matches),m=s.gm,t=1-s.gt/100,
rgb=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16));let a1,a2,b=s.gtint?rgb(s.acc):(dark?[78,78,86]:[255,255,255]);
if(m==='Solid'){a1=a2=1;b=dark?[28,28,30]:[250,250,252]}else if(m==='Frost'){a1=a2=.2+.7*t}else if(m==='Clear'){a1=.04+.3*t;a2=a1*.45}else{a1=.14+.76*t;a2=a1*.36}
const c=(a,x=b)=>`rgba(${x[0]},${x[1]},${x[2]},${a.toFixed(2)})`,v=(k,x)=>r.style.setProperty(k,x),sb=dark?[28,28,30]:[242,242,247],edge=s.ged&&m!=='Solid';
v('--gl1',c(a1));v('--gl2',c(a2));v('--blur',(m==='Solid'?0:s.gb)+'px');v('--sat',m==='Frost'?'130%':m==='Solid'?'100%':'210%');
v('--glh',edge&&m!=='Frost'?(dark?'rgba(255,255,255,.3)':'rgba(255,255,255,.95)'):'rgba(255,255,255,0)');
v('--glb',edge?(dark?'rgba(255,255,255,.16)':'rgba(255,255,255,.55)'):'rgba(255,255,255,0)');
v('--shine',edge&&(m==='Liquid'||m==='Clear')?.5:0);v('--blob',dark?'rgba(255,255,255,.18)':'rgba(120,120,128,.2)');
v('--sheetbg',c(Math.min(1,m==='Solid'?1:a1+.4),sb))}
function apply(){const r=document.documentElement,t=st.set.theme.toLowerCase();t==='system'?r.removeAttribute('data-theme'):r.setAttribute('data-theme',t);r.style.setProperty('--acc',st.set.acc);r.dataset.anim=st.set.anim?'on':'off';document.body.classList.toggle('nomini',!st.set.mini);glass()}
function hap(){if(st.set.hap&&navigator.vibrate)try{navigator.vibrate(6)}catch(e){}}
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}
const row=(i,list,k,num)=>`<div class="row" data-a="play" data-l="${list}" data-k="${k}">${num?`<span class="num">${num}</span>`:''}${art(i,48)}<div class="meta"><b class="${st.cur===i?'on':''}">${S[i].t}</b><small>${S[i].a}</small></div><span class="dur">${fmt(S[i].d)}</span></div>`;
const ALL=S.map((_,i)=>i);
function home(){const h=new Date().getHours(),g=h<12?'Good morning':h<18?'Good afternoon':'Good evening';
return `<h1 class="lt">${g}</h1><div class="chips">${[0,1,2,3,4,5].map(i=>`<div class="chip" data-a="play" data-l="${ALL}" data-k="${i}">${art(i,52)}<span>${S[i].t}</span></div>`).join('')}</div>
<div class="sec">Made for you</div><div class="hs">${MIX.map((m,i)=>`<div class="card2" data-a="mix" data-m="${i}">${art(m.ids[0],150)}<b>${m.n}</b><small>${m.ids.length} songs</small></div>`).join('')}</div>
<div class="sec">Trending now</div>${[...ALL].reverse().slice(0,8).map((i,k,a)=>row(i,a,k,k+1)).join('')}`}
function results(){const q=st.query.trim().toLowerCase();
if(!q)return `<div class="sec">Browse genres</div><div class="gts">${GEN.map((g,i)=>`<div class="gt" data-a="gen" data-g="${g}" style="background:hsl(${i*45} 70% 50%)">${g}</div>`).join('')}</div>`;
const l=ALL.filter(i=>(S[i].t+S[i].a+S[i].g).toLowerCase().includes(q));
return l.length?l.map((i,k)=>row(i,l,k)).join(''):`<p class="empty">No results for "${esc(st.query)}". Try another song, artist or genre.</p>`}
const search=()=>`<h1 class="lt">Search</h1><div class="sbar"><input id="qi" placeholder="Songs, artists, genres" value="${esc(st.query)}" autocomplete="off"></div><div id="res">${results()}</div>`;
function lib(){const t=st.lib;
const seg=`<div class="seg">${[['p','Playlists'],['l','Liked songs']].map(([k,n])=>`<button data-a="seg" data-v="${k}" class="${t===k?'on':''}">${n}</button>`).join('')}</div>`;
const b=t==='p'?MIX.map((m,i)=>`<div class="row" data-a="mix" data-m="${i}">${art(m.ids[0],56)}<div class="meta"><b>${m.n}</b><small>Playlist, ${m.ids.length} songs</small></div></div>`).join(''):(st.liked.length?st.liked.map((i,k)=>row(i,st.liked,k)).join(''):'<p class="empty">No liked songs yet. Tap the heart in the player.</p>');
return `<h1 class="lt">Library</h1>${seg}${b}`}
function prof(){const u=st.user;
return `<h1 class="lt">Profile</h1><div class="card prof"><div class="avatar">${u?esc(u.name[0].toUpperCase()):'?'}</div><div><b style="font-size:18px">${u?esc(u.name):'Guest'}</b><br><small style="color:var(--sub)">${u?esc(u.email):'Not signed in'}</small></div></div>
${u?'':`<div class="card"><b>Join MusicFlex</b><p class="fine" style="margin:6px 0 0">Save playlists and liked songs across your devices.</p><div class="btns"><button class="btn" data-a="auth" data-m="signup">Create account</button><button class="btn ghost" data-a="auth" data-m="login">Log in</button></div></div>`}
<div class="grp"><button class="li" data-a="settings"><span>Settings</span><small>&rsaquo;</small></button><button class="li" data-a="glass"><span>Glass Studio<small>Transparency and blur</small></span><small>&rsaquo;</small></button><button class="li" data-a="settings"><span>Player style<small>${NAMES[st.set.style]}</small></span><small>&rsaquo;</small></button><button class="li" data-a="about"><span>About</span><small>1.0.0 &rsaquo;</small></button>${u?'<button class="li" data-a="logout" style="color:var(--acc)">Log out</button>':''}</div>
<p class="fine" style="text-align:center">MusicFlex 1.0.0 · 2026</p>`}
function goTab(t){st.tab=t;['#tabs','#top'].forEach(x=>$(x).classList.remove('min'));document.body.classList.remove('tmin');view();scrollTo(0,0)}
const TABS=['home','search','library','profile'];let lastIx=0;
function enter(el){el.querySelectorAll('.row,.chip,.card2,.gt,.card,.grp,.seg,.sec,.tile').forEach((e,i)=>e.style.setProperty('--i',Math.min(i,16)));el.classList.remove('enter');void el.offsetWidth;el.classList.add('enter');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('enter'),1400)}
function view(na){const v=$('#view'),ix=TABS.indexOf(st.tab);v.innerHTML={home,search,library:lib,profile:prof}[st.tab]();
document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t.dataset.t===st.tab));
const bl=$('#blob');bl.parentNode.style.setProperty('--ti',ix);
if(!na){v.style.setProperty('--dx',(ix>=lastIx?30:-30)+'px');enter(v);if(ix!==lastIx){bl.classList.remove('go');void bl.offsetWidth;bl.classList.add('go')}lastIx=ix}}
$('#tabs').innerHTML='<i class="blob" id="blob"></i>'+[['home','Home'],['search','Search'],['library','Library'],['profile','Profile']].map(([k,n])=>`<button class="tab" data-a="tab" data-t="${k}">${ic(k==='profile'?'user':k)}<span>${n}</span></button>`).join('');
function refresh(){if(st.tab==='search'){const r=$('#res');r&&(r.innerHTML=results())}else view(1)}
function pix(i){let r=i*7919+13;const rnd=()=>(r=(r*1103515245+12345)&0x7fffffff)/0x7fffffff,cells=[];
for(let y=0;y<12;y++){const row=[];for(let x=0;x<6;x++)row.push(rnd()>.42?`hsl(${S[i].h+Math.floor(rnd()*70)} 80% ${35+Math.floor(rnd()*35)}%)`:'#1b1035');cells.push(...row,...[...row].reverse())}
return cells.map(b=>`<i style="background:${b};animation-delay:${rnd().toFixed(2)}s"></i>`).join('')}
const BT={ios:'line',pixel:'snake',vinyl:'groove',neon:'wave',orbit:'ring'};
const btype=()=>st.set.bar==='Auto'?BT[st.set.style]:st.set.bar.toLowerCase();
function rr(i){let r=i*7919+13;return()=>(r=(r*1103515245+12345)&0x7fffffff)/0x7fffffff}
function bar(t,i){
if(t==='snake')return `<div class="snk bx">${Array.from({length:28},(_,k)=>`<i data-a="seek" data-n="28" data-p="${k}" style="--k:${k}"></i>`).join('')}</div>`;
if(t==='wave'){const r=rr(i);return `<div class="wv bx">${Array.from({length:40},(_,k)=>`<i data-a="seek" data-n="40" data-p="${k}" style="--k:${k};--h:${Math.round(18+r()*82)}%"></i>`).join('')}</div>`}
if(t==='ring')return '';
return `<input id="rg" class="${t==='groove'?'gr':''}" type="range" min="0" max="1000" value="0">`}
const OR=118,orR=a=>OR*(1+.055*Math.sin(6*a+1));
function orbit(s,ring){const h=s.h;let o='',n='';
for(let k=0;k<=160;k++){const a=k/160*2*Math.PI,r=orR(a),q=.74*OR*(1+.07*Math.sin(5*a+2));o+=(k?'L':'M')+(160+r*Math.sin(a)).toFixed(1)+' '+(160-r*Math.cos(a)).toFixed(1);n+=(k?'L':'M')+(160+q*Math.sin(a)).toFixed(1)+' '+(160-q*Math.cos(a)).toFixed(1)}
return `<svg class="orb2" id="orb" viewBox="0 0 320 320"><defs><linearGradient id="og" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:hsl(${h} 85% 62%)"/><stop offset="1" style="stop-color:hsl(${h+50} 80% 42%)"/></linearGradient></defs><path d="${o}Z" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="1.4"/>${ring?`<path id="orp" d="${o}Z" pathLength="1" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="0 1"/>`:''}<g class="orot"><path d="${n}Z" fill="url(#og)"/><circle cx="125" cy="118" r="62" fill="#fff" opacity=".13"/><circle cx="205" cy="205" r="34" fill="#000" opacity=".08"/></g>${ring?'<circle id="odot" r="9" fill="currentColor" cx="160" cy="40"/>':''}</svg>`}
function player(){const s=S[st.cur];if(!s)return;const y=st.set.style,el=$('#pl'),t=btype();
const stage={ios:art(st.cur,'min(78vw,330px)'),pixel:`<div class="pxg">${pix(st.cur)}</div>`,
vinyl:`<div class="vin"><div class="disc">${art(st.cur,'38%')}</div><div class="arm"></div></div>`,
neon:`<div class="orb"><i class="rip"></i><i class="rip" style="animation-delay:1.2s"></i>${art(st.cur,'min(58vw,230px)')}</div>`,
orbit:orbit(s,t==='ring')}[y];
lyI=-2;const lo=st.lyr&&st.set.lyricsBtn;
el.className=`plr ps-${y} swp ls-${st.set.lsize}`+(st.playing?' pl':'')+(lo?' lyron':'');el.style.setProperty('--h',s.h);
const L=LY[st.cur].map((x,k)=>`<p data-a="lyl" data-k="${k}">${x}</p>`).join('')+'<small>Original demo lyrics</small>';
const stg=`<div class="stage st-${y}"><div class="sin">${stage}</div><div class="lyr" id="lyr">${L}</div></div>`;
const ctl=`<div class="ctl"><button class="ib sm ${st.shuffle?'on':''}" data-a="shuf">${ic('shuffle',22)}</button><button class="ib" data-a="prev">${ic('prev',28)}</button><button class="pb" id="pp" data-a="pp"></button><button class="ib" data-a="next">${ic('next',28)}</button><button class="ib sm ${st.rep?'on':''}" data-a="rep">${ic('repeat',22)}${st.rep===2?'<sup>1</sup>':''}</button></div>`;
const pb=`<div class="pbar"><button class="pbtn" data-a="opts">${ic('tune',18)}<span>Options</span></button>${st.set.lyricsBtn?`<button class="pbtn ${lo?'on':''}" data-a="lyr">${ic('lyrics',18)}<span>Lyrics</span></button>`:''}<button class="pbtn" data-a="cyc">${ic('layers',18)}<span>${NAMES[y]}</span></button></div>`;
el.innerHTML=y==='orbit'?`<div class="grab" data-a="close"></div><div class="ohd"><button class="neo" data-a="close" aria-label="Close">${ic('down',20)}</button><b>Current Track</b><button class="neo" id="lk" data-a="like" aria-label="Like">${ic('heart',20)}</button></div><div class="otime"><span id="tc">0:00</span> | <span id="td" style="color:#9a9994">${fmt(s.d)}</span></div>${stg}<h2 class="otitle">${s.t}</h2><p class="ops">${s.a}</p>${bar(t,st.cur)}${ctl}<div class="olw"><div class="oh"><span>Lyrics</span><button data-a="lyr" aria-label="Expand lyrics">${ic('expand',20)}</button></div><p id="ol"></p></div>${pb}`
:`<div class="grab" data-a="close"></div>${stg}<div class="info"><div><h2>${s.t}</h2><p>${s.a}</p></div><button class="ib" id="lk" data-a="like">${ic('heart',26)}</button></div>${bar(t,st.cur)}<div class="times"><span id="tc">0:00</span><span id="td">${fmt(s.d)}</span></div>${ctl}${pb}`;
sync();prog_()}
function miniR(){const m=$('#mini'),s=S[st.cur];if(!s)return;
m.innerHTML=`${art(st.cur,40)}<div class="meta"><b>${s.t}</b><small>${s.a}</small></div><button class="ib" id="mp" data-a="pp"></button><button class="ib" data-a="next">${ic('next',24)}</button><div class="mbar" id="mbar"></div>`;m.classList.add('on');sync()}
let wlk=null;async function wl(){try{if(st.playing&&st.set.awake&&navigator.wakeLock){if(!wlk){wlk=await navigator.wakeLock.request('screen');wlk.addEventListener('release',()=>{wlk=null})}}else if(wlk){await wlk.release();wlk=null}}catch(e){wlk=null}}
let lyI=-2;
function lyrSync(force){const l=$('#lyr');if(!l||st.cur<0)return;const n=LY[st.cur].length;let k=Math.floor((st.pos/S[st.cur].d-.06)/.88*n);k=Math.max(-1,Math.min(n-1,k));if(k===lyI&&!force)return;lyI=k;{const o=$('#ol');if(o){const Ls=LY[st.cur],j=Math.max(k,0);o.innerHTML=`<b>${Ls[j]}</b> ${Ls[j+1]||''}`}}l.querySelectorAll('p').forEach((p,i)=>p.classList.toggle('on',i===k));const el=l.children[Math.max(k,0)];if(el&&st.lyr&&st.set.alyr)l.scrollTo({top:el.offsetTop-l.clientHeight/2+el.clientHeight/2,behavior:'smooth'})}
function sync(){wl();const p=st.playing,i=p?'pause':'play';$('#pl').classList.toggle('pl',p);
const a=$('#pp');a&&(a.innerHTML=ic(i,34));const b=$('#mp');b&&(b.innerHTML=ic(i,26));
const l=$('#lk');l&&l.classList.toggle('lk',st.liked.includes(st.cur))}
let drag=false;
function prog_(){if(st.cur<0)return;const d=S[st.cur].d,p=st.pos/d,r=$('#rg');
if(r&&!drag){r.value=p*1000}r&&r.style.setProperty('--p',p*100+'%');
const c=$('#tc');c&&(c.textContent=fmt(st.pos));const td=$('#td');td&&(td.textContent=st.set.rem?'-'+fmt(Math.max(0,S[st.cur].d-st.pos)):fmt(S[st.cur].d));lyrSync();const b=$('#mbar');b&&(b.style.width=p*100+'%');
document.querySelectorAll('.bx').forEach(c=>{const n=c.children.length,h=Math.min(n-1,Math.floor(p*n));
if(c.classList.contains('snk')){let eat=0;for(let i=0;i<=h;i++)if(i%4===3)eat++;const L=3+eat;[...c.children].forEach((e,i)=>{e.className=i===h?'sh2':(i<h&&i>h-L)?'bd':(i%4===3&&i>h)?'fd':''})}
else[...c.children].forEach((e,i)=>{e.classList.toggle('f',i<=h);e.classList.toggle('cur',i===h)})});
const op=$('#orp');if(op){op.setAttribute('stroke-dasharray',p+' 1');const a=p*2*Math.PI,r=orR(a),dt=$('#odot');dt.setAttribute('cx',160+r*Math.sin(a));dt.setAttribute('cy',160-r*Math.cos(a))}}
function playList(l,k){st.queue=l;st.cur=l[k];st.pos=0;st.playing=true;trk()}
function trk(){miniR();player();refresh()}
function step(d,auto){const q=st.queue,i=q.indexOf(st.cur);let n;
if(auto&&st.rep!==2&&!st.set.autoplay){st.playing=false;st.pos=0;sync();prog_();return}
if(auto&&st.rep===2)n=i;else if(st.shuffle)n=Math.floor(Math.random()*q.length);
else{n=i+d;if(n>=q.length){if(st.rep===1||!auto)n=0;else{st.playing=false;st.pos=0;sync();prog_();return}}if(n<0)n=0}
st.cur=q[n];st.pos=0;trk()}
function toggle(){if(st.cur<0)return;st.playing=!st.playing;sync();const b=$('#pp');if(b){b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump')}}
setInterval(()=>{if(!st.playing||st.cur<0)return;st.pos+=.25*(parseFloat(st.set.speed)||1);if(st.pos>=S[st.cur].d)step(1,true);else prog_()},250);
let slT;function sleepSet(){clearTimeout(slT);const m=parseInt(st.set.sleep);if(m)slT=setTimeout(()=>{st.playing=false;sync();st.set.sleep='Off';save();toast('Sleep timer ended. Music paused.')},m*60000)}
const openFull=()=>{if(st.cur>=0){$('#full').classList.add('open');document.body.classList.add('deep')}},closeFull=()=>{$('#full').classList.remove('open');document.body.classList.remove('deep')};
let kind='';function openSheet(t,h,k){kind=k||'';$('#sht').textContent=t;$('#shb').innerHTML=h;enter($('#shb'));$('#sh').classList.add('on')}
const closeSheet=()=>{$('#sh').classList.remove('on');kind=''};
const tg=(k,l,sub)=>`<div class="li"><span>${l}${sub?`<small>${sub}</small>`:''}</span><label class="swt"><input type="checkbox" data-k="${k}" ${st.set[k]?'checked':''}><i></i></label></div>`;
const sel=(k,l,o)=>`<div class="li"><span>${l}</span><select data-k="${k}">${o.map(x=>`<option ${st.set[k]==x?'selected':''}>${x}</option>`).join('')}</select></div>`;
function setH(){const s=st.set;return `<div class="sec" style="margin-top:6px">Player style</div><div class="tiles">${[['ios','iOS','Clean and glassy','linear-gradient(#e0527a,#222)'],['pixel','Pixel','8-bit, snake bar','repeating-conic-gradient(#fa2d48 0 25%,#1b1035 0 50%) 0 0/12px 12px'],['vinyl','Vinyl','Spinning record','repeating-radial-gradient(#111 0 2px,#2a2a2a 2px 4px)'],['neon','Neon','Glow and ripples','radial-gradient(#7c3aed,#05020c)'],['orbit','Orbit','Soft light, ring bar','radial-gradient(circle,#1b1b1b 0 24%,#e4e3df 26%)']].map(([k,n,d,bg])=>`<button class="tile ${s.style===k?'on':''}" data-a="sty" data-s="${k}"><div style="background:${bg}"></div>${n}<small>${d}</small></button>`).join('')}</div>
<div class="sec">Appearance</div><div class="grp">${sel('theme','Theme',['System','Light','Dark'])}<button class="li" data-a="glass"><span>Glass Studio<small>Liquid, frosted and clear glass</small></span><small>&rsaquo;</small></button><div class="sws">${['#fa2d48','#0a84ff','#30d158','#ff9f0a','#bf5af2','#ff375f'].map(c=>`<button data-a="acc" data-c="${c}" class="${s.acc===c?'on':''}" style="background:${c}"></button>`).join('')}</div></div>
<div class="sec">Player</div><div class="grp">${tg('lyricsBtn','Show lyrics button')}${sel('lsize','Lyrics size',['Small','Medium','Large'])}${tg('alyr','Auto-scroll lyrics','Follow the song line by line')}${tg('rem','Show remaining time')}${sel('bar','Progress bar',['Auto','Line','Snake','Groove','Wave'])}${tg('awake','Keep screen awake','While music is playing')}${tg('mini','Show mini player')}</div>
<div class="sec">Playback</div><div class="grp">${tg('autoplay','Autoplay next song','Keep playing when a song ends')}${tg('xfade','Crossfade','Blend songs together')}${sel('xlen','Crossfade length',['2 s','4 s','6 s','8 s','12 s'])}${tg('gapless','Gapless playback')}${tg('norm','Normalize volume','Same loudness for every song')}${sel('speed','Playback speed',['0.5x','0.75x','1x','1.25x','1.5x','2x'])}${sel('sleep','Sleep timer',['Off','5 min','15 min','30 min','60 min'])}</div>
<div class="sec">Audio</div><div class="grp">${sel('quality','Streaming quality',['Auto','Low','Normal','High'])}${sel('eq','Equalizer',['Flat','Bass boost','Vocal','Treble','Lo-fi','Rock'])}${tg('mono','Mono audio','Same sound in both ears')}${tg('lim','Volume limiter','Protect your hearing')}</div>
<div class="sec">General</div><div class="grp">${sel('start','Start screen',['Home','Search','Library'])}${tg('explicit','Allow explicit songs')}${tg('priv','Private session','Do not save listening history')}</div>
<div class="sec">Data</div><div class="grp">${tg('save','Data saver','Lower quality on mobile data')}${tg('wifi','Download on Wi-Fi only')}<button class="li" data-a="clear"><span>Clear cache</span><small>&rsaquo;</small></button><button class="li" data-a="reset" style="color:var(--acc)"><span>Reset all settings</span></button></div>
<div class="sec">Experience</div><div class="grp">${tg('anim','Fluid animations')}${tg('hap','Haptic feedback')}</div>
<div class="sec">About</div><div class="grp"><button class="li" data-a="about"><span>About MusicFlex</span><small>1.0.0 &rsaquo;</small></button><button class="li" data-a="dev"><span>Developer</span><small>Ramanju Gaurarap &rsaquo;</small></button></div>`}
const aboutH=()=>`<div class="abt"><img class="logo" src="${LOGO}" alt=""><h2>MusicFlex</h2><p class="fine">Music, in flow.</p></div><div class="grp"><div class="li"><span>Version</span><small>1.0.0</small></div><div class="li"><span>Released</span><small>2026</small></div><button class="li" data-a="dev"><span>Developer</span><small>Ramanju Gaurarap &rsaquo;</small></button><div class="li"><span>Music source</span><small>Demo library</small></div></div><p class="fine" style="text-align:center">Made in 2026</p>`;
const devH=()=>`<div class="abt"><div class="avatar" style="width:84px;height:84px;font-size:36px;margin:0 auto 12px">R</div><h2>Ramanju Gaurarap</h2><p class="fine">Developer of MusicFlex</p></div><div class="grp"><div class="li"><span>Role</span><small>Developer</small></div><div class="li"><span>App</span><small>MusicFlex 1.0.0</small></div><div class="li"><span>Year</span><small>2026</small></div></div>`
function reSet(){const F={set:setH,glass:glassH,opts:optsH}[kind];if(!F)return;const b=$('#shb'),y=b.scrollTop;b.innerHTML=F();b.scrollTop=y}
const sld=(k,l,min,max,u)=>`<div class="li"><span>${l}<small id="v_${k}">${st.set[k]}${u}</small></span><input class="sl" type="range" min="${min}" max="${max}" value="${st.set[k]}" data-k="${k}" data-u="${u}" style="--p:${(st.set[k]-min)/(max-min)*100}%"></div>`;
const chips=(k,l,o)=>`<div class="sec2">${l}</div><div class="chps">${o.map(x=>`<button class="chp ${st.set[k]===x?'on':''}" data-a="opt" data-k="${k}" data-v="${x}">${x}</button>`).join('')}</div>`;
const optsH=()=>{const s=st.set;return `<div class="sec2" style="margin-top:4px">Player style</div><div class="chps">${Object.keys(NAMES).map(k=>`<button class="chp ${s.style===k?'on':''}" data-a="sty" data-s="${k}">${NAMES[k]}</button>`).join('')}</div>${chips('bar','Progress bar',['Auto','Line','Snake','Groove','Wave'])}${chips('speed','Playback speed',['0.75x','1x','1.25x','1.5x','2x'])}${chips('sleep','Sleep timer',['Off','5 min','15 min','30 min','60 min'])}${chips('eq','Equalizer',['Flat','Bass boost','Vocal','Treble','Lo-fi','Rock'])}${chips('lsize','Lyrics size',['Small','Medium','Large'])}<div class="sec2">Glass</div><div class="grp">${sld('gt','Transparency',0,100,'%')}${tg('ged','Edge highlights')}</div><div class="sec2">While playing</div><div class="grp">${tg('rem','Show remaining time')}${tg('alyr','Auto-scroll lyrics')}${tg('xfade','Crossfade')}<button class="li" data-a="glass"><span>Open Glass Studio</span><small>&rsaquo;</small></button></div>`};
const glassH=()=>{const s=st.set;return `<div class="gpv"><span class="c1"></span><span class="c2"></span><span class="c3"></span><div class="gpill">MusicFlex</div></div><div class="tiles">${[['Liquid','Liquid glass','Bright and bendy','linear-gradient(135deg,#a5b4fc,#f0abfc)'],['Frost','Frosted glass','Soft and milky','linear-gradient(135deg,#cbd5e1,#f1f5f9)'],['Clear','Clear glass','Almost see-through','linear-gradient(135deg,#67e8f9,#a7f3d0)'],['Solid','Solid','No blur, no glass','linear-gradient(135deg,#374151,#111827)']].map(([k,n,d,bg])=>`<button class="tile ${s.gm===k?'on':''}" data-a="mat" data-m="${k}"><div style="background:${bg}"></div>${n}<small>${d}</small></button>`).join('')}</div><div class="sec">Adjust</div><div class="grp">${sld('gt','Transparency',0,100,'%')}${sld('gb','Blur',0,60,' px')}${tg('ged','Edge highlights','Bright rim on the glass')}${tg('gtint','Tint with accent color')}</div><div class="grp"><button class="li" data-a="rglass" style="color:var(--acc)"><span>Reset glass</span></button></div><p class="fine" style="text-align:center;padding:0 20px">Applies to the menu bar, top bar, mini player and sheets.</p>`};
function auth(m){const s=m==='signup';openSheet(s?'Create account':'Log in',`<div class="pad">${s?'<input id="an" placeholder="Your name" autocomplete="name">':''}<input id="ae" type="email" placeholder="Email" autocomplete="email"><input id="ap" type="password" placeholder="Password (6+ characters)"><button class="btn" data-a="doauth" data-m="${m}">${s?'Create account':'Log in'}</button><p class="fine">Prototype: your name and email stay on this device. Passwords are not saved.</p><button class="lnk" data-a="auth" data-m="${s?'login':'signup'}">${s?'I already have an account':'Create a new account'}</button></div>`,'auth')}
document.addEventListener('click',e=>{const t=e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a,d=t.dataset;hap();
switch(a){
case'tab':goTab(d.t);break;
case'tsearch':goTab('search');break;
case'top':scrollTo({top:0,behavior:'smooth'});break;
case'play':playList(d.l.split(',').map(Number),+d.k);break;
case'mix':playList(MIX[+d.m].ids,0);break;
case'gen':st.query=d.g;view();break;
case'seg':st.lib=d.v;view();break;
case'open':openFull();break;case'close':closeFull();break;
case'pp':toggle();break;case'next':step(1);break;
case'prev':st.pos>3?(st.pos=0,prog_()):step(-1);break;
case'shuf':st.shuffle=!st.shuffle;t.classList.toggle('on',st.shuffle);break;
case'rep':st.rep=(st.rep+1)%3;player();break;
case'like':{const i=st.liked.indexOf(st.cur);i<0?st.liked.unshift(st.cur):st.liked.splice(i,1);save();sync();if(st.tab==='library')view(1);break}
case'seek':st.pos=(+d.p+.5)/(+d.n||20)*S[st.cur].d;prog_();break;
case'sty':st.set.style=d.s;save();if(st.cur>=0)player();reSet();if(st.tab==='profile')view(1);break;
case'acc':st.set.acc=d.c;save();apply();reSet();break;
case'settings':openSheet('Settings',setH(),'set');break;
case'auth':auth(d.m);break;
case'doauth':{const em=$('#ae').value.trim(),pw=$('#ap').value,nm=$('#an')?$('#an').value.trim():'';
if(!em.includes('@')||pw.length<6){toast('Enter a valid email and a password with 6+ characters');break}
st.user={name:nm||em.split('@')[0],email:em};save();closeSheet();view();toast(d.m==='signup'?'Account created':'Welcome back');break}
case'logout':st.user=null;save();view();toast('Logged out');break;
case'clear':toast('Cache cleared');break;
case'opts':openSheet('Now playing options',optsH(),'opts');break;
case'opt':st.set[d.k]=d.v;save();apply();if(d.k==='sleep')sleepSet();if(['bar','lsize'].includes(d.k)&&st.cur>=0)player();reSet();break;
case'glass':openSheet('Glass Studio',glassH(),'glass');break;
case'mat':st.set.gm=d.m;st.set.gb=MATD[d.m];save();apply();reSet();break;
case'rglass':Object.assign(st.set,{gm:DEF.gm,gt:DEF.gt,gb:DEF.gb,ged:DEF.ged,gtint:DEF.gtint});save();apply();reSet();toast('Glass reset');break;
case'lyr':st.lyr=!st.lyr;$('#pl').classList.toggle('lyron',st.lyr);t.classList.toggle('on',st.lyr);lyrSync(true);break;
case'lyl':st.pos=S[st.cur].d*(.06+.88*(+d.k)/LY[st.cur].length);prog_();break;
case'cyc':{const ks=Object.keys(NAMES);st.set.style=ks[(ks.indexOf(st.set.style)+1)%ks.length];save();player();reSet();break}
case'about':openSheet('About',aboutH(),'about');break;
case'dev':openSheet('Developer',devH(),'dev');break;
case'reset':st.set={...DEF};save();apply();reSet();if(st.cur>=0)player();toast('Settings reset');break;
case'shx':closeSheet();break}});
document.addEventListener('change',e=>{const k=e.target.dataset.k;if(!k)return;st.set[k]=e.target.type==='checkbox'?e.target.checked:e.target.type==='range'?+e.target.value:e.target.value;save();apply();if(k==='sleep')sleepSet();if(k==='theme')reSet();if(['lsize','rem','lyricsBtn','alyr','bar'].includes(k)&&st.cur>=0)player();if(k==='awake')wl()});
document.addEventListener('input',e=>{const i=e.target.id;
if(i==='qi'){st.query=e.target.value;$('#res').innerHTML=results();enter($('#res'))}
if(i==='rg'&&st.cur>=0){st.pos=e.target.value/1000*S[st.cur].d;prog_()}});
document.addEventListener('input',e=>{const k=e.target.dataset.k;if(k&&e.target.type==='range'){const v=+e.target.value;st.set[k]=v;e.target.style.setProperty('--p',((v-e.target.min)/(e.target.max-e.target.min)*100)+'%');const lab=$('#v_'+k);lab&&(lab.textContent=v+e.target.dataset.u);apply()}});
let rdrag=false;const ringSeek=e=>{const o=$('#orb');if(!o||st.cur<0)return;const b=o.getBoundingClientRect();let a=Math.atan2(e.clientX-b.left-b.width/2,-(e.clientY-b.top-b.height/2));if(a<0)a+=2*Math.PI;st.pos=a/(2*Math.PI)*S[st.cur].d;prog_()};
document.addEventListener('pointerdown',e=>{const o=e.target.closest&&e.target.closest('#orb');if(o&&$('#orp')){const b=o.getBoundingClientRect();if(Math.hypot(e.clientX-b.left-b.width/2,e.clientY-b.top-b.height/2)>.3*b.width){rdrag=true;ringSeek(e)}}});
document.addEventListener('pointermove',e=>{if(rdrag)ringSeek(e)});
document.addEventListener('pointerdown',e=>{if(e.target.id==='rg')drag=true});
['pointerup','pointercancel'].forEach(n=>document.addEventListener(n,()=>{drag=false;rdrag=false}));
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',glass)}catch(e){}
let ty=null;const F=$('#full');
F.addEventListener('touchstart',e=>{if(e.target.closest('input,button,.bx,#orb')&&!e.target.closest('.grab'))return;ty=e.touches[0].clientY},{passive:true});
F.addEventListener('touchmove',e=>{if(ty==null)return;const d=Math.max(0,e.touches[0].clientY-ty);F.style.transition='none';F.style.transform=`translateY(${d}px)`},{passive:true});
F.addEventListener('touchend',e=>{if(ty==null)return;const d=e.changedTouches[0].clientY-ty;ty=null;F.style.transition='';F.style.transform='';if(d>110)closeFull()});
let ly=0;addEventListener('scroll',()=>{const y=scrollY,d=y-ly;if(Math.abs(d)<8)return;const m=d>0&&y>80;$('#tabs').classList.toggle('min',m);$('#top').classList.toggle('min',m);document.body.classList.toggle('tmin',m);ly=y},{passive:true});
$('#top').innerHTML=`<button class="tl" data-a="top"><img class="lg" src="${LOGO}" alt=""><span>MusicFlex</span></button><div class="ta"><button class="ib" data-a="tsearch" aria-label="Search">${ic('search',22)}</button><button class="ib" data-a="settings" aria-label="Settings">${ic('gear',22)}</button></div>`;
document.querySelectorAll('.lgo').forEach(i=>i.src=LOGO);setTimeout(()=>$('#splash').classList.add('out'),1200);setTimeout(()=>$('#splash').remove(),2000);
apply();view();sleepSet();

// Offline support (PWA). Only runs on http(s), not when opening the file directly.
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
