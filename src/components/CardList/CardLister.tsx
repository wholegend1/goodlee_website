import React from "react";
import styles from "./cardLister.module.css"
import Card from "../Card/Card";

type CardListerProps = {
  data: any[];
  title?: string;
};

export default function CardLister({
  data,
  title,
}: CardListerProps): JSX.Element {
  return (
    <div className={styles.cardListWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardList}>
        {data.map((cardData: any) => (
          <div key={cardData.id} className={styles.space}>
            <Card data={cardData} />
          </div>
        ))}
      </div>
    </div>
  );
}
