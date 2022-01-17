let count = 0;
let countEl = document.getElementById('count-el');
let saveBtn= document.getElementById('save-btn');
let incrementBtn= document.getElementById('increment-btn');
let showText = document.getElementById('entry');


incrementBtn.addEventListener('click', ()=>{
  count += 1

    countEl.textContent=count;
})

saveBtn.addEventListener('click', ()=>{
        showText.textContent += count +  ' - ' ;
        count = 0;
        countEl.textContent= count;
})