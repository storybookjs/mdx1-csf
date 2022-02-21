import mdx from '@mdx-js/mdx';
import loader from '@mdx-js/loader';

import { createCompiler, MdxOptions } from './sb-mdx-plugin';

export const compile = async (code: string, options?: MdxOptions) =>
  mdx(code, { compilers: [createCompiler(options)] });

export const compileSync = (code: string, options?: MdxOptions) =>
  mdx.sync(code, { compilers: [createCompiler(options)] });

export * from './sb-mdx-plugin';

export default loader;
