const loginData = [
  {
    id: "UC-1",
    username: "standard_user",
    password: "secret_sauce",
    expectedError: "Username is required",
  },
  {
    id: "UC-2",
    username: "standard_user",
    password: "",
    expectedError: "Password is required",
  },
  {
    id: "UC-3",
    username: "standard_user",
    password: "secret_sauce",
    expectedTitle: "Swag Labs",
  },
];

export default loginData;
