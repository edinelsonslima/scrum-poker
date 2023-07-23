import PrismaClient from '../../database';

class RoomRepository {
  constructor(private readonly prismaClient: typeof PrismaClient) {}

  public create(roomId: string) {
    return this.prismaClient.room.create({
      data: { roomId },
      select: this.select(),
    });
  }

  public remove(roomId: string) {
    return this.prismaClient.room.delete({
      where: { roomId },
      select: this.select(),
    });
  }

  public findByRoomId(roomId: string, select?: Record<'id', boolean>) {
    return this.prismaClient.room.findFirst({
      where: { roomId },
      select: select ?? this.select(),
    });
  }

  public list() {
    return this.prismaClient.room.findMany({
      select: this.select(),
    });
  }

  private select() {
    return {
      roomId: true,
      showPoints: true,
      users: { select: { id: true, name: true, point: true, roomId: true } },
    };
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RoomRepository(PrismaClient);
