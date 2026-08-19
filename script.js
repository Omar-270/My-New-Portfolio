const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));const bar=document.getElementById('scroll-progress');const update=()=>{const d=document.documentElement,m=d.scrollHeight-d.clientHeight;bar.style.width=(m?d.scrollTop/m*100:0)+'%'};addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();

// Use the uploaded DECI Level 2 image file.
const deciCard=document.querySelector('a.certificate[href="certificates/DECI_2.pdf"], a.certificate[href="certificates/DECI_2.jpg"]');
if(deciCard){
  deciCard.href='certificates/DECI_2.jpg.png';
  const preview=deciCard.querySelector('div[style*="height:260px"]');
  if(preview){
    const img=document.createElement('img');
    img.src='certificates/DECI_2.jpg.png';
    img.alt='DECI Level 2 certificate';
    preview.replaceWith(img);
  }
}
