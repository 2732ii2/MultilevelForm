import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  result: string;
  req_title: string;
  no_of_opning: number;
  gender: string;
  urgent: string;
  jobs_title: string;
  jobs_detail: string;
  jobs_location: string;
  intrv_mod: string;
  intrv_dur: string;
  intrv_lang: string;
}

const initialState: CounterState = {
  value: 0,
  result: "",
  req_title: "",
  no_of_opning:0,
  gender: "",
  urgent: "",
  jobs_title: "",
  jobs_detail: "",
  jobs_location: "",
  intrv_mod: "",
  intrv_dur: "",
  intrv_lang: ""
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    changeval: (state, action) => {
      // console.log(action.payload);
      state.result = action.payload;
    },
    changereqtitle: (state, action) => {
      // console.log(action.payload["Requisiton Title"]?action.payload["Requisiton Title"]:"sorry");
      // if (action.payload["Requisiton Title"]) {
      state.req_title = action.payload["Requisiton Title"];
      // } else {
      //   state.req_title;
      // }
    },
    updno_of: (state, action) => {
      console.log(action.payload["openings"]);
      state.no_of_opning = action.payload["openings"];
    },
    genup: (state, action) => {
      console.log(action.payload["gender"]);
      state.gender = action.payload["gender"];
    },
    urgentupd: (state, action) => {
      console.log(action.payload["urgent"]);
      state.urgent = action.payload["urgent"];
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    jdupd: (state, action) => {
      console.log(action.payload["jobs detail"]);
      state.jobs_detail = action.payload["jobs detail"];
    },
    jdttl: (state, action) => {
      console.log(action.payload["jobs title"]);
      state.jobs_title = action.payload["jobs title"];
    },
    jdloc: (state, action) => {
      console.log(action.payload["jobs location"]);
      state.jobs_location = action.payload["jobs location"];
    },
    modeupd: (state, action) => {
      // console.log("interview mode",action.payload["interview mode"]);
      state.intrv_mod = action.payload["interview mode"];
    },
    inter_lang: (state, action) => {
      // console.log("interview lang",action.payload["interview lang"]);
      state.intrv_lang = action.payload["interview lang"];
    },
    inter_dura: (state, action) => {
      // console.log("interview duration",action.payload["interview duration"]);
      state.intrv_dur = action.payload["interview duration"];
    },
  },
});

export const {
  increment,
  jdttl,
  inter_dura,
  inter_lang,
  modeupd,
  decrement,
  jdloc,
  incrementByAmount,
  changeval,
  jdupd,
  changereqtitle,
  updno_of,
  genup,
  urgentupd,
} = counterSlice.actions;

export default counterSlice.reducer;
































// type InitialState = {
//   value: AuthState;
// };
// type AuthState = {
//   isAuth: boolean;
//   username: string;
//   uid: string;
//   isModerator: boolean;
// };
// const initalState = {
//   value: {
//     isAuth: false,
//     username: "",
//     uid: "",
//     isModerator: false,
//   } as AuthState,
// } as InitialState;

// export const auth = createSlice({
//   name: "auth",
//   initalState,
//   reducers: {
//     logout: () => {
//       return initalState;
//     },
//     logIn: (state, action: PayloadAction<string>) => {
//       return {
//         value: {
//           isAuth: true,
//           username: action.payload,
//           uid: "1318aasaea",
//           isModerator: false,
//         },
//       };
//     },
//   },
// });

// export const { logout, logIn } = auth.actions;
// const authReducer=auth.reducer;
// export default auth.reducer;
