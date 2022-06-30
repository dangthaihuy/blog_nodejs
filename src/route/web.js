import express from "express";
import homeController from "../controller/homeController"

let route = express.Router()

const initWebRoute = (app) => {
    route.get('/', homeController.getHomepage)

    route.get('/about', (req, res) => {
        res.send(`I'm 2se`)
    })

    return app.use('/', route)
}

export default initWebRoute