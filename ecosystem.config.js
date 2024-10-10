module.exports = {
  apps: [
    {
      name: 'my-node-app',       // Name of your application
      script: './server.js',     // Path to the main entry point of your application
      instances: 'max',          // Use all available CPU cores
      exec_mode: 'cluster',      // Run in cluster mode
      watch: true,               // Enable watch mode for automatic restarts on file changes
      max_memory_restart: '1G',  // Restart if memory usage exceeds 1GB
      env: {
        NODE_ENV: 'development', // Environment variables for development
        PORT: 3000,              // Development port
      },
      env_production: {
        NODE_ENV: 'production',   // Environment variables for production
        PORT: 8000,               // Production port
      },
    },
  ],
};
