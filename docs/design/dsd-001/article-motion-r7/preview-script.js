
(() => {
  const root = document.getElementById('papaipak-motion-r7');
  if (!root) return;
  const hoverButton = root.querySelector('[data-hover]');
  const reducedInput = root.querySelector('[data-reduced]');
  const story = root.querySelector('.pp-story');
  const status = root.querySelector('[data-status]');
  if (!hoverButton || !reducedInput || !story || !status) return;
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let forceHover = false;
  function render() {
    const reduced = reducedInput.checked || media.matches;
    root.classList.toggle('pp-hover', forceHover);
    root.classList.toggle('pp-reduced', reduced);
    hoverButton.setAttribute('aria-pressed', String(forceHover));
    hoverButton.textContent = forceHover ? 'คืนภาพปกติ' : 'จำลอง hover';
    status.textContent = reduced ? 'ลดการเคลื่อนไหว · ภาพคงที่ · ลิงก์ยังไม่เชื่อม' : (forceHover ? 'สถานะ hover · ขยายทั้งกรอบรูป · ลิงก์ยังไม่เชื่อม' : 'ภาพปกติ · ข้อมูลจำลอง · ลิงก์ยังไม่เชื่อม');
  }
  hoverButton.addEventListener('click', () => { forceHover = !forceHover; render(); });
  reducedInput.addEventListener('change', render);
  media.addEventListener('change', render);
  story.addEventListener('click', event => { event.preventDefault(); });
  render();
})();
