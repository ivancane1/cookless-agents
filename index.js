const { execSync } = require('child_process');

process.env.OPENCLAW_STATE_DIR = process.env.OPENCLAW_CONFIG_DIR || '/data';
process.env.OPENCLAW_CONFIG_PATH = (process.env.OPENCLAW_CONFIG_DIR || '/data') + '/config.json';

const { spawn } = require('child_process');

const gateway = spawn('openclaw', ['gateway', '--port', process.env.PORT || '3000'], {
  stdio: 'inherit',
  env: process.env
});

gateway.on('close', (code) => {
  console.log(`Gateway exited with code ${code}`);
  process.exit(code);
});
