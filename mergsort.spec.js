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

describe('Split', function(){
  it('handles an empty array', function(){
    expect( split([2,3,5,4,1]) ).toEqual( [[2,3], [5,4,1] ]);
  });
});

describe('Merge', function(){
  it('combines two arrays in order', function(){
    expect( merge([2,3], [1, 4, 5]) ).toEqual( [1,2,3,4,5]);
  });
});