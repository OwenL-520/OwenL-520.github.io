const copyButton = document.querySelector('#copy-citation');
copyButton?.addEventListener('click', async () => {
  const text = document.querySelector('#reference-text').textContent;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Citation copied.';
    copyButton.textContent = 'Copied ✓';
    window.setTimeout(() => { copyButton.textContent = 'Copy reference'; }, 2500);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#reference-text'));
    const selection = window.getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Use Ctrl+C (or Command+C) to copy.';
  }
});
