let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')

btn1.addEventListener("click", btn1_func)
btn2.addEventListener("click", btn2_func)
btn3.addEventListener("click", btn3_func)
btn4.addEventListener("click", btn4_func)
btn5.addEventListener("click", btn5_func)
btn6.addEventListener("click", btn6_func)
btn7.addEventListener("click", btn7_func)
btn8.addEventListener("click", btn8_func)
btn9.addEventListener("click", btn9_func)

function winner()
{
    return (
        btn1.textContent == 1
        && btn2.textContent == 2
        && btn3.textContent == 3
        && btn4.textContent == 4
        && btn5.textContent == 5
        && btn6.textContent == 6
        && btn7.textContent == 7
        && btn8.textContent == 8
        && btn9.textContent == ""
    )
}
function swap_btns(btn_1, btn_2) {
    let a = btn_1.textContent
    btn_1.textContent = btn_2.textContent
    btn_2.textContent = a 
}
function btn1_func() {
    if (btn2.textContent == "")
        swap_btns(btn1, btn2)
    if (btn4.textContent == "") {
        swap_btns(btn1, btn4)
    }
}
function btn2_func() {
    if (btn1.textContent == "")
        swap_btns(btn2, btn1)
    if (btn5.textContent == "")
        swap_btns(btn2, btn5)
    if (btn3.textContent == "")
        swap_btns(btn2, btn3)
}
function btn3_func() {
    if (btn2.textContent == "")
        swap_btns(btn2, btn3)
    if (btn6.textContent == "")
        swap_btns(btn6, btn3)
    if (winner()) {
        alert("You win!!")
        main()
    }
}
function btn4_func() {
    if (btn1.textContent == "")
        swap_btns(btn4, btn1)
    if (btn5.textContent == "")
        swap_btns(btn4, btn5)
    if (btn7.textContent == "")
        swap_btns(btn4, btn7)
    if (winner()) {
        alert("You win!!")
        main()
    }
}
function btn5_func() {
    if (btn2.textContent == "")
        swap_btns(btn5, btn2)
    if (btn4.textContent == "")
        swap_btns(btn5, btn4)
    if (btn6.textContent == "")
        swap_btns(btn5, btn6)
    if (btn8.textContent == "")
        swap_btns(btn5, btn8)
    if (winner()) {
        alert("You win!!")
        main()
    }
}
function btn6_func() {
    if (btn3.textContent == "")
        swap_btns(btn6, btn3)
    if (btn5.textContent == "")
        swap_btns(btn6, btn5)
    if (btn9.textContent == "")
        swap_btns(btn6, btn9)
    if (winner()) {
        alert("You win!!")
        main()
    }
}
function btn7_func() {
    if (btn4.textContent == "")
        swap_btns(btn7, btn4)
    if (btn8.textContent == "")
        swap_btns(btn7, btn8)
    if (winner()) {
        alert("You win!!")
        main()
    }
}
function btn8_func() {
    if (btn5.textContent == "")
        swap_btns(btn8, btn5)
    if (btn7.textContent == "")
        swap_btns(btn8, btn7)
    if (btn9.textContent == "")
        swap_btns(btn8, btn9)
    if (winner()) {
        alert("You win!!")
        main()
    }
}
function btn9_func() {
    if (btn8.textContent == "")
        swap_btns(btn9, btn8)
    if (btn6.textContent == "")
        swap_btns(btn9, btn6)
    if (winner()) {
        alert("You win!!")
        main()
    }
}

function    randomNumber() {
    return Math.floor(Math.random() * (9)) + 1;
}

function    getNumbers(array) {
    let index = 1
    let number
    while (index <= 9) {
        number = randomNumber()
        if (!array.includes(number)) {
            if (number === 9) {
                if (!array.includes("")) {
                    array.push("")
                    index += 1
                }
            } else {
                    array.push(number)
                    index += 1
            }
        }
    }
}

function    parseNumbers(array)
{
    btn1.textContent = array[0]
    btn2.textContent = array[1]
    btn3.textContent = array[2]
    btn4.textContent = array[3]
    btn5.textContent = array[4]
    btn6.textContent = array[5]
    btn7.textContent = array[6]
    btn8.textContent = array[7]
    btn9.textContent = array[8]
}

function    main()
{   let array = []
    getNumbers(array)
    parseNumbers(array)
}
main()