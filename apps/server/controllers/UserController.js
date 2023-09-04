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
      return res.status(200).send(JSON.stringify(userById))
    }catch(error){
      return res.status(404).end(JSON.stringify("Ops, ocorreu um error!"))
    }
  }

  async create(res, req){  
    const data = res.body;
    try{
      const user = await usersRepository.create(data);
      return res.status(201).send(JSON.stringify(user))
    }catch(error){
      if(error.code == "P2002"){
        return req.status(404).send(JSON.stringify("Email já cadastrado"))
      }
      return req.status(404).end(JSON.stringify("Ops! Aconteceu um erro, tente novamente"))
    }
  }

  update(){
    //atulizar registro
  }

  async delete(res, req){
    const { id } = res.params
    try{
      const deleteUser = await usersRepository.delete(id);
      req.status(200).send(JSON.stringify({"User delete:": deleteUser}))

    }catch(error){
      return req.status(503).send(JSON.stringify(error.meta.cause))
    }
  }
}

//Singleton
export const userController = new UserController();