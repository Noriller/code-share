import { Code } from './Code';

describe('Code class', () => {
  const mockName = 'testName';
  const mockDescription = 'test description with more than 25 characters';
  it('should be defined', () => {
    const code = new Code({
      name: mockName,
      description: mockDescription,
    });
    expect(code).toBeDefined();
    expect(code).toEqual(expect.objectContaining({
      description: mockDescription,
      id: expect.any(String),
      image: undefined,
      name: mockName,
      restricted: false,
    }));
  });

  describe('expected values validation', () => {
    it('should validate name length', () => {
      expect(() => new Code({
        name: '',
        description: mockDescription,
      })).toThrow('Name need at least 5 characters.');
    });
    it('should validate description length', () => {
      expect(() => new Code({
        name: mockName,
        description: '',
      })).toThrow('Description need at least 25 characters.');
    });
  });

  describe('overriding default values', () => {
    it('should override id', () => {
      const spy = spyUUID();
      const mockID = 'testID';
      const code = new Code({
        name: mockName,
        description: mockDescription,
        id: mockID,
      });
      expect(spy).toHaveBeenCalledTimes(0);
      expect(code).toEqual(expect.objectContaining({
        description: mockDescription,
        id: mockID,
        image: undefined,
        name: mockName,
        restricted: false,
      }));
    });
    it('should override restricted', () => {
      const code = new Code({
        name: mockName,
        description: mockDescription,
        restricted: true,
      });
      expect(code).toEqual(expect.objectContaining({
        description: mockDescription,
        id: expect.any(String),
        image: undefined,
        name: mockName,
        restricted: true,
      }));
    });
  });
});

function spyUUID() {
  // eslint-disable-next-line global-require
  const uuid = require('uuid');
  jest.mock('uuid');
  return jest.spyOn(uuid, uuid.v4.name);
}
