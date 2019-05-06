const { tbusers } = require('../models')

class UserController {
  async list (req, res) {
    const users = await tbusers.findAll()
    return res.send(users)
  }
}
module.exports = new UserController()
