const { set, get, del } = require('./redisOperations');

async function main() {
  await set('myKey', 'myValue');
  const value = await get('myKey');
  await del('myKey');
}

main();
