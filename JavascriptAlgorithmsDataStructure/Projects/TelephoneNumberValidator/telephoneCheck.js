function telephoneCheck(str) {
  const validTelephoneNumber = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /1\(\d{3}\)\d{3}-\d{4}/
  ]

  return validTelephoneNumber
    .some(regex => regex.test(str))
}

console.log(telephoneCheck("555-555-5555"))