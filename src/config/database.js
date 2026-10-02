import mongoose from 'mongoose';

// Database operations should fail clearly instead of waiting in a hidden queue.
mongoose.set('bufferCommands', false);

mongoose.connection.on('error', () => {
  console.error('MongoDB reported a connection error.');
});

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI?.trim();

  if (!uri) {
    throw new Error('MONGODB_URI is required.');
  }

  await mongoose.connect(uri, {
    // Allow time for server selection on the remote Atlas replica set.
    serverSelectionTimeoutMS: 30000
  });
}
