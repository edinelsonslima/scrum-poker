import { NextResponse } from 'next/server';
import RoomController, { IParams } from '../../../app/controllers/room';

export function GET(request: Request, { params }: IParams) {
  return RoomController.show({ ...request, params }, NextResponse);
}
