const { spawn } = require('child_process');

const port = process.env.PORT || '3000';

process.env.OPENCLAW_STATE_DIR = process.env.OPENCLAW_CONFIG_DIR || '/data';
process.env.OPENCLAW_CONFIG_PATH = (process.env.OPENCLAW_CONFIG_DIR || '/data') + '/config.json';

console.log(`Starting OpenClaw gateway on port ${port}...`);

const gateway = spawn('openclaw', ['gateway', '--port', port, '--no-open'], {
  stdio: 'inherit',
  env: process.env
});

gateway.on('error', (err) => {
  console.error('Failed to start gateway:', err);
  process.exit(1);
});

gateway.on('close', (code) => {
  console.log(`Gateway exited with code ${code}`);
  process.exit(code);
});
