import { error_q1 } from '../src/challenge-questions/error-handling';

describe('ERROR', () => {
  test('It should not throw error', () => {
    const test_obj = {
      school: {
        primary: 'test-primary',
        secondary: 'test-secondary',
      },
      name: 'test-name',
    };

    const expected_return = {
      primarySch: test_obj.school.primary,
      secondarySch: test_obj.school.secondary,
      name: test_obj.name,
    };

    expect(error_q1({})).toEqual({});
    expect(error_q1(test_obj)).toEqual(expected_return);
  });
});
