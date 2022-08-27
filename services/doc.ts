import path from 'path';
import fs from 'fs';
import { merge } from 'lodash';

const docsDirectory = path.join(process.cwd(), 'docs/doc');

export function getJsonDoc() {
  let spec: any = {};

  const files = fs.readdirSync(docsDirectory);
  const tags: any = [];
  files.forEach((file) => {
    if (file.split('.').pop() === 'json') {
      const fullPath = path.join(docsDirectory, file);

      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      spec = merge(spec, content);

      if (content.tags) {
        Object.values(content.tags).forEach((tag) => {
          tags.push(tag);
        });
      }
    }
  });

  spec.tags = tags;

  spec.tags.sort((a: any, b: any) =>
    a.name === 'PSD2' ? -1 : a.name.localeCompare(b.name, 'pt-br')
  );

  return spec;
}
