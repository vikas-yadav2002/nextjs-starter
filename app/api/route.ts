import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ message: 'hello vikas' });
}

export function POST() {
  return NextResponse.json({ message: 'hello yadav' });
}
