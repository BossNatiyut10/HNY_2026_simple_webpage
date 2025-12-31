const particles = 50;
const width = 500;
const height = 500;

function generateBoxShadow() {
  let shadows = [];
  for (let i = 0; i < particles; i++) {
    const x = Math.floor(Math.random() * width) - width / 2;
    const y = Math.floor(Math.random() * height) - height / 1.2;
    const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    shadows.push(`${x}px ${y}px ${color}`);
  }
  return shadows.join(', ');
}

// สร้าง <style> ใหม่ใน DOM
const styleEl = document.createElement('style');
styleEl.textContent = `
@keyframes bang {
  to {
    box-shadow: ${generateBoxShadow()};
  }
}
`;
document.head.appendChild(styleEl);
