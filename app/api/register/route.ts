
import { NextRequest, NextResponse } from 'next/server';
import { register } from '@/app/lib/data';

export async function POST(req: NextRequest) {
  const { email, phone, username, password, name, gender, bpjs, birthDate, address } = await req.json();
  if (!email || !phone || !username || !password || !name || !gender || !birthDate || !address) {
    return NextResponse.json({ message: 'Please provide all parameters' }, { status: 400 });
  }

  try {
    const isRegistered = await register(email, phone, username, password, name, gender, bpjs, birthDate, address);
    if (isRegistered) {
      return NextResponse.json({ message: 'Registration successful' });
    } else {
      return NextResponse.json({ message: 'Username already exists' }, { status: 409 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
