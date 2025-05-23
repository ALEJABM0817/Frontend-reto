#!/usr/bin/env node

import { execSync } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const path = require.resolve('tailwindcss/lib/cli.js');

execSync(`node ${path} init -p`, { stdio: 'inherit' });
