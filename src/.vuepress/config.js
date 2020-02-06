module.exports = {
  title: 'Databases',
  description: 'Database introduction course for the VIVES elektronics and ICT',
  dest: 'dist',
  plugins: [
    ['vuepress-plugin-zooming'],
    [
      // includes all files in `sourceDir`
      // ignore dotfiles and markdown
      'vuepress-plugin-public-files', {
        from: 'files',
        to: 'files',
      }
    ],
  ],
}