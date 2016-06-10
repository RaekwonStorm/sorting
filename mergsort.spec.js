describe('Split', function(){
  it('handles an empty array', function(){
    expect( split([]) ).toEqual( [[]] );
  });

  it('handles a single item array', function(){
    expect( split([1]) ).toEqual( [[1] ]);
  });

  it('splits an array with an even length', function(){
    expect( split([2,3,5,4,1,6]) ).toEqual( [[2,3,5], [4,1,6] ]);
  });

  it('splits an array with an odd length', function(){
    expect( split([2,3,5,4,1]) ).toEqual( [[2,3], [5,4,1] ]);
  });

});

describe('Merge', function(){

  it('handles an empty array', function(){
    expect( merge([2,3], []) ).toEqual( [2,3]);
  });

  it('handles two empty arrays', function(){
    expect( merge([], []) ).toEqual( []);
  });

  it('combines two arrays of equal size in order', function(){
    expect( merge([1,9], [3, 7]) ).toEqual( [1,3,7,9]);
  });

  it('combines two arrays of differing size in order', function(){
    expect( merge([1,2], [1, 2, 5]) ).toEqual( [1,1,2,2,5]);
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });

  it('handles a multiple item array', function(){
    expect( mergeSort([2,3,5,4,1]) ).toEqual( [1,2,3,4,5] );
  });
});
