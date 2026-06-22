document.addEventListener("DOMContentLoaded", () => {
  const statElements = document.querySelectorAll(".stat-num, .trust-big-num");
  
  if (!statElements.length) return;
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  statElements.forEach(el => {
    let textNode = null;
    for (let i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType === Node.TEXT_NODE && el.childNodes[i].nodeValue.trim() !== "") {
        textNode = el.childNodes[i];
        break;
      }
    }
    
    if (textNode) {
      const targetStr = textNode.nodeValue.trim();
      const isFloat = targetStr.includes('.');
      const targetVal = parseFloat(targetStr);
      
      if (!isNaN(targetVal)) {
        el.dataset.target = targetVal;
        el.dataset.isFloat = isFloat;
        el.dataset.textNodeIndex = Array.from(el.childNodes).indexOf(textNode);
        
        textNode.nodeValue = "0" + (isFloat ? ".0" : "");
        observer.observe(el);
      }
    }
  });
  
  function animateValue(el) {
    const target = parseFloat(el.dataset.target);
    const isFloat = el.dataset.isFloat === "true";
    const textNode = el.childNodes[parseInt(el.dataset.textNodeIndex)];
    
    const duration = 2000;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;
    
    const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutExpo(frame / totalFrames);
      let current = progress * target;
      
      if (isFloat) {
        textNode.nodeValue = current.toFixed(1);
      } else {
        textNode.nodeValue = Math.floor(current);
      }
      
      if (frame >= totalFrames) {
        clearInterval(counter);
        textNode.nodeValue = isFloat ? target.toFixed(1) : target;
      }
    }, 1000 / fps);
  }
});
