document.getElementById('text-input').addEventListener('input', function () {
    const text = this.value.trim();
    const wordCount = text === '' ? 0 : text.split(/\s+/).length;
    const charCount = text.length;
    
    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
});
