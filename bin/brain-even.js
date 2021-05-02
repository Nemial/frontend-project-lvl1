#!/usr/bin/env node
import * as cli from '../src/cli.js';
import start from '../src/even.js';

cli.welcome();
start(cli.greeting());
