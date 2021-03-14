import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedSharpIcon from "@material-ui/icons/RadioButtonUncheckedSharp";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router";
import "./WebCamCapture.css";
const videoSettings = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebCamCapture = () => {
  const dispatch = useDispatch();
  const camRef = useRef(null);
  const history = useHistory();

  const capture = useCallback(() => {
    const imageSrc = camRef.current.getScreenshot();
    // console.info(imageSrc);
    // setImage(imageSrc)
    dispatch(setCameraImage(imageSrc));
    history.push("/preview");
  }, [dispatch, history]);
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        ref={camRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoSettings}
        mirrored={true}
      />
      <RadioButtonUncheckedSharpIcon
        onClick={capture}
        className="radioButton"
        fontSize="large"
      />
      <img src="" alt="" />
    </div>
  );
};

export default WebCamCapture;
