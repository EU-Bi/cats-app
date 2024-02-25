import React from "react";

const Upload = () => {
  return (
    <div>
      <div className="Upload__container">
        <button className="Upload-close">&times;</button>
        <h1>Upload a .jpg or .png Cat Image</h1>
        <p>
          Any uploads must comply with the{" "}
          <a href="https://thecatapi.com/privacy">upload guidelines</a> or face
          deletion.
        </p>
        <label>
          <input type="file" accept="image/jpeg,image/png" />
          {/* <img
            alt="your-img"
          /> */}
          {/* {image ? (
            ""
          ) : (
            <span>
              <b>Drag here</b> your file or <b>Click here</b> to upload
            </span>
          )} */}
        </label>
        {/* {image ? <p>Image File Name: {image.name}</p> : <p>No file selected</p>} */}
        {/* {button ? (
          <button onClick={uploadToServer} className="upload-photo">
            upload photo
          </button>
        ) : (
          ""
        )} */}
        {/* {thanksBlock ? (
          <div className="thanks-block">Thanks for the Upload - Cat found!</div>
        ) : (
          ""
        )} */}
        {/* {errorBlock ? (
          <div className="error-block">No Cat found - try a different one</div>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default Upload;
