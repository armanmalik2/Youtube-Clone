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
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen src={`https://www.youtube.com/embed/${id}`}></iframe>
    </div>
  )
}

export default Watch;
