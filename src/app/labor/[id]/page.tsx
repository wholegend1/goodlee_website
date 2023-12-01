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
            <div>
              <Image
                src="/playlist_add_black_24dp.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <button className={styles.button}>發出雇傭申請</button>
          </div>
        </div>
      </div>
      <div className={styles.extra}>
        <div className={styles.extraInfo}>
          <div className={styles.image}>
            <Image
              src="/family_restroom_black_48dp.svg"
              alt="family"
              width={48}
              height={48}
            />
          </div>
          <div className={styles.title}>家庭狀況</div>
          <ul>
            <li>配偶姓名: {laborData?.familyStatus?.nameOfSpouse || "無"}</li>
            <li>子女数量: {laborData?.familyStatus?.childrenNo || "無"}</li>
            <li>子女年龄: {laborData?.familyStatus?.childrenAge || "無"}</li>
            <li>父亲姓名: {laborData?.familyStatus?.nameOfFather || "無"}</li>
            <li>母亲姓名: {laborData?.familyStatus?.nameOfMother || "無"}</li>
            <li>父亲年龄: {laborData?.familyStatus?.ageOfFather || "無"}</li>
            <li>母亲年龄: {laborData?.familyStatus?.ageOfMother || "無"}</li>
          </ul>
        </div>
        <div className={styles.extraInfo}>
          <div className={styles.image}>
            <Image
              src="/directions_run_black_48dp.svg"
              alt="directions"
              width={48}
              height={48}
            />
          </div>
          <div className={styles.title}>工作經歷</div>
          <div>{laborData?.experience}</div>
        </div>

        <div className={styles.extraInfo}>
          <div className={styles.image}>
            <Image
              src="/description_black_48dp.svg"
              alt="description"
              width={48}
              height={48}
            />
          </div>

          <div className={styles.title}>工作技能</div>
          <div className={styles.skills}>
            <div>菜色：{laborData?.cooking || "無"}</div>
            <div>特別技能：{laborData?.specialSkill || "無"}</div>
            <div>照顧小孩：{laborData?.babyCareSkill || "無"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
