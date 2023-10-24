let db = require('./db')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortune: (request, response) => {
        let fortunes = ["Never do anything halfway. If you d-", "You need not outrun the bear, only your slowest hiking partner.", "The best way to predict the future is to create it.", "Be yourself; everyone else is already taken.", "Be the change that you wish to see in the world."]
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
        response.status(200).send(randomFortune)
    },

    receivePraise: (request, response) => {
        let praiseTemplates = ["Now THAT was a good click, ", "Thanks, we appreciate your effort, ", ", sick shred bro! Let's go bomb this double black powder!"]
        /*console.log(request.body)
        console.log(request.body.name)*/
        let name = request.body.name
        let randomIndex = Math.floor(Math.random() * praiseTemplates.length)
            if (randomIndex === 0) {
                let randomPraise = `${praiseTemplates[randomIndex]} ${name}!`
                return response.status(200).send(randomPraise)
            }
            if (randomIndex === 1) {
                let randomPraise = `${praiseTemplates[randomIndex]} ${name}.`
                 return response.status(200).send(randomPraise)
            }
            if (randomIndex === 2) {
                let randomPraise = `${name} ${praiseTemplates[randomIndex]}`
                return response.status(200).send(randomPraise)
            }
    },

    becomeAllstar: (request, response) => {
        let name = request.body.name
        let position = request.body.pos
        let responseBody = {
            id: name,
            name: name,
            position: position
        }
        db[position-1] = responseBody
        console.log(db)
        response.status(200).send(responseBody)
    },

    deleteAllstar: (request, response) => {
        let position = request.params.id
        let id = db[position-1].id
        let name = db[position-1].name
        let responseBody = {
            id: id,
            name: name,
            position: position
        }
        db.splice(position-1, 1)
        console.log(db)
        response.status(200).send(responseBody)

    }
}
