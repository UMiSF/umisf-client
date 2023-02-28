import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Route imports
import HomePage from "../Views/HomePage/HomePage";
import AboutPage from "../Views/AboutPage/AboutPage";
import RegistrationPage from "../Views/RegistrationPage/RegistrationPage";
import DrawsPage from "../Views/DrawsPage/DrawsPage";
import MatchSchedulePage from "../Views/MatchSchedulePage/MatchSchedulePage";
import MatchResultsPage from "../Views/MatchResultsPage/MatchResultsPage";
import PhotosPage from "../Views/PhotosPage/PhotosPage";
import NotFound from "../Views/NotFoundPage/NotFound";
import Unauth from "../Views/UnauthPage/Unauth";
import HeaderPage from "../Views/HeaderPage/HeaderPage";
import OrganizerHomePage from "../Views/OrganizerHomePage/OrganizerHomePage";
import TableHomePage from "../Views/TableHomePage/TableHomePage";
import UmpireHomePage from "../Views/UmpireHomePage/UmpireHomePage";

import AdminHeader from "../Views/AdminHeaderPage/AdminHeader";
import AdminHomePage from "../Views/AdminHomePage/AdminHomePage";
import AdminGalleryPage from "../Views/AdminGalleryPage/AdminGalleryPage";
import AdminGalleryViewYearPage from "../Views/AdminGalleyViewYearPage/AdminGalleryViewYearPage";
import AdminUserAccountsPage from '../Views/AdminUserAccountsPage/AdminUserAccountsPage'
import AdminUserAccountViewPage from "../Views/AdminUserAccountViewPage/AdminUserAccountViewPage";

export default function AppRouter() {
  let type = 1; //todo: this should change according to the user

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="draws" element={<DrawsPage />} />
          <Route path="scheduled-matches" element={<MatchSchedulePage />} />
          <Route path="match-results" element={<MatchResultsPage />} />
          <Route path="scheduled-matches" element={<MatchSchedulePage />} />
          <Route path="photos" element={<PhotosPage />} />
          <Route path="*" element={<NotFound />} />

          {/*type1: admin  admin/page_name*/}
          {/*type2: organizer       oragnozierer/page_name*/}
          {/*type3: table       table/page_name*/}
          {/*type4: umpire           umpire/page_name*/}
          {/*type5: player           /page_name*/}
          {/*todo: conditions should change*/}

          {type === 1 ? (
            <Route>
              <Route exact path="admin">
                <Route path="" element={<AdminHomePage />} />
                <Route path="gallery" element={<AdminGalleryPage />} />
                <Route
                  path="gallery/year/:year"
                  element={<AdminGalleryViewYearPage />}
                />
                <Route
                  path="user-accounts"
                  element={<AdminUserAccountsPage />}
                />
                <Route
                  path="user-accounts/:user"
                  element={<AdminUserAccountViewPage />}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </Route>
          ) : type === 2 ? (
            <Route>
              <Route exact path="organizer" element={<HeaderPage type={2} />}>
                <Route path="" element={<OrganizerHomePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </Route>
          ) : type === 3 ? (
            <Route>
              <Route exact path="table" element={<HeaderPage type={3} />}>
                <Route path="" element={<TableHomePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </Route>
          ) : type === 4 ? (
            <Route>
              <Route exact path="umpire" element={<HeaderPage type={4} />}>
                <Route path="" element={<UmpireHomePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </Route>
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
        </Routes>
      </>
    </BrowserRouter>
  );
}
