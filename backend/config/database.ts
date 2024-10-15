module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', 'dpg-cs7b2t23esus73cj29g0-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_ecom_68qs'),
      user: env('DATABASE_USERNAME', 'strapi_ecom_68qs_user'),
      password: env('DATABASE_PASSWORD', 'WJplwZfQj8MoEsneR6oKOVX8Ygk3PG3q'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
