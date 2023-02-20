import React from "react";
import style from "./addProject.module.css";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAddRoom } from "../../../redux/reducer";
import { createRoom, getAllRooms } from "../../../redux/actions";
import Tiptap from "../../tiptap/tiptap";
import { Navigate } from "react-router-dom";

function AddProject() {
  const [input, setInput] = useState({});
  const [logError, setLogError] = useState({});
  const [text, setText] = useState({});
  const dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const { addRoom, aboutProject } = useSelector(
    (state) => state.reducerCompleto
  );

  const handleAdd = () => {
    dispatch(setAddRoom(false));
    dispatch(getAllRooms());
  };
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const token = useSelector((state) => state.reducerCompleto.authToken);

  const workOnChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const dis = await dispatch(
      createRoom({
        productData: {
          name: input.name,
          image: images,
          link: input.link,
          about: aboutProject,
        },
        token,
      })
    );

    var response = dis.payload;
    if (response.success === true) {
      setLogError({});
    } else {
      setLogError({ err: response.info });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.flexContainer}>
        <button className={style.close} onClick={() => handleAdd()}>
          X
        </button>
        <h1> Add Project</h1>
        <span></span>
        <form
          className={style.form}
          onChange={(e) => workOnChange(e)}
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
        >
          <label className={style.title}>Project name</label>
          <div className={style.input}>
            <input type="text" placeholder="Project name" name="name" />
          </div>
          <label className={style.title}>Image</label>
          <div className={style.inputImage}>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    type="button"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button type="button" onClick={onImageRemoveAll}>
                    Remove all images
                  </button>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button
                          type="button"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          <label className={style.title}>Link</label>
          <div className={style.input}>
            <input type="string" placeholder="link" name="link" />
          </div>
          <label className={style.title}>Description</label>
          <div>
            <Tiptap />
          </div>
          <button type="submit" className={style.button2}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
