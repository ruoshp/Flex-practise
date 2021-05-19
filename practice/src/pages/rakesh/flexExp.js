import React from "react";
import "./flexExp.css";
function FlexExp() {
  const content1 =
    "Another vital area of understanding is how flexbox makes no assumption about the writing mode of the document. In the past, CSS was heavily weighted towards horizontal and left-to-right writing modes. Modern layout methods encompass the range of writing modes and so we no longer assume that a line of text will start at the top left of a document and run towards the right hand side, with new lines appearing one under the other.";
  const content2 =
    "The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. This article gives an outline of the main features of flexbox, which we will be exploring in more detail in the rest of these guides.";
  const content3 =
    "When we describe flexbox as being one dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together.";
   
    return (
    <div>
      <h1>flexDirection</h1>
      <hr></hr>
      <h2>row</h2>
      <hr></hr>
      <div className="displayFlex">
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>row-reverse</h2>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>column</h2>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>column-reverse</h2>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>


      <h1>flexWrap</h1>
      <hr></hr>
      <h2>wrap</h2>
      <hr></hr>
      <div style={{ display: "flex", flexWrap:"wrap" }}>
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>nowrap</h2>
      <hr></hr>
      <div style={{ display: "flex", flexWrap:"nowrap" }}>
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>wrap-reverse</h2>
      <hr></hr>
      <div style={{ display: "flex", flexWrap:"wrap-reverse" }}>
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>

      {/* This is a shorthand for the flex-direction and flex-wrap properties */}
      <h1>flex-flow</h1>
      <hr></hr>
      <h2>column wrap</h2>
      <hr></hr>
      <div style={{ display: "flex",flexFlow:"column wrap" }}>
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>

      <h1>justify-content</h1>
      <hr></hr>
      <h2>flex-start</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"flex-start" }}>
        <button className="button1">button1</button>
        <button className="button2">button2</button>
        <button className="button3">button3</button>
      </div>
      <hr></hr>
      <h2>flex-end</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"flex-end" }}>
        <button className="button1">button1</button>
        <button className="button2">button2</button>
        <button className="button3">button3</button>
      </div>
      <hr></hr>
      <h2>center</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"center" }}>
        <button className="button1">button1</button>
        <button className="button2">button2</button>
        <button className="button3">button3</button>
      </div>
      <hr></hr>
      <h2>space-between</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"space-between" }}>
        <button className="button1">button1</button>
        <button className="button2">button2</button>
        <button className="button3">button3</button>
      </div>
      <hr></hr>
      <h2>space-around</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"space-around" }}>
        <button className="button1">button1</button>
        <button className="button2">button2</button>
        <button className="button3">button3</button>
      </div>
      <hr></hr>
      <h2>space-evenly</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:" space-evenly" }}>
        <button className="button1">button1</button>
        <button className="button2">button2</button>
        <button className="button3">button3</button>
      </div>


      <h1>align-items</h1>
      <hr></hr>
      <h2>stretch</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"center",alignItems: "stretch" }}>
        <div className="content4">{content1}</div>
        <div className="content5">{content2}</div>
        <div className="content6">{content3}</div>
      </div>
      <hr></hr>
      <h2>flex-start</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"center",alignItems: "flex-start" }}>
        <div className="content4">{content1}</div>
        <div className="content5">{content2}</div>
        <div className="content6">{content3}</div>
      </div>
      <hr></hr>
      <h2>flex-end</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"center",alignItems: "flex-end" }}>
        <div className="content4">{content1}</div>
        <div className="content5">{content2}</div>
        <div className="content6">{content3}</div>
      </div>
      <hr></hr>
      <h2>center</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"center",alignItems: "center" }}>
        <div className="content4">{content1}</div>
        <div className="content5">{content2}</div>
        <div className="content6">{content3}</div>
      </div>
      <hr></hr>
      <h2>baseline</h2>
      <hr></hr>
      <div style={{ display: "flex",justifyContent:"center",alignItems: "baseline" }}>
        <div className="content4">{content1}</div>
        <div className="content5">{content2}</div>
        <div className="content6">{content3}</div>
      </div>
    </div>
  );
}

export default FlexExp;
