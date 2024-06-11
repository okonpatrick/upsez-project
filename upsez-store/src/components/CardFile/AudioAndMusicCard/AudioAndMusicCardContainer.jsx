//AudioAndMusicContainer.jsx
import AudioAndMusicData from "../../JsonFiles/AudioAndMusicCard.json";
import AudioAndMusicDetails from "./AudioAndMusicCardDetails";

export default function AudioAndMusicContainer() {
  return (
    <div className="">
           <AudioAndMusicDetails AudioAndMusic={AudioAndMusicData} />
     </div>
  );
}