import { useState } from "react";
import img from "../images/flowers.png";

export const Card = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const clickButton = () => {
    setButtonClicked(!buttonClicked);
  }

  return (
    <div className="card">
      {buttonClicked &&
        <img
          className="card-image"
          src={img}
          alt="Поздравление с днем матери"
        />
      }
      <div className="card-content">
        <h2>Дорогая мама!</h2>
        <p>
          В этот замечательный День матери я хочу сказать тебе слова, которые
          хранятся в моём сердце. Ты — наше солнце, которое освещает путь, наш
          уютный уголок, где всегда тепло и радостно. Ты — настоящая героиня,
          которая отдаёт всю свою любовь и заботу без остатка.
        </p>
        <p>
          Пусть твои дни будут наполнены счастливыми моментами, яркими эмоциями
          и только добрыми новостями. Ты заслуживаешь самого наилучшего! Спасибо
          за твою нежность, мудрость и неиссякаемую поддержку.
        </p>
        <p>
          Желаю тебе здоровья, радости и гармонии. Пусть каждый день дарит
          улыбки, а мечты сбываются, ведь ты — лучшая мама на свете!
        </p>
        <button onClick={() => clickButton()} className="button">От всей души!</button>
      </div>
    </div>
  );
}
