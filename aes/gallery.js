const defaultAccent = getComputedStyle(document.documentElement)
  .getPropertyValue('--accent-color1')
  .trim();

document.querySelectorAll('.grid-entry').forEach(entry => {
    const id = entry.id;
    var color = entry.dataset.color

    if (color == undefined) {
        color = defaultAccent;
    }
  
    entry.style.cssText += `background-image: url('cover/${id}.webp'); color: ${color};`;

    
    ['pointerenter', 'focusin'].forEach(t => {
        entry.addEventListener(t, () => {
            document.documentElement.style.setProperty('--accent-color1', color);
        });
    });

    ['pointerleave', 'focusout'].forEach(t => {
        entry.addEventListener(t, () => {
            document.documentElement.style.setProperty('--accent-color1', defaultAccent);
        });
    });
});
