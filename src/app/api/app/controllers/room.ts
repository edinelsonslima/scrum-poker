import { NextResponse } from 'next/server';
import RoomRepository from '../repositories/room';

export interface IParams {
  params: { roomId: string };
}

class RoomController {
  constructor(private readonly roomRepository: typeof RoomRepository) {}

  public async index(request: Request, response: typeof NextResponse) {
    try {
      const rooms = await this.roomRepository.list();
      return response.json(rooms, { status: 200 });
    } catch (error) {
      console.error(error);
    }
  }

  public async show(request: Request & IParams, response: typeof NextResponse) {
    try {
      const { roomId } = request.params;

      if (!roomId) {
        return response.json(
          { message: 'Obrigatório informar a sala' },
          { status: 400 }
        );
      }

      const room = await this.roomRepository.findByRoomId(roomId);

      if (!room) {
        return response.json(
          { message: 'Sala não encontrada' },
          { status: 404 }
        );
      }

      return response.json(room, { status: 200 });
    } catch (error) {
      console.error(error);
    }
  }

  public async store(request: Request, response: typeof NextResponse) {
    try {
      const body = await request.json();
      const roomId = body.roomId;

      if (!roomId) {
        return response.json(
          { message: 'Obrigatório informar a sala' },
          { status: 400 }
        );
      }

      const room = await this.roomRepository.create(roomId);

      return response.json(room, { status: 201 });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new RoomController(RoomRepository);
