const util = require("util");
const crypto = require("crypto");
const pbkdf2 = util.promisify(crypto.pbkdf2);
const verifyPassword = async (password, hashedPassword) => {
  const [algo, encodedSalt, iterStr, keyLenStr, encodedDigest] =
    hashedPassword.split(":");
  const salt = Buffer.from(encodedSalt, "base64");
  const iter = parseInt(iterStr, 10);
  const keyLen = parseInt(keyLenStr, 10);
  const storedDigest = Buffer.from(encodedDigest, "base64");
  const digest = await pbkdf2(password, salt, iter, keyLen, algo);
  return Buffer.compare(digest, storedDigest) === 0;
};
(async () => {
  const hashedPassword = await generatePassword("password");
  const result1 = await verifyPassword("password", hashedPassword);
  const result2 = await verifyPassword("passsword", hashedPassword);
  console.log(`hashed: ${hashedPassword}`);
  console.log(`password: ${result1} / passsword: ${result2}`);
})();
