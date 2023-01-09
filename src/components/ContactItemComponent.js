import React, { useEffect, useState } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ContactItemComponent(props) {
  const [subRate, setSubRate] = useState([]);



  const resizeContent = () => {
    const tab = [];
    tab.forEach((element, index, array) => {
        array.push(index)
    });

    for (let index = 0; index < 3 - props.contact.rate.length; index++) {
        tab.push(index)
    }
    setSubRate([...tab]);
  }

  useEffect(()=>{
    resizeContent();
  }, [props.contact])

  return (
    <div className="my-card mx-4 mb-3" onClick={()=>props.showDetails(props.contact)}>
      <div className="d-flex align-content-center">
        <img
          className="img-title"
          src={require("../assert/photo.png")}
          alt="picture"
        />
        <div className="mx-3">
          <h6>
            {props.contact.firstname} {props.contact.lastanme}{" "}
          </h6>
          <span>
            {" "}
            <span className="fw-bold text-green">
              {props.contact.tel.substring(0, 4)}
            </span>
            <span>
              {props.contact.tel.substring(4, props.contact.tel.length)}
            </span>
          </span>
        </div>
      </div>
      <div>
        {props.contact.rate.map((element, index) => (
          <GradeIcon key={index} sx={{ color: "#872318" }} />
        ))}
        {subRate.map((element, index) => (
          <StarBorderIcon  key={index} sx={{ color: "#872318" }} />
        ))}

      </div>
    </div>
  );
}

export default ContactItemComponent;
