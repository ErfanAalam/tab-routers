const anchor = document.querySelectorAll("a")
// const html = document.querySelector("#html")
// const css = document.querySelector("#css")
// const js = document.querySelector("#js")
// const node = document.querySelector("#node")
// const react = document.querySelector("#react")
const container = document.querySelectorAll(".con")

// collect all anchor tags
for (let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener("click", (e) => {
        e.preventDefault()
        // console.log(e.target);

        // collect each anchor tag one by one and remove the active class if anyone has 
        anchor.forEach((anc) => {
            if (anc.classList.contains("active")) {
                anc.classList.remove("active")
            }
        })

        // applying the acitive class to the clicked anchor tag
        e.target.classList.add("active")


        // remove the active class from the conatiner that alrady have the active class
        container.forEach((con) => {
            if (con.classList.contains("active")) {
                con.classList.remove("active")
            }
        })



        // console.log(e.target.innerText);
        // converting the innertext of clicked anchor tag into lowercase
        const clickedtag = e.target.innerText.toLowerCase()
        // console.log(clickedtag);

        // toggle active class into clicked tag
        container.forEach((con) => {
            if (clickedtag == con.id) {
                con.classList.toggle("active")
            }
        })




        //     if (e.target.innerText == "HTML") {
        //         e.target.classList.toggle("active")
        //         html.classList.toggle("active")
        //         css.classList.remove("active")
        //         js.classList.remove("active")
        //         node.classList.remove("active")
        //         react.classList.remove("active")
        //     }
        //     else if (e.target.innerText == "CSS") {
        //         e.target.classList.toggle("active")
        //         css.classList.toggle("active")
        //         html.classList.remove("active")
        //         js.classList.remove("active")
        //         node.classList.remove("active")
        //         react.classList.remove("active")
        //     }
        //     else if (e.target.innerText == "JS") {
        //         e.target.classList.toggle("active")
        //         js.classList.toggle("active")
        //         html.classList.remove("active")
        //         css.classList.remove("active")
        //         node.classList.remove("active")
        //         react.classList.remove("active")
        //     }
        //     else if (e.target.innerText == "Node") {
        //         e.target.classList.toggle("active")
        //         node.classList.toggle("active")
        //         html.classList.remove("active")
        //         css.classList.remove("active")
        //         js.classList.remove("active")
        //         react.classList.remove("active")
        //     }
        //     else if (e.target.innerText == "React") {
        //         e.target.classList.toggle("active")
        //         react.classList.toggle("active")
        //         html.classList.remove("active")
        //         css.classList.remove("active")
        //         js.classList.remove("active")
        //         node.classList.remove("active")
        //     }
    })

}