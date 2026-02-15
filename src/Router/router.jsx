import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

// Route imports
import HomePage from "../Views/HomePage/HomePage";
import AboutPage from "../Views/AboutPage/AboutPage";
import ContactUsPage from "../Views/ContactUsPage/ContactUs";
// import SingleRegistration from "../Views/RegistrationPage/SinglesRegistration/SingleRegistration";
// import DoubleRegistration from "../Views/RegistrationPage/DoublesRegistration/DoubleRegistration";
import UniversityRegistration from "../Views/RegistrationPage/UniversityRegistration/UniversityRegistration";
import PlayerRegistration from "../Views/RegistrationPage/PlayerRegistration/PlayerRegistration";
import SuccessMessage from "../Views/RegistrationPage/Common/SuccessMessage/SuccessMessage";
import DrawsPage from "../Views/DrawsPage/DrawsPage";
import MatchSchedulePage from "../Views/MatchSchedulePage/MatchSchedulePage";
import MatchResultsPage from "../Views/MatchResultsPage/MatchResultsPage";
import GalleryPage from "../Views/PhotosPage/GalleryPage";
import NotFound from "../Views/NotFoundPage/NotFound";
import Unauth from "../Views/UnauthPage/Unauth";
import OrganizerHomePage from "../Views/OrganizerHomePage/OrganizerHomePage";
import TableHomePage from "../Views/TableHomePage/TableHomePage";
import UmpireHomePage from "../Views/UmpireHomePage/UmpireHomePage";
import DrawEditPage from "../Views/DrawEditPage/DrawEditPage";

import FinishedMatchCard from "../Views/MatchResultsPage/FinishedMatchCard";
import PhotosPage from "../Views/PhotosPage/PhotosPage";
import LoginPage from "../Views/LoginPage/LoginPage";
import ExternalRedirect from "../common/ExternalRedirect";

import AdminHomePage from "../Views/AdminHomePage/AdminHomePage";
import AdminGalleryPage from "../Views/AdminGalleryPage/AdminGalleryPage";
import AdminGalleryViewYearPage from "../Views/AdminGalleyViewYearPage/AdminGalleryViewYearPage";
import AdminYearlyConfigurations from "../Views/AdminYearlyConfigurations/AdminYearlyConfigurations";
import AdminDrawPage from "../Views/AdminDrawPage/AdminDrawPage";
import AdminUserAccountsPage from "../Views/AdminUserAccountsPage/AdminUserAccountsPage";
import AdminUserAccountViewPage from "../Views/AdminUserAccountViewPage/AdminUserAccountViewPage";
import AdminUserAccountAddPage from "../Views/AdminUserAccountAddPage/AdminUserAccountAddPage";
import AdminUserAccountEditPage from "../Views/AdminUserAccountEditPage/AdminUserAccountEditPage";
import AdminTournamentPage from "../Views/AdminTournamentPage/AdminTournamentPage";
import AdminCreateTournamentPage from "../Views/AdminCreateTournamentPage/AdminCreateTournamentPage";
import AdminEditTournamentPage from "../Views/AdminEditTournamentPage/AdminEditTournamentPage";
import AdminPaymentsPage from "../Views/AdminPaymentsPage/AdminPaymentsPage";
import AdminPaymentEditPage from "../Views/AdminPaymentEditPage/AdminPaymentEditPage";
import AdminPaymentCreatePage from "../Views/AdminPaymentCreatePage/AdminPaymentCreatePage";
import AdminUniversityPage from '../Views/AdminUniversityPage/AdminUniversityPage'
import AdminUniversitiesViewYearPage from "../Views/AdminUniversitiesViewYearPage.jsx/AdminUniversitiesViewyearPage";
import AdminUniversityRegisterPage from "../Views/AdminUniversityRegisterPage/AdminUniversityRegisterPage";
import AdminUniversityAddNewPlayerPage from "../Views/AdminUniversityAddNewPlayerPage/AdminUniversityAddNewPlayerPage";
import AdminCompanyPage from "../Views/AdminCompanyPage/AdminCompanyPage";
import AdminCompaniesViewYearPage from "../Views/AdminCompaniesViewYearPage/AdminCompaniesViewyearPage";
import AdminCompanyRegisterPage from "../Views/AdminCompanyRegisterPage/AdminCompanyRegisterPage";
import AdminCompanyAddNewPlayerPage from "../Views/AdminCompanyAddNewPlayerPage/AdminCompanyAddNewPlayerPage";
import AdminPlayerViewPage from "../Views/AdminPlayersViewPage/AdminPlayersViewPage";
import AdminPlayersPage from "../Views/AdminPlayersPage/AdminPlayersPage";
import AdminPlayersAddPage from "../Views/AdminPlayersAddPage/AdminPlayersAddPage";
import AdminPlayerEditPage from "../Views/AdminPlayerEditPage/AdminPlayerEditPage";
import AdminMessagesPage from "../Views/AdminMessages/AdminMessages";
import AdminUniversityPlayerView from "../Views/AdminUniversityViewPlayer/AdminUniversityViewPlayer";
import AdminCompanyPlayerView from "../Views/AdminCompanyViewPlayer/AdminCompanyViewPlayer";
import Timeline from '../Views/TimelinePage/timeline';

export default function AppRouter() {
  let type = localStorage.getItem('role'); //todo: this should change according to the user
  const ageGroupChampionshipFormUrl =
    "https://forms.gle/rqwRDvPasvF7YE9D6";
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="Timeline" element={<Timeline/>}/>
          <Route path="register">
            <Route path="player" element={<Navigate to="/register/player/add" replace />} />
            <Route path="player/add" element={<PlayerRegistration />} />
            <Route path="player/:id" element={<SuccessMessage />} />
            <Route
              path="single-double"
              element={
                <ExternalRedirect
                  href={ageGroupChampionshipFormUrl}
                  title="Redirecting to Age Group Championship Registration…"
                />
              }
            />
            <Route path="university" element={<UniversityRegistration />} />
          </Route>
          <Route path="draws" element={<DrawsPage />} />

          <Route path="draws-edit" element={<DrawEditPage />} />
          <Route path="scheduled-matches" element={<MatchSchedulePage />} />
          <Route path="match-results" element={<MatchResultsPage />} />
          <Route
            path="match-results/:matchid"
            element={<FinishedMatchCard />}
          />
          <Route path="scheduled-matches" element={<MatchSchedulePage />} />
          <Route path="photos" element={<GalleryPage />} />
          <Route path="photos/:title" element={<PhotosPage />} />
          {/* <Route path="developers" element={<DevelopersPage />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />

          {/*type1: admin  admin/page_name*/}
          {/*type2: organizer       oragnozierer/page_name*/}
          {/*type3: table       table/page_name*/}
          {/*type4: umpire           umpire/page_name*/}
          {/*type5: player           /page_name*/}
          {/*todo: conditions should change*/}

          {type === 'admin' ? (
            <>
              <Route path="admin">
                <Route index element={<AdminHomePage />} />
                <Route path="gallery" element={<AdminGalleryPage />} />
                <Route
                  path="gallery/year/:year"
                  element={<AdminGalleryViewYearPage />}
                />
                <Route path="config" element={<AdminYearlyConfigurations />} />
                <Route path="draws" element={<AdminDrawPage/>}/>
                <Route path="players" element={<AdminPlayersPage/>}/>
                <Route path="players/:name" element={<AdminPlayerViewPage/>}/> 
                <Route path="players/edit/:name" element={<AdminPlayerEditPage/>}/> 
                <Route
                  path="players/add-new-player"
                  element={<AdminPlayersAddPage/>}
                />
                <Route
                  path="user-accounts"
                  element={<AdminUserAccountsPage />}
                />
                                <Route
                  path="messages"
                  element={<AdminMessagesPage />}
                />
                <Route
                  path="user-accounts/:user"
                  element={<AdminUserAccountViewPage />}
                />
                <Route
                  path="user-accounts/edit/:user"
                  element={<AdminUserAccountEditPage />}
                />
                <Route
                  path="user-accounts/add-new-user"
                  element={<AdminUserAccountAddPage />}
                />
                
                <Route path="tournament" element={<AdminTournamentPage />} />
                <Route
                  path="tournament/create-tournament"
                  element={<AdminCreateTournamentPage />}
                />
                <Route
                  path="tournament/edit-tournament"
                  element={<AdminEditTournamentPage />}
                />
                <Route path="payments" element={<AdminPaymentsPage />} />
                <Route path="payments/edit-payment" element={<AdminPaymentEditPage />} />
                <Route path="payments/add-new-payment" element={<AdminPaymentCreatePage />} />
                <Route
                  path="universities"
                  element={<AdminUniversitiesViewYearPage />}
                />
                <Route
                  path="universities/:year/:university"
                  element={<AdminUniversityPage/>}
                />
                <Route
                  path="universities/:year/register"
                  element={<AdminUniversityRegisterPage />}
                />
                <Route
                  path="universities/:year/:university/register-player"
                  element={<AdminUniversityAddNewPlayerPage />}
                />
                                <Route
                  path="universities/player/:playerId"
                  element={<AdminUniversityPlayerView/>}
                />
                <Route
                  path="companies"
                  element={<AdminCompaniesViewYearPage />}
                />
                <Route
                  path="companies/:year/:company"
                  element={<AdminCompanyPage/>}
                />
                                               <Route
                  path="companies/player/:playerId"
                  element={<AdminCompanyPlayerView/>}
                />
                <Route
                  path="companies/:year/register"
                  element={<AdminCompanyRegisterPage />}
                />
                <Route
                  path="companies/:year/:company/register-player"
                  element={<AdminCompanyAddNewPlayerPage />}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </>
          ) : type === 'organizer' ? (
            <>
              <Route path="organizer">
                <Route index element={<OrganizerHomePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </>
          ) : type === 'tableOrganizer' ? (
            <>
              <Route path="table">
                <Route index element={<TableHomePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </>
          ) : type === 'umpire' ? (
            <>
              <Route path="umpire">
                <Route index element={<UmpireHomePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<Unauth />} />
            </>
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
        </Routes>
      </>
    </BrowserRouter>
  );
}
