import { useParams } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import { Provider } from "react-redux";
import { store } from "./app/store";

const Watch = () => {
  const { id } = useParams()
  return (
    <div>
      <Provider store={store}>
      <Header /></Provider>
      <iframe  width="1000"
        height="650"
        className="iframe"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen src={`https://www.youtube.com/embed/${id}?controls=1&modestbranding=1&rel=0&autoplay=1&fs=1&iv_load_policy=3`}></iframe>
    </div>
  )
}

export default Watch;
