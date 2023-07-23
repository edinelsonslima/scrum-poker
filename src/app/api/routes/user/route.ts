import { NextResponse } from 'next/server';
import UserController from '../../app/controllers/user';

export function POST(request: Request) {
  return UserController.store(request, NextResponse);
}

export function PUT(request: Request) {
  return UserController.update(request, NextResponse);
}
