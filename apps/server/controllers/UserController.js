import { usersRepository } from '../repositories/UsersRepository.js';

class UserController{
  async index(req, res){
    const users = await usersRepository.findAll()
    res.status(200).end(JSON.stringify(users))
  }

  async findById(req, res){
    const { id } = req.params
    try{
      const userById = await usersRepository.findById(id)
      
      if(!userById){
        return res.status(404).end(JSON.stringify("Usuário não encontrado"))
      }
      return res.status(200).send(JSON.stringify(userById))

    }catch(error){
      return res.status(500).end(JSON.stringify("Ops, ocorreu um error!"))
    }
  }

  async create(req, res){  
    const data = req.body;
    try{
      const user = await usersRepository.create(data);
      return res.status(201).end(JSON.stringify(user))

    }catch(error){
      if(error.code == "P2002"){
        return res.status(404).end(JSON.stringify("Email já cadastrado"))
      }
      return res.status(500).end(JSON.stringify("Ops! Aconteceu um erro, tente novamente"))
    }
  }

  async update(req, res){
    const {name, email} = req.body

    try{
      const updateUser = await usersRepository.update(name,email)

      if(!updateUser){
        return res.status(404).end(JSON.stringify("Usuário não encontrado"))
      }
      return res.status(204).send(JSON.stringify(updateUser))

    }catch(error){
      console.log(error)
      //return res.status(500).end(JSON.stringify("Ops, ocorreu um error!"))
    }
  }

  async delete(req, res){
    const { id } = req.params
    try{
      const deleteUser = await usersRepository.delete(id);
      return res.status(204).end()
    }catch(error){
      const erroPrismaMenssage = error.meta.cause
      return res.status(503).send(JSON.stringify(erroPrismaMenssage))
    }
  }
}

//Singleton
export const userController = new UserController();