import { NextResponse } from 'next/server';

const mockSession = {
  token: 'demo-token-123',
  issuedAt: new Date().toISOString(),
  user: {
    id: 'user-1',
    name: 'John Anderson',
    email: 'john.anderson@triscend.com',
    role: 'Plan Administrator',
  },
};

export async function GET() {
  return NextResponse.json({ session: mockSession });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  if (!body?.email || !body.password) {
    return NextResponse.json(
      { message: 'Email and password are required.' },
      { status: 400 }
    );
  }

  return NextResponse.json({
    session: {
      ...mockSession,
      user: {
        ...mockSession.user,
        email: body.email,
      },
    },
  });
}
