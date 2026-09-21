(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://api.jikan.moe/v4`,t=350,n=[1200,2e3,3e3],r=new Set([429,504]),i=new Map,a=6e5,o=Promise.resolve(),s=0;function c(e){let t=i.get(e);return t?Date.now()-t.at>a?(i.delete(e),null):t.data:null}function l(e,t){i.set(e,{at:Date.now(),data:t})}async function u(e){let n=o.then(async()=>{let n=Math.max(0,t-(Date.now()-s));return n&&await new Promise(e=>setTimeout(e,n)),s=Date.now(),e()});return o=n.catch(()=>{}),n}async function d(t,{useCache:i=!0}={}){let a=t;if(i){let e=c(a);if(e)return e}return u(async()=>{if(i){let e=c(a);if(e)return e}let o,u=1+n.length;for(let c=0;c<u;c++)try{let u=await fetch(`${e}${t}`);if(r.has(u.status)){if(o=Error(`Jikan ${u.status}`),c<n.length){await new Promise(e=>setTimeout(e,n[c])),s=Date.now();continue}throw o}if(!u.ok)throw Error(`Jikan ${u.status}`);let d=await u.json();return i&&l(a,d),d}catch(e){o=e;let t=String(e?.message||``);if((e instanceof TypeError||/Jikan (429|504)/.test(t))&&c<n.length){await new Promise(e=>setTimeout(e,n[c])),s=Date.now();continue}throw e}throw o||Error(`Jikan request failed`)})}function ee(e){return!e||e.includes(`questionmark`)}function f(e){if(!e)return`Inconnu`;if(e.includes(`,`)){let[t,n]=e.split(`,`).map(e=>e.trim());return n?`${n} ${t}`:t}return e}function p(e,{pictures:t=[]}={}){return{id:e.mal_id,name:f(e.name),nameKanji:e.name_kanji||``,nicknames:Array.isArray(e.nicknames)?e.nicknames.filter(Boolean):[],about:e.about||``,favorites:e.favorites??0,image:e.images?.jpg?.image_url||e.images?.webp?.image_url||``,url:e.url||(e.mal_id?`https://myanimelist.net/character/${e.mal_id}`:``),anime:(e.anime||[]).map(e=>({role:e.role||``,title:e.anime?.title||`Anime inconnu`,malId:e.anime?.mal_id,url:e.anime?.url||``})),pictures:t,partial:!1}}async function m(e){try{let t=((await d(`/characters/${e}/pictures`)).data||[]).map(e=>e.jpg?.large_image_url||e.jpg?.image_url||e.webp?.image_url).filter(e=>e&&!ee(e));return[...new Set(t)]}catch{return[]}}async function h(e){try{let t=(await d(`/characters/${e}/full`)).data;if(!t)throw Error(`Personnage introuvable`);let n=[];try{n=await m(e)}catch{n=[]}return p(t,{pictures:n})}catch(t){try{let n=(await d(`/characters/${e}`)).data;if(!n)throw t;let r=p(n,{pictures:await m(e)});return r.partial=!0,r}catch{throw t}}}var g=[{id:21,title:`One Piece`},{id:20,title:`Naruto`},{id:1735,title:`Naruto Shippuden`},{id:28755,title:`Boruto`},{id:269,title:`Bleach`},{id:41467,title:`Bleach: Thousand-Year Blood War`},{id:53998,title:`Bleach TYBW: The Separation`},{id:56784,title:`Bleach TYBW: The Conflict`},{id:223,title:`Dragon Ball`},{id:813,title:`Dragon Ball Z`},{id:225,title:`Dragon Ball GT`},{id:30694,title:`Dragon Ball Super`},{id:48903,title:`Dragon Ball Super: Super Hero`},{id:5114,title:`Fullmetal Alchemist: Brotherhood`},{id:121,title:`Fullmetal Alchemist`},{id:16498,title:`Attack on Titan`},{id:25777,title:`Attack on Titan Season 2`},{id:35760,title:`Attack on Titan Season 3`},{id:40028,title:`Attack on Titan: Final Season`},{id:48583,title:`Attack on Titan: Final Season Part 2`},{id:51535,title:`Attack on Titan: The Final Chapters`},{id:1535,title:`Death Note`},{id:38e3,title:`Demon Slayer`},{id:40456,title:`Demon Slayer: Mugen Train`},{id:47778,title:`Demon Slayer: Entertainment District`},{id:51019,title:`Demon Slayer: Swordsmith Village`},{id:55701,title:`Demon Slayer: Hashira Training`},{id:11061,title:`Hunter x Hunter`},{id:40748,title:`Jujutsu Kaisen`},{id:51009,title:`Jujutsu Kaisen Season 2`},{id:48561,title:`Jujutsu Kaisen 0`},{id:30276,title:`One Punch Man`},{id:34134,title:`One Punch Man Season 2`},{id:22319,title:`Tokyo Ghoul`},{id:27899,title:`Tokyo Ghoul √A`},{id:36511,title:`Tokyo Ghoul:re`},{id:37799,title:`Tokyo Ghoul:re Season 2`},{id:31964,title:`My Hero Academia`},{id:33486,title:`My Hero Academia Season 2`},{id:36456,title:`My Hero Academia Season 3`},{id:38408,title:`My Hero Academia Season 4`},{id:41587,title:`My Hero Academia Season 5`},{id:49918,title:`My Hero Academia Season 6`},{id:54789,title:`My Hero Academia Season 7`},{id:1,title:`Cowboy Bebop`},{id:44511,title:`Chainsaw Man`},{id:50265,title:`Spy x Family`},{id:53887,title:`Spy x Family Season 2`},{id:52299,title:`Solo Leveling`},{id:52991,title:`Frieren`},{id:32182,title:`Mob Psycho 100`},{id:37510,title:`Mob Psycho 100 II`},{id:50172,title:`Mob Psycho 100 III`},{id:14719,title:`JoJo's Bizarre Adventure`},{id:20899,title:`JoJo: Stardust Crusaders`},{id:26055,title:`JoJo: Stardust Crusaders Egypt`},{id:31933,title:`JoJo: Diamond Is Unbreakable`},{id:37991,title:`JoJo: Golden Wind`},{id:48661,title:`JoJo: Stone Ocean`},{id:34572,title:`Black Clover`},{id:6702,title:`Fairy Tail`},{id:11757,title:`Sword Art Online`},{id:36474,title:`Sword Art Online: Alicization`},{id:31240,title:`Re:Zero`},{id:39587,title:`Re:Zero Season 2`},{id:42203,title:`Re:Zero Season 2 Part 2`},{id:9253,title:`Steins;Gate`},{id:30484,title:`Steins;Gate 0`},{id:37521,title:`Vinland Saga`},{id:49387,title:`Vinland Saga Season 2`},{id:20583,title:`Haikyuu!!`},{id:28891,title:`Haikyuu!! Season 2`},{id:32935,title:`Haikyuu!! Season 3`},{id:38883,title:`Haikyuu!! To the Top`},{id:40776,title:`Haikyuu!! To the Top Part 2`},{id:49596,title:`Blue Lock`},{id:30,title:`Neon Genesis Evangelion`},{id:1575,title:`Code Geass`},{id:2904,title:`Code Geass R2`},{id:19815,title:`No Game No Life`},{id:24833,title:`Assassination Classroom`},{id:38691,title:`Dr. Stone`},{id:918,title:`Gintama`},{id:9969,title:`Gintama'`},{id:15417,title:`Gintama': Enchousen`},{id:28977,title:`Gintama°`},{id:22297,title:`Fate/stay night: Unlimited Blade Works`},{id:28701,title:`Fate/stay night: UBW Season 2`},{id:10087,title:`Fate/Zero`},{id:11741,title:`Fate/Zero Season 2`},{id:29803,title:`Overlord`},{id:30831,title:`KonoSuba`},{id:35790,title:`The Rising of the Shield Hero`},{id:35507,title:`Classroom of the Elite`},{id:52034,title:`Oshi no Ko`},{id:55791,title:`Oshi no Ko Season 2`},{id:47917,title:`Bocchi the Rock!`},{id:57334,title:`Dandadan`},{id:52588,title:`Kaiju No. 8`},{id:52211,title:`Mashle`},{id:46569,title:`Hell's Paradise`},{id:52347,title:`Shangri-La Frontier`},{id:54492,title:`The Apothecary Diaries`},{id:392,title:`Yu Yu Hakusho`},{id:45,title:`Rurouni Kenshin`},{id:249,title:`Inuyasha`},{id:33,title:`Berserk`},{id:3588,title:`Soul Eater`},{id:23755,title:`The Seven Deadly Sins`},{id:37430,title:`That Time I Got Reincarnated as a Slime`},{id:39535,title:`Mushoku Tensei`},{id:42897,title:`Horimiya`},{id:37999,title:`Kaguya-sama: Love is War`},{id:34599,title:`Made in Abyss`},{id:22535,title:`Parasyte: The Maxim`},{id:33352,title:`Violet Evergarden`},{id:13601,title:`Psycho-Pass`},{id:19,title:`Monster`},{id:40834,title:`Ranking of Kings`},{id:48316,title:`The Eminence in Shadow`},{id:50709,title:`Lycoris Recoil`},{id:42310,title:`Cyberpunk: Edgerunners`},{id:35737,title:`Pluto`},{id:9919,title:`Blue Exorcist`},{id:20507,title:`Noragami`},{id:22199,title:`Akame ga Kill!`},{id:18679,title:`Kill la Kill`},{id:2001,title:`Gurren Lagann`},{id:4224,title:`Toradora!`},{id:23273,title:`Your Lie in April`},{id:31043,title:`Erased`},{id:38671,title:`Fire Force`},{id:37779,title:`The Promised Neverland`},{id:38680,title:`Fruits Basket`},{id:28851,title:`A Silent Voice`},{id:32281,title:`Your Name.`},{id:889,title:`Black Lagoon`},{id:777,title:`Hellsing Ultimate`},{id:1818,title:`Claymore`},{id:1482,title:`D.Gray-man`},{id:31478,title:`Bungo Stray Dogs`},{id:205,title:`Samurai Champloo`},{id:6,title:`Trigun`},{id:6547,title:`Angel Beats!`},{id:9989,title:`Anohana`},{id:2167,title:`Clannad`},{id:28171,title:`Food Wars!`},{id:6746,title:`Durarara!!`},{id:2251,title:`Baccano!`}],_=[{id:`commun`,label:`Commun`,weight:50,color:`#94a3b8`},{id:`peu-commun`,label:`Peu commun`,weight:28,color:`#22c55e`},{id:`rare`,label:`Rare`,weight:14,color:`#3b82f6`},{id:`epique`,label:`Épique`,weight:6,color:`#a855f7`},{id:`legendaire`,label:`Légendaire`,weight:2,color:`#f59e0b`}],v=Object.fromEntries(_.map(e=>[e.id,e]));function te(e){return v[e]||v.commun}function ne(e){let t=Number(e.favorites)||0,n;n=t>=5e4?`legendaire`:t>=15e3?`epique`:t>=4e3?`rare`:t>=800?`peu-commun`:`commun`;let r=te(n);return{...e,rarity:n,rarityLabel:r.label,rarityColor:r.color,_score:t}}function y(e){return e.map(ne)}function b(e,t=5){if(!e.length)return[];let n={};for(let e of _)n[e.id]=[];for(let t of e)n[t.rarity]?.push(t);let r=[],i=new Set;for(let a=0;a<t;a++){let t=x(n[re(n,i)],i),a=x(e,i),o=t.length?t:a;if(!o.length)break;let s=o[Math.floor(Math.random()*o.length)];i.add(s.id),r.push({...s})}return r}function x(e,t){return(e||[]).filter(e=>!t.has(e.id))}function re(e,t){let n=_.map(n=>{let r=x(e[n.id],t).length;return{id:n.id,weight:r?n.weight:0}}),r=n.reduce((e,t)=>e+t.weight,0);if(!r)return`commun`;let i=Math.random()*r;for(let e of n)if(i-=e.weight,i<=0)return e.id;return n[n.length-1].id}function S(e){return typeof e==`string`&&e.includes(`nekos.best`)}function C(e){return typeof e==`string`&&(e.includes(`giphy.com`)||e.includes(`gph.is`))}function w(e){if(!e)return e;let t=e.image||``;return S(t)?e.image=e.imageStill&&!S(e.imageStill)?e.imageStill:``:t&&!e.imageStill&&!C(t)&&(e.imageStill=t),S(e.imageGif)&&delete e.imageGif,e}function T(e){if(!e)return``;if(w(e),e.rarity===`legendaire`){let t=e.imageGif;if(t&&C(t)&&!S(t))return t}let t=e.imageStill||``,n=e.image||``;return t&&!S(t)&&!C(t)?t:n&&!S(n)&&!C(n)?n:t&&!S(t)?t:n&&!S(n)?n:t||n||``}var E=3e5,D=10,O=`apo-collection`,k=`apo-packCount`,A=`apo-lastAccrualAt`,j={tab:`open`,view:`home`,characterPool:[],poolReady:!1,currentPack:[],revealIndex:-1,justRevealed:!1,collection:ae(),error:null,revealing:!1,packCount:0,lastAccrualAt:0,nextPackLeftMs:0,catalogueFilter:`all`,loadProgress:null,modal:null},M=null,N=null,ie=document.querySelector(`#app`);function ae(){try{let e=JSON.parse(localStorage.getItem(O)||`[]`);if(!Array.isArray(e))return[];for(let t of e)t&&t.rarity===`legendaire`&&(t.image&&String(t.image).includes(`nekos.best`)&&(t.image=t.imageStill&&!String(t.imageStill).includes(`nekos.best`)?t.imageStill:``),t.imageGif&&String(t.imageGif).includes(`nekos.best`)&&delete t.imageGif,w(t));return e}catch{return[]}}function oe(){localStorage.setItem(O,JSON.stringify(j.collection))}function se(){let e=localStorage.getItem(k),t=localStorage.getItem(A);if(e==null&&t==null){j.packCount=1,j.lastAccrualAt=Date.now(),P();return}let n=Number(e),r=Number(t);j.packCount=Number.isFinite(n)&&n>=0?Math.min(D,Math.floor(n)):1,j.lastAccrualAt=Number.isFinite(r)&&r>0?r:Date.now(),F()}function P(){localStorage.setItem(k,String(j.packCount)),localStorage.setItem(A,String(j.lastAccrualAt))}function F(){let e=Date.now();if(j.packCount>=D){j.lastAccrualAt=e,j.nextPackLeftMs=0,P();return}let t=Math.max(0,e-j.lastAccrualAt),n=Math.floor(t/E);if(n>0){let t=D-j.packCount,r=Math.min(t,n);j.packCount+=r,j.lastAccrualAt+=r*E,j.packCount>=D&&(j.lastAccrualAt=e),P()}j.nextPackLeftMs=j.packCount>=D?0:Math.max(0,j.lastAccrualAt+E-Date.now())}function ce(){return F(),j.packCount>0}function I(e){let t=Math.ceil(e/1e3),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}function L(){R();let e=()=>{let e=j.packCount;if(F(),j.tab===`open`&&(j.view===`home`||j.view===`loading`)){let t=document.getElementById(`open-pack`),n=document.getElementById(`pack-bank-label`),r=document.getElementById(`cooldown-label`);if(n&&(n.textContent=`Paquets : ${j.packCount} / ${D}`),j.packCount>e&&j.view===`home`&&j.poolReady){Y();return}j.packCount<=0?(t&&(t.disabled=!0,t.textContent=j.nextPackLeftMs>0?`Prochain paquet dans ${I(j.nextPackLeftMs)}`:`Aucun paquet`),r&&(r.textContent=j.nextPackLeftMs>0?`Prochain paquet dans ${I(j.nextPackLeftMs)}`:``)):j.packCount<D&&r?r.textContent=`Prochain paquet dans ${I(j.nextPackLeftMs)}`:j.packCount>=D&&r&&(r.textContent=`Banque pleine (10 / 10)`)}};e(),M=setInterval(e,1e3)}function R(){M&&=(clearInterval(M),null)}function z(e){let t=new Map(j.collection.map(e=>[e.id,e]));for(let n of e){let e=t.get(n.id);if(e)e.count=(e.count||1)+1,n.rarity===`legendaire`&&(w(e),n.imageStill&&(e.imageStill=n.imageStill),n.imageGif&&(e.imageGif=n.imageGif),U(e));else{let e={...n,count:1,animeTitle:n.animeTitle||``};e.rarity===`legendaire`&&(w(e),U(e)),t.set(n.id,e)}}j.collection=[...t.values()].sort((e,t)=>{let n=_.map(e=>e.id).reverse();return n.indexOf(e.rarity)-n.indexOf(t.rarity)||e.name.localeCompare(t.name)}),oe()}function B(){return new Set(j.collection.map(e=>e.id))}function V(){let e=Object.fromEntries(_.map(e=>[e.id,0]));for(let t of j.characterPool)e[t.rarity]!=null&&(e[t.rarity]+=1);return e}function H(){let e=Object.fromEntries(_.map(e=>[e.id,0]));for(let t of j.collection)e[t.rarity]!=null&&(e[t.rarity]+=1);return e}function U(e){if(!e||e.rarity!==`legendaire`)return;w(e);let t=j.characterPool.find(t=>t.id===e.id);t?.imageGif&&String(t.imageGif).includes(`giphy.com`)&&(e.imageGif=t.imageGif),e.imageStill&&String(e.imageStill).includes(`nekos.best`)}async function W(){se(),j.view=`loading`,j.loadProgress=null,Y(),L();try{let e=await fetch(`/anime-pack-opener/catalog.json`);if(!e.ok)throw Error(`catalog ${e.status}`);let t=await e.json();if(!Array.isArray(t)||t.length<5){j.error=`Catalogue trop petit (${Array.isArray(t)?t.length:0} personnages).`,j.poolReady=!1,j.view=`home`,Y();return}j.characterPool=y(t);for(let e of j.characterPool)U(e);for(let e of j.collection)U(e);j.poolReady=!0,j.error=null,j.view=`home`}catch{j.error=`Impossible de charger le catalogue local. Réessaie.`,j.poolReady=!1,j.view=`home`}Y()}function le(){if(j.poolReady&&ce()){if(j.characterPool.length<5){j.error=`Pas assez de personnages dans le pool.`,Y();return}if(F(),!(j.packCount<=0)){--j.packCount,P(),F(),L(),j.currentPack=b(j.characterPool,5);for(let e of j.currentPack)e.rarity===`legendaire`&&w(e);j.revealIndex=-1,j.revealing=!1,j.justRevealed=!1,j.view=`reveal`,j.tab=`open`,j.error=null,Y()}}}function G(){if(j.revealing)return;if(j.revealIndex>=j.currentPack.length-1){K();return}j.revealing=!0,j.revealIndex+=1,j.justRevealed=!0,Y(),j.justRevealed=!1;let e=j.currentPack[j.revealIndex],t=e.rarity===`legendaire`?1100:e.rarity===`epique`?900:700;setTimeout(()=>{j.revealing=!1,Y()},t)}function K(){z(j.currentPack),j.tab=`collection`,j.view=`home`,Y()}function ue(){for(;j.revealIndex<j.currentPack.length-1;)j.revealIndex+=1;j.revealing=!1,j.justRevealed=!1,Y(),setTimeout(K,400)}function de(e){j.tab=e,e===`open`&&j.view===`reveal`&&j.currentPack.length||e===`open`&&(j.view=j.poolReady?`home`:`loading`),Y()}function fe(e){let t=Number(e);return j.collection.find(e=>e.id===t)||j.characterPool.find(e=>e.id===t)||j.currentPack.find(e=>e.id===t)||null}function pe(e){return{id:e.id,name:e.name,nameKanji:``,nicknames:[],about:``,favorites:e.favorites??0,image:T(e)||e.image||``,url:e.id?`https://myanimelist.net/character/${e.id}`:``,anime:e.animeTitle?[{role:e.role||``,title:e.animeTitle,malId:e.animeId,url:``}]:[],pictures:[],partial:!0,fromLocal:!0}}async function q(e){let t=typeof e==`object`?e:fe(e);if(!t?.id)return;let n=pe(t);j.modal={status:`loading`,card:t,detail:n,error:null,limited:!1},Y();try{let e=await h(t.id);if(!j.modal||j.modal.card?.id!==t.id)return;j.modal={status:`ready`,card:t,detail:e,error:null,limited:!!e.partial}}catch{if(!j.modal||j.modal.card?.id!==t.id)return;j.modal={status:`limited`,card:t,detail:n,error:null,limited:!0}}Y()}function J(){j.modal=null,Y()}function Y(){ie.innerHTML=`
    <div class="bg-orbs" aria-hidden="true"></div>
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark">✦</span>
        <div>
          <h1>Anime Pack Opener</h1>
          <p class="tagline">Booster TCG · pool global MyAnimeList</p>
        </div>
      </div>
      <div class="topbar-meta">
        <span class="pill">${j.collection.length} cartes</span>
        <span class="pill pack-pill">Paquets ${j.packCount}/${D}</span>
      </div>
    </header>

    <nav class="tabs" role="tablist" aria-label="Navigation">
      <button type="button" class="tab ${j.tab===`open`?`active`:``}" data-tab="open" role="tab" aria-selected="${j.tab===`open`}">Ouvrir</button>
      <button type="button" class="tab ${j.tab===`collection`?`active`:``}" data-tab="collection" role="tab" aria-selected="${j.tab===`collection`}">Collection</button>
      <button type="button" class="tab ${j.tab===`catalogue`?`active`:``}" data-tab="catalogue" role="tab" aria-selected="${j.tab===`catalogue`}">Catalogue</button>
    </nav>

    <main class="main">
      ${j.error?`<div class="banner error" role="alert">${Q(j.error)}</div>`:``}
      ${j.tab===`collection`?ye():j.tab===`catalogue`?be():me()}
    </main>
    <footer class="footer">
      Pool via catalogue local · détail <a href="https://jikan.moe" target="_blank" rel="noopener">Jikan</a> · GIFs légendaires <a href="https://giphy.com" target="_blank" rel="noopener">Giphy</a>
    </footer>
    ${j.modal?xe():``}
  `,Se()}function me(){switch(j.view){case`loading`:return ge();case`reveal`:return _e();default:return he()}}function he(){F();let e=j.poolReady&&j.packCount>0,t=j.characterPool.length,n=j.packCount<D,r=`Ouvrir un booster`;return j.poolReady?j.packCount<=0&&(r=j.nextPackLeftMs>0?`Prochain paquet dans ${I(j.nextPackLeftMs)}`:`Aucun paquet`):r=`Chargement…`,`
    <section class="panel home-panel center-panel">
      <h2>Booster global</h2>
      <p class="lead">
        Un pool unique tiré de ${g.length} animes populaires
        ${t?` · <strong>${t}</strong> personnages`:``}.
      </p>

      <p class="pack-bank" id="pack-bank-label">Paquets : ${j.packCount} / ${D}</p>

      <button type="button" class="pack-closed ${e?``:`disabled`}" id="open-pack-visual" ${e?``:`disabled`} aria-label="Ouvrir le booster">
        <div class="pack-art">
          <span class="pack-shine"></span>
          <strong>BOOSTER</strong>
          <em>Pool global</em>
          <span class="pack-count">5 cartes</span>
        </div>
      </button>

      <div class="home-actions">
        <button type="button" class="btn primary" id="open-pack" ${e?``:`disabled`}>
          ${r}
        </button>
        ${n?`<p class="cooldown-label" id="cooldown-label">Prochain paquet dans ${I(j.nextPackLeftMs)}</p>`:`<p class="cooldown-label" id="cooldown-label">Banque pleine (10 / 10)</p>`}
        <p class="hint">+1 paquet toutes les 5 minutes · max ${D}</p>
      </div>
    </section>
  `}function ge(){return`
    <section class="panel center-panel">
      <div class="spinner"></div>
      <h2>Chargement du catalogue…</h2>
      <p class="lead" id="load-progress">Préparation du pool global</p>
      <p class="muted">Catalogue local · démarrage instantané</p>
    </section>
  `}function _e(){let e=j.currentPack,t=j.revealIndex,n=t>=e.length-1&&!j.revealing,r=t>=0?e[t]:null;return`
    <section class="panel reveal-panel">
      <div class="reveal-header">
        <span class="pill ghost-pill">Pool global</span>
        <h2>Ouverture du booster</h2>
        <p class="progress">${Math.max(0,t+1)} / ${e.length}</p>
      </div>

      <div class="stage">
        ${t<0?`
          <button type="button" class="pack-closed" id="open-first" aria-label="Révéler la première carte">
            <div class="pack-art">
              <span class="pack-shine"></span>
              <strong>BOOSTER</strong>
              <em>Pool global</em>
              <span class="pack-count">5 cartes</span>
            </div>
          </button>
          <p class="hint">Touche le booster pour révéler la première carte</p>
        `:ve(r,j.justRevealed)}
      </div>

      <div class="reveal-trail">
        ${e.map((e,n)=>n>t?`<div class="trail-slot locked">?</div>`:`<button type="button" class="trail-slot rarity-${e.rarity} clickable" data-char-id="${e.id}" title="${$(e.name)}">
              <img src="${$(T(e))}" alt="" />
            </button>`).join(``)}
      </div>

      <div class="reveal-actions">
        ${t<0?``:n?`<button type="button" class="btn primary" id="to-collection">Voir la collection</button>`:`
                <button type="button" class="btn primary" id="reveal-next" ${j.revealing?`disabled`:``}>
                  ${j.revealing?`Révélation…`:`Carte suivante`}
                </button>
                <button type="button" class="btn ghost" id="skip-all" ${j.revealing?`disabled`:``}>Tout révéler</button>
              `}
      </div>
    </section>
  `}function ve(e,t){return e?`
    <button type="button" class="tcg-card clickable-card ${t?`flip-in`:``} ${`glow-${e.rarity}`} rarity-${e.rarity}" data-rarity="${e.rarity}" data-char-id="${e.id}" aria-label="Voir ${$(e.name)}">
      <div class="tcg-inner">
        <div class="tcg-frame">
          <span class="rarity-badge" style="--rc:${e.rarityColor}">${Q(e.rarityLabel)}</span>
          <div class="tcg-art">
            <img src="${$(T(e))}" alt="${$(e.name)}" />
          </div>
          <div class="tcg-footer">
            <h3>${Q(e.name)}</h3>
            <span class="role">${Q(Z(e.role))}${e.animeTitle?` · ${Q(e.animeTitle)}`:``}</span>
          </div>
        </div>
      </div>
    </button>
  `:``}function ye(){let e=V(),t=H(),n=j.currentPack,r=n.length>0&&j.revealIndex>=n.length-1;return`
    <section class="panel collection-panel">
      <div class="reveal-header">
        <h2>Ma collection</h2>
        <p class="lead">${j.collection.length} carte(s) unique(s) · pool ${j.characterPool.length||`…`}</p>
      </div>

      <h3 class="section-title">Progression par rareté</h3>
      <div class="stats-grid">
        ${_.map(n=>{let r=t[n.id]||0,i=e[n.id]||0,a=i?`${r} / ${i}`:`${r} / —`;return`
            <div class="stat-chip" style="--rc:${n.color}">
              <span class="stat-dot"></span>
              <span class="stat-label">${Q(n.label)}</span>
              <strong class="stat-value">${a}</strong>
            </div>`}).join(``)}
      </div>

      ${r?`
      <h3 class="section-title">Dernier booster</h3>
      <div class="pack-grid">
        ${n.map(e=>X(e)).join(``)}
      </div>`:``}

      <h3 class="section-title">Cartes possédées (${j.collection.length})</h3>
      <div class="legend">
        ${_.map(e=>`<span style="--rc:${e.color}"><i></i>${Q(e.label)}</span>`).join(``)}
      </div>
      <div class="collection-grid">
        ${j.collection.length?j.collection.map(e=>X(e,!0)).join(``):`<p class="muted">Aucune carte pour l’instant. Ouvre un booster !</p>`}
      </div>
    </section>
  `}function be(){let e=V(),t=B(),n=j.catalogueFilter,r=[...n===`all`?j.characterPool:j.characterPool.filter(e=>e.rarity===n)].sort((e,t)=>{let n=_.map(e=>e.id).reverse();return n.indexOf(e.rarity)-n.indexOf(t.rarity)||e.name.localeCompare(t.name)});return`
    <section class="panel catalogue-panel">
      <div class="reveal-header">
        <h2>Catalogue</h2>
        <p class="lead">${j.characterPool.length||0} cartes dans le pool global</p>
      </div>

      <h3 class="section-title">Total par rareté</h3>
      <div class="stats-grid">
        ${_.map(t=>{let r=e[t.id]||0;return`
            <button type="button" class="stat-chip filter-chip ${n===t.id?`active`:``}" style="--rc:${t.color}" data-rarity-filter="${t.id}">
              <span class="stat-dot"></span>
              <span class="stat-label">${Q(t.label)}</span>
              <strong class="stat-value">${r}</strong>
            </button>`}).join(``)}
      </div>

      <div class="filter-bar">
        <button type="button" class="chip ${n===`all`?`active`:``}" data-rarity-filter="all">Toutes (${j.characterPool.length})</button>
        ${_.map(e=>`<button type="button" class="chip ${n===e.id?`active`:``}" data-rarity-filter="${e.id}" style="--rc:${e.color}">${Q(e.label)}</button>`).join(``)}
      </div>

      <h3 class="section-title">Toutes les cartes (${r.length})</h3>
      <div class="legend">
        ${_.map(e=>`<span style="--rc:${e.color}"><i></i>${Q(e.label)}</span>`).join(``)}
        <span class="owned-legend"><i class="owned-dot"></i>Possédée</span>
      </div>
      <div class="collection-grid">
        ${j.poolReady?r.length?r.map(e=>X(e,!1,t.has(e.id))).join(``):`<p class="muted">Aucune carte pour ce filtre.</p>`:`<p class="muted">Chargement du pool…</p>`}
      </div>
    </section>
  `}function X(e,t=!1,n=!1){let r=n?`owned`:``;return`
    <article class="mini-card clickable-card rarity-${e.rarity} ${r}" data-char-id="${e.id}" role="button" tabindex="0" aria-label="Voir ${$(e.name)}">
      <div class="mini-art">
        <img src="${$(T(e))}" alt="${$(e.name)}" loading="lazy" />
        <span class="mini-badge" style="--rc:${e.rarityColor}">${Q(e.rarityLabel)}</span>
        ${t&&e.count>1?`<span class="count">×${e.count}</span>`:``}
        ${n?`<span class="owned-badge">✓</span>`:``}
      </div>
      <p class="mini-name">${Q(e.name)}</p>
      ${e.animeTitle?`<p class="mini-anime">${Q(e.animeTitle)}</p>`:``}
    </article>
  `}function xe(){let e=j.modal;if(!e)return``;let t=e.card||{},n=e.detail,r=e.limited||e.status===`limited`,i=e.status===`loading`,a=``;if(!n&&e.status===`error`)a=`
      <div class="modal-error">
        <p>${Q(e.error||`Erreur`)}</p>
        <button type="button" class="btn ghost" id="modal-retry" data-char-id="${t.id}">Réessayer</button>
      </div>`;else if(n){let e=n.nicknames||[],o=n.anime||[],s=(n.pictures||[]).filter(Boolean),c=s.length>1,l=r&&!i&&(!e.length||o.length<=1);a=`
      ${i?`<div class="modal-loading-inline"><div class="spinner sm"></div><span>Enrichissement des infos…</span></div>`:l?`<div class="modal-loading-inline muted">
                <button type="button" class="btn ghost sm" id="modal-retry" data-char-id="${t.id}">Réessayer l’enrichissement</button>
              </div>`:``}
      <div class="modal-hero">
        <div class="modal-art rarity-${t.rarity||`commun`}">
          <img src="${$(T(t)||n.image||t.image||``)}" alt="${$(n.name||t.name)}" />
        </div>
        <div class="modal-meta">
          <h2 id="modal-title">${Q(n.name||t.name)}</h2>
          ${n.nameKanji?`<p class="modal-kanji">${Q(n.nameKanji)}</p>`:``}
          ${t.rarityLabel?`<span class="rarity-badge inline-badge" style="--rc:${t.rarityColor||`#94a3b8`}">${Q(t.rarityLabel)}</span>`:``}
          ${t.role?`<p class="modal-role">${Q(Z(t.role))}${t.animeTitle?` · ${Q(t.animeTitle)}`:``}</p>`:``}
          <p class="modal-fav">★ ${Number(n.favorites||t.favorites||0).toLocaleString(`fr-FR`)} favoris</p>
          ${e.length?`<p class="modal-nicks"><span class="muted">Surnoms :</span> ${e.map(e=>Q(e)).join(`, `)}</p>`:``}
          ${n.url?`<a class="btn ghost sm mal-link" href="${$(n.url)}" target="_blank" rel="noopener">Voir sur MyAnimeList</a>`:``}
        </div>
      </div>
      ${c?`<div class="modal-section">
              <h3>Galerie (${s.length})</h3>
              <div class="modal-gallery">
                ${s.slice(0,24).map(e=>`<a class="gallery-thumb" href="${$(e)}" target="_blank" rel="noopener"><img src="${$(e)}" alt="" loading="lazy" /></a>`).join(``)}
              </div>
            </div>`:``}
      <div class="modal-section">
        <h3>Apparitions anime (${o.length})</h3>
        ${o.length?`<ul class="modal-anime-list">${o.slice(0,40).map(e=>`<li><strong>${Q(e.title)}</strong> <span class="muted">· ${Q(Z(e.role)||e.role||`—`)}</span></li>`).join(``)}${o.length>40?`<li class="muted">… et ${o.length-40} autres</li>`:``}</ul>`:`<p class="muted">Aucune apparition listée.</p>`}
      </div>`}return`
    <div class="modal-backdrop" id="modal-backdrop" role="presentation">
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" class="modal-close" id="modal-close" aria-label="Fermer">×</button>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function Z(e){let t=(e||``).toLowerCase();return t===`main`?`Principal`:t===`supporting`?`Secondaire`:e?`Caméo`:``}function Q(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function $(e){return Q(e).replace(/'/g,`&#39;`)}function Se(){document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>de(e.dataset.tab))});let e=()=>le();document.getElementById(`open-pack`)?.addEventListener(`click`,e),document.getElementById(`open-pack-visual`)?.addEventListener(`click`,e),document.getElementById(`open-first`)?.addEventListener(`click`,G),document.getElementById(`reveal-next`)?.addEventListener(`click`,G),document.getElementById(`skip-all`)?.addEventListener(`click`,ue),document.getElementById(`to-collection`)?.addEventListener(`click`,K),document.querySelectorAll(`[data-rarity-filter]`).forEach(e=>{e.addEventListener(`click`,()=>{j.catalogueFilter=e.dataset.rarityFilter||`all`,Y()})}),document.querySelectorAll(`[data-char-id]`).forEach(e=>{if(e.id===`modal-retry`)return;let t=t=>{t.preventDefault(),t.stopPropagation(),q(e.dataset.charId)};e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&t(e)})}),document.getElementById(`modal-close`)?.addEventListener(`click`,J),document.getElementById(`modal-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`modal-backdrop`&&J()}),document.getElementById(`modal-retry`)?.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),q(e.currentTarget.dataset.charId)}),N&&=(document.removeEventListener(`keydown`,N),null),j.modal&&(N=e=>{e.key===`Escape`&&J()},document.addEventListener(`keydown`,N))}W();