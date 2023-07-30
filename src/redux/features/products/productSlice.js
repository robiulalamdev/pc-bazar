import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewMessage: "",
  cpuProcessor: null,
  motherboard: null,
  ram: null,
  powerSupply: null,
  storageDevice: null,
  monitor: null,
  others: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setReviewMessage: (state, action) => {
      state.reviewMessage = action.payload;
    },
    setCpuProcessor: (state, action) => {
      state.cpuProcessor = action.payload;
    },
    setMotherboard: (state, action) => {
      state.motherboard = action.payload;
    },
    setRam: (state, action) => {
      state.ram = action.payload;
    },
    setPowerSupply: (state, action) => {
      state.powerSupply = action.payload;
    },
    setStorageDevice: (state, action) => {
      state.storageDevice = action.payload;
    },
    setMonitor: (state, action) => {
      state.monitor = action.payload;
    },
    setOthers: (state, action) => {
      state.others = action.payload;
    },
  },
});

export const {
  setReviewMessage,
  setCpuProcessor,
  setMotherboard,
  setRam,
  setPowerSupply,
  setStorageDevice,
  setMonitor,
  setOthers,
} = productSlice.actions;

export default productSlice.reducer;
