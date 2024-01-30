import { describe, expect, it, test } from 'vitest';
import { sumNumbers } from './sumNumbers';

// describe creates a suite
// it creates a spec
// expect creates an assertion / expectation

describe('sumNumbers function', () => {
  it('adds two numbers', () => {
    expect(sumNumbers(1, 1)).toEqual(2);
    expect(sumNumbers(2, 2)).toEqual(4);
  });
  it('errors when given non-numeric inputs', () => {
    expect(sumNumbers('word', 'word').toThrowError());
  });
});

describe('fetches data from a server', () => {
  it('makes a call to fetch and gets data', () => {

    const fetch = (url) => {
      return {data:{test:'testing'}}
    }
    function getData() {
      return data = fetch();
    }
    expect getData().toEqual({test:'testing'});

  }
  )
  it('calls fetch when the button is clicked', () =>
  {
    spyOn(fetch);
    function getData() {
      return data = fetch();
    }

    const result = simulate('click', button);

    expect fetch.toHaveBeenCalled()
  })
})

