import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const plugins = await prisma.plugin.findMany();
    console.log('Database query result:', {
      count: plugins.length,
      ids: plugins.map(p => p.id)
    });
    return NextResponse.json(plugins);
  } catch (error) {
    console.error('Error fetching plugins:', error);
    return NextResponse.json({ error: 'Failed to fetch plugins' }, { status: 500 });
  }
} 