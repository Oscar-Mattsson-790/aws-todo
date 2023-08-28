const shift = 3;

const endcrypt = (text) => {
  return text
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + shift))
    .join("");
};

const decrypt = (cipher) => {
  return cipher
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) - shift))
    .join("");
};

module.exports = {
  endcrypt,
  decrypt,
};
