import { ObjectId } from 'bson';
import { NextResponse } from 'next/server';
import UserRepository from '../repositories/user';

export interface IParams {
  params: { roomId: string; userId: string };
}

class UserController {
  constructor(private readonly userRepository: typeof UserRepository) {}

  public async index(
    request: Request & IParams,
    response: typeof NextResponse
  ) {
    try {
      const { roomId } = request.params;

      if (!roomId) {
        return response.json(
          { message: 'Obrigatório informar a sala' },
          { status: 400 }
        );
      }

      const users = await this.userRepository.list(roomId);

      if (!users) {
        return response.json(
          { message: 'Usuários ou Sala não encontrados' },
          { status: 404 }
        );
      }

      return response.json(users, { status: 200 });
    } catch (error) {
      console.error(error);
    }
  }

  public async show(request: Request & IParams, response: typeof NextResponse) {
    try {
      const { roomId, userId } = request.params;

      if (!roomId || !userId) {
        return response.json(
          { message: 'Obrigatório informar a sala e id do usuário' },
          { status: 400 }
        );
      }

      if (!ObjectId.isValid(userId)) {
        return response.json(
          { message: 'Id do usuário inválido' },
          { status: 400 }
        );
      }

      const user = await this.userRepository.findById(roomId, userId);

      if (!user) {
        return response.json(
          { message: 'Usuário não encontrado' },
          { status: 404 }
        );
      }

      return response.json(user, { status: 200 });
    } catch (error) {
      console.error(error);
    }
  }

  public async store(request: Request, response: typeof NextResponse) {
    try {
      const body = await request.json();
      const { roomId, username } = body;

      if (!roomId || !username) {
        return response.json(
          { message: 'Obrigatório informar a sala e o nome do usuário' },
          { status: 400 }
        );
      }

      const user = await this.userRepository.create(roomId, username);

      return response.json(user, { status: 201 });
    } catch (error) {
      console.error(error);
    }
  }

  public async update(request: Request, response: typeof NextResponse) {
    try {
      const body = await request.json();
      const { roomId, userId, point } = body;

      if (!roomId || !userId || !point) {
        return response.json(
          { message: 'Obrigatório informar a sala, id do usuário e o ponto' },
          { status: 400 }
        );
      }

      if (!ObjectId.isValid(userId)) {
        return response.json(
          { message: 'Id do usuário inválido' },
          { status: 400 }
        );
      }

      const user = await this.userRepository.changeStoryPoint(roomId, {
        userId,
        point,
      });

      return response.json(user, { status: 200 });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new UserController(UserRepository);
