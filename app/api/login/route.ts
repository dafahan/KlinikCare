import { NextRequest, NextResponse } from 'next/server';
import { login } from '@/app/lib/data';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    const isAuthenticated = await login(username, password);
    if (isAuthenticated) {
      return NextResponse.json({ message: 'Login successful' });
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
