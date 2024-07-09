const loginData = [
  {
    id: "UC-1",
    username: "standard_user",
    password: "secret_sauce",
    expectedError: "Username is required",
    description: "should display an error when username is not entered",
  },
  {
    id: "UC-2",
    username: "standard_user",
    password: "secret_sauce",
    expectedError: "Password is required",
    description: "should display an error when password is not entered",
  },
  {
    id: "UC-3",
    username: "standard_user",
    password: "secret_sauce",
    expectedTitle: "Swag Labs",
    description: "should login with valid credentials",
  },
];

export default loginData;
