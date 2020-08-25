import { WebPlugin } from '@capacitor/core';
import { CapcipermissionPlugin } from './definitions';

export class CapcipermissionWeb extends WebPlugin implements CapcipermissionPlugin {
  constructor() {
    super({
      name: 'Capcipermission',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Capcipermission = new CapcipermissionWeb();

export { Capcipermission };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Capcipermission);
