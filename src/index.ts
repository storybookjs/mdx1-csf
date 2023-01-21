import mdx from '@mdx-js/mdx';
import { createCompiler, MdxOptions } from './sb-mdx-plugin';
import { transformJSXAsync, transformJSXSync } from './jsx';

export const compile = async (code: string, options?: MdxOptions) =>
  transformJSXAsync(
    await mdx(code, { compilers: options?.skipCsf ? [] : [createCompiler(options)] }),
    {}
  );

export const compileSync = (code: string, options?: MdxOptions) =>
  transformJSXSync(
    mdx.sync(code, { compilers: options?.skipCsf ? [] : [createCompiler(options)] }),
    {}
  );

export * from './sb-mdx-plugin';
