import { Divider, Image, Spacer, Tooltip } from "@nextui-org/react";
import { subtitle, title } from "@/components/primitives";

export default function Character() {
  const image = (src: string, tooltip: string, width = 0) => (
    <Tooltip
      placement="bottom-end"
      delay={500}
      closeDelay={500}
      offset={-30}
      content={tooltip}
    >
      <Image src={src} alt="" width={width ? width : 768}></Image>
    </Tooltip>
  );
  const p = (content: JSX.Element) => (
    <p className="md:text-base text-sm text-default-600">{content}</p>
  );
  return (
    <>
      <p className="md:text-base text-sm whitespace-pre">
        從前有一隻戴著皇冠的史萊姆，它在森林裡孤單地生活著。
        <br />
        某天，一個可愛的小女孩發現了這隻史萊姆，她覺得史萊姆覺得很好玩，決定將他帶回家。
        <br />
        從那一刻起，史萊姆和小女孩成為了形影不離的夥伴。
      </p>
      <Spacer y={4} />
      {image(
        "/oc/character.webp",
        "人物設定有兩個角色: 看板娘小女孩及皇冠史萊姆"
      )}
      <Divider className="my-4" />
      <Spacer y={4} />
      <p className={title({ size: "sm", color: "pink" })}>櫻餅 (本體)</p>
      {p(<>不要問我為什麼是橘色的櫻餅</>)}
      {image("/oc/slime.webp", "繪師: 奶加", 200)}
      <p className={subtitle()}>顏色</p>
      {p(<>主色調: #f4b160</>)}
      <p className={subtitle()}>特徵</p>
      {p(<>戴著一個黃色的皇冠，呈現半透明狀</>)}
      <Spacer y={6} />
      <p className={title({ size: "sm", color: "pink" })}>時雨櫻 (看板娘)</p>
      {image("/oc/portrait.webp", "繪師: 凜凜魚", 200)}
      <p className={subtitle()}>髮型特徵</p>
      {p(
        <>
          頭髮主色調: 粉色 (#fdc5cf)
          <br />
          髮型: 長直髮 有些地方翹起來了 眼睛之間的瀏海比較長 沒有呆毛
          <br />
          <br />
          髮飾: 橘色皇冠史萊姆 臉上有一顆愛心
        </>
      )}
      <Image src="/oc/detail-1.webp" alt="" width={200}></Image>
      <p className={subtitle()}>眼睛</p>
      {p(
        <>
          異色瞳:
          <br />
          左眼參考色: 淡藍色(#a2e4fc)
          <br />
          右眼參考色: 紫色(#c1b2ed)
        </>
      )}
      <Image src="/oc/detail-2.webp" alt="" width={500}></Image>
      <p className={subtitle()}>衣服</p>
      {p(<>長度到大腿的連帽雨衣，上面有愛心圖案，胸上綠色蝴蝶結</>)}
      <Image src="/oc/detail-3.webp" alt="" width={300}></Image>
      <p className={subtitle()}>褲子</p>
      {p(<>沒穿褲子，只有白色內褲 (到底誰會穿褲子)</>)}
      <p className={subtitle()}>鞋子</p>
      {p(<>跟衣服相同的樣式，綠色鞋底的雨鞋</>)}
      <Image src="/oc/detail-4.webp" alt="" width={300}></Image>
      <p className={subtitle()}>體型</p>
      {p(
        <>
          身高: 147
          <br />
          胸部: B~C
          <br />
          年紀: 13-14
        </>
      )}
    </>
  );
}
