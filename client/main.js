const complimentBtn = document.getElementById("complimentButton")
let fortuneBtn = document.getElementById("fortuneButton")
let praiseForm = document.getElementById("praiseForm")
let allstarsForm = document.getElementById("allstars-form")
let allstarsDeleteForm = document.getElementById("delete-allstars-form")

let audio = document.getElementById("audio")
audio.volume = 0.005

const getCompliment = (event) => {
    axios.get("/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

let getFortune = () => {
    axios
        .get("/api/fortune/")
        .then(response => {
            let data = response.data
            alert(data)
    })
        .catch(error => {
            console.log(error)
        })
}
let receivePraise = () => {
    event.preventDefault()
    let name = document.getElementById("name").value
    axios
        .post("/api/praise/", { name })
        .then(response => {
            let data = response.data
            alert(data)
        })
        .catch(error => {
            console.log(error)
        })
}

let becomeAllstar = () => {
    event.preventDefault()
    let name = document.getElementById("allstar-name").value
    let pos = document.getElementById("allstar-pos").value
    document.getElementById("allstar-name").value = ""
    document.getElementById("allstar-pos").value = ""
    axios
        .put("/api/allstars/", { name, pos })
        .then(response => {
            // let { position, name } = response.body
            let { name } = response.data
            let { position } = response.data
            /*console.log(position, name)*/
            let allstarsListToUpdate = document.querySelector("#" + "a" + position)
            allstarsListToUpdate.innerHTML = `<li>${name}</li>`
            alert(`${name} is now an All-Star!`)
        })
        .catch(error => {
            console.log(error)
        })
}

let deleteAllstar = () => {
    let id = document.getElementById("delete-allstar-name").value
    document.getElementById("delete-allstar-name").value = ""
    event.preventDefault()
    axios
        .delete(`/api/allstars/${id}`)
        .then(response => {
            let { name, position } = response.data
            let allstarsListToUpdate = document.querySelector("#" + "a" + position)
            allstarsListToUpdate.innerHTML = ``
            alert(`${name} is no longer an All-Star!`)
        })
        .catch(error => {
            console.log(error)
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
praiseForm.addEventListener('submit', receivePraise)
allstarsForm.addEventListener('submit', becomeAllstar)
allstarsDeleteForm.addEventListener('submit', deleteAllstar)