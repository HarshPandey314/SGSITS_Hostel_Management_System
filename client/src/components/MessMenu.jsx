import React from "react";
import Menu from "./Menu";
import MessElement from "./MessElement.jsx";
import "../styles/MessMenu.css";

const MessMenu = () => {
  const menuArray = [
    {
      day: "Monday",
      breakFast: "Samosa,Chatni,Chai",
      Lunch: "Lauki,tuar Dal,rayta",
      Dinner: "Aloo Matar, Sev Tamatar",
    },
    {
      day: "Tuesday",
      breakFast: "Aloo Parathe,Chatni,Chai",
      Lunch: "Lauki,tuar Dal,rayta",
      Dinner: "Aloo Matar, Sev Tamatar",
    },
    {
      day: "Wednesday",
      breakFast: "Upma/Sabudana Khichdi,Chai",
      Lunch: "Lauki,tuar Dal,rayta",
      Dinner: "Aloo Matar, Sev Tamatar",
    },
    {
      day: "Thursday",
      breakFast: "Idli(fried),Chatni,Chai",
      Lunch: "Lauki,tuar Dal,rayta",
      Dinner: "Aloo Matar, Sev Tamatar",
    },
    {
      day: "Friday",
      breakFast: "Sandwich/Bread Pakoda,Chai",
      Lunch: "Lauki,tuar Dal,rayta",
      Dinner: "Aloo Matar, Sev Tamatar",
    },
    {
      day: "Saturday",
      breakFast: "Poori,Sabji,Chai",
      Lunch: "Lauki,tuar Dal,rayta",
      Dinner: "Aloo Matar, Sev Tamatar",
    },
    {
      day: "Sunday",
      breakFast: "Poha,Jalebi,Chai",
      Lunch: "Lauki,tuar Dal,rayta",
      Dinner: "Aloo Matar, Sev Tamatar",
    },
  ];

  let c = 0;
  const menuCards = menuArray.map((card) => {
    console.log(card);
    c++;
    return (
      <MessElement
        key={card.day}
        index={c}
        day={card.day}
        breakFast={card.breakFast}
        Lunch={card.Lunch}
        Dinner={card.Dinner}
      />
    );
  });

  return (
    <div className="messMenu--container">
      <Menu item="MoreOptions" />
      <div className="messMenu--rightSection">
        <div className="messMenu--rightSection--heading">Mess Menu</div>
        <div className="messMenu--rightSection--content">
          <div className="messMenu--box">
            <div className="messMenu--title--box">
              <div className="messMenu--title--items title--day">Day</div>
              <div className="messMenu--title--items title--breakFast">
                Break Fast
              </div>
              <div className="messMenu--title--items title--Lunch">Lunch</div>
              <div className="messMenu--title--items title--Dinner">Dinner</div>
            </div>
            <div className="complaint--elements">{menuCards}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessMenu;
