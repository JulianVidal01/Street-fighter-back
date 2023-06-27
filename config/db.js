import Low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, 'database.json');

const adapter = new FileSync(dbPath);
const dbAdapter = Low(adapter);

const DEFAULT_DB = {
  users: [],
  fighters: [
    {
      id: '1',
      name: 'Ryu',
      health: 45,
      attack: 4,
      defense: 3,
      source: 'https://media.giphy.com/media/kdHa4JvihB2gM/giphy.gif',
    },
    {
      id: '2',
      name: 'Dhalsim',
      health: 60,
      attack: 3,
      defense: 1,
      source:
        'https://i.pinimg.com/originals/c0/53/f2/c053f2bce4d2375fee8741acfb35d44d.gif',
    },
    {
      id: '3',
      name: 'Guile',
      health: 45,
      attack: 4,
      defense: 3,
      source: 'https://66.media.tumblr.com/tumblr_lq8g3548bC1qd0wh3o1_400.gif',
    },
    {
      id: '4',
      name: 'Zangief',
      health: 60,
      attack: 4,
      defense: 1,
      source: 'https://media1.giphy.com/media/nlbIvY9K0jfAA/source.gif',
    },
    {
      id: '5',
      name: 'Ken',
      health: 45,
      attack: 3,
      defense: 4,
      source:
        'https://i.pinimg.com/originals/46/4b/36/464b36a7aecd988e3c51e56a823dbedc.gif',
    },
    {
      id: '6',
      name: 'Bison',
      health: 45,
      attack: 5,
      defense: 4,
      source:
        'http://www.fightersgeneration.com/np5/char/ssf2hd/bison-hdstance.gif',
    },
  ],
  fights: [],
};

dbAdapter.defaults(DEFAULT_DB).write();

export { dbAdapter };
