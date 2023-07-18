const adviceEl=document.getElementById('advice')
const adviceId=document.querySelector('.adviceId')
const btn=document.querySelector('.btn')

async function generateAdvice(e){
    btn.disabled = true
    const res=await fetch('https://api.adviceslip.com/advice',{
    method:'GET'  ,  
    headers:{
            'Accept':'application/json'
        }
    })

    const data=await res.json()
    adviceEl.classList.add('show')
    adviceEl.innerHTML=`"${data.slip.advice}"`
    
    adviceId.innerHTML=data.slip.id
    
    setTimeout(()=>{
        btn.disabled = false
        adviceEl.classList.remove('show')
    },1400)
    
}
generateAdvice()
btn.addEventListener('click',generateAdvice)
