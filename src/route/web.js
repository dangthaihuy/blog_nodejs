import express from "express";
import homeController from "../controller/homeController"

let route = express.Router()

const initWebRoute = (app) => {
    route.get('/', homeController.getHomePage)
    route.get('/detail/user/:id', homeController.getDetailPage)
    route.post('/create-new-user', homeController.createNewUser)
    route.post('/delete-user', homeController.deleteUser)
    route.post('/update-user', homeController.updateUser)

    route.get('/edit-user/:id', homeController.getEditPage)


    route.get('/about', (req, res) => {
        res.send(`I'm 2se`)
    })

    return app.use('/', route)
}

export default initWebRoute