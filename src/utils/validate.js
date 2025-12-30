export const checkValidateData = (email, password, fullName) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
      password
    );

  if (fullName == "") {
    return "FullName Cannot Be Empty";
  }
  if (email == "") {
    return "Email Cannot Be Empty";
  }

  if (password == "") {
    return "Password Cannot Be Empty";
  }

  if (!isEmailValid) {
    return "Email Id is Not Valid";
  }

  if (!isPasswordValid) {
    return "Password Not Valid";
  }

  return null;
};
