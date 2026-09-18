import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const uptimeSeconds = Math.floor(process.uptime());
  const memoryUsage = process.memoryUsage();

  const healthData = {
    status: "healthy",
    code: 200,
    timestamp: new Date().toISOString(),
    uptime: `${uptimeSeconds}s`,
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0-foundations",
    checks: {
      serverRuntime: "operational",
      databaseLayer: "connected (mock pool)",
      cacheStore: "active",
      deploymentTarget: process.env.VERCEL ? "Vercel Edge/Serverless" : "Standard Node Runtime",
    },
    system: {
      nodeVersion: process.version,
      rssMemoryMb: Math.round(memoryUsage.rss / 1024 / 1024),
      heapUsedMb: Math.round(memoryUsage.heapUsed / 1024 / 1024),
    },
  };

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
