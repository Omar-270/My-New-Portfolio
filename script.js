const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));const bar=document.getElementById('scroll-progress');const update=()=>{const d=document.documentElement,m=d.scrollHeight-d.clientHeight;bar.style.width=(m?d.scrollTop/m*100:0)+'%'};addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();

// Render the DECI Level 2 certificate inside the card.
const deciCard=document.querySelector('a.certificate[href="certificates/DECI_2.jpg.png"]')||document.querySelector('a.certificate h3')?.closest('a.certificate');
if(deciCard){
  const title=deciCard.querySelector('h3');
  if(title && title.textContent.includes('Level 2')){
    deciCard.href='certificates/DECI_2.jpg.png';
    const preview=deciCard.querySelector('div[style*="height:260px"]');
    if(preview){
      const img=document.createElement('img');
      img.src='certificates/DECI_2.jpg.png';
      img.alt='DECI Level 2 certificate';
      img.style.cssText='display:block;width:100%;height:260px;object-fit:cover;object-position:top;background:#fff;';
      preview.replaceWith(img);
    }
  }
}
