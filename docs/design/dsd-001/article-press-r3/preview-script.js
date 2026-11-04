
(() => {
  const root = document.getElementById('papaipak-article-press-r3');
  if (!root) return;
  const story = root.querySelector('.pp-story');
  const demo = root.querySelector('[data-demo]');
  const reducedInput = root.querySelector('[data-reduced]');
  const status = root.querySelector('[data-status]');
  if (!story || !demo || !reducedInput || !status) return;
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = null;
  function reduced() { return reducedInput.checked || media.matches; }
  function cancel() {
    if (active) active.cancel();
    active = null;
    root.classList.remove('pp-down');
  }
  function release() {
    cancel();
    if (reduced() || typeof story.animate !== 'function') {
      status.textContent = 'รับการกดแล้ว · ไม่แสดงการเด้ง · ตัวอย่างยังไม่เปิดหน้าอ่าน';
      return;
    }
    const animation = story.animate([
      { transform: 'translateY(3px)', offset: 0 },
      { transform: 'translateY(-4px)', offset: 0.45 },
      { transform: 'translateY(0)', offset: 1 }
    ], { duration: 420, easing: 'cubic-bezier(.22,1,.36,1)', iterations: 1 });
    active = animation;
    animation.onfinish = () => { if (active === animation) active = null; };
    status.textContent = 'เด้งกลับครั้งเดียว · ตัวอย่างยังไม่เปิดหน้าอ่าน';
  }
  function renderReduced() {
    cancel();
    root.classList.toggle('pp-reduced', reduced());
    status.textContent = reduced() ? 'ลดการเคลื่อนไหว · กดได้โดยไม่แสดงการเด้ง' : 'กดรูปหรือปุ่มลองกด · ตัวอย่างยังไม่เปิดหน้าอ่าน';
  }
  story.addEventListener('pointerdown', event => {
    if (event.button !== 0 || reduced()) return;
    cancel();
    root.classList.add('pp-down');
  });
  story.addEventListener('pointerup', () => root.classList.remove('pp-down'));
  story.addEventListener('pointerleave', () => root.classList.remove('pp-down'));
  story.addEventListener('pointercancel', cancel);
  story.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.repeat && !reduced()) root.classList.add('pp-down');
  });
  story.addEventListener('keyup', event => { if (event.key === 'Enter') root.classList.remove('pp-down'); });
  story.addEventListener('click', event => { event.preventDefault(); release(); });
  story.addEventListener('auxclick', event => event.preventDefault());
  demo.addEventListener('click', release);
  reducedInput.addEventListener('change', renderReduced);
  media.addEventListener('change', renderReduced);
  renderReduced();
})();
