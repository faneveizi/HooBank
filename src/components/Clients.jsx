import React from "react";
import { clients } from "../constants";
import styles from "../styles";
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] `}
        >
          <img
            src={client.logo}
            alt="client image"
            className="sm:w-[192px] w-[100px] object-contain "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
