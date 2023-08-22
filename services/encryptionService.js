function encrypt(text) {
  const shift = 1;
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      return String.fromCharCode(code + shift);
    })
    .join("");
}

module.exports = { encrypt };
