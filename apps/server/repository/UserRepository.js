// import prisma from '../../database/index.js'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class UserRepository {
  async findAll() {
    const user = await prisma.user.findMany()
    return user
  }

  async findById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
    })
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

  async update(body) {
    const updateUser = await prisma.user.update({
      where: { id: body.id },
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    })
    return updateUser
  }

  async delete(id) {
    const user = await prisma.user.delete({
      where: { id },
    })
    return user
  }
}

export default new UserRepository()
