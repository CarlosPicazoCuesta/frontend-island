import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { useRootContext, nextPage, getNextPageId } from "../../utils/context/context.ts";
import { sleep } from "../../utils/commons.js";
import PlayersMenu from "../../components/players-menu/players-menu.tsx";
import "./page.scss";

const Page = ({ enableNext = false, className = "", children }) => {
  const location = useLocation();
  const [page, setPage] = useState("/");
  const [pageFadeOut, setPageFadeOut] = useState(false);
  const { setFadeOut, setSetFadeOut, player } = useRootContext();
  const navigate = useNavigate();

  const localSetFadeOut = async (value = true) => {
    setPageFadeOut(value);
    await sleep(1800);
    setPageFadeOut(false);
  };

  useEffect(() => {
    setPage(location.pathname.split("/")[1]);
    // setContext({ ...setContext, currentPage: location.pathname.split("/")[1] });
  }, [location]);

  useEffect(() => {
    if (!setFadeOut) {
      setSetFadeOut(localSetFadeOut);
    }
  }, [setSetFadeOut]);

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
      {/* <a href={nextPage[getNextPageId(page)]} className={`fei-page__next ${enableNext ? "fei-page__next--enabled" : ""}`}> */}
      <Link to={nextPage[getNextPageId(page)]} className={`fei-page__next ${enableNext ? "fei-page__next--enabled" : ""}`}>
        Siguiente
      </Link>
      {/* </a> */}
    </div>
  );
};

export default Page;
