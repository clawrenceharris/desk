/**
 * Checks that the given email is valid, such that it matches an aacc student email
 * @param {string} email The email to check
 * @returns wether or not the email is valid
 */
export const checkValidEmail = (email) => {
  return email.endsWith("@mymail.aacc.edu");
};
