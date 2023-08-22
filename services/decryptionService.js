function decrypt(encryptedText) {
  const shift = -1;
  return encryptedText
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      return String.fromCharCode(code + shift);
    })
    .join("");
}

module.exports = { decrypt };
