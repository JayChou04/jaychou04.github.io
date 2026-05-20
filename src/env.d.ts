/// <reference path="../.astro/types.d.ts" />

declare module '*.yaml' {
  const data: any;
  export default data;
}
