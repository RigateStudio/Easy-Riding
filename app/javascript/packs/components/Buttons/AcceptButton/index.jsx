import React, { useState } from "react";
import {Button} from "react-bootstrap"
import Cookies from "js-cookie";

const AcceptButton = ({ target, id, callback, message }) => {
  const [warning, setWarning] = useState(true);

  const destroy = () => {
    setWarning(true)
    fetch(`/api/${target}/${id}.accept`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("EasyRidingUserToken")}`,
      }
    }).then(() => callback());
  };

  return (
    <>
      {warning ? (
        <Button onClick={()=>setWarning(false)} variant="info">
          {message ? message : "Partager mes coordonés"}
        </Button>
      ) : (
        <Button onClick={destroy} variant="success">
          Confirmez ?
        </Button>
      )}
    </>
  );
};

export default AcceptButton