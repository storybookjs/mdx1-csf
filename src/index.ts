import mdx from '@mdx-js/mdx';
import { createCompiler, MdxOptions } from './sb-mdx-plugin';

export const compile = async (code: string, options?: MdxOptions) =>
  mdx(code, { compilers: options?.skipCsf ? undefined : [createCompiler(options)] });

export const compileSync = (code: string, options?: MdxOptions) =>
  mdx.sync(code, { compilers: options?.skipCsf ? undefined : [createCompiler(options)] });

export * from './sb-mdx-plugin';
