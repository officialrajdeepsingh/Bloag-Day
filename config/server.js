module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9a96ee12af7c4218e8a2088339a26562'),
    },
  },
   cron: { enabled: true }
});
