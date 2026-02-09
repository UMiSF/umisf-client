import React, { useEffect } from 'react';
import Styles from './GalleryPage.module.css';
import AlbumCard from './AlbumCard';
import { useState } from 'react';
import image from './Images/TempImg/1.jpg';
import HeaderPage from '../HeaderPage/HeaderPage';
import Footer from '../HomePage/Footer/footer';
import { message } from 'antd';
import Axios from "axios";

const GalleryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    if (!apiUrl) {
      setLoading(false);
      message.error("API URL is not configured.");
      return;
    }
    Axios.get(apiUrl + "/photo/getAll", { headers: {} })
      .then((res) => {
        const data = res.data?.data;
        setPhotos(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Photos fetch error:", error);
        const msg = error.response?.data?.message || error.message || "Failed to load photos.";
        message.error(msg);
        setPhotos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={`${Styles['body']}`}>
      <div className={`${Styles['cover-img']}`}>
        <HeaderPage />
        <div className={`${Styles['cover-title']}`}>
          <h1 id="h1" className={`${Styles['typing-demo']}`}>
            {' '}
            MEMORIES ....
          </h1>
          <div className={`${Styles['bottom-para']}`}>
            <p>Let's dive into our good old days!</p>
          </div>
        </div>
      </div>
      <div className={`${Styles['gallery']} `}>
        <div className={`${Styles['gallery-content']} `}>
          {loading ? (
            <p style={{ textAlign: "center", padding: "2rem" }}>Loading albums...</p>
          ) : photos?.length > 0 ? (
            photos.map((obj, index) => (
              <AlbumCard key={index} title={obj.year} photos={obj.photos} />
            ))
          ) : (
            <p style={{ textAlign: "center", padding: "2rem" }}>No photo albums yet.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPage;
