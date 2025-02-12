let add = document.getElementById("add")
add.addEventListener("click",()=>{
        let input1 = document.getElementById("input1").value
        let input2 = document.getElementById("input2").value
    
        let res = Number(input1) + Number(input2)
        document.getElementById("head").textContent =` This is your addition : ${res}`
        let temp ="block"

function fun(){
    let mydiv = document.getElementById("restart")

    if(temp == "block")
    {
        mydiv.style.display = temp
        temp = "none"

    }
    else{
        mydiv.style.display = temp
        temp = "block"

    }
}
    })


let sub = document.getElementById("sub")
sub.addEventListener("click",()=>{
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value

    let res = Number(input1) - Number(input2)
    document.getElementById("head1").textContent =` This is your sub : ${res}`
})

let divi = document.getElementById("divi")
divi.addEventListener("click",()=>{
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value

    let res = Number(input1) / Number(input2)
    document.getElementById("head2").textContent =` This is your Division : ${res}`

})


let temp ="block"

function fun(){
    let mydiv = document.getElementById("restart")

    if(temp == "block")
    {
        mydiv.style.display = temp
        temp = "none"

    }
    else{
        mydiv.style.display = temp
        temp = "block"

    }
}
