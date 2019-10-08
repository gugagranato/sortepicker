export const imports = {
  'src/Documentation/Cards.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-documentation-cards" */ 'src/Documentation/Cards.mdx'
    ),
}
