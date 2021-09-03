import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { Colors } from "../core/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/ArtDetailsOptions.module.scss";
import Transfer from "./Transfer";
import RemoveSale from "./RemoveSale";
import Burn from "./Burn";
import Report from "./Report";
import Icon from "./Icon.js";
import Modal from "./Modal";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const ArtDetailsOptions = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [visibleModalTransfer, setVisibleModalTransfer] = useState(false);
  const [visibleModalRemoveSale, setVisibleModalRemoveSale] = useState(false);
  const [visibleModalBurn, setVisibleModalBurn] = useState(false);
  const [visibleModalReport, setVisibleModalReport] = useState(false);

  const items = [
    {
      title: "Change price",
      icon: "coin",
      action: () => console.log("coin"),
    },
    {
      title: "Transfer token",
      icon: "arrow-right-square",
      action: () => {
        setVisible(false);
        setVisibleModalTransfer(true);
      },
    },
    {
      title: "Remove from sale",
      icon: "close-circle",
      action: () => {
        setVisible(false);
        setVisibleModalRemoveSale(true);
      },
    },
    {
      title: "Burn token",
      icon: "close-circle",
      action: () => { 
        setVisible(false);
        setVisibleModalBurn(true)
      },
    },
    {
      title: "Report",
      icon: "info-circle",
      action: () => { 
        setVisible(false);
        setVisibleModalReport(true)
      },
    },
  ];

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div
          className={cn(styles.actions, className, {
            [styles.active]: visible,
          })}
        >
          <button
            className={cn("button-circle-stroke", styles.iconStyle)}
            onClick={() => setVisible(!visible)}
          >
            <FontAwesomeIcon
            icon={faEllipsisH}
            className={styles.miscIcon}
            color={Colors.lightGrey}
          />
          </button>
          <div className={styles.body}>
            {items.map((x, index) => (
              <div className={styles.item} key={index} onClick={x.action}>
                <Icon name={x.icon} size="20" />
                <span>{x.title}</span>
              </div>
            ))}
          </div>
        </div>
      </OutsideClickHandler>
      <Modal
        show={visibleModalTransfer}
        onClose={() => setVisibleModalTransfer(false)}
      >
        <Transfer />
      </Modal>
      <Modal
        show={visibleModalRemoveSale}
        onClose={() => setVisibleModalRemoveSale(false)}
      >
        <RemoveSale />
      </Modal>
      <Modal show={visibleModalBurn} onClose={() => setVisibleModalBurn(false)}>
        <Burn />
      </Modal>
      <Modal
        show={visibleModalReport}
        onClose={() => setVisibleModalReport(false)}
      >
        <Report />
      </Modal>
    </>
  );
};

export default ArtDetailsOptions;
