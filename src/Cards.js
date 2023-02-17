export let data = [
  { key: 1, title: "Task #1", text: "text\ntext" },
  { key: 2, title: "Task #1" },
  { key: 3, title: "Task #1" },
  { key: 4, title: "Task #1" },
  { key: 5, title: "Task #1" },
  { key: 6, title: "Task #1" },
  { key: 7, title: "Task #1" },
  { key: 8, title: "Task #1" },
  { key: 9, title: "Task #1" },
  { key: 10, title: "Task #1" },
  { key: 11, title: "Task #1" },
  { key: 12, title: "Task #1" },
  { key: 13, title: "Task #1" },
  { key: 14, title: "Task #1" },
  { key: 15, title: "Task #1" }
]

{/* <div className={"cards"}>
      <Card
        data={data}
      />
    </div>
  </> */}

  let Card = ({ data }) =>
  Object.values(data).map((c, k) => (
    <div
      className={"card"}
      key={k}
      children={
        <>
          <div class="card-heading">...</div>
          <b>{c.title.toString()}</b>
          <p>{c.text}</p>
          <div class="card-footer">...</div>
          <div class="card-content">...</div>
          <div class="card-extra">actions</div>
        </>
      }
    />
  ));
// Object.values(data).map((card, key) => {
//   return <div className="card">card</div>;
// });
const CardContent = async (card) => {


  let header = (<div class="card-heading">...</div>))
  // <b>{c.title.toString()}</b>
  // <p>{c.text}</p>
  // <div class="card-footer">...</div>
  // <div class="card-content">...</div>
  // <div class="card-extra">actions</div>


  if (card.title) {
  }
};