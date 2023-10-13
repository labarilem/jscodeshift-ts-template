import { defineTest } from 'jscodeshift/src/testUtils';

describe('example transformer', () => {
  defineTest(__dirname, './src/example', { newName: 'greeting' }, 'example/assignment', { parser: 'ts' });
});
