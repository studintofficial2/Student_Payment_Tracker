(function(){ // intro

const CAP_BG = 'data:image/webp;base64,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';

function cycle(){
  const stage      = document.getElementById('stage');
  const word       = document.getElementById('word');
  const letters    = Array.from(word.querySelectorAll('[data-l]'));
  const wraps      = Array.from(word.querySelectorAll('.ltr-wrap'));
  const thuds      = Array.from(word.querySelectorAll('.thud'));
  const wordline   = stage.querySelector('.wordline');
  const plane      = document.getElementById('plane');
  const trail      = document.getElementById('trail');
  const capsLayer  = document.getElementById('capsLayer');
  const tagline    = document.getElementById('tagline');
  const lineL      = document.getElementById('lineL');
  const lineR      = document.getElementById('lineR');

  const MARK_SETTLE_MS = 900;   // plane launches right as the arrow mark finishes — one continuous motion

  setTimeout(() => {
    const stageRect = stage.getBoundingClientRect();
    const planeNatural = plane.getBoundingClientRect();
    const planeW = planeNatural.width || 140;
    const planeH = planeNatural.height || 79;
    const wordlineRect = wordline.getBoundingClientRect();

    const targets = wraps.map((w,i) => {
      const r = w.getBoundingClientRect();
      return { el: letters[i], centerX: r.left + r.width/2 - stageRect.left };
    });

    const flightY = wordlineRect.top - stageRect.top - planeH - 40;
    const startX  = -planeW - 60;
    const endX    = stageRect.width + planeW + 60;
    const FLIGHT_MS = 6200;
    const trailWidth = trail.getBoundingClientRect().width || 160;

    plane.style.opacity = 1;
    trail.style.opacity = 0.85;

    let startTime = null;
    let dropped = new Array(targets.length).fill(false);
    let lastPopTime = -Infinity;
    const POP_INTERVAL_MS = 200; // faster, one-by-one release — more caps over the flight

    function spawnCap(x, y){
      const cap = document.createElement('div');
      cap.className = 'cap';
      cap.style.backgroundImage = `url("${CAP_BG}")`;
      cap.style.left = `${x}px`;
      cap.style.top = `${y}px`;

      // falls straight down like rain — quick, no hovering, no upward toss
      const dx = (Math.random()*2 - 1) * 40;
      const fall = stageRect.height - y + 140;
      const rot = (Math.random() < 0.5 ? -1 : 1) * (80 + Math.random()*140);
      const dur = 1.0 + Math.random()*0.4;

      cap.style.setProperty('--dx', dx + 'px');
      cap.style.setProperty('--fall', fall + 'px');
      cap.style.setProperty('--rot', rot + 'deg');
      cap.style.animation = `capFall ${dur}s cubic-bezier(.4,0,.75,.3) forwards`;

      capsLayer.appendChild(cap);
      cap.addEventListener('animationend', () => cap.remove());
    }

    // one "pop" = a small cluster of caps released together, with a light stagger so it reads as a burst
    function popCaps(originX, originY){
      const COUNT = 1;
      for(let i=0;i<COUNT;i++){
        setTimeout(() => {
          const jitterX = originX + (Math.random()*2 - 1) * 14;
          const jitterY = originY + (Math.random()*2 - 1) * 6;
          spawnCap(jitterX, jitterY);
        }, i * 45);
      }
    }

    function frame(ts){
      if(!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const t = Math.min(elapsed / FLIGHT_MS, 1);
      const eased = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;
      const x = startX + (endX - startX) * eased;
      const y = flightY;

      plane.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      trail.style.transform = `translate3d(${x - trailWidth}px, ${y + planeH*0.55}px, 0)`;

      targets.forEach((tg,i) => {
        if(!dropped[i] && x + planeW*0.82 >= tg.centerX){
          dropped[i] = true;
          tg.el.classList.add('drop');
          setTimeout(() => thuds[i].classList.add('hit'), 340);
        }
      });

      const originX = x + planeW*0.50;   // middle of the plane's body
      const originY = y + planeH*0.55;

      if(elapsed - lastPopTime >= POP_INTERVAL_MS && t >= 0.0 && t < 0.97){
        lastPopTime = elapsed;
        popCaps(originX, originY);
      }

      if(t < 1){
        requestAnimationFrame(frame);
      } else {
        plane.style.opacity = 0;
        trail.style.opacity = 0;
        setTimeout(() => {
          tagline.classList.add('show');
          lineL.classList.add('grow');
          lineR.classList.add('grow');
        }, 150);

        setTimeout(function(){
          try{ window.parent.postMessage('studint:introDone', '*'); }catch(err){}
        }, 1900);
      }
    }
    requestAnimationFrame(frame);
  }, MARK_SETTLE_MS);
}

function restart(){
  const oldStage = document.getElementById('stage');
  // clean any JS-spawned nodes / states before cloning so the fresh copy starts pristine
  oldStage.querySelectorAll('.cap').forEach(c => c.remove());
  oldStage.querySelectorAll('[data-l]').forEach(l => l.classList.remove('drop'));
  oldStage.querySelectorAll('.thud').forEach(t => t.classList.remove('hit'));
  const tag = oldStage.querySelector('.tagline');
  tag.classList.remove('show');
  oldStage.querySelectorAll('.tagline .line').forEach(l => l.classList.remove('grow'));
  oldStage.querySelector('.plane').style.opacity = 0;
  oldStage.querySelector('.plane-trail').style.opacity = 0;

  // cloning forces every CSS keyframe animation (bars, rim, flash) to play fresh —
  // this is what makes the logo intro loop reliably every cycle, not just once
  const newStage = oldStage.cloneNode(true);
  oldStage.parentNode.replaceChild(newStage, oldStage);
  newStage.id = 'stage';
  cycle();
}

function buildStarfield(){
  const field = document.getElementById('starfield');
  if(!field || field.childElementCount) return; // don't regenerate if a clone already carried stars over
  const COUNT = 110;
  for(let i=0;i<COUNT;i++){
    const s = document.createElement('div');
    const big = Math.random() < 0.16;
    s.className = big ? 'star big' : 'star';
    const size = big ? (2 + Math.random()*1.6) : (1 + Math.random()*1.4);
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = (Math.random()*100) + '%';
    s.style.top = (Math.random()*100) + '%';
    const dur = 2.2 + Math.random()*3.5;
    const delay = Math.random()*4;
    s.style.animationDuration = dur + 's';
    s.style.animationDelay = '-' + delay + 's';
    field.appendChild(s);
  }
}

window.addEventListener('load', () => { buildStarfield(); cycle(); });

})();

(function(){ // gate

  // Real thickness without the two failure modes we hit before:
  // - it never vanishes, because backface-visibility is left at its
  //   default (visible) — every layer always shows *something*, just
  //   mirrored during the far half of the turn, the same way a real
  //   printed decal would look from the back.
  // - it never flickers, because every layer is the same, uniform full
  //   brightness. The earlier flicker wasn't caused by hidden backfaces;
  //   it was 18 layers only ~1px apart each rendered at a *different*
  //   shade, so the browser's paint-order tie-breaking between
  //   near-coincident layers was visible as a strobe. Same layers, same
  //   brightness, no visible difference when the order settles either way.
  (function build3DLogos(){
    function run(){
      var LAYERS = 12;
      var DEPTH_STEP = 1.8; // px between each copy
      document.querySelectorAll('.logo-spin-wrap').forEach(function(wrap){
        var img = wrap.querySelector('img');
        if (!img) return;
        var src = img.getAttribute('src');
        var stage = document.createElement('div');
        stage.className = 'spin3d';
        for (var i = 0; i < LAYERS; i++){
          var copy = document.createElement('img');
          copy.src = src;
          copy.alt = '';
          var z = (i - LAYERS / 2) * DEPTH_STEP;
          copy.style.transform = 'translateZ(' + z.toFixed(1) + 'px)';
          stage.appendChild(copy);
        }
        wrap.innerHTML = '';
        wrap.appendChild(stage);
      });
    }
    if (document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  })();



(function(){
  const LETTERS = [
    {ch:'S', red:false}, {ch:'t', red:false}, {ch:'u', red:false}, {ch:'d', red:false},
    {ch:'I', red:true}, {ch:'N', red:true}, {ch:'T', red:true}
  ];

  const slotsEl = document.getElementById('slots');
  const tilesEl = document.getElementById('tiles');
  const hud = document.getElementById('hud');
  const hint = document.getElementById('hint');
  const skip = document.getElementById('skip');
  const celebration = document.getElementById('celebration');
  const burst = document.getElementById('burst');
  const scoreLine = document.getElementById('scoreLine');
  const statLine = document.getElementById('statLine');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let mistakes = 0, filled = 0, started = false, startTime = 0, done = false;
  let selectedTile = null;

  // ---------- starfield ----------
  const starCanvas = document.getElementById('gateStars');
  const sctx = starCanvas.getContext('2d');
  let stars = [];
  function resizeStars(){
    starCanvas.width = innerWidth * devicePixelRatio;
    starCanvas.height = innerHeight * devicePixelRatio;
    starCanvas.style.width = innerWidth + 'px';
    starCanvas.style.height = innerHeight + 'px';
    sctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    const count = Math.round((innerWidth*innerHeight)/9000);
    stars = Array.from({length: count}, () => ({
      x: Math.random()*innerWidth,
      y: Math.random()*innerHeight,
      r: Math.random()*1.4 + 0.3,
      phase: Math.random()*Math.PI*2,
      speed: Math.random()*0.02 + 0.008
    }));
  }
  function drawStars(t){
    sctx.clearRect(0,0,innerWidth,innerHeight);
    stars.forEach(s=>{
      const tw = reduceMotion ? 0.6 : 0.4 + 0.6*Math.abs(Math.sin(s.phase + t*s.speed));
      sctx.beginPath();
      sctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      sctx.fillStyle = `rgba(255,255,255,${tw.toFixed(2)})`;
      sctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  resizeStars();
  window.addEventListener('resize', ()=>{ resizeStars(); layoutTiles(); });
  requestAnimationFrame(drawStars);

  // ---------- build slots ----------
  LETTERS.forEach((l, i)=>{
    const s = document.createElement('div');
    s.className = 'slot';
    s.dataset.index = i;
    s.dataset.letter = l.ch.toUpperCase();
    s.dataset.display = l.ch;
    s.dataset.red = l.red ? 'true' : 'false';
    s.dataset.filled = 'false';
    const ghost = document.createElement('span');
    ghost.className = 'ghost';
    ghost.textContent = l.ch;
    s.appendChild(ghost);
    s.tabIndex = 0;
    s.setAttribute('role','button');
    s.setAttribute('aria-label', 'Position ' + (i+1) + ' for letter ' + l.ch);
    s.addEventListener('click', ()=> attemptPlace(selectedTile, s));
    s.addEventListener('keydown', (e)=>{
      if (e.key==='Enter' || e.key===' '){ e.preventDefault(); attemptPlace(selectedTile, s); }
    });
    slotsEl.appendChild(s);
  });

  // ---------- build tiles: the full alphabet, so the right letters have to be found ----------
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  pool.push('T'); // "StudINT" needs a T twice (once for Stud, once for INT)
  for (let i=pool.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [pool[i],pool[j]] = [pool[j],pool[i]];
  }

  const tiles = pool.map(letter=>{
    const b = document.createElement('button');
    b.className = 'tile neutral-letter';
    b.textContent = letter;
    b.dataset.letter = letter;
    b.setAttribute('aria-label', 'Letter ' + letter);
    tilesEl.appendChild(b);
    return b;
  });

  function tileSize(){
    const r = tiles[0].getBoundingClientRect();
    return { w: r.width, h: r.height };
  }

  function layoutTiles(){
    const slotEls = Array.from(slotsEl.children);
    const slotRects = slotEls.map(s=>s.getBoundingClientRect());
    const rowRect = slotsEl.getBoundingClientRect();
    const {w,h} = tileSize();
    const placed = [];

    tiles.forEach(tile=>{
      if (tile.classList.contains('locked')){
        const idx = +tile.dataset.slotIndex;
        const r = slotRects[idx];
        tile.style.left = r.left + 'px';
        tile.style.top = r.top + 'px';
        placed.push({x:r.left+w/2, y:r.top+h/2});
        return;
      }
      let x,y,tries=0,ok=false;
      while (tries < 60 && !ok){
        x = 12 + Math.random()*(innerWidth - w - 24);
        y = 56 + Math.random()*(innerHeight - h - 70);
        const overlapsRow = !(x+w < rowRect.left-14 || x > rowRect.right+14 || y+h < rowRect.top-14 || y > rowRect.bottom+14);
        const tooClose = placed.some(p => Math.hypot((x+w/2)-p.x, (y+h/2)-p.y) < w*0.62);
        ok = !overlapsRow && !tooClose;
        tries++;
      }
      tile.style.left = x + 'px';
      tile.style.top = y + 'px';
      placed.push({x:x+w/2, y:y+h/2});
    });
  }
  requestAnimationFrame(layoutTiles);

  // ---------- interaction ----------
  function markStart(){
    if (!started){ started = true; startTime = performance.now(); }
  }

  function selectTile(tile){
    if (selectedTile) selectedTile.classList.remove('selected');
    if (selectedTile === tile){ selectedTile = null; return; }
    selectedTile = tile;
    tile.classList.add('selected');
  }

  function attemptPlace(tile, slot){
    if (!tile || !slot || tile.classList.contains('locked') || slot.dataset.filled === 'true') return;
    markStart();
    if (tile.dataset.letter === slot.dataset.letter){
      lockTile(tile, slot);
    } else {
      mistakes++; hud.textContent = 'Mistakes: ' + mistakes;
      tile.classList.remove('selected');
      selectedTile = null;
      tile.classList.add('shake');
      setTimeout(()=> tile.classList.remove('shake'), 350);
    }
  }

  function lockTile(tile, slot){
    tile.classList.remove('selected','dragging','neutral-letter');
    tile.classList.add('locked', slot.dataset.red === 'true' ? 'red-letter' : 'white-letter');
    tile.dataset.slotIndex = slot.dataset.index;
    tile.textContent = slot.dataset.display;
    selectedTile = null;
    slot.dataset.filled = 'true';
    slot.classList.add('pulse');
    setTimeout(()=> slot.classList.remove('pulse'), 500);
    const r = slot.getBoundingClientRect();
    tile.style.left = r.left + 'px';
    tile.style.top = r.top + 'px';
    tile.tabIndex = -1;
    filled++;
    if (filled === LETTERS.length) celebrate();
  }

  let activeTile = null, offX=0, offY=0, startX=0, startY=0, moved=false;

  tiles.forEach(tile=>{
    tile.tabIndex = 0;
    tile.addEventListener('pointerdown', (e)=>{
      if (tile.classList.contains('locked')) return;
      markStart();
      activeTile = tile;
      moved = false;
      const r = tile.getBoundingClientRect();
      offX = e.clientX - r.left;
      offY = e.clientY - r.top;
      startX = e.clientX; startY = e.clientY;
      tile.setPointerCapture(e.pointerId);
      tile.classList.add('dragging');
    });
    tile.addEventListener('pointermove', (e)=>{
      if (activeTile !== tile) return;
      if (Math.hypot(e.clientX-startX, e.clientY-startY) > 6) moved = true;
      tile.style.left = (e.clientX - offX) + 'px';
      tile.style.top = (e.clientY - offY) + 'px';
    });
    tile.addEventListener('pointerup', (e)=>{
      if (activeTile !== tile) return;
      tile.classList.remove('dragging');
      activeTile = null;
      if (!moved){
        selectTile(tile);
        layoutTiles();
        return;
      }
      const r = tile.getBoundingClientRect();
      const cx = r.left + r.width/2, cy = r.top + r.height/2;
      let nearest = null, nearestDist = Infinity;
      Array.from(slotsEl.children).forEach(s=>{
        if (s.dataset.filled === 'true') return;
        const sr = s.getBoundingClientRect();
        const d = Math.hypot((sr.left+sr.width/2)-cx, (sr.top+sr.height/2)-cy);
        if (d < nearestDist){ nearestDist = d; nearest = s; }
      });
      if (nearest && nearestDist < r.width*0.75){
        attemptPlace(tile, nearest);
      }
    });
    tile.addEventListener('keydown', (e)=>{
      if (tile.classList.contains('locked')) return;
      if (e.key==='Enter' || e.key===' '){ e.preventDefault(); selectTile(tile); }
    });
  });

  // ---------- celebration ----------
  function spawnBurst(){
    burst.innerHTML = '';
    const colors = ['#ffffff', '#fa232a', '#c9b8ff'];
    const n = reduceMotion ? 0 : 46;
    for (let i=0;i<n;i++){
      const s = document.createElement('span');
      s.className = 'spark';
      s.style.background = colors[i % colors.length];
      const angle = Math.random()*Math.PI*2;
      const dist = 120 + Math.random()*260;
      s.style.setProperty('--dx', Math.cos(angle)*dist + 'px');
      s.style.setProperty('--dy', Math.sin(angle)*dist + 'px');
      burst.appendChild(s);
      requestAnimationFrame(()=>{
        s.classList.add('start');
        requestAnimationFrame(()=> s.classList.add('go'));
      });
    }
  }

  function celebrate(){
    if (done) return;
    done = true;
    hint.style.opacity = '0';
    tilesEl.style.pointerEvents = 'none';
    const elapsed = started ? (performance.now() - startTime)/1000 : 0;
    const raw = 1000 - mistakes*40 - elapsed*4;
    const score = Math.max(100, Math.min(1000, Math.round(raw/10)*10));
    scoreLine.textContent = 'Score ' + score;
    statLine.textContent = elapsed.toFixed(1) + 's · ' + mistakes + ' mistake' + (mistakes===1?'':'s');
    spawnBurst();
    celebration.classList.add('on');
    starCanvas.style.display = 'none';
    startCelebStars();
  }

  // ---------- celebration starfield (separate from the puzzle starfield, which is hidden by now) ----------
  const reduceMotion2 = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function startCelebStars(){
    const cvs = document.getElementById('celebStars');
    const cctx = cvs.getContext('2d');
    cvs.width = innerWidth * devicePixelRatio;
    cvs.height = innerHeight * devicePixelRatio;
    cvs.style.width = innerWidth + 'px';
    cvs.style.height = innerHeight + 'px';
    cctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    const count = Math.round((innerWidth*innerHeight)/7000);
    const pts = Array.from({length: count}, () => ({
      x: Math.random()*innerWidth,
      y: Math.random()*innerHeight,
      r: Math.random()*1.5 + 0.3,
      phase: Math.random()*Math.PI*2,
      speed: Math.random()*0.02 + 0.008
    }));
    function draw(t){
      if (!celebration.classList.contains('on')) return;
      cctx.clearRect(0,0,innerWidth,innerHeight);
      pts.forEach(s=>{
        const tw = reduceMotion2 ? 0.7 : 0.4 + 0.6*Math.abs(Math.sin(s.phase + t*s.speed));
        cctx.beginPath();
        cctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        cctx.fillStyle = `rgba(255,255,255,${tw.toFixed(2)})`;
        cctx.fill();
      });
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  skip.addEventListener('click', ()=>{
    markStart();
    tilesEl.innerHTML = '';
    Array.from(slotsEl.children).forEach(s=>{
      s.dataset.filled = 'true';
      const g = s.querySelector('.ghost');
      g.classList.add(s.dataset.red === 'true' ? 'red-letter' : 'white-letter');
      g.style.opacity = 1;
    });
    filled = LETTERS.length;
    celebrate();
  });

  document.getElementById('enterBtn').addEventListener('click', ()=>{
    try{ window.parent.postMessage('studint:gateEnter', '*'); }catch(err){}
  });
})();

})();

(function(){ // portal

// ---------- starfield ----------
(function(){
  const container = document.getElementById('stars');
  const count = 70;
  for(let i=0;i<count;i++){
    const s = document.createElement('div');
    s.className = 'star' + (Math.random() < 0.18 ? ' red' : '');
    const size = 1 + Math.random()*2.4;
    s.style.left = (Math.random()*100) + '%';
    s.style.top = (Math.random()*100) + '%';
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.animationDuration = (2 + Math.random()*4) + 's';
    s.style.animationDelay = (Math.random()*5) + 's';
    container.appendChild(s);
  }
  for(let i=0;i<2;i++){
    const sh = document.createElement('div');
    sh.className = 'shooting';
    sh.style.top = (10 + Math.random()*50) + '%';
    sh.style.left = (Math.random()*40) + '%';
    sh.style.animationDelay = (i*5 + Math.random()*4) + 's';
    container.appendChild(sh);
  }
})();

// ---------- student roster (only these can log in) ----------
const STUDENT_ROSTER = [
  {name:"JS", phone:"9080067021"}
];
let currentStudent = null;

const EMBEDDED = true; // always run the gated flow inside this merged single-page build

function enterApp(){
  document.getElementById('appShell').classList.add('show');
  document.getElementById('topGreeting').textContent = 'Hello, ' + currentStudent.name;
  document.getElementById('topDate').textContent = nowLabel();
  loadProfile();
  if(getProfile()){
    document.getElementById('tabBtnPayment').style.display = '';
    document.getElementById('tabBtnRecords').style.display = '';
    goToTab('payment');
  } else {
    document.getElementById('tabBtnPayment').style.display = 'none';
    document.getElementById('tabBtnRecords').style.display = 'none';
    goToTab('profile');
  }
}

if(EMBEDDED){
  window.addEventListener('message', (e)=>{
    if(e.data === 'studint:proceed' && currentStudent){
      enterApp();
    }
  });
}

document.getElementById('btnLogin').addEventListener('click', ()=>{
  const phone = document.getElementById('loginPhone').value.trim();
  const msgEl = document.getElementById('loginMsg');
  const match = STUDENT_ROSTER.find(s => s.phone === phone);
  if(!match){
    msgEl.className = 'msg show err';
    msgEl.textContent = 'This number is not registered. Contact your admin.';
    return;
  }
  currentStudent = match;
  document.getElementById('loginOverlay').style.display = 'none';
  if(EMBEDDED){
    try{ window.parent.postMessage('studint:loginSuccess', '*'); }catch(err){ enterApp(); }
  } else {
    enterApp();
  }
});

// ---------- helpers ----------
function pad(n){return n.toString().padStart(2,'0');}
function nowLabel(){
  const d = new Date();
  return d.toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long',year:'numeric'}) + ' · ' +
         d.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});
}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8);}

// ---------- tabs ----------
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-'+tab.dataset.tab).classList.add('active');
    if(tab.dataset.tab === 'records') loadRecords();
  });
});
function goToTab(name){
  document.querySelector('.tab[data-tab="'+name+'"]').click();
}

// ---------- profile (country / university) ----------
function profileKey(){ return 'studint_profile_' + (currentStudent ? currentStudent.phone : ''); }
function loadProfile(){
  try{
    const raw = localStorage.getItem(profileKey());
    if(raw){
      const p = JSON.parse(raw);
      document.getElementById('profCountry').value = p.country || '';
      document.getElementById('profUniversity').value = p.university || '';
      document.getElementById('profileStatus').innerHTML = 'Studying <b>' + (p.university||'—') + '</b>, ' + (p.country||'—');
    } else {
      document.getElementById('profileStatus').textContent = 'No study destination saved yet.';
    }
  }catch(e){}
}
function getProfile(){
  try{
    const raw = localStorage.getItem(profileKey());
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
document.getElementById('btnProfileSave').addEventListener('click', ()=>{
  const country = document.getElementById('profCountry').value.trim();
  const university = document.getElementById('profUniversity').value.trim();
  const msgEl = document.getElementById('profileMsg');
  if(!country || !university){
    msgEl.className = 'msg show err';
    msgEl.textContent = 'Please fill in both country and university/college name.';
    return;
  }
  localStorage.setItem(profileKey(), JSON.stringify({country, university}));
  msgEl.className = 'msg show ok';
  msgEl.textContent = 'Saved.';
  document.getElementById('profileStatus').innerHTML = 'Studying <b>' + university + '</b>, ' + country;
  document.getElementById('tabBtnPayment').style.display = '';
  document.getElementById('tabBtnRecords').style.display = '';
  setTimeout(()=>{ goToTab('payment'); }, 500);
});

// ---------- Google Sheet sync (Apps Script webhook) ----------
// Paste the Web App URL from your deployed Apps Script here.
// See the setup instructions provided alongside this file.
const SHEET_SYNC_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxiKDgFDQKPE2FfmTwP2bj-Qi576LuYn5t2D5oPCYqfoUKS6i3bj4hhUNJr7AXZkQSdTg/exec';
function isWebhookConfigured(){
  return !!SHEET_SYNC_WEBHOOK_URL && SHEET_SYNC_WEBHOOK_URL.indexOf('PASTE_') !== 0;
}
async function syncToSheet(payload){
  if(!isWebhookConfigured()){
    return; // not configured yet — local record is still saved
  }
  try{
    await fetch(SHEET_SYNC_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type':'text/plain'},
      body: JSON.stringify(payload)
    });
  }catch(e){
    // best-effort; local record is already saved regardless
  }
}

async function pushIndexEntry(entry){
  let idx = [];
  try{
    const raw = localStorage.getItem('studint_records-index');
    if(raw) idx = JSON.parse(raw);
  }catch(e){ idx = []; }
  idx.unshift(entry);
  if(idx.length > 500) idx = idx.slice(0,500);
  localStorage.setItem('studint_records-index', JSON.stringify(idx));
}
async function saveRecord(payload, indexSummary){
  const key = 'record:' + uid();
  localStorage.setItem('studint_' + key, JSON.stringify(payload));
  await pushIndexEntry(Object.assign({key, ts: Date.now()}, indexSummary));
  syncToSheet(payload);
  return key;
}

// ---------- file handling (<2MB, images/pdf/doc) ----------
const MAX_FILE_BYTES = 2 * 1024 * 1024;
function readFileAsDataUrl(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
let payFileData = null;
let payFileMeta = null;

document.getElementById('fileDrop').addEventListener('click', ()=>{
  document.getElementById('payFile').click();
});
document.getElementById('payFile').addEventListener('change', async (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const drop = document.getElementById('fileDrop');
  const hint = document.getElementById('fileHint');
  if(file.size > MAX_FILE_BYTES){
    drop.textContent = 'Tap to upload a file';
    hint.textContent = 'That file is ' + (file.size/1024/1024).toFixed(2) + 'MB — please choose one under 2MB.';
    payFileData = null; payFileMeta = null;
    e.target.value = '';
    return;
  }
  try{
    payFileData = await readFileAsDataUrl(file);
    payFileMeta = {name: file.name, type: file.type, size: file.size};
    drop.textContent = 'Attached: ' + file.name;
    drop.classList.add('has-file');
    hint.textContent = (file.size/1024).toFixed(0) + 'KB — tap to replace';
    const preview = document.getElementById('payPreview');
    if(file.type.startsWith('image/')){
      preview.src = payFileData;
      preview.style.display = 'block';
    } else {
      preview.style.display = 'none';
    }
  }catch(err){
    hint.textContent = 'Could not read that file — please try again.';
  }
});

document.getElementById('payCategory').addEventListener('change', (e)=>{
  document.getElementById('otherBillWrap').style.display = (e.target.value === 'Other bills') ? '' : 'none';
});

function showMsg(el, text, ok){
  el.className = 'msg show ' + (ok ? 'ok' : 'err');
  el.textContent = text;
}

// ---------- payment submit ----------
document.getElementById('btnPaySubmit').addEventListener('click', async ()=>{
  if(!currentStudent) return;
  const profile = getProfile();
  const msgEl = document.getElementById('payMsg');
  if(!profile){
    showMsg(msgEl, 'Please save your country and university on the Profile tab first.', false);
    goToTab('profile');
    return;
  }
  const categoryGroup = document.getElementById('payCategory').value;
  const otherLabel = document.getElementById('payOtherLabel').value.trim();
  const isOtherBills = categoryGroup === 'Other bills';
  if(isOtherBills && !otherLabel){
    showMsg(msgEl, "Please type what this payment is for.", false);
    return;
  }
  const category = isOtherBills ? otherLabel : categoryGroup;
  const amount = document.getElementById('payAmount').value;
  const currency = document.getElementById('payCurrency').value;
  const desc = document.getElementById('payDesc').value.trim();
  const isOptionalCategory = categoryGroup.indexOf('(optional)') !== -1;
  if((!amount || Number(amount) <= 0) && !isOptionalCategory){
    showMsg(msgEl, 'Please enter an amount.', false);
    return;
  }
  const btn = document.getElementById('btnPaySubmit');
  btn.disabled = true;
  try{
    const now = new Date();
    const timeLabel = now.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});
    await saveRecord({
      name: currentStudent.name, phone: currentStudent.phone,
      country: profile.country, university: profile.university,
      category, categoryGroup, amount, currency, description: desc,
      file: payFileData, fileMeta: payFileMeta,
      timestamp: now.toISOString()
    }, {
      name: currentStudent.name, phone: currentStudent.phone,
      category, categoryGroup, amount, currency,
      timeLabel, day: now.toDateString(),
      thumb: (payFileMeta && payFileMeta.type && payFileMeta.type.startsWith('image/')) ? payFileData : null,
      fileName: payFileMeta ? payFileMeta.name : null,
      fileData: payFileData
    });
    showMsg(msgEl, isWebhookConfigured() ? 'Payment submitted and synced.' : 'Payment submitted (saved locally — Google Sheet sync isn\'t connected yet).', true);
    document.getElementById('payAmount').value = '';
    document.getElementById('payDesc').value = '';
    document.getElementById('payOtherLabel').value = '';
    document.getElementById('payPreview').style.display = 'none';
    document.getElementById('fileDrop').textContent = 'Tap to upload a file';
    document.getElementById('fileDrop').classList.remove('has-file');
    document.getElementById('fileHint').textContent = '';
    payFileData = null; payFileMeta = null;
  }catch(e){
    showMsg(msgEl, 'Could not submit right now. Please try again.', false);
  }
  btn.disabled = false;
});

// ---------- records ----------
let currentFilter = 'all';
document.querySelectorAll('#recordsFilter .chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('#recordsFilter .chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    renderRecords();
  });
});

let cachedIndex = [];
async function loadRecords(){
  const listEl = document.getElementById('recordsList');
  listEl.innerHTML = '<div class="empty">Loading records…</div>';
  try{
    const raw = localStorage.getItem('studint_records-index');
    cachedIndex = raw ? JSON.parse(raw) : [];
  }catch(e){
    cachedIndex = [];
  }
  renderRecords();
}
function renderRecords(){
  const listEl = document.getElementById('recordsList');
  const items = cachedIndex.filter(e => currentFilter==='all' || (e.categoryGroup||e.category)===currentFilter);
  if(items.length === 0){
    listEl.innerHTML = '<div class="empty">No records yet.</div>';
    return;
  }
  listEl.innerHTML = items.map(e=>{
    const dt = new Date(e.ts);
    const dateLabel = dt.toLocaleDateString(undefined,{day:'numeric',month:'short'}) + ' · ' + (e.timeLabel||'');
    let thumb = '';
    if(e.thumb){
      thumb = '<img src="'+e.thumb+'">';
    } else if(e.fileData && e.fileName){
      thumb = '<a class="filelink" href="'+e.fileData+'" download="'+e.fileName+'">'+e.fileName+'</a>';
    }
    const amt = e.amount ? (e.currency||'') + ' ' + e.amount : '—';
    return '<div class="record">' +
      '<div class="top"><span class="type">'+(e.category||'').toUpperCase()+'</span><span class="time">'+dateLabel+'</span></div>' +
      '<div class="amount">'+ amt + '</div>' +
      '<div class="detail">'+ (e.name||'') + ' · ' + (e.phone||'') + '</div>' +
      thumb +
    '</div>';
  }).join('');
}

})();

// ---------- orchestrator: sequences intro -> login -> gate -> payment ----------
(function(){
  var screenIntro = document.getElementById('screen-intro');
  var screenGate = document.getElementById('screen-gate');
  var screenPortal = document.getElementById('screen-portal');
  var loadingOverlay = document.getElementById('loadingOverlay');

  window.addEventListener('load', function(){
    loadingOverlay.classList.add('hide');
  });

  window.addEventListener('message', function(e){
    var msg = e.data;
    if(msg === 'studint:introDone'){
      screenIntro.style.display = 'none';
      screenPortal.style.display = 'block';
    } else if(msg === 'studint:loginSuccess'){
      screenPortal.style.display = 'none';
      screenGate.style.display = 'block';
    } else if(msg === 'studint:gateEnter'){
      screenGate.style.display = 'none';
      screenPortal.style.display = 'block';
      window.postMessage('studint:proceed', '*');
    }
  });
})();
