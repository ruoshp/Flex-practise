import "./gridExp.css";
const gridExp = () => {
  const content1 =
    "Another vital area of understanding is how flexbox makes no assumption about the writing mode of the document. In the past, CSS was heavily weighted towards horizontal and left-to-right writing modes. Modern layout methods encompass the range of writing modes and so we no longer assume that a line of text will start at the top left of a document and run towards the right hand side, with new lines appearing one under the other.";
  const content2 =
    "The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. This article gives an outline of the main features of flexbox, which we will be exploring in more detail in the rest of these guides.";
  const content3 =
    "When we describe flexbox as being one dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together.";

  return (
    <div>
      <h1>gridTemplateRows & gridTemplateColumns</h1>
      <hr></hr>
      <h2>width (px)</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
          gridTemplateRows: "auto",
          gridTemplateColumns: "400px 200px 300px",
        }}
      >
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>width (fr)</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{ gridTemplateRows: "auto", gridTemplateColumns: "1fr 2fr 1fr" }}
      >
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>width (auto)</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
          gridTemplateRows: "auto",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>width ([first] [line1]...[end])</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
          gridTemplateRows: "auto",
          gridTemplateColumns:
            "[first] 400px [line2] auto [line-3] 500px [end]",
        }}
      >
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h2>width (repeat)</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 500px)",
        }}
      >
        <div className="content1">{content1}</div>
        <div className="content2">{content2}</div>
        <div className="content3">{content3}</div>
      </div>
      <hr></hr>
      <h1>Gap</h1>
      <hr></hr>
      <h2>columnGap & rowGap</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
            justifyContent:"center",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 100px)",
          columnGap:"10px",
            rowGap:"15px"
        }}
      >
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
      </div>

      <hr></hr>
      <h2>gap</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
            justifyContent:"center",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 100px)",
          gap:"10px 15px"
        }}
      >
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
      </div>
      <hr></hr>
      <h1>justifyContent</h1>
      <hr></hr>
      <h2>center</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
            justifyContent:"center",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 100px)",
          gap:"10px 15px"
        }}
      >
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
      </div>
      
      <hr></hr>
      <h2>end</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
            justifyContent:"end",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 100px)",
          gap:"10px 15px"
        }}
      >
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
      </div>
      <hr></hr>
      <h2>space-around</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
            justifyContent:"space-around",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 100px)",
          gap:"10px 15px"
        }}
      >
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
      </div>
      <hr></hr>
      <h2>space-between</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
            justifyContent:"space-between",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 100px)",
          gap:"10px 15px"
        }}
      >
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
      </div>
      <hr></hr>
      <h2>space-evenly</h2>
      <hr></hr>
      <div
        className="displayGrid"
        style={{
            justifyContent:"space-evenly",
          gridTemplateRows: "auto",
          gridTemplateColumns: "repeat(3, 100px)",
          gap:"10px 15px"
        }}
      >
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
        <div className="box1">box1</div>
        <div className="box1">box2</div>
        <div className="box1">box3</div>
      </div>
      
    </div>
  );
};
export default gridExp;
