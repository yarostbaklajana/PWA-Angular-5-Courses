import { FutureModuleModule } from './future-module.module';

describe('FutureModuleModule', () => {
  let futureModuleModule: FutureModuleModule;

  beforeEach(() => {
    futureModuleModule = new FutureModuleModule();
  });

  it('should create an instance', () => {
    expect(futureModuleModule).toBeTruthy();
  });
});
