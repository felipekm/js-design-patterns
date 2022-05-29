import { ISettings } from './interface';
import { DEFAULT_MODE } from './constants';

class Settings implements ISettings {

  static instance: ISettings;
  public readonly viewModeClass = DEFAULT_MODE;

  // prevent new with private constructor
  private constructor() {
    // do nothing
  }

  static getInstance(): ISettings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }

}

const settings = Settings.getInstance();

console.log(`# Singleton
    - The singleton pattern is used to ensure that a class has only one instance.
    - In this example this classe is used to ensure that the same instance of the class is used for all the calls, so our constructor is private.
`);

console.log(`Settings default view mode: `, settings.viewModeClass);