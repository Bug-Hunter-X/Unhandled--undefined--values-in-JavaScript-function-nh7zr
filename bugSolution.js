function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  } else if (typeof x === 'object' && x !== null && Array.isArray(x)) {
    return x.length; // Check if x is an array before accessing length
  }
  else{
    return -1
  }
} 