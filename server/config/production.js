module.exports =  {
  user: {
    role: 'superAdmin',
    username: 'q',
    password: 'q',
    nickname: 'Essay',
    email: 'qq22337383@gmail.com',
    motto: 'Never too old to learn',
  },
  jwt: {
    secret: 'essay',
    expiresIn: 1296000,
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'essay',
    port: 27017,
    username: '',
    password: '',
  },
  githubConfig: {
    githubClient: 'c1d2860fe1aa9ca8cc5c',
    githubSecret: '07335b42f578b919f4ce7704ba196809ebe0adae',
    scope: 'user',
  },
  emailConfig: {
    user: 'biabiaya@outlook.com',
    pass: 'Bia15021182795.',
  },
  app: {
    domain: 'http://8.6.8.244:3000',
    baseApi: '/v1',
  },
}
