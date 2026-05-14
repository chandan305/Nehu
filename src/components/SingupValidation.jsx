function SingupValidation(values) {

  let error = {}

  const name_pattern = /^[A-Za-z ]+$/

  const email_pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const password_pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  // Name Validation
  if (values.name === "") {
    error.name = "Name should not be empty"
  }
  else if (!name_pattern.test(values.name)) {
    error.name = "Name didn't match"
  }
  else {
    error.name = ""
  }

  // Email Validation
  if (values.email === "") {
    error.email = "Email should not be empty"
  }
  else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match"
  }
  else {
    error.email = ""
  }

  // Password Validation
  if (values.password === "") {
    error.password = "Password should not be empty"
  }
  else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match"
  }
  else {
    error.password = ""
  }

  return error
}

export default SingupValidation