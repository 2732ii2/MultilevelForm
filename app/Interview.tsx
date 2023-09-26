import React from 'react'
import { Input, Select } from "@chakra-ui/react";
import {
  changereqtitle,
  updno_of,
  genup,
  inter_dura,
  inter_lang,
  modeupd,
  urgentupd,
} from "../app/redux/authslice";
import { useSelector, useDispatch } from "react-redux";
export const Interview = ({ props }:any) => {
  console.log(props);
  var list_1 = [
    {
      name: "Interview Mode",
      value: ["Select Interview Mode", "online", "offline"],
    },
    {
      name: "Interview Duration",
      value: ["Select Interview duration", "long", "short", "medium"],
    },
    {
      name: "Interview Language",
      value: ["Select Interview Language", "English", "Hindi"],
    },
  ];
  const in_ln = useSelector((state: any) => state.counter.intrv_lang);
  const in_dur = useSelector((state: any) => state.counter.intrv_dur);
  const in_mod = useSelector((state: any) => state.counter.intrv_mod);
  const dispatch = useDispatch();
    console.log(in_ln, in_dur, in_mod);
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        {list_1.map((e, i) => {
           {
            return (
              <div
                key={i}
                style={{
                  marginTop: "20px",
                  paddingLeft: "20px",
                  // border:"1px solid black"
                }}
              >
                <label
                  style={{
                    width: "100%",
                    height: "50px",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {e.name}
                </label>
                <Select
                  onChange={(e) => {
                    console.log(e.target.value);
                    if (i == 0) {
                      dispatch(modeupd({ ["interview mode"]: e.target.value }));
                    } else if (i == 1) {
                      dispatch(
                        inter_dura({ ["interview duration"]: e.target.value })
                      );
                    } else {
                      dispatch(
                        inter_lang({ ["interview lang"]: e.target.value })
                      );
                    }
                  }}
                  marginTop={"20px"}
                  width={"90%"}
                  variant={"filled"}
                  bg={"transparent"}
                  border={"1px solid rgba(0,0,0,.3)"}
                >
                  {e.value.map((event, index) => {
                    if (index != 0) {
                      return (
                        <option key={index} value={event}>
                          {event}
                        </option>
                      );
                    } else {
                      return (
                        <option key={index} value={""}>
                          {event}
                        </option>
                      );
                    }
                    //   <option value={"Second"}>Second</option>
                  })}
                </Select>
                {i == 0 ? (
                  props.intrmode ? (
                    <p style={{ color: "red" }}>{props.intrmode}</p>
                  ) : null
                ) : i == 1 ? (
                  props.intrduration ? (
                    <p style={{ color: "red" }}>{props.intrduration}</p>
                  ) : null
                ) : i == 2 ? (
                  props.intrlang ? (
                    <p style={{ color: "red" }}>{props.intrlang}</p>
                  ) : null
                ) : null}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
