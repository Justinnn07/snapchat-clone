import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import "./Preview.css";
import CloseIcon from "@material-ui/icons/Close";

const Preview = () => {
  const cameraData = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraData) {
      history.replace("/");
    }
  }, [cameraData, history]);
  // console.log(cameraData);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };
  return (
    <div className="preview">
      <CloseIcon className="previewClose" onClick={closePreview} />
      <img src={cameraData} alt="" />
    </div>
  );
};

export default Preview;
