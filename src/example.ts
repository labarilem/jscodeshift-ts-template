import { API, FileInfo } from 'jscodeshift';

// DOC: to check AST node types use https://astexplorer.net/
// then:
// 1. set the transformer to "recast"
// 2. in "settings", set "typescript" as the parser

export type ExampleTransformerOptions = {
  newName: string;
}

export default function exampleTransformer(file: FileInfo, api: API, userOptions: Record<string, any>) {
  // setup useful objects
  const j = api.jscodeshift;
  const root = j(file.source);

  // parse options
  const defaultOptions: ExampleTransformerOptions = {
    newName: 'hello',
  };
  const options: ExampleTransformerOptions = Object.assign({ ...defaultOptions }, userOptions);

  // transform all identifier names
  const identifiers = root
    .find(j.Identifier, x => x.name !== options.newName)
    .forEach(x => x.node.name = options.newName);

  // only emit code if there are some changes
  return identifiers.size() > 0 ? root.toSource({ lineTerminator: '\n', quote: 'single' }) : null;
}
