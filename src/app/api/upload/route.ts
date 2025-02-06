import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/images
    const filePath = path.join(process.cwd(), 'public/images', file.name);
    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, filename: file.name });
  } catch {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
} 