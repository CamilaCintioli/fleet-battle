import dotenv from 'dotenv';

import createApp from './app';
import getConfig from './config';

dotenv.config();

const config = getConfig();

createApp()
.then((app) => app.listen(config.PORT))
.then(() => {
    // eslint-disable-next-line no-console
    console.log('Listening to %d!', config.PORT);
})
.catch((e) => {
  console.error(e);
  process.exit(1);
});
