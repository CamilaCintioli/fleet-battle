export interface Config {
  PORT: string | number;
}

export default function getConfig(): Config {
  return {
    PORT: process.env.PORT || 3000,
  };
}
