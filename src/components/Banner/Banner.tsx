import React, { FC } from "react";
import Button from "../UI/Button/Button";
import "./Banner.scss";

import config from "../../store";
import { observer } from "mobx-react-lite";

const qrcode = require("../../img/qrcode.png");

interface BannerProps {
    show: boolean;
}

const Banner: FC<BannerProps> = observer(({ show = false }) => {
    return (
        <div
            className={
                config.isShowBanner && !config.isShowContent
                    ? "banner"
                    : "banner hidden"
            }
        >
            <p className='uppercase'>Исполните мечту вашего малыша!</p>
            <p className='uppercase'>Подарите ему нян-кэта!</p>
            <img src={qrcode} alt='QR-код' />
            <p className='small'>Сканируйте код или нажмите ОК</p>
            <Button
                onClick={() => {
                    config.showContent();
                    config.pause();
                }}
            >
                ОК
            </Button>
        </div>
    );
});

export default Banner;
