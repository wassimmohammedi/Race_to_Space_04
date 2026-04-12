import { appendToSheet } from '@/server.jsx';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const row = [
      body.name,
      body.email,
      body.message,
      new Date().toISOString(),
    ];
    
    await appendToSheet(row);
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}