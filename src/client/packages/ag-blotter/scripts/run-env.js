const dotenv = require('dotenv');
const child_process = require('child_process');

const config = dotenv.config()
const DEV_SERVER_PORT = process.env.WBP_PORT || 4200;
// https://medium.com/@dhilt/how-to-change-angular-cli-development-server-port-via-env-9335d089e469
const child = child_process.exec(`ng serve --port=${DEV_SERVER_PORT} --disable-host-check`);
child.stderr.on('data', err => console.error(err));
child.stdout.on('data', data => console.log(data.toString()));
