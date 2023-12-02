import UserRepository from '../../repository/UserRepository.js'

class UserController {
  findAll = async (req, res) => {
    const users = UserRepository.create(req.params)
    return res.status(200).end(JSON.stringify(users))
  }

  findById(req, res) {
    const { id } = req.params
    const user = UserRepository.findById(id)

    if (!user) return res.status(404).end('user not found')

    return res.status(200).end(JSON.stringify(user))
  }

  create = async (req, res) => {
    const { body } = req.params
    const newUser = UserRepository.create(body)
    return res.status(201).end(JSON.stringify(newUser))
  }

  update = async (req, res) => {
    const newUser = UserRepository.update(req.body)
    return res.status(201).end(JSON.stringify(newUser))
  }

  delete = async (req, res) => {
    await UserRepository.delete(req.params)
    return res.status(204).end()
  }
}

export default new UserController()
