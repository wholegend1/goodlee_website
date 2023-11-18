import styles from "../labor.module.css";
import Image from "next/image";
import data from "@/app/data";
export default function Page({ params }: { params: { id: number } }) {
  const laborData = data.find((labor) => {

    return labor.id == params.id;
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageView}>
          <div className={styles.brand}>{laborData?.country}</div>
          <Image
            src="/default.jpg"
            alt="labor"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
        <div className={styles.laborBox}>
          <h1>編號:{params.id}</h1>
          <div className={styles.info}>
            <div className={styles.infoColumn}>
              <div>姓名：{laborData?.name}</div>
              <div>生日：{laborData?.birthday}</div>
              <div>出生地： {laborData?.birthplace}</div>
              <div>年齡：{laborData?.age}</div>
              <div>性別：{laborData?.sex}</div>
              <div>身高：{laborData?.height}</div>
              <div>體重：{laborData?.weight}</div>
              <div>膚色：{laborData?.skin}</div>
            </div>
            <div className={styles.infoColumn}>
              <div>國籍：{laborData?.nationality}</div>
              <div>宗教：{laborData?.religion}</div>
              <div>婚姻狀況：{laborData?.maritalStatus}</div>
              <div>教育程度：{laborData?.education}</div>
            </div>
          </div>
          <div className={styles.buttonBox}>
            
          </div>
        </div>
      </div>
      <div>{JSON.stringify(laborData)}</div>
      My Post: {params.id}
    </div>
  );
}
