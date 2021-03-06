module.exports = {
  apps : [{
    name: "code-english5001",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],
  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      // key: "$HOME/.ssh",
      // SSH user
      user: "root",
      // SSH host
      host: ["47.98.138.195"],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/master",
      // GIT remote
      repo: "git@github.com:raoenhui/code-english.git",
      // path in the server
      path: "/ice/pm2/code-english",
      // Pre-setup command or path to a script on your local machine
      "pre-setup": "apt-get install git ; ls -la",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      "post-setup": "ls -la",
      // pre-deploy action
      "pre-deploy-local": "echo 'This is a pre-deploy-local command'",
      // post-deploy action
      "post-deploy": "npm install && npm run build && pm2 reload ecosystem.config.js --env production"
    },
  }
}
