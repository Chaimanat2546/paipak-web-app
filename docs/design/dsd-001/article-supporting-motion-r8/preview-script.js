
(() => {
  const root = document.getElementById('papaipak-supporting-motion-r8');
  if (!root) return;
  const hoverButton = root.querySelector('[data-hover]');
  const reducedInput = root.querySelector('[data-reduced]');
  const story = root.querySelector('.pp-story');
  const status = root.querySelector('[data-status]');
  if (!hoverButton || !reducedInput || !story || !status) return;
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let forced = false;
  function render() {
    const reduced = reducedInput.checked || media.matches;
    root.classList.toggle('pp-hover', forced);
    root.classList.toggle('pp-reduced', reduced);
    hoverButton.setAttribute('aria-pressed', String(forced));
    hoverButton.textContent = forced ? 'คืนภาพปกติ' : 'จำลอง hover';
    status.textContent = reduced ? 'ลดการเคลื่อนไหว · รูปและข้อความคงที่ · ลิงก์ยังไม่เชื่อม' : (forced ? 'สถานะ hover · รูปคงขนาดเดิม · ลิงก์ยังไม่เชื่อม' : 'ภาพปกติ · ข้อมูลจำลอง · ลิงก์ยังไม่เชื่อม');
  }
  hoverButton.addEventListener('click', () => { forced = !forced; render(); });
  reducedInput.addEventListener('change', render);
  media.addEventListener('change', render);
  story.addEventListener('click', event => event.preventDefault());
  render();
})();
