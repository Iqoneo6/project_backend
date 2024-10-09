module.exports = {
  apps: [
    {
      name: "my-app",                // Application name
      script: "./server.js",            // Path to your application entry point
      instances: "max",               // Number of instances to run (or specify a number)
      exec_mode: "cluster",           // Run in cluster mode
      watch: false,                   // Enable or disable watching for file changes
      env: {
        NODE_ENV: "development",      // Environment variables for development
      },
      env_production: {
        NODE_ENV: "production",       // Environment variables for production
      },
      log_file: "./logs/combined.log", // Log file location
      error_file: "./logs/error.log",   // Error log location
      out_file: "./logs/output.log",     // Standard output log location
      combine_logs: true,                // Combine logs from all instances
      max_memory_restart: "1G",          // Restart if the app uses more than 1GB of memory
    },
  ],
};
