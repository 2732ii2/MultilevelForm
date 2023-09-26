import React, { useState } from 'react'
import { Box, Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { useSelector,useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  changeval,
  changereqtitle,
} from "../app/redux/authslice";
import { Requisition } from './Requisition';
import { JobsDetails } from './JobsDetails';
import { Interview } from './Interview';

const MainHome = () => {
  var list_ = ["Requistion Details", "Jobs Details", "Interview Settings"];
   const count = useSelector((state :any) => state.counter.value);
   const result = useSelector((state: any) => state.counter.result);
   const req_title = useSelector((state: any) => state.counter.req_title);
   var [req_err,setreqerr]=useState({
    reqtitle:"",
    no_of_opning:"",
    gender:"",
    urgency:""
   })
   var [job_err, setjoberr] = useState({
     jobtitle: "",
     jobsdetails: "",
     jobslocation: "",
   });
   var [inter_err, setintrerr] = useState({
     intrlang: "",
     intrmode: "",
     intrduration: "",
   });
   const no_of_opning = useSelector((state: any) => state.counter.no_of_opning);
   const dispatch = useDispatch();
   const gender = useSelector((state: any) => state.counter.gender);
   const urgent = useSelector((state: any) => state.counter.urgent);
   const Jobstitle = useSelector((state: any) => state.counter["jobs_title"]);
   const JobsDetail = useSelector((state: any) => state.counter["jobs_detail"]);
   const Jobslocation = useSelector(
     (state: any) => state.counter["jobs_location"]
   );
   const in_ln = useSelector((state:any) => state.counter.intrv_lang);
   const in_dur = useSelector((state:any) => state.counter.intrv_dur);
   const in_mod = useSelector((state:any) => state.counter.intrv_mod);

  return (
    <div>
      <main id="mainpage">
        <Box width={"68%"} id="main_box" height={"92%"}>
          {/* font-family: Poppins; font-size: 1.5rem; margin-top: 2rem;
          margin-bottom: 2rem; */}
          <Heading
            id="main_heading"
            fontFamily={"arial"}
            fontWeight={900}
            fontSize={"1.5rem"}
          >
            {" "}
            Create Candidate Requisition
          </Heading>
          <div id="slit">
            {list_.map((e, i) => {
              return (
                <div
                  className={i == parseInt(count) ? "special" : "notspec"}
                  id="slitsame"
                  key={i}
                >
                  {e}
                </div>
              );
            })}
          </div>
          <Flex
            width={"95%"}
            height={"90%"}
            // border={"1px solid black"}
            marginLeft={"2%"}
            id="lastdiv"
          >
            <Box
              overflow={"hidden"}
              display={"flex"}
              flexDirection={"column"}
              width={"60%"}
              height={"80%"}
              // border={"1px solid black"}
            >
              <Box
                overflow={"hidden"}
                display={"flex"}
                // flexDirection={"column"}
                width={"100%"}
                height={"90%"}
                // border={"1px solid black"}
              >
                {" "}
                <div
                  style={{
                    marginLeft: `-${count}00%`,
                    // marginLeft: `-200%`,
                  }}
                  id="first"
                >
                  <Requisition props={req_err} />
                </div>
                <div id="second">
                  <JobsDetails props={job_err} />
                </div>
                <div id="third">
                  <Interview props={inter_err} />
                </div>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
                width={"100%"}
                height={"10%"}
              >
                {count ? (
                  <Button
                    onClick={() => {
                      // alert("hello");
                      if (count > 0) {
                        dispatch(decrement());
                      }
                    }}
                    variant={"solid"}
                    mr={"50px"}
                    id='btns'
                  >
                    Previous
                  </Button>
                ) : null}
                <Button
                  _hover={{
                    background: "orange",
                  }}
                  variant={"ghost"}
                  mr={"20px"}
                  bg={"orange.400"}
                  color={"white"}
                  onClick={() => {
                    if (count < 2) {
                      console.log("hello", count);
                      if (count == 0) {
                        var c = 0;
                        if (req_title) {
                          c += 1;
                        }
                        if (no_of_opning) {
                          c += 1;
                        }
                        if (gender) {
                          c += 1;
                        }
                        if (urgent) {
                          c += 1;
                        }
                        if (c < 4) {
                          console.log("some error");
                        }
                        if (c == 4) {
                          setreqerr({
                            ...req_err,
                            no_of_opning: "",
                            urgency: "",
                            gender: "",
                            reqtitle: "",
                          });
                          dispatch(increment());
                        } else {
                          console.log(req_title, no_of_opning, gender, urgent);
                          !req_title
                            ? setreqerr({
                                ...req_err,
                                reqtitle: "Requisition title is required",
                              })
                            : !no_of_opning
                            ? setreqerr({
                                ...req_err,
                                no_of_opning: "Enter a valid Number",
                              })
                            : !gender
                            ? setreqerr({
                                ...req_err,
                                gender: "Gender is required",
                              })
                            : !urgent
                            ? setreqerr({
                                ...req_err,
                                urgency: "Urgency is required",
                              })
                            : "";
                        }
                      } else if (count == 1) {
                        // alert([
                        //   count,
                        //   result,
                        //   req_title,
                        //   no_of_opning,
                        //   gender,
                        //   urgent,
                        //   Jobstitle,
                        //   JobsDetail,
                        //   Jobslocation,
                        // ]);
                        var c = 0;
                        if (Jobstitle) {
                          c += 1;
                        }
                        if (JobsDetail) {
                          c += 1;
                        }
                        if (Jobslocation) {
                          c += 1;
                        }

                        if (c < 3) {
                          console.log("some error");
                        }
                        if (c == 3) {
                          setjoberr({
                            ...job_err,
                            jobtitle: "",
                            jobsdetails: "",
                            jobslocation: "",
                          });
                          // alert("successful");
                          dispatch(increment());
                        } else {
                          console.log("some error in 2");

                          if (!Jobstitle) {
                            setjoberr({
                              ...job_err,
                              jobtitle: "Job title is required",
                            });
                          } else if (!JobsDetail) {
                            console.log("go in correct on ");
                            setjoberr({
                              ...job_err,
                              jobsdetails: "Job required is required",
                            });
                          } else if (!Jobslocation) {
                            setjoberr({
                              ...job_err,
                              jobslocation: "Job location is required",
                            });
                          } else if (Jobslocation) {
                            setjoberr({
                              ...job_err,
                              jobslocation: "",
                            });
                          } else if (JobsDetail) {
                            setjoberr({
                              ...job_err,
                              jobsdetails: "",
                            });
                          } else if (Jobstitle) {
                            setjoberr({
                              ...job_err,
                              jobtitle: "",
                            });
                          }
                        }
                      }
                    } else {
                      if (!in_ln) {
                        // var [inter_err, setintrerr] = useState({
                        //   intrlang: "",
                        //   intrmode: "",
                        //   intrduration: "",
                        // });
                        setintrerr({
                          ...inter_err,
                          intrlang: "Interview Language is required",
                        });
                      } else if (!in_dur) {
                        setintrerr({
                          ...inter_err,
                          intrduration: "Interview duration is required",
                        });
                      } else if (!in_mod) {
                        setintrerr({
                          ...inter_err,
                          intrmode: "Interview Mode is required",
                        });
                      } else {
                        alert("Form Successfully submitted");
                        // JSON.stringify({ submitted: [in_ln, in_dur, in_mod] })

                        console.log(in_ln, in_dur, in_mod);
                        setintrerr({
                          ...inter_err,
                          intrmode: "",
                          intrduration: "",
                          intrlang: "",
                        });
                      }
                    }
                  }}
                >
                  {count == 2 ? "Submit" : " Next"}
                </Button>
              </Box>
            </Box>
            <Box
              id="sidebox"
              width={"40%"}
              height={"98%"}
              marginTop={"1%"}
              // border={"1px solid black"}
              alignItems={"center"}
              flexDirection={"column"}
              display={"flex"}
              borderRadius={"20px"}
              overflow={"hidden"}
              justifyContent={"space-between"}
              background={"rgb(131, 202, 230,.2)"}
            >
              <div
                style={{
                  width: "100%",
                  height: "6%",
                  display: "flex",

                  justifyContent: "space-between",
                  border: "1px solid white",
                }}
              >
                <div id="sideboxleft">Draft</div>
                <div id="sideboxright">Preview</div>
              </div>
              <div id="slit_open">
                <div
                  style={{
                    color: "white",
                    paddingLeft: "10px",
                    paddingRight: "2px",
                  }}
                >
                  {req_title}
                </div>
                <div
                  style={{
                    color: "white",
                    paddingLeft: "2px",
                    paddingRight: "10px",
                  }}
                >
                  OPENINGS : {no_of_opning}
                </div>
              </div>
              <div
                style={{
                  width: "90%",
                  height: "20%",
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
              >
                <h2 id="h_2">Requisition Details</h2>
                <div
                  style={{
                    display: "flex",
                    width: "90%",
                    marginTop: "5%",
                    height: "40%",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    id="divs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "start",
                      alignItems: "start",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    Urgency{" "}
                    <h3 style={{ fontWeight: 800 }}>
                      {urgent ? urgent : " -"}{" "}
                    </h3>{" "}
                  </div>
                  <div
                    id="divs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "start",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    Gender{" "}
                    <h3 style={{ fontWeight: 800 }}>
                      {gender ? gender : " -"}{" "}
                    </h3>{" "}
                  </div>
                </div>
              </div>
              <div
                id="divs"
                style={{
                  width: "90%",
                  height: "25%",
                  background: "white",
                  borderRadius: "20px",

                  display: "flex",
                  // width: "90%",
                  marginTop: "5%",
                  // height: "40%",

                  // flexDirection: "column",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 id="h_2">Jobs Details</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    width: "90%",
                    marginTop: "5%",
                  }}
                >
                  {/* Jobstitle;JobsDetail;Jobslocation; */}
                  <div
                    id="divs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "start",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    Job Title{" "}
                    <h3 style={{ fontWeight: 800 }}>
                      {Jobstitle ? Jobstitle : " -"}{" "}
                    </h3>{" "}
                  </div>
                  <div
                    id="divs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "start",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    Job Detail{" "}
                    <h3 style={{ fontWeight: 800 }}>
                      {JobsDetail ? JobsDetail : " -"}{" "}
                    </h3>{" "}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "20%",
                    width: "90%",
                    marginTop: "5%",
                    textAlign: "start",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    id="divs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "start",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    Job Location{" "}
                    <h3 style={{ fontWeight: 800 }}>
                      {Jobslocation ? Jobslocation : " -"}{" "}
                    </h3>{" "}
                  </div>
                </div>
              </div>
              <div
                id="divs"
                style={{
                  width: "90%",
                  height: "25%",
                  // background: "white",
                  marginBottom: "3%",
                  // borderRadius: "20px",

                  // width: "90%",
                  // height: "25%",
                  background: "white",
                  borderRadius: "20px",

                  display: "flex",
                  // width: "90%",
                  marginTop: "5%",
                  // height: "40%",

                  // flexDirection: "column",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 id="h_2">Interview Details</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    width: "90%",
                    marginTop: "5%",
                  }}
                >
                  <div
                    id="divs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "start",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    Interview Duration{" "}
                    <h3 id="h_3" style={{ fontWeight: 800 }}>
                      {in_dur ? in_dur : " -"}{" "}
                    </h3>{" "}
                  </div>
                  <div
                    id="divs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "start",
                      alignItems: "start",

                      justifyContent: "space-between",
                    }}
                  >
                    Interview Language{" "}
                    <h3 style={{ fontWeight: 800 }}>{in_ln ? in_ln : " -"}</h3>{" "}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "20%",
                    width: "90%",
                    marginTop: "5%",
                    textAlign: "start",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "start",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    Interview Mode{" "}
                    <h3 style={{ fontWeight: 800 }}>
                      {in_mod ? in_mod : " -"}{" "}
                    </h3>{" "}
                  </div>
                </div>
              </div>
            </Box>
          </Flex>
        </Box>
      </main>
    </div>
  );
}

export default MainHome