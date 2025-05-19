export const CheckValidData = (email, password) => {
    const IsEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const IsPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); 

    if(!IsEmailValid) {
        return "Please enter a valid email address."
    }
    if(!IsPasswordValid) {
        return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";

  }
  return null;  
}