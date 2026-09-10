module.exports = (ctx = {}) => {
  const file = String(ctx.file || ctx.from || '').replace(/\\/g, '/');
  if (file.includes('/kalki-ui/') && file.endsWith('.css')) {
    return { plugins: [] };
  }

  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
};
