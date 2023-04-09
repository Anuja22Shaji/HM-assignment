import { encode } from 'base-64';
import { randomBytes } from 'crypto'; // Import the crypto library

export function generatePassword(length, complexity) {
  let charset = ''; // The set of characters to choose from for the password
  if (complexity === 'low') {
    charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  } else if (complexity === 'medium') {
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  } else if (complexity === 'high') {
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  } else {
    throw new Error('Invalid complexity level');
  }

  // Generate a random sequence of bytes
  const randomBytesArray = randomBytes(Math.ceil(length * 3 / 4));

  // Encode the bytes as a base64 string
  let base64String = encode(randomBytesArray);

  // Remove any characters that are not in the character set
  let password = '';
  for (let i = 0; i < base64String.length; i++) {
    if (charset.indexOf(base64String.charAt(i)) !== -1) {
      password += base64String.charAt(i);
    }
  }

  // Trim the password to the desired length
  return password.slice(0, length);
}