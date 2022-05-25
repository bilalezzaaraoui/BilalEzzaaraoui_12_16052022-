import axios from "axios";

// All User Info
export const GetAllUserInfo = async (userId) => {
  try {
    const request = await axios.get(`http://localhost:3000/user/${userId}`);

    const data = await request.data.data;

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

// Get User Performance
export const GetUserPerformance = async (userId) => {
  try {
    const request = await axios.get(
      `http://localhost:3000/user/${userId}/performance`
    );

    const data = await request.data.data;

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

// Get User Activity
export const GetUserActivity = async (userId) => {
  try {
    const request = await axios.get(
      `http://localhost:3000/user/${userId}/activity`
    );

    const data = await request.data.data;

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

// Get User Average Sessions
export const GetUserAverageSessions = async (userId) => {
  try {
    const request = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    );

    const data = await request.data.data;

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
