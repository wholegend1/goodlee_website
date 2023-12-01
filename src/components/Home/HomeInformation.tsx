import * as React from "react";
import Box from "@mui/joy/Box";
import styles from "./homeInformation.module.css";
import Image from "next/image";

export default function HomeInformation() {
  return (
    <Box
      className={styles.informationWrapper}
      aria-label="wrapper"
      sx={{ flexGrow: 1 }}
    >
      <div className={styles.leftBox}>
        <h2 className={styles.title}>為您找尋優質公司</h2>
        <div className={styles.des}>
          Et omnia in potestate nostra esse natura liber, libera, libere
          valeant; sed illis non est in nostra potestate sunt infirmi, servilis,
          licet, lex pertinet. Tenete ergo quod si servitus quae natura liber,
          et aliena tua tunc impeditur. Dolebis, et turbabuntur, et invenietis,
          cum culpa tam dis hominibusque. Quod si tibi tantum sit propria et
          aliena quale sit, nemo unquam vel invitum te
        </div>
      </div>
      <div className={styles.rightBox}>
        <Image
          src="/company.png"
          alt="company"
          width={800}
          height={800}
          priority
        />
      </div>
    </Box>
  );
}
