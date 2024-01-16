import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useRootContext, getNextPageId, nextPage } from "../../utils/context/context.ts";
import PlayersMenu from "../../components/players-menu/players-menu.tsx";
import "./page.scss";

const Page = ({ enableNext = false, className = "", children, fadeOut = false, nextPageLink = "", load = "" }) => {
  const [pageFadeOut, setPageFadeOut] = useState(fadeOut);
  const [page, setPage] = useState("/");
  const { player } = useRootContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (load !== "") {
      navigate(load);
    }
  }, [load]);

  useEffect(() => {
    setPageFadeOut(fadeOut);
  }, [fadeOut]);

  useEffect(() => {
    if (location.pathname.split("/").length > 2) {
      setPage(location.pathname.split("/")[1]);
    }
  }, [location]);

  return (
    <div className={classNames("fei-page", className, { "fei-page--fade-out": pageFadeOut })}>
      <PlayersMenu />
      <h1 className="fei-page__id">{page}</h1>
      <ul className="fei-page__nav">
        {Object.keys(nextPage).map((key) => {
          return (
            <h2 key={key} className="fei-page__nav-link" onClick={() => navigate(nextPage[key])}>
              {getNextPageId(nextPage[key])}
            </h2>
          );
        })}
      </ul>
      {player && children}
      <Link to={nextPageLink} className={`fei-page__next ${enableNext ? "fei-page__next--enabled" : ""}`}>
        Siguiente
      </Link>
    </div>
  );
};

export default Page;
