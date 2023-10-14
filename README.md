# jscodeshift-ts-template

Template repository for Typescript [jscodeshift](https://github.com/facebook/jscodeshift) transformers. It's based on the official jscodeshift conventions to build transformers. This template includes tests and debug config for VS Code too.

Be careful when using codemods and always check the transformed code.
Also remember that not every code migration can be easily 100% automated.

## Development

Install dependencies:

```
$ npm i
```

Run tests:

```
$ npm test
```

## How to run codemods

Install jscodeshift:

```
$ npm i -g jscodeshift
```

Run a codemod for Typescript files:

```
$ jscodeshift --parser=ts -t <path-to-codemod> <file-path-or-pattern>
```

## Included codemods

### example

An example codemod. It replaces all identifier names with a new name.
This codemod showcases Typescript code, custom options and change detection to avoid writing ASTs to files if there are no changes.

Example:

_command_
```bash
jscodeshift -t ./src/example.ts <file> --parser=ts --newName=hello
```

_input code_
```typescript

```

_output code_
```typescript

```

Options:
- **newName** *(string)*
  The new name of every identifier in the source code. Set by default to `'hello'`.
