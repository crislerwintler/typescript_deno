import { MongoClient } from 'https://deno.land/x/mongo@v0.13.0/ts/util.ts';
import { DB_HOST, DB_NAME } from '../config';

const client = new MongoClient();
client.connectWithUri(DB_HOST);

const db = client.database(DB_NAME);

export default db;