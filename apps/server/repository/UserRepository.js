import query from '../database'

class UserRepository {
  async findAll() {
    const user = await query('SELECT * FROM users')
    return user
  }

  async findById(id) {
    const user = await query('SELECT * FROM users where id = ' + id)
    return user
  }

  async findByEmail(email) {
    const user = await query('SELECT * FROM users where email = ' + email)
    return user
  }

  async create(name, email, password) {
    const newUser = await query('c')
    return newUser
  }

  async update(id, name, email, password) {
    const updateUser = await query('c')
    return updateUser
  }

  async delete(id) {
    const user = await query('delete')
    return user
  }
}

export default new UserRepository()
