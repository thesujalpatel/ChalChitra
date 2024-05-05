import React, { useEffect } from "react";
import noteServices from "../../server/services/notesServices";
import "../../assets/css/notes.css";
import { motion as m } from "framer-motion";
import gsap from "gsap";
import Masonry from "react-masonry-css";
import { Clicky } from "../partials/SmallComponents";

function Notes() {
  const [notes, setNotes] = React.useState([]);

  useEffect(() => {
    const unsubscribe = async () => {
      noteServices.ListernToNotes(setNotes);
    };
    const displayNote = document.querySelector(".note-display");
    const displayPage = document.querySelector(".display-page");
    displayPage.addEventListener("click", (e) => {
      if (
        e.target.closest(".hide-note") ||
        (e.target.classList.contains("display-page") &&
          !e.target.classList.contains("note-display"))
      ) {
        gsap.to(displayNote, {
          y: "100vh",
          duration: 0.5,
          ease: "back.in(1)",
        });
        setTimeout(() => {
          gsap.to(".display-page", {
            opacity: 0,
            duration: 0.5,
            display: "none",
          });
        }, 500);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function createNote() {
    const universe = document.querySelector(".universe");
    const display = universe.querySelector(".note-display");
    display.querySelector(".note-title").value = "";
    display.querySelector(".note-content").value = "";
    gsap.to(".display-page", { opacity: 1, display: "block", duration: 0.5 });
    setTimeout(() => {
      gsap.to(display, { y: 0, duration: 0.5, ease: "back.out(1)" });
    }, 500);
    const note = await noteServices.createNote({ title: "", content: "" });
    display.setAttribute("data-key", note.id);
  }
  function focus(e) {
    const noteElement = e.currentTarget;
    const universe = document.querySelector(".universe");
    const note = {
      title: noteElement.querySelector(".note-title").textContent,
      content: noteElement.querySelector(".note-content").textContent,
      id: noteElement.getAttribute("data-key"),
    };
    const display = universe.querySelector(".note-display");
    display.querySelector(".note-title").value = note.title;
    display.querySelector(".note-content").value = note.content;
    display.setAttribute("data-key", note.id);
    gsap.to(".display-page", { opacity: 1, display: "block", duration: 0.5 });
    gsap.to(display, { y: "100vh", duration: 0 });
    setTimeout(() => {
      gsap.to(display, { y: 0, duration: 0.5, ease: "back.out(1)" });
    }, 500);
  }
  function updateNote(field, value) {
    const id = document.querySelector(".note-display").getAttribute("data-key");
    const updatedData = { [field]: value };
    noteServices.updateNote(id, updatedData);
  }
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  function deleteNote() {
    const id = document.querySelector(".note-display").getAttribute("data-key");
    gsap.to(".note-display", {
      y: "100vh",
      duration: 0.5,
      ease: "back.in(1)",
    });
    setTimeout(() => {
      gsap.to(".display-page", { opacity: 0, display: "none", duration: 0.5 });
      setTimeout(() => {
        noteServices.deleteNoteById(id);
      }, 500);
    }, 500);
  }

  return (
    <>
      <div className="notes-header">
        <m.div
          {...Clicky("var(--secondary)")}
          className="add-note notes-header-option"
          onClick={createNote}
        >
          <div className="icon-con">
            <i className="fa-solid fa-circle-plus"></i>
          </div>
          <div>Create Note</div>
        </m.div>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        columnClassName="notes-column"
        className="notes"
      >
        {notes.map((note) => (
          <m.div
            whileHover={{
              scale: 1.01,
              boxShadow:
                "4px 4px 10px #5a5a5a, -4px -4px 10px color-mix(in srgb, var(--canvas), var(--light_color) var(--light_blend_ratio))",
            }}
            whileTap={{ scale: 1, boxShadow: "none" }}
            whileFocus={{
              scale: 1.01,
              boxShadow:
                "4px 4px 10px #5a5a5a, -4px -4px 10px color-mix(in srgb, var(--canvas), var(--light_color) var(--light_blend_ratio))",
            }}
            key={note.id}
            data-key={note.id}
            className="note"
            onClick={(e) => focus(e)}
          >
            <div className="option-bar"></div>
            <div className="note-title">{note.title}</div>
            <div className="note-content">{note.content}</div>
          </m.div>
        ))}
      </Masonry>
      {notes.length === 0 && (
        <div className="empty-notes">
          <div className="icon-con">
            <i className="fa-solid fa-circle-plus"></i>
          </div>
          <div className="empty-notes-text">
            You have no notes
            <br />
            Click the button above to create one
          </div>
        </div>
      )}
      <div className="display-page">
        <div className="note-display">
          <div className="dis-option-bar">
            <m.div
              {...Clicky("var(--secondary)")}
              className="dis-option hide-note"
            >
              <div className="icon-con">
                <i className="fa-solid fa-circle-xmark"></i>
              </div>
              <div>Close</div>
            </m.div>
            <m.div
              {...Clicky("var(--secondary)")}
              className="dis-option"
              onClick={() => deleteNote()}
            >
              <div className="icon-con">
                <i className="fa-solid fa-trash-can"></i>
              </div>
              <div>Delete</div>
            </m.div>
          </div>
          <div className="dis-uni">
            <input
              className="note-title"
              placeholder="A beautiful note"
              onChange={(e) => updateNote("title", e.target.value)}
            ></input>
            <textarea
              className="note-content"
              placeholder="Amazing words..."
              onChange={(e) => updateNote("content", e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
