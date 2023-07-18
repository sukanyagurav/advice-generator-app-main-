const adviceEl=document.getElementById('advice')
const adviceId=document.querySelector('.adviceId')
const btn=document.querySelector('.btn')

const getData=async function(){
    const res=await fetch('https://api.adviceslip.com/advice',{
        method:'GET'  ,  
        headers:{
                'Accept':'application/json'
            }
        })
        const data=await res.json()
        return data;
}
async function generateAdvice(){
    try{
        btn.disabled = true
        const data=await getData();
        adviceEl.classList.add('show')
        adviceEl.innerHTML=`"${data.slip.advice}"`
        adviceId.innerHTML=data.slip.id
      
    }
    catch(error){
        adviceEl.innerHTML=`"Can't get any advice. Try after sometime."`
    }
    setTimeout(()=>{
        btn.disabled = false
        adviceEl.classList.remove('show')
    },1400)
}
generateAdvice()
btn.addEventListener('click',generateAdvice)
