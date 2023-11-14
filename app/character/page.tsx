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
      <p className="md:text-base text-sm">
        從前有一隻戴著皇冠的史萊姆，它在森林裡孤單地生活著。
        <br />
        某天，一個可愛的小女孩發現了這隻史萊姆，她覺得史萊姆覺得很好玩，決定將它帶回家。
        <br />
        從那一刻起，史萊姆和小女孩成為了形影不離的夥伴。
      </p>
      <Spacer y={4} />
      {image(
        "/oc/character.webp",
        "人物設定有兩個角色: 看板娘小女孩及皇冠史萊姆"
      )}
      <Divider className="my-4" />
      <p className={title({ size: "sm", color: "pink" })}>櫻餅 (本體)</p>
      {p(<>不要問我為什麼是橘色的櫻餅</>)}
      {image("/oc/slime.webp", "繪師: 奶加", 200)}
      <p className={subtitle()}>顏色</p>
      {p(<>主色調: #f4b160</>)}
      <p className={subtitle()}>特徵</p>
      {p(<>戴著一個黃色的皇冠，呈現半透明狀</>)}
    </>
  );
}
