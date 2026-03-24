export const config = {
  backend: {
    baseUrl: process.env.BACKEND_URL || "http://salutt-backend.test",
    endpoints: {
      register: "/api/web-auth/register",
      subscribe: "/api/web-auth/subscribe",
    },
  },
} as const;

export type Config = typeof config;
