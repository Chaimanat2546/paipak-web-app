
(() => {
  const root = document.getElementById('papaipak-focus-options-r2');
  if (!root) return;
  const base = root.querySelector('[data-style="bar"] .pp-stage');
  if (!base) return;
  root.querySelectorAll('[data-style="marker"], [data-style="surface"]').forEach(variant => {
    variant.appendChild(base.cloneNode(true));
  });
  root.querySelectorAll('.pp-story').forEach(story => {
    story.addEventListener('click', event => event.preventDefault());
  });
  const state = { focused: true };
  function render() {
    root.setAttribute('data-show-focus', String(state.focused));
  }
  render();
  if (globalThis.Tweak) {
    const tweak = new Tweak({ container: root, onChange: render });
    tweak.addToggle(state, 'focused', { label: 'แสดงสถานะโฟกัส', reference: 'article.focus.visible' });
  }
  if (globalThis.lucide) lucide.createIcons({ attrs: { width: 18, height: 18 } });
})();
