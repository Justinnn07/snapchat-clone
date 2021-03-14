import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import "./Preview.css";
import CloseIcon from "@material-ui/icons/Close";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import CreateIcon from "@material-ui/icons/Create";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuid } from "uuid";
import { db, storage } from "./firebase";
import firebase from "firebase";

const Preview = () => {
  const cameraData = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();

  const sendPost = () => {
    // console.log("sent post.");
    const id = uuid();
    // console.log(id);
    const uploadImage = storage
      .ref(`post/${id}`)
      .putString(cameraData, "data_url");

    uploadImage.on(
      "state_changed",
      null,
      (error) => {
        prompt(error);
      },
      () => {
        storage
          .ref("post")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              snapUrl: url,
              username: "me",
              read: false,
              // profile:
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            history.replace("/chats");
          });
      }
    );
  };

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
      <div className="preview-rightIcons">
        <TextFieldsIcon />
        <CreateIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraData} alt="" />
      <div onClick={sendPost} className="previewFooter">
        <h2>SEND NOW </h2>
        <SendIcon className="previewSend" />
      </div>
    </div>
  );
};

export default Preview;
