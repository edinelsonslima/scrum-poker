import { NextResponse } from 'next/server';
import RoomController from '../../app/controllers/room';

export function GET(request: Request) {
  return RoomController.index(request, NextResponse);
}

export function POST(request: Request) {
  return RoomController.store(request, NextResponse);
}
