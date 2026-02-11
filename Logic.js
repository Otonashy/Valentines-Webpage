// Comment
const comment = document.getElementById('comment')
let pArray = ["Are you sure tho?", "Really sure?", "Come on don't... don't be like this", "Give me a chance plz!", "Ok, alright...If you say so(╥﹏╥)", "Now you just being rude (¬`‸´¬)", ". . ."]
let pIndex = 0

// Button
const buttonNo = document.getElementById('no')
let classArray = ["buttonNo1", "buttonNo2", "buttonNo3", "buttonNo4", "buttonNo"]
let start = "buttonNo"
let index = 0
let i = 0


buttonNo.addEventListener("click", moveChange)

function moveChange() {
    comment.innerText = pArray[pIndex]
    pIndex += 1
    if(pIndex != 7) {
        comment.classList.replace("commentPoint", "placeHolder")
    }
    if (pIndex == 7) {
        comment.classList.replace("placeHolder", "commentPoint")
        pIndex = 0
    }

    buttonNo.classList.replace(start, classArray[index])
    start = classArray[index]
    index += 1
    if (index == 5) {
        index = 0
    }
    console.log(index)
}