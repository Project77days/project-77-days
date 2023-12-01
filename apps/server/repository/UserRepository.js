import prisma from '../../database/index.js'

class UserRepository {
  async findAll() {
    const user = await prisma.user.findMany()
    return user
  }

  async create(body) {
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    })
    return newUser
  }
}

export default new UserRepository()
