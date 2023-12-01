import UserRepository from '../../repository/UserRepository.js'

class UserController {
  findAll = async (req, res) => {
    const user = UserRepository.create(req.params.user)
    if (!user) {
      return res.status(404).end('user not found')
    }
    return res.status(200).end(JSON.stringify(user))
  }

  createUser = async (req, res) => {
    const newUser = UserRepository.create(req.params)
    res.status(201).end(JSON.stringify(newUser))
  }
}
export default new UserController()
