export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','NB9VAOnoIrJIPxw9n8uj2g=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '/TzAbage08AjCeWk52oBYA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','Nz8Sik9MrsylPVMh1nGJEQ=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
