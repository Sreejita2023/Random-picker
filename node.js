const tagsEl=document.querySelector('#tags')
const textarea=document.querySelector('#textarea')

textarea.focus()

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomSelect()
    }
})

function createTags(input){
    const tags=input.split(',').filter(tap=>tap.trim()!='').map(tap=>tap.trim())
    console.log(tags)
    tagsEl.innerHTML=''
    tags.forEach(tag => {
        const tagEl=document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText=tag
        tagsEl.appendChild(tagEl)
    });
}
 
function randomSelect(){
    const times=30
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag()
        if(randomTag!=undefined){
            highlightTag(randomTag)
            setTimeout(()=>{
                unhighlightTag(randomTag)
            },100)
        }
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag=pickRandomTag()
            highlightTag(randomTag)
        },100)
        
    },times*100)
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function  highlightTag(input){
    input.classList.add('highlight')
}
function  unhighlightTag(input){
    input.classList.remove('highlight')
}