import React, { useState, useEffect } from "react";
import darkTheme from "./portfolioDark.module.css";
import { useSelector, useDispatch } from "react-redux";
import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { setAddRoom } from "../../redux/reducer";
import AddProject from "./popUp/addProject";
import { IoAddCircleOutline } from "react-icons/io5";

function Portfolio({ theme, props }) {
  var style = darkTheme;
  var array = props;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(setAddRoom(true));
  };
  const { user, addRoom } = useSelector((state) => state.reducerCompleto);

  const [editable, setEditable] = useState(false);
  const Editor = (p) => {
    return useEditor({
      editable,
      content: p,
      extensions: [
        StarterKit,
        Link.configure({
          linkOnPaste: true,
          autolink: true,
          protocols: ["ftp", "mailto"],
          HTMLAttributes: {
            class: "link",
          },
        }),
      ],
    });
  };
  useEffect(() => {
    if (!Editor) {
      return undefined;
    }
  });
  return (
    <body id="portfolio" className={style.flexContainer}>
      <div className={style.title}>
        <p className={style.glitch}>
          <span aria-hidden="true">My portfolio</span>
          My portfolio<span aria-hidden="true">My portfolio</span>
        </p>
      </div>
      <div className={style.grid}>
        {array
          ? array.map((p, index) => (
              <a
                href={p.link}
                target="_blank"
                className={style.link}
                key={p._id}
              >
                <div className={style.category}>
                  <div className={style.img}>
                    <img src={p.image[0].data_url} />
                  </div>
                  <div className={style.name}>
                    <h1>{p.name}</h1>
                  </div>
                  <div className={style.description}>
                    <EditorContent editor={Editor(p.about)} />
                  </div>
                </div>
              </a>
            ))
          : null}
      </div>
      {user?.isAdmin ? (
        <div className={style.category2} onClick={() => handleAdd()}>
          <div className={style.img2}>
            <IoAddCircleOutline />
          </div>
          <div className={style.name2}>
            <h1>Add Project</h1>
          </div>
        </div>
      ) : null}
      <canvas id="canvas4" width="400" height="1000" className={style.canvas}>
        Your Browser Don't Support Canvas, Please Download Chrome ^_^``
      </canvas>
      {addRoom ? <AddProject /> : null}
    </body>
  );
}
export default Portfolio;
