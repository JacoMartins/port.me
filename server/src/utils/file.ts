import fs from 'fs';
import { resolve } from 'path';

export const deleteFile = async(filename:string) => {
  try {
    fs.promises.stat(resolve(__dirname, '..', '..', '..', `./web/tmp/avatar/${filename}`));
  } catch {
    return;
  }

  await fs.promises.unlink(resolve(__dirname, '..', '..', '..', `./web/tmp/avatar/${filename}`));
};