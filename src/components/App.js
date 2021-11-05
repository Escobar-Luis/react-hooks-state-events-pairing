import video from "../data/video.js";
import Details from "./Details.js";

function App() {
  console.log("Here's your data:", video);
// 1. App (the entire application as a whole)
// 2. Details (displays data about the video)
// 3. Within Details, UserFeedback (revieves all user input to iterate up & down votes, as well hide or show comment btn)
// 4. Comments (displays a list of user comments)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details video={video}/>
    </div>
  );
}

export default App;
