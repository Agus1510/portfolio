import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  setValidateUser,
  updateUser,
  setAuthToken,
  setAllRooms,
} from "../reducer/index";

// asynchronous actions

export const register = createAsyncThunk(
  "/auth/register",
  async (userData, thunkAPI) => {
    try {
      const metaData = await axios.post("/myportfolio/auth/register", userData);
      thunkAPI.dispatch(setValidateUser(metaData.data.user));
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const createRoom = createAsyncThunk(
  "/roomsprivate",
  async (obj, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };
    try {
      const metaData = await axios.post(
        "/myportfolio/roomsprivate",
        obj.productData,
        config
      );
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const login = createAsyncThunk(
  "/auth/myportfolio/login",
  async (post, thunkAPI) => {
    try {
      const metaData = await axios.post("/myportfolio/auth/login", post);
      thunkAPI.dispatch(setValidateUser(metaData.data.user));
      thunkAPI.dispatch(setAuthToken(metaData.data.token));
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const editUsername = createAsyncThunk(
  "/:id/profile",
  async (obj, thunkAPI) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };

    try {
      const metaData = await axios.put(
        `/myportfolio/usersprivate/${obj.id}/profile`,
        { username: obj.username },
        config
      );
      thunkAPI.dispatch(updateUser(metaData.data));
      return metaData.data;
    } catch (err) {
      alert("Ups! Something went wrong...EDITUSERNAME");
      new Error(err);
    }
  }
);

export const editPassword = createAsyncThunk(
  "/auth/forgotPassword",
  async (email) => {
    try {
      const metaData = await axios.put(`/myportfolio/auth/forgotPassword`, {
        email: email,
      });
      return metaData.data;
    } catch (err) {
      alert("Ups! Something went wrong...EDITPASSWORD");
      console.log("err", err);
    }
  }
);

export const getAllRooms = createAsyncThunk(
  "/myportfolio/rooms",
  async (obj, thunkAPI) => {
    try {
      const metaData = await axios.get(`/myportfolio/rooms`);
      thunkAPI.dispatch(setAllRooms(metaData.data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const auhtGoogle = createAsyncThunk(
  "/auth/googlelogin",
  async (tokenId, thunkAPI) => {
    try {
      const metaData = await axios.post("/myportfolio/auth/googlelogin", {
        tokenId,
      });
      thunkAPI.dispatch(setValidateUser(metaData.data.user));
      thunkAPI.dispatch(setAuthToken(metaData.data.token));
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

// export const deleteUser = createAsyncThunk(
//   "/usersprivate/deleteuser",
//   async (obj) => {
//     try {
//       let config = {
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${obj.token}`,
//         },
//         data: {
//           id: obj.userId,
//         },
//       };

//       const metaData = await axios.delete(
//         `/myportfolio/usersprivate/deleteUser`,
//         config
//       );
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   }
// );

export const deleteRoom = createAsyncThunk(
  "/roomsprivate/deleteRoom",
  async (obj, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
        data: {
          id: obj.id,
        },
      };

      const metaData = await axios.delete(
        `/myportfolio/roomsprivate/deleteRoom`,
        config
      );
      thunkAPI.dispatch(getAllRooms());
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const isAdminConverter = createAsyncThunk(
  "/usersprivate/isAdmin",
  async (obj) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
      };

      const metaData = await axios.put(
        `/myportfolio/usersprivate/isAdmin`,
        { id: obj.userId, change: obj.boolean },
        config
      );
      console.log(metaData);
      return metaData.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const isPremiumConverter = createAsyncThunk(
  "/usersprivate/isPremium",
  async (obj, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
      };
      const metaData = await axios.put(
        `/myportfolio/usersprivate/isPremium`,
        { hola: "" },
        config
      );
      return metaData.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }
);

export const Banear = createAsyncThunk("/usersprivate/ban", async (obj) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };

    const metaData = await axios.post(
      `/myportfolio/usersprivate/ban`,
      { id: obj.userId, fecha: obj.date },
      config
    );

    return { successful: true, data: metaData };
  } catch (err) {
    return { successful: false, error: err };
  }
});
