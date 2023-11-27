import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signinPost } from "./service";

export const signin = createAsyncThunk(
  "signer/signin",
  async (
    body: {
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data }: any = await signinPost(body);
      return data;
    } catch (error: any) {
      if (!error.response) {
        console.log(error);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

type Status = "default" | "error" | "success" | "warning" | "info" | undefined;

type initialStateType = {
  token: string;
  signed: boolean;
  status: string;
  message: string;
  statusMessage: Status;
};

const initialState: initialStateType = {
  token: "",
  signed: false,
  status: "idle",
  message: "",
  statusMessage: undefined,
};
const signer = createSlice({
  name: "signer",
  initialState,
  reducers: {
    logOut(state) {
      return (state = initialState);
    },
    clearMessage(state) {
      return (state = { ...state, message: "" });
    },
    signed(state, action) {
      return (state = {
        ...state,
        token: action.payload?.token,
        signed: true,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(signin.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "completed",
          token: action.payload?.token,
          signed: true,
          message: "success",
        });
      })
      .addCase(signin.rejected, (state, action: any) => {
        if (action.error?.code === "ECONNABORTED") {
          return (state = {
            ...state,
            status: "failed",
            message: "Tempo expirado! Por favor, tente novamente",
          });
        }
        return (state = {
          ...state,
          status: "failed",
          message: action.payload?.message,
          statusMessage: action.payload?.name,
        });
      });
  },
});

export const { logOut, clearMessage, signed } = signer.actions;

export default signer.reducer;
