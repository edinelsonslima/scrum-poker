import { NextResponse } from 'next/server';
import UserController, { IParams } from '../../../../app/controllers/user';

export function GET(request: Request, { params }: IParams) {
  return UserController.show({ ...request, params }, NextResponse);
}
