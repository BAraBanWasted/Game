let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')
let but4 = document.getElementById('but4')
let but5 = document.getElementById('but5')
let out = document.getElementById('out')

but1.onclick = function() {
    human = 'e' 
    humturn('земля')
}
but2.onclick = function() {
    human='v'
    humturn('вода')
}
but3.onclick = function() {
    human='z'
    humturn('ветер')
}
but4.onclick = function() {
    human='m'
    humturn('молния')
}
but5.onclick = function() {
    human='o'
    humturn('огонь')
}

const variant = ['e','v','z','m','o']
const win = ['vo','oz','zm','me','ev']
const loose = ['ve','ov','zo','mz','em']
let human=''
let comp=''
let pobeda=''

function humturn(turn){
    console.log('вы выбрали',turn)
    compturn()
}

function compturn(){
    let r=Math.floor(Math.random()*5)
    console.log('комп выбрал',variant[r])
    comp=variant[r]
    result()
}

function result(){
    console.log(human,comp)
    let res=human+comp
    if (win.includes(res)){
        console.log('вы выиграли')
        pobeda='вы выиграли' 
        
    }
    
    else if (loose.includes(res)){
        console.log('вы проиграли')
        pobeda='вы програли'  
    }
    else {
        console.log('ничья')
        pobeda='ничья'
    }
    out.innerText = 'ход человека - '+human+'\n'+'ход компа - '+comp+'\n'+pobeda
}
