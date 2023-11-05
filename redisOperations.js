const Redis = require('ioredis');

// Create a Redis client
const redis = new Redis();

// SET operation
async function set(key, value) {
  try {
    await redis.set(key, value);
    console.log(`Key "${key}" set to "${value}"`);
  } catch (error) {
    console.error(`Error setting key "${key}":`, error);
  }
}

// GET operation
async function get(key) {
  try {
    const value = await redis.get(key);
    console.log(`Value for key "${key}":`, value);
    return value;
  } catch (error) {
    console.error(`Error getting value for key "${key}":`, error);
  }
}

// DELETE operation
async function del(key) {
  try {
    await redis.del(key);
    console.log(`Key "${key}" deleted`);
  } catch (error) {
    console.error(`Error deleting key "${key}":`, error);
  }
}

module.exports = { set, get, del };
