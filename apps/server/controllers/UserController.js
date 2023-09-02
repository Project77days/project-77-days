import { usersRepository } from '../repositories/UsersRepository.js';

class UserController{

  async index(req, res){
    const users = await usersRepository.findAll()
    res.status(200).end(JSON.stringify(users))
  }

  async findById(req, res){
    const { id } = req.params
    const userById = await usersRepository.findById(id);

    if(!userById){
      return res.status(404).json({error:'User not found'})
    }

    res.status(200).end(JSON.stringify(userById))
  }

  async create(res, req){  
    const data = res.body;
    const user = await usersRepository.create(data);

    if(!user){
      return res.status(404).json({error:'User to registrer'})
    }

    res.status(201).end(JSON.stringify(user))
  }

  update(){
    //atulizar registro
  }

  async delete(){
    const { id } = req.params
    const deleteUser = await usersRepository.delete(id);

    if(!deleteUser){
      return res.status(404).json({error:'User not found'})
    }

    res.status(204).end(JSON.stringify("Users delete"))
  }
}

//Singleton
export const userController = new UserController();