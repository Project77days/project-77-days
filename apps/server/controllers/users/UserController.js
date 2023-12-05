import UserRepository from '../../repository/UserRepository.js'

class UserController {
  findAll = async (req, res) => {
    const users = UserRepository.findAll()
    return res.status(200).end(JSON.stringify(users))
  }

  findById(req, res) {
    const { id } = req.params
    const user = UserRepository.findById(id)

    if (!user)
      return res.status(400).end(JSON.stringify({ error: 'User not found' }))

    return res.status(200).end(JSON.stringify(user))
  }

  create = async (req, res) => {
    const { name, email, password } = req.body
    if (!name)
      return res.status(404).end(JSON.stringify({ error: 'Required name' }))

    const userExist = await UserRepository.findByEmail(email)
    if (userExist)
      return res
        .status(404)
        .end(JSON.stringify({ error: 'This is email is already in use' }))

    const newUser = UserRepository.create({ name, email, password })
    return res.status(201).end(JSON.stringify(newUser))
  }

  update = async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    const userById = await UserRepository.findById(id)
    if (!userById)
      return res.status(400).end(JSON.stringify({ error: 'User not found' }))

    if (!name)
      return res.status(400).end(JSON.stringify({ error: 'Required name' }))

    const userByEmail = await UserRepository.findByEmail(email)
    if (userByEmail && userById.id !== id) {
      return res
        .status(400)
        .end(JSON.stringify({ error: 'This is email is already in use' }))
    }

    const newUser = UserRepository.update({ name, email, password })
    return res.status(200).end(JSON.stringify(newUser))
  }

  delete = async (req, res) => {
    const { id } = req.params
    const userFound = await UserRepository.findById(id)

    if (!userFound)
      return res.status(400).end(JSON.stringify({ error: 'User not found' }))

    await UserRepository.delete(id)
    return res.status(204).end()
  }
}

export default new UserController()
