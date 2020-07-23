import { CodegenResult as Result, CompilerOptions } from '@vue/compiler-core';

export interface ComponentImport {
  path: string;
  named?: boolean;
  name?: string;
}

export interface Options {
  filename: string;
  components?: Record<string, ComponentImport>;
}

export interface CodegenResult extends Result {
  /**
   * Positions of expressions.
   *
   * [offset, length]
   */
  expressions: [number, number][];

  /**
   * Each tuple represents an simple expression (mostly identifier).
   *
   * [generatedOffset, generatedLength, sourceOffset, sourceLength, prefixLength]
   */
  mappings: [number, number, number, number, number][];
}
