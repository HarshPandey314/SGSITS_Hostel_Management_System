import React, { useState, useEffect } from "react";
import Menu from "./Menu.jsx";
import { Link } from "react-router-dom";
import "../styles/GalleryPage.css";
import UploadLinkElement from "./UploadLinkElement.jsx";

const GalleryPage = () => {
  const [GalleryArray, setGalleryArray] = useState([]);
  const [temp, setTemp] = useState([{}]);
  useEffect(() => {
    getTitle();
  }, [temp]);
  async function getTitle() {
    const response = await fetch("http://localhost:3000/api/gettitle", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.length != temp.length) {
      setTemp(data);
    }
    for (let i = 0; i < temp.length; i++) {
      const res = await fetch("http://localhost:3000/api/getlinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: temp[i].title,
        }),
      });
      const links = await res.json();
      const helper = [];
      for (let j = 0; j < links.length; j++) {
        helper.push(links[j].links);
      }
      temp[i].linksArray = helper;
    }
    console.log(temp);
    setGalleryArray(temp);
  }

  const [isShow, setIsShow] = useState(0);
  const [title, setTitle] = useState("");

  const showBox = () => {
    setIsShow(1);
  };
  function showBox2(title1) {
    setIsShow(1);
    setTitle(title1);
  }

  const ElementArray = GalleryArray.map((card) => {
    const { title, linksArray } = card;

    const linksArrayMap = linksArray.map((link, index) => {
      return (
        <Link to={link} className="gallery--card--link">
          Link {index + 1}
        </Link>
      );
    });

    return (
      <div className="gallery--card--box">
        <div className="gallery--card--title">
          <div className="gallery--card--heading">{title}</div>
          <Link
            to="/gallery"
            className="gallery--add--btn"
            onClick={() => showBox2(title)}
          >
            Add Link
          </Link>
        </div>
        {linksArrayMap}
      </div>
    );
  });

  return (
    <div className="gallery--container">
      <Menu item="MoreOptions" className="gallery--menu" />
      <div className="gallery--rightSection">
        <div className="gallery--rightSection--heading">Gallery</div>
        <div className="gallery--rightSection--content">
          <div className="gallery--content--div ">
            <div className="content--top">
              <div className={`upload--btn`} onClick={showBox}>
                <Link to="/gallery" className="link--btn">
                  Upload Link
                </Link>
              </div>
            </div>
            <div className="content--bottom bgOpacity">{ElementArray}</div>
          </div>
          <UploadLinkElement
            isShow={isShow}
            setIsShow={setIsShow}
            title={title}
            setTitle={setTitle}
            setTemp={setTemp}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
