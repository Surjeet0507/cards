
import './App.css';
import { Button } from 'react-bootstrap';
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


const App = () => {
  const [Data, setData] = useState("");
  const [userData, setuserData] = useState([]);
  
  console.log(userData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onchangeHandler(e) {
    const { name, value } = e.target;
    const image = name === "pic" && e.target.files[0];

    setData(() => {
      return {
        ...Data,
        [name]: name === "pic" ? window.URL.createObjectURL(image) : value,
      };
    });
  }
  function submit(event) {
    event.preventDefault();
    
    setuserData([...userData, Data]);
  }

  function deleteTask(del)
 {
    const task = [...userData];
    
;
    task.splice(del, 1);

    setuserData(task);
  }
  console.log("hii");

  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                autoFocus
                onChange={onchangeHandler}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>gender</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Male"
                    value="Male"
                    name="gender"
                    type={type}
                    onChange={onchangeHandler}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    value="female"
                    name="gender"
                    type={type}
                    onChange={onchangeHandler}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}

              <Form.Group className="position-relative mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="pic"
                  onChange={onchangeHandler}

                  //   isInvalid={!!errors.file}
                />
                <Form.Control.Feedback
                  type="invalid"
                  tooltip
                ></Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
          

                <Form.Label>phone number</Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  placeholder="phone number"
                  onChange={onchangeHandler}
                  autoFocus
                />
              </Form.Group>
              

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                  onChange={onchangeHandler}
                  autoFocus
                />
              </Form.Group>

              
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                onClick={() => handleClose()}
              >
                ADD
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <section class="main-content">
        <div class="container">
          <div class="row">
            <div class="container mt-5  mb-5 ">
              <div class="row">
                <div class="col-10  d-flex justify-content-center ">
                  {" "}
                  <h1>Appointment Card UI</h1>
                  <div class="icon"
                  // class="col-6   d-flex justify-content-center "
                  // style={{ cursor: "pointer" }}
                  onClick={() => handleShow()}
                >
                  <i class="fa-solid  fa-3x fa-plus text-success" ></i>
                </div>
                </div> 

               
              </div>
              <div class='row'>
              <div class="col-sm-6 col-md-6 col-lg-4 data">
                    <div class="card bg-white p-3 mb-4 shadow">
                      <div class="d-flex justify-content-between mb-4">
                        <div class="user-info">
                          <div class="user-info__img d-flex">
                            <img
                              src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg'
                              alt="User Img"
                              
                            />
                            <h5 class="mb-0">Ambika</h5>
                            
                          </div>
                          <div class="user-info__basic">
                            
                            <p class="text-muted mb-0">
                              26
                              <span style={{marginLeft:"5px"}}>yrs</span>,
                              <span style={{marginLeft:"5px"}}>Female</span>
                            </p>
                          </div>
                        </div>
                        <div
                          class="  text-danger"
                          style={{ cursor: "pointer" }}
                          
                        >
                        
                          <i class="fa-solid fa-trash "></i> Delete
                        </div>
                      </div>
                      <h6 class="mb-0"> 7009682727</h6>
                      <a href="#!"  style={{textDecoration:"none"}}>
                        <small>Contact</small>
                      </a>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <h5 class="mb-0">
                            11:00 PM
                            <small class="ml-1"></small>
                          </h5>
                        </div>
                        <span class="text-success font-weight-bold">
                          Consult
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 data">
                    <div class="card bg-white p-3 mb-4 shadow">
                      <div class="d-flex justify-content-between mb-4">
                        <div class="user-info">
                          <div class="user-info__img d-flex">
                            <img
                              src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg'
                              alt="User Img"
                              
                            />
                            <h5 class="mb-0">vishal yadav</h5>
                            
                          </div>
                          <div class="user-info__basic">
                            {/* <h5 class="mb-0">{e.name}</h5> */}
                            <p class="text-muted mb-0">
                            26
                            <span style={{marginLeft:"5px"}}>yrs</span>,
                              <span style={{marginLeft:"5px"}}>Male</span>
                            </p>
                          </div>
                        </div>
                        <div
                          class="  text-danger"
                          style={{ cursor: "pointer" }}
                          
                        >
                        
                          <i class="fa-solid fa-trash "></i> Delete
                        </div>
                      </div>
                      <h6 class="mb-0"> 7009682727</h6>
                      <a href="#!"  style={{textDecoration:"none"}} >
                        <small>Contact</small>
                      </a>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <h5 class="mb-0">
                            11:00 PM
                            <small class="ml-1"></small>
                          </h5>
                        </div>
                        <span class="text-success font-weight-bold">
                          Consult
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 data">
                    <div class="card bg-white p-3 mb-4 shadow">
                      <div class="d-flex justify-content-between mb-4">
                        <div class="user-info">
                          <div class="user-info__img d-flex">
                            <img
                              src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg'
                              alt="User Img"
                              
                            />
                            <h5 class="mb-0">a</h5>
                            
                          </div>
                          <div class="user-info__basic">
                            
                            <p class="text-muted mb-0">
                            26
                            <span style={{marginLeft:"5px"}}>yrs</span>,
                              <span style={{marginLeft:"5px"}}>Male</span>
                            </p>
                          </div>
                        </div>
                        <div
                          class="  text-danger"
                          style={{ cursor: "pointer" }}
                          
                        >
                        
                          <i class="fa-solid fa-trash "></i> Delete
                        </div>
                      </div>
                      <h6 class="mb-0"> 7009682727</h6>
                      <a href="#!"  style={{textDecoration:"none"}} >
                        <small>Contact</small>
                      </a>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <h5 class="mb-0">
                            11:00 PM
                            <small class="ml-1"></small>
                          </h5>
                        </div>
                        <span class="text-success font-weight-bold">
                          Consult
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 data">
                    <div class="card bg-white p-3 mb-4 shadow">
                      <div class="d-flex justify-content-between mb-4">
                        <div class="user-info">
                          <div class="user-info__img d-flex">
                            <img
                              src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg'
                              alt="User Img"
                              
                            />
                            <h5 class="mb-0">a</h5>
                            
                          </div>
                          <div class="user-info__basic">
                            {/* <h5 class="mb-0">{e.name}</h5> */}
                            <p class="text-muted mb-0">
                              23
                              <span style={{marginLeft:"5px"}}>yrs</span>,
                              <span style={{marginLeft:"5px"}}>Male</span>
                            </p>
                          </div>
                        </div>
                        <div
                          class="  text-danger"
                          style={{ cursor: "pointer" }}
                          
                        >
                        
                          <i class="fa-solid fa-trash "></i> Delete
                        </div>
                      </div>
                      <h6 class="mb-0"> 7009682727</h6>
                      <a href="#!"  style={{textDecoration:"none"}} >
                        <small>Contact</small>
                      </a>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <h5 class="mb-0">
                            11:00 PM
                            <small class="ml-1"></small>
                          </h5>
                        </div>
                        <span class="text-success font-weight-bold">
                          Consult
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 data">
                    <div class="card bg-white p-3 mb-4 shadow">
                      <div class="d-flex justify-content-between mb-4">
                        <div class="user-info">
                          <div class="user-info__img d-flex">
                            <img
                              src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg'
                              alt="User Img"
                              
                            />
                            <h5 class="mb-0">a</h5>
                            
                          </div>
                          <div class="user-info__basic">
                            {/* <h5 class="mb-0">{e.name}</h5> */}
                            <p class="text-muted mb-0">
                            23
                            <span style={{marginLeft:"5px"}}>yrs</span>,
                              <span style={{marginLeft:"5px"}}>Male</span>
                            </p>
                          </div>
                        </div>
                        <div
                          class="  text-danger"
                          style={{ cursor: "pointer" }}
                          
                        >
                        
                          <i class="fa-solid fa-trash "></i> Delete
                        </div>
                      </div>
                      <h6 class="mb-0"> 7009682727</h6>
                      <a href="#!"  style={{textDecoration:"none"}} >
                        <small>Contact</small>
                      </a>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <h5 class="mb-0">
                            11:00 PM
                            <small class="ml-1"></small>
                          </h5>
                        </div>
                        <span class="text-success font-weight-bold">
                          Consult
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 data">
                    <div class="card bg-white p-3 mb-4 shadow">
                      <div class="d-flex justify-content-between mb-4">
                        <div class="user-info">
                          <div class="user-info__img d-flex">
                            <img
                              src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg'
                              alt="User Img"
                              
                            />
                            <h5 class="mb-0">a</h5>
                            
                          </div>
                          <div class="user-info__basic">
                            {/* <h5 class="mb-0">{e.name}</h5> */}
                            <p class="text-muted mb-0">
                           23
                           <span style={{marginLeft:"5px"}}>yrs</span>,
                              <span style={{marginLeft:"5px"}}>Male</span>
                            </p>
                          </div>
                        </div>
                        <div
                          class="  text-danger"
                          style={{ cursor: "pointer" }}
                          
                        >
                        
                          <i class="fa-solid fa-trash "></i> Delete
                        </div>
                      </div>
                      <h6 class="mb-0"> 7009682727</h6>
                      <a href="#!"  style={{textDecoration:"none"}} >
                        <small>Contact</small>
                      </a>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <h5 class="mb-0">
                            11:00 PM
                            <small class="ml-1"></small>
                          </h5>
                        </div>
                        <span class="text-success font-weight-bold">
                          Consult
                        </span>
                      </div>
                    </div>
                  </div>
                  </div>
            </div>

            {userData.map((e, index) => {
              return (
                <>
                  <div class="col-sm-6 col-md-6 col-lg-4 data">
                    <div class="card bg-white p-3 mb-4 shadow">
                      <div class="d-flex justify-content-between mb-4">
                        <div class="user-info">
                          <div class="user-info__img d-flex">
                            <img
                              src={e.pic}
                              alt="User Img"
                              
                            />
                            <h5 class="mb-0">{e.name}</h5>
                            
                          </div>
                          <div class="user-info__basic">
                            {/* <h5 class="mb-0">{e.name}</h5> */}
                            <p class="text-muted mb-0">
                              {e.age}
                              <sapna>years</sapna>, {e.gender}
                            </p>
                          </div>
                        </div>
                        <div
                          class="  text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteTask(index)}
                        >
                        
                          <i class="fa-solid fa-trash "></i> Delete
                        </div>
                      </div>
                      <h6 class="mb-0">{e.phoneNumber}</h6>
                      <a href="#!"  style={{textDecoration:"none"}} >
                        <small>Contact</small>
                      </a>
                      <div class="d-flex justify-content-between mt-4">
                        <div>
                          <h5 class="mb-0">
                            11:00 PM
                            <small class="ml-1">{e.date}</small>
                          </h5>
                        </div>
                        <span class="text-success font-weight-bold">
                          Consult
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
      

