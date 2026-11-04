
(() => {
  const root = document.getElementById('papaipak-article-press-r4');
  if (!root) return;
  const story = root.querySelector('.pp-story');
  const demo = root.querySelector('[data-demo]');
  const reducedInput = root.querySelector('[data-reduced]');
  const status = root.querySelector('[data-status]');
  const reset = root.querySelector('[data-reset]');
  const caption = root.querySelector('.pp-caption');
  if (!story || !demo || !reducedInput || !status || !reset || !caption) return;
  const layer = document.createElement('div');
  layer.className = 'pp-reveal';
  layer.setAttribute('aria-hidden', 'true');
  Array.from(caption.children).forEach(child => layer.appendChild(child.cloneNode(true)));
  caption.appendChild(layer);
  if (globalThis.lucide) lucide.createIcons({ attrs: { width: 18, height: 18 } });
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = [];
  let run = 0;
  function reduced() { return reducedInput.checked || media.matches; }
  function cancel() {
    run += 1;
    active.forEach(animation => animation.cancel());
    active = [];
    root.classList.remove('pp-down');
  }
  function release(point) {
    cancel();
    const thisRun = run;
    const rect = caption.getBoundingClientRect();
    const x = point ? point.x - rect.left : rect.width / 2;
    const y = point ? point.y - rect.top : rect.height / 2;
    const radius = Math.max(...[[0,0],[rect.width,0],[0,rect.height],[rect.width,rect.height]].map(([cx,cy]) => Math.hypot(cx-x,cy-y))) + 2;
    const start = `circle(0px at ${x}px ${y}px)`;
    const end = `circle(${radius}px at ${x}px ${y}px)`;
    layer.style.clipPath = start;
    if (reduced() || typeof story.animate !== 'function') {
      layer.style.clipPath = end;
      status.textContent = 'จังหวะเปิดบทความ · ไม่แสดงการเคลื่อนไหว · ตัวอย่างคงภาพไว้';
      return;
    }
    const animation = story.animate([
      { transform: 'translateY(3px)', offset: 0 },
      { transform: 'translateY(-4px)', offset: 0.45 },
      { transform: 'translateY(0)', offset: 1 }
    ], { duration: 420, easing: 'cubic-bezier(.22,1,.36,1)', iterations: 1 });
    const reveal = layer.animate([{clipPath:start},{clipPath:end}], {duration:420,easing:'cubic-bezier(.22,1,.36,1)',iterations:1,fill:'forwards'});
    active = [animation, reveal];
    status.textContent = 'เด้งพร้อมแผ่สีจากจุดที่กด';
    Promise.all(active.map(item => item.finished)).then(() => {
      if (thisRun !== run) return;
      layer.style.clipPath = end;
      active.forEach(item => item.cancel());
      active = [];
      status.textContent = 'จังหวะเปิดบทความ · ครบ 420ms · ตัวอย่างคงภาพไว้';
    }).catch(() => {});
  }
  function renderReduced() {
    cancel();
    layer.style.clipPath = 'circle(0px at 50% 50%)';
    root.classList.toggle('pp-reduced', reduced());
    status.textContent = reduced() ? 'ลดการเคลื่อนไหว · กดได้โดยไม่แสดงการเด้ง' : 'กดรูปหรือปุ่มลองกด · ตัวอย่างยังไม่เปิดหน้าอ่าน';
  }
  story.addEventListener('pointerdown', event => {
    if (event.button !== 0 || reduced()) return;
    cancel();
    layer.style.clipPath = 'circle(0px at 50% 50%)';
    root.classList.add('pp-down');
  });
  story.addEventListener('pointerup', () => root.classList.remove('pp-down'));
  story.addEventListener('pointerleave', () => root.classList.remove('pp-down'));
  story.addEventListener('pointercancel', cancel);
  story.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.repeat && !reduced()) root.classList.add('pp-down');
  });
  story.addEventListener('keyup', event => { if (event.key === 'Enter') root.classList.remove('pp-down'); });
  story.addEventListener('click', event => {
    event.preventDefault();
    release(event.detail > 0 ? {x:event.clientX,y:event.clientY} : null);
  });
  story.addEventListener('auxclick', event => event.preventDefault());
  demo.addEventListener('click', () => release(null));
  reset.addEventListener('click', renderReduced);
  reducedInput.addEventListener('change', renderReduced);
  media.addEventListener('change', renderReduced);
  renderReduced();
})();
