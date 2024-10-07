/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/py/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*"
            : "https://nextjs-fastapi-starter-navy-six.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
