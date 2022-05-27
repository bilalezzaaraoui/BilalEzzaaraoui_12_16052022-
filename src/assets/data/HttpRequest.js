import axios from "axios";
import * as Mock from "./MockupData";

// All User Info
export const GetAllUserInfo = async (id, dataType) => {
  try {
    if (dataType === "json") {
      const request = await axios.get(`http://localhost:3000/user/${id}`);

      const data = await request.data.data;

      return data;
    }
    console.log(id, typeof id);

    if (dataType === "mock") {
      if (id === "18") {
        console.log("mock");
        return Mock.userInfo18.data;
      }

      if (id === "12") {
        return Mock.userInfo12.data;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Get User Performance
export const GetUserPerformance = async (id, dataType) => {
  try {
    if (dataType === "json") {
      const request = await axios.get(
        `http://localhost:3000/user/${id}/performance`
      );

      const data = await request.data.data;

      return data;
    }

    if (dataType === "mock") {
      if (id === "18") {
        return Mock.performance18.data;
      }

      if (id === "12") {
        return Mock.performance12.data;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Get User Activity
export const GetUserActivity = async (id, dataType) => {
  try {
    if (dataType === "json") {
      const request = await axios.get(
        `http://localhost:3000/user/${id}/activity`
      );

      const data = await request.data.data;

      return data;
    }

    if (dataType === "mock") {
      if (id === "18") {
        return Mock.userActivity18.data;
      }

      if (id === "12") {
        return Mock.userActivity12.data;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Get User Average Sessions
export const GetUserAverageSessions = async (id, dataType) => {
  try {
    if (dataType === "json") {
      const request = await axios.get(
        `http://localhost:3000/user/${id}/average-sessions`
      );

      const data = await request.data.data;

      return data;
    }

    if (dataType === "mock") {
      if (id === "18") {
        return Mock.averageSession18.data;
      }

      if (id === "12") {
        return Mock.averageSession12.data;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};
