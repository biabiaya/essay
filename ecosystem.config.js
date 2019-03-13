module.exports = {
  apps: [
    {
      name: 'essay',
      script: 'server/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: '8.6.8.244:3000',
      ref: 'origin/master',
      repo: 'git@github.com:biabiaya/essay.git',
      path: '/home/project/essay',
      'post-deploy': 'yarn && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
