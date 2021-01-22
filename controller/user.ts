import { IUser } from '../model/user';
import UserRepository from '../repositories/user';

const userRepository = new UserRepository();

const getUsers = async ({ response }: { response: any }) => {
  const users = await userRepository.getAll();

  response.body = users;
};

const getUser = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const user = await userRepository.getById(params.id);

  if (user) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 400;
    response.body = { message: "User not found." };
  }
};

const addUser = async (
  { request, response }: { request: any, response: any }
) => {
  const body = await request.body();
  const user: IUser = body.value;

  userRepository.create(user);

  response.body = { message: "OK" };
  response.status = 200;
};

const updateUser = async(
  { params, request, response } : { 
    params: { id: string };
    request: any;
    response: any ;
  },
) => {
  
}