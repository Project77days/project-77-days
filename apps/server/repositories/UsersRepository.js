import prisma from '../database/index.js'

class UsersRepository{

  findAll(){
    const users = prisma.user.findMany()
    return users
  }

  findById(id){
    const userId = prisma.user.findUnique({
      where:{
        id: id,
      },
    })
    return userId
  }

  create(data){
    const {name, email, password} = data;
    const user = prisma.user.create({
      data:{
        name: name,
        email: email,
        password: password,
      }
    })

    
    return user
  }

  delete(id){
    const deleteUser = prisma.user.delete({
      where:{
        id: id,
      },
    })
    return deleteUser
  }

}

export const usersRepository = new UsersRepository();