function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime
  
    // Check if num is divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    // Check for primality using a step of 6 (optimization for numbers > 3)
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  function getPrime(n) {
    if (n <= 0) {
      return "Please enter a positive integer for 'n'.";
    }
  
    let count = 0; // Tracks the number of primes found
    let num = 2;   // Current number being checked for primality
  
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1; // Return the last prime number found
  }
  

  export default getPrime;