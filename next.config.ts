const nextConfig = {
  trailingSlash: false,
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
  async redirects() {
    return [{ source: "/:path*/", destination: "/:path*", permanent: true }];
  },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' https://images.unsplash.com https://*.google.com https://*.googleapis.com data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; frame-src https://www.google.com; connect-src 'self' https://api.web3forms.com; font-src 'self' data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com" }
    ] }];
  }
};
export default nextConfig;
