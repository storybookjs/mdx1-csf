import mdx from '@mdx-js/mdx';
import { createCompiler, MdxOptions } from './sb-mdx-plugin';

import type { CompileOptions, MdxCompileOptions, JSXOptions } from './types';
import { transformJSXAsync, transformJSXSync } from './jsx';

export type { CompileOptions, MdxCompileOptions, JSXOptions };

export const compile = async (code: string, options?: MdxOptions) => {
  const result = await mdx(code, { compilers: options?.skipCsf ? [] : [createCompiler(options)] });
  return transformJSXAsync(result, options?.jsxOptions);
};

export const compileSync = (code: string, options?: MdxOptions) => {
  const result = mdx.sync(code, { compilers: options?.skipCsf ? [] : [createCompiler(options)] });
  return transformJSXSync(result, options?.jsxOptions);
};
