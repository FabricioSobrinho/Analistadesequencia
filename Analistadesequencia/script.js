var number = document.getElementById('numeros')
    var thi = []
    var res = document.getElementById('result') 
    var colet = document.getElementById('nums')

    function isnumb(n) {
      if(Number(n) >= 1 && Number(n) <= 100) {
        return true
      } else {
        return false
      }
    } 
    function incolet(n, l) {
     if (l.indexOf(Number(n)) != -1) {
        return true
     } else { 
        return false
     }
    }
function adicionar() {
  if(isnumb(number.value) && !incolet(number.value, thi)) { 
    thi.push(Number(number.value))
    let item = document.createElement('option') 
    item.text = `Valor ${number.value} adicionado`
    colet.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Erro verifique os valores!')
  } 
  number.value = '' //limpa a gaveta de inserção de valores
  number.focus()  // volta o foco do mouse para a janela de inserção
} 
 function exibir() {
    if (thi.length == 0) {
        alert('Adicione valores!')
    } else {
        let tot = thi.length
        let maior = thi[0]
        let menor = thi[0] 
        let soma = 0
        let media = 0
        for (let pos in thi) {
            soma += thi[pos]
            if (thi[pos] > maior) 
            maior = thi[pos]
            if (thi[pos] < menor) 
            menor = thi[pos]
        }
       media = soma / tot 
       res.innerHTML = ''
       res.innerHTML += `<p> Ao todo temos ${tot} elementos.</p>`
       res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
       res.innerHTML += `<p>O Menor valor informado foi ${menor}.</p>`
       res.innerHTML += `<p>A soma dos termos em sua sequência é de ${soma}.</p>`
       res.innerHTML += `<p>A média dos termos é de ${media}.</p>`
    }
 }
 