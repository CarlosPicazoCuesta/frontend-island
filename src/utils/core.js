export function sha512(str) {
  return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then((buf) => {
    return Array.prototype.map.call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2)).join("");
  });
}

const passCrypt = "3fdcd1fa7f8def455b3b0a488212a4532fadfa4effa2bccaf97324e0a3ff6326cf913188176310729e4d3d6eda24b33f8e5c9590c65b98971855824352a1041f";

export function checkPass(pass) {
  console.log("checkPass", pass === passCrypt);
  return pass === passCrypt;
}

export async function handlePasswordChange(password) {
  let hash = "";
  await sha512(password).then((hashPass) => (hash = hashPass));
  return hash;
}
