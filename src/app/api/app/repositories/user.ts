import PrismaClient from '../../database';
import RoomRepository from './room';

class UserRepository {
  constructor(
    private readonly prismaClient: typeof PrismaClient,
    private readonly roomRepository: typeof RoomRepository
  ) {}

  public async create(roomId: string, name: string) {
    if (!(await this.existRoom(roomId))) return;

    return this.prismaClient.user.create({
      data: { name, Room: { connect: { roomId } } },
      select: this.select(),
    });
  }

  public async remove(roomId: string, userId: string) {
    if (!(await this.existRoom(roomId))) return;

    return this.prismaClient.user.delete({
      where: { id: userId, roomId },
      select: this.select(),
    });
  }

  public async list(roomId: string) {
    if (!(await this.existRoom(roomId))) return;

    return this.prismaClient.user.findMany({
      where: { roomId },
      select: this.select(),
    });
  }

  public async findById(roomId: string, userId: string) {
    if (!(await this.existRoom(roomId))) return;

    return this.prismaClient.user.findFirst({
      where: { id: userId, roomId },
      select: this.select(),
    });
  }

  public async changeStoryPoint(
    roomId: string,
    { point, userId }: { point: string; userId: string }
  ) {
    if (!(await this.existRoom(roomId))) return;

    return this.prismaClient.user.update({
      where: { id: userId, roomId },
      data: { point },
      select: this.select(),
    });
  }

  private async existRoom(roomId: string) {
    const room = await this.roomRepository.findByRoomId(roomId, { id: true });
    return !!room;
  }

  private select() {
    return { id: true, name: true, point: true, roomId: true };
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserRepository(PrismaClient, RoomRepository);
