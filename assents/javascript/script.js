h = document.getElementById('horas')
m = document.getElementById('minutos')
s = document.getElementById('segundos')


const tictac = setInterval(function time() {
    let tempo = new Date();

    tempoH = tempo.getHours()
    tempoM = tempo.getMinutes()
    tempoS = tempo.getSeconds()

    if(tempoH < 10){tempoH = '0'+tempoH }
    if(tempoM < 10){tempoM = '0'+tempoM }
    if(tempoS < 10){tempoS = '0'+tempoS }

    h.innerHTML = tempoH
    m.innerHTML = tempoM
    s.innerHTML = tempoS
    })
