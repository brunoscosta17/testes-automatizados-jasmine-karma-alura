import { UniqueIdService } from './unique-id.service';
describe('O artefato que se quer testar', () => {

  it('Primeira condição que queremos testar', () => {

  });

  it('Segunda condição que queremos testar', () => {

  });

});

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBe(true);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} mustn't generate duplicated id when called multiple times`, () => {
    const firstId = service.generateUniqueIdWithPrefix('app');
    const secondId = service.generateUniqueIdWithPrefix('app');
    expect(firstId).not.toBe(secondId);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} mustn't generate duplicated id when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

});
