export const GetAllUserInformation = async () => {
  try {
    const request = await fetch("http://localhost:3000/user/18");
    const response = await request.json();
    console.log(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const GetUserPerformance = async () => {
  try {
    const request = await fetch("http://localhost:3000/user/12/performance");
    const response = await request.json();
    console.log(response);
  } catch (err) {
    console.log(err.message);
  }
};
