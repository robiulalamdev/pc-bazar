import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewMessage: "",
  cpuProcessor: null,
  motherboard: null,
  ram: null,
  powerSupply: null,
  storageDevice: null,
  monitor: null,
  buildItemsCounter: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setReviewMessage: (state, action) => {
      state.reviewMessage = action.payload;
    },
    setCpuProcessor: (state, action) => {
      const item = state.cpuProcessor;
      if (item) {
        state.cpuProcessor = action.payload;
      } else {
        state.cpuProcessor = action.payload;
        state.buildItemsCounter.push(action.payload?.category);
      }
    },
    setMotherboard: (state, action) => {
      const item = state.motherboard;
      if (item?._id) {
        state.motherboard = action.payload;
      } else {
        state.motherboard = action.payload;
        state.buildItemsCounter.push(action.payload?.category);
      }
    },
    setRam: (state, action) => {
      const item = state.ram;
      if (item?._id) {
        state.ram = action.payload;
      } else {
        state.ram = action.payload;
        state.buildItemsCounter.push(action.payload?.category);
      }
    },
    setPowerSupply: (state, action) => {
      const item = state.powerSupply;
      if (item?._id) {
        state.powerSupply = action.payload;
      } else {
        state.powerSupply = action.payload;
        state.buildItemsCounter.push(action.payload?.category);
      }
    },
    setStorageDevice: (state, action) => {
      const item = state.storageDevice;
      if (item?._id) {
        state.storageDevice = action.payload;
      } else {
        state.storageDevice = action.payload;
        state.buildItemsCounter.push(action.payload?.category);
      }
    },
    setMonitor: (state, action) => {
      const item = state.monitor;
      if (item?._id) {
        state.monitor = action.payload;
      } else {
        state.monitor = action.payload;
        state.buildItemsCounter.push(action.payload?.category);
      }
    },
    setBuildItemsCounter: (state, action) => {
      state.buildItemsCounter = action.payload;
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
  setBuildItemsCounter,
} = productSlice.actions;

export default productSlice.reducer;
