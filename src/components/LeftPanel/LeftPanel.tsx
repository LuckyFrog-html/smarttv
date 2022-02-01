import React, { FC, useRef, useState } from "react";
import "./LeftPanel.scss";
import InputMask from "react-input-mask";

import { observer } from "mobx-react-lite";
import config from "../../store";
import Keyboard from "../Keyboard/Keyboard";
import Checkbox from "../UI/Checkbox/Checkbox";
import Button from "../UI/Button/Button";

interface LeftPanelProps {
    show: boolean;
}

const LeftPanel: FC<LeftPanelProps> = observer(({ show }) => {
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false);

    return (
        <>
            <div
                className={
                    config.isShowContent ? "left-panel" : "left-panel hidden"
                }
            >
                <h3>
                    Введите ваш номер
                    <br />
                    мобильного телефона
                </h3>
                <InputMask
                    className='input'
                    alwaysShowMask
                    value={config.inputValue}
                    mask={"+7-999-999-99-99"}
                ></InputMask>
                <p>
                    и с Вами свяжется наш менеждер для дальнейшей консультации
                </p>
                <Keyboard />
                <Checkbox
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCheckboxValue(e.target.checked);
                    }}
                >
                    Согласие на обработку персональных данных
                </Checkbox>
                <div className='confirm-container'>
                    <Button
                        full
                        disabled={
                            !checkboxValue || config.inputValue.length !== 10
                        }
                        onClick={() => {}}
                    >
                        Подтвердить номер
                    </Button>
                </div>
            </div>
            <div
                className={config.isShowContent ? "closer" : "closer hidden"}
                onClick={() => {
                    config.hideContent();
                    config.play();
                }}
            >
                <div className='cross'></div>
            </div>
        </>
    );
});

export default LeftPanel;
