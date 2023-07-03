/* eslint-disable no-unused-vars */
import prisma from '../../database/index.js'
import bcrypt from 'bcrypt'

export const findAll = async (req, res) => {
  const user = await prisma.user.findMany()
  res.status(200).end(JSON.stringify(user))
}

export const singUp = async (req, res) => {
  const saltRounds = 10
  const passwordHash = bcrypt.hashSync(req.body.password, saltRounds)

  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: passwordHash,
      },
    })

    res.status(201).end(
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
      }),
    )
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(422).end('Email ou nome existente')
    }
    res.status(500).end('error no servidor')
  }
}
