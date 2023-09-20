import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "@src/lib/api/openai";
import { SettingsState } from "./types";
import { getStorage } from "@src/lib/storage";
import { ChatGPTModel } from "@src/lib/constants/openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

const initialState: SettingsState = {
  preamble:
    "You are an AI professional actor, from now on act as Sherlock Holmes.",
  maxTokens: 5,
  shiftSend: false,
  showPreamble: false,
  model: "gpt-3.5-turbo",
};

// Reducer
export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPreamble: (state, payload: PayloadAction<{ preamble: string }>) => {
      state.preamble = payload.payload.preamble;
    },
    setApiKey: (state, payload: PayloadAction<{ apiKey: string }>) => {
      state.apiKey = payload.payload.apiKey;

      getStorage()
        .setApiKey(payload.payload.apiKey)
        .catch((e: unknown) => {
          console.error(e);
        });
    },
    setShiftKey: (state, payload: PayloadAction<{ shiftSend: boolean }>) => {
      state.shiftSend = payload.payload.shiftSend;
    },
    setShowPreamble: (state, payload: PayloadAction<{ show: boolean }>) => {
      state.showPreamble = payload.payload.show;
    },
    setModel: (state, payload: PayloadAction<{ model: ChatGPTModel }>) => {
      state.model = payload.payload.model;
    },
  },
});
// Actions
export const {
  setPreamble,
  setApiKey,
  setShiftKey,
  setShowPreamble,
  setModel,
} = settingSlice.actions;

export const dialogueReducer = settingSlice.reducer;

export const INITIAL_SETTINGS_STATE = initialState;
