const express = require("express")
const router = express.Router()
const authController = require('../controllers/authentificate-controllers')
const usersRoute = require("./users-route")
const eventsRoute = require("./events-route")
const activitiesRoute = require("./activities-route")
const newsRoute = require("./news-route")
const commentsRoute = require("./comments-route")


router.use("/users", usersRoute )
router.use("/activities", activitiesRoute )
router.use("/events",
//  authController.isAuthenticated, 
 eventsRoute )
router.use("/news",newsRoute)
router.use("/comments",commentsRoute)



module.exports = router;