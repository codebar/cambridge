const parseArgs = require('minimist');
const fs = require('fs');
const moment = require('moment');
const { compile } = require('handlebars');

const options = parseArgs(process.argv.slice(2));
const hosts = require('./data/hosts.json');
const organisers = require('./data/organisers.json');
const template = fs.readFileSync('./workshop-reminder.template.md', 'utf8');

const markdown = compile(template)({
  date: moment().format('dddd, Do MMMM'),
  host: hosts[options.host],
  organiser: organisers[options.organiser]
});

fs.writeFileSync(`./workshop-reminder.md`, markdown, 'utf8');