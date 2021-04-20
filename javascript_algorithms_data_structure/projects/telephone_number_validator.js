function telephoneCheck(str) {
    return /^(\d{3})-(\1)-(\1)5?$|^\(\d{3}\)\d{3}[-\s]\d{4}$|^\(\d{3}\) \d{3}-\d{4}$|^\d{3} \d{3} \d{4}$|^\d{10}$|^1 \d{3}[\s-]\d{3}[\s-]\d{4}$|^1 ?\(\d{3}\) ?\d{3}-\d{4}$/.test(str);
  }
  
  telephoneCheck("555-555-5555");