
(() => {
  const root = document.getElementById('papaipak-article-secondary-interaction-r1');
  if (!root) return;
  const reset = root.querySelector('[data-reset]');
  const reducedInput = root.querySelector('[data-reduced]');
  const story = root.querySelector('.pp-story');
  const index = root.querySelector('.pp-index');
  const status = root.querySelector('[data-status]');
  const copy = root.querySelector('.pp-copy');
  if (!reset || !reducedInput || !story || !index || !copy || !status) return;
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const entries = [{link:story,target:copy,label:'บทความรอง'},{link:index,target:index,label:'บทความทั้งหมด'}];
  let active = [];
  let run = 0;
  function reduced() { return reducedInput.checked || media.matches; }
  function cancel() {
    run += 1;
    active.forEach(animation => animation.cancel());
    active = [];
    entries.forEach(entry => entry.link.classList.remove('pp-down'));
  }
  entries.forEach(entry => {
    const layer = document.createElement('div');
    layer.className = 'pp-reveal';
    layer.setAttribute('aria-hidden','true');
    Array.from(entry.target.children).forEach(child => layer.appendChild(child.cloneNode(true)));
    entry.target.appendChild(layer);
    entry.layer = layer;
    entry.link.addEventListener('pointerdown', event => {
      if (event.button !== 0 || reduced()) return;
      cancel();
      layer.style.clipPath = 'circle(0px at 50% 50%)';
      entry.link.classList.add('pp-down');
    });
    entry.link.addEventListener('pointerup', () => entry.link.classList.remove('pp-down'));
    entry.link.addEventListener('pointerleave', () => entry.link.classList.remove('pp-down'));
    entry.link.addEventListener('pointercancel', cancel);
    entry.link.addEventListener('click', event => {
      event.preventDefault();
      cancel();
      const thisRun = run;
      const rect = layer.getBoundingClientRect();
      const x = event.detail > 0 ? event.clientX-rect.left : rect.width/2;
      const y = event.detail > 0 ? event.clientY-rect.top : rect.height/2;
      const radius = Math.max(...[[0,0],[rect.width,0],[0,rect.height],[rect.width,rect.height]].map(([cx,cy]) => Math.hypot(cx-x,cy-y)))+2;
      const end = `circle(${radius}px at ${x}px ${y}px)`;
      const start = event.detail === 0 && entry.link.matches(':focus-visible') ? end : `circle(0px at ${x}px ${y}px)`;
      layer.style.clipPath = start;
      if (reduced() || typeof entry.link.animate !== 'function') {
        layer.style.clipPath = end;
        status.textContent = entry.label+' · จังหวะเปิดปลายทางทันที · ตัวอย่างคงภาพไว้';
        return;
      }
      const bounce = entry.link.animate([{transform:'translateY(3px)'},{transform:'translateY(-4px)',offset:.45},{transform:'translateY(0)'}],{duration:420,easing:'cubic-bezier(.22,1,.36,1)',iterations:1});
      const reveal = layer.animate([{clipPath:start},{clipPath:end}],{duration:420,easing:'cubic-bezier(.22,1,.36,1)',iterations:1,fill:'forwards'});
      active = [bounce,reveal];
      status.textContent = entry.label+' · เด้งพร้อมแผ่สีจากจุดที่กด';
      Promise.all(active.map(animation => animation.finished)).then(() => {
        if (thisRun !== run) return;
        layer.style.clipPath = end;
        active.forEach(animation => animation.cancel());
        active = [];
        status.textContent = entry.label+' · จังหวะเปิดปลายทางเมื่อครบ 420ms · ตัวอย่างคงภาพไว้';
      }).catch(() => {});
    });
    entry.link.addEventListener('auxclick',event => event.preventDefault());
  });
  function render() {
    cancel();
    root.classList.toggle('pp-reduced',reduced());
    entries.forEach(entry => { entry.layer.style.removeProperty('clip-path'); });
    status.textContent = 'ลองกดบทความรองหรือลิงก์บทความทั้งหมด · ตัวอย่างยังไม่เปิดปลายทาง';
  }
  reset.addEventListener('click',render);
  reducedInput.addEventListener('change',render);
  media.addEventListener('change',render);
  if (globalThis.lucide) lucide.createIcons({ attrs:{width:16,height:16} });
  render();
})();
