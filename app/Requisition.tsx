import {  Input, Select} from "@chakra-ui/react"
import React from 'react'
import {
  changereqtitle,
  updno_of,
  genup,
  urgentupd
} from "../app/redux/authslice";
import { useSelector, useDispatch } from "react-redux";
export const Requisition = ({props}:any) => {
    console.log(props);
  var list_1 = [
    { name: "Requisiton Title" },
    { name: "No of openings" },
    {
      name: "Gender",
      value: ["Select gender", "Male", "Female", "Non-binary"],
    },
    {
      name: "Urgency",
      value: ["Select Urgency", "Urgent", "Immediate Joining", "Relaxed"],
    },
  ];
  var values: any;
  const req_title = useSelector((state: any) => state.counter.req_title);
  const no_of_opning = useSelector(
    (state: any) => state.counter.no_of_opning
  );
  const gender = useSelector((state: any) => state.counter.gender);
  const urgent = useSelector((state: any) => state.counter.urgent);
  const dispatch = useDispatch();
  //   console.log(req_title, no_of_opning, gender, urgent);
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        {list_1.map((e, i) => {
          if (i < 2)
            return (
              <div
                id="lbs_div"
                key={i}
                
              >
                <label
                  id="lbls"
                  
                >
                  {e.name}
                </label>
                <Input
                  id="inp"
                  name={e.name}
                  type={i == 0 ? "text" : "number"}
                  onChange={(e) => {
                    // console.log({ [e.target.name]: e.target.value});
                    if (i == 0) {
                      dispatch(
                        changereqtitle({ [e.target.name]: e.target.value })
                      );
                    } else {
                      dispatch(updno_of({ ["openings"]: e.target.value }));
                    }
                  }}
                  marginTop={"20px"}
                  width={"90%"}
                  variant={"filled"}
                  bg={"transparent"}
                  border={"1px solid rgba(0,0,0,.3)"}
                />
                {i == 0 ? (
                  props.reqtitle ? (
                    <p style={{ color: "red" }}>{props.reqtitle}</p>
                  ) : null
                ) : props.no_of_opning ? (
                  <p style={{ color: "red" }}>{props.no_of_opning}</p>
                ) : null}
              </div>
            );
          else {
            return (
              <div key={i} id="lbs_div">
                <label id="lbls">{e.name}</label>
                <Select
                  id="inp"
                  onChange={(e: any) => {
                    values = e.value;
                    console.log(e.target.value);
                    if (i == 2) {
                      dispatch(genup({ ["gender"]: e.target.value }));
                    } else if (i > 2) {
                      dispatch(urgentupd({ ["urgent"]: e.target.value }));
                    }
                  }}
                >
                  {e.value
                    ? e.value.map((event: any, index: any): any => {
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
                      })
                    : null}
                </Select>
                {i < 3 ? (
                  props.gender ? (
                    <p style={{ color: "red" }}>{props.gender}</p>
                  ) : null
                ) : props.urgency ? (
                  <p style={{ color: "red" }}>{props.urgency}</p>
                ) : null}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
