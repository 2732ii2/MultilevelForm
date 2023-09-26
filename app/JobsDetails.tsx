import { Input, Select } from "@chakra-ui/react";
import React from "react";
import {
  changereqtitle,
  updno_of,
  jdloc,
  jdttl,
  jdupd,
  genup,
  urgentupd,
} from "../app/redux/authslice";
import { useSelector, useDispatch } from "react-redux";
export const JobsDetails = ({ props }:any) => {
  console.log(props);
  var list_1 = [
    { name: "Jobs Title" },
    { name: "Jobs Details" },
    {
      name: "Jobs Location",
    },
  ];
  const req_title = useSelector((state: any) => state.counter.req_title);

  const Jobstitle = useSelector(
    (state: any) => state.counter["jobs_title"]
  );
    const JobsDetail = useSelector(
      (state: any) => state.counter["jobs_detail"]
    );
    const Jobslocation = useSelector(
      (state: any) => state.counter["jobs_location"]
    );
  console.log(Jobstitle, JobsDetail, Jobslocation);

  const dispatch = useDispatch();
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        {list_1.map((e, i) => {
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
              <Input
                name={e.name}
                //   type={i == 0 ? "text" : "number"}
                onChange={(e) => {
                  // console.log({ [e.target.name]: e.target.value});
                  if (i == 0) {
                    console.log(0);
                    dispatch(jdttl({ ["jobs title"]: e.target.value }));
                  } else if (i == 1) {
                    dispatch(jdupd({ ["jobs detail"]: e.target.value }));
                  } else {
                    dispatch(jdloc({ ["jobs location"]: e.target.value }));
                  }
                }}
                marginTop={"20px"}
                width={"90%"}
                variant={"filled"}
                bg={"transparent"}
                border={"1px solid rgba(0,0,0,.3)"}
              />
              {i == 0 ? (
              props.jobtitle?  <p style={{ color: "red" }}>{props.jobtitle}</p>:null
              ) : i == 1 ? (
                props.jobsdetails? <p style={{ color: "red" }}>{props.jobsdetails}</p>:null
              ) : (
               props.jobslocation? <p style={{ color: "red" }}>{props.jobslocation}</p>:null
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
