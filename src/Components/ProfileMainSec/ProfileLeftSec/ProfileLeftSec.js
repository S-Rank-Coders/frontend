import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import styles from "./ProfileLeftSec.module.css";

import { PROFILE_DATA } from "../../../Utils/Constants/StaticData";

function ProfileLeftSec() {
  const location = useLocation();

  const userData = useSelector((state) => state.userReducer.userData);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <img
          src={PROFILE_DATA.images.profileImg}
          alt="profileImg"
          className={styles.ProfileImg}
          onLoad={(e) => {
            e.target.style.opacity = 1;
          }}
        />
        <div className={styles.InfoSec}>
          <h4 className={styles.Name}>{userData.name}</h4>
          <h5 className={styles.Email}>{userData.email}</h5>
        </div>
      </div>

      <div className={styles.LinksAndButtonsSec}>
        {PROFILE_DATA.links.map((link, index) => {
          return (
            !(
              (link.onlySeller && !userData.isSeller) ||
              (link.onlyUser && userData.isSeller)
            ) && (
              <Link
                key={index}
                className={
                  styles.BottomItem +
                  " " +
                  (location.pathname.startsWith(link.to) &&
                    styles.BottomItemActive)
                }
                style={
                  link.colors && {
                    "--primary-text-color": link.colors.primary,
                    "--background-color": link.colors.secondary,
                  }
                }
                to={`/profile/${link.to}`}
              >
                {link.title}
              </Link>
            )
          );
        })}
        <div
          className={styles.BottomItem}
          style={{
            "--primary-text-color": `var(--red-primary)`,
            "--background-color": `var(--red-bg)`,
          }}
        >
          {PROFILE_DATA.logout}
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftSec;