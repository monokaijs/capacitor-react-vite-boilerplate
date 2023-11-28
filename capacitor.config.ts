import { CapacitorConfig } from '@capacitor/cli';
import path from "path";
import { networkInterfaces } from "os";

const nets = networkInterfaces();
const results = []; // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
  if (!nets[name]) continue;
  for (const net of nets[name]) {
    const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
    if (net.family === familyV4Value && !net.internal) {
      results.push(net.address);
    }
  }
}

const config: CapacitorConfig = {
  appId: 'com.capacitor.app',
  appName: 'CapacitorApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  }
};

if (process.env.NODE_ENV !== "production") {
  config.server.url = `http://${results.pop()}:5173/`;
}

export default config;
