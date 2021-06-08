const topContact = document.getElementById("contactButton")

topContact.addEventListener("click", ()=>{
    console.log(document.body.scrollHeight)
    window.scrollTo(0, document.body.scrollHeight - 300)
})
