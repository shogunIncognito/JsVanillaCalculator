const input = document.querySelector('#value')
const cButton = document.querySelector('#clean')
const delButton = document.querySelector('#del')
const nums = document.querySelectorAll('.num')
const calcButton = document.querySelector('#btn')

calcButton.addEventListener('click', () => {
    const value = input.value
    if (value.length === 0) return
    try {
        const op = eval(value)
        input.value = op
    } catch (error) {
        input.value = 'Syntax error'
        calcButton.disabled = true
    }
})

cButton.addEventListener('click', () => {
    calcButton.disabled = false
    input.value = ''
})

delButton.addEventListener('click', () => {
    const text = input.value
    const newText = text.slice(0, text.length - 1);
    input.value = newText
})


nums.forEach(num => {
    num.addEventListener('click', (e) => {
        input.value += e.target.textContent
    })
})
