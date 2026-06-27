const box=document.getElementById('faq');
function render(list){
box.innerHTML='';
list.forEach(f=>{
const el=document.createElement('div');
el.className='item';
el.innerHTML=`<div class="question"><span>${f.question}</span><span class="symbol">+</span></div><div class="answer">${f.answer}</div>`;
const q=el.querySelector('.question');
q.onclick=()=>{
el.classList.toggle('open');
el.querySelector('.symbol').textContent=el.classList.contains('open')?'−':'+';
};
box.appendChild(el);
});
}
render(faq);
document.getElementById('search').addEventListener('input',e=>{
const t=e.target.value.toLowerCase();
render(faq.filter(x=>x.question.toLowerCase().includes(t)||x.answer.toLowerCase().includes(t)));
});
document.getElementById('openAll').onclick=()=>document.querySelectorAll('.item').forEach(i=>{i.classList.add('open');i.querySelector('.symbol').textContent='−';});
document.getElementById('closeAll').onclick=()=>document.querySelectorAll('.item').forEach(i=>{i.classList.remove('open');i.querySelector('.symbol').textContent='+';});
