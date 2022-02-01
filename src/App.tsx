import React, { FC, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import Banner from "./components/Banner/Banner";
import LeftPanel from "./components/LeftPanel/LeftPanel";

import config from "./store";
import { observer } from "mobx-react-lite";

const App: FC = observer(() => {
    const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

    const handler = (typeOfEvent: string) => {
        typeOfEvent == "play" ? config.play() : config.pause();
    };

    return (
        <div className='App'>
            <ReactPlayer
                controls
                playing={config.isPlaying}
                url={"https://www.youtube.com/watch?v=zqLEO5tIuYs"}
                width={"100%"}
                height={"100%"}
                onPlay={() => {
                    handler("play");
                    if (isPlayerReady) {
                        setTimeout(() => {
                            config.showBanner();
                        }, 5000);
                    }
                }}
                onPause={() => handler("pause")}
                onReady={() => setIsPlayerReady(true)}
            />
            <Banner show={config.isShowBanner} />
            <LeftPanel show={config.isShowContent}></LeftPanel>
        </div>
    );
});

export default App;
