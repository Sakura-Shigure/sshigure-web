import { Divider, Image, Spacer, Tooltip, image } from "@nextui-org/react";
import { subtitle, title } from "@/components/primitives";
import Maintainance from "../maintainance";

interface ImageModel {
  filename: string;
  tooltip: string;
}

export default function Gallery() {
  const emoteImages: ImageModel[] = [
    { filename: "sakura_FBI.webp", tooltip: "by 修更" },
    { filename: "sakura_Lay.webp", tooltip: "by 修更" },
    { filename: "sakura_Loading.webp", tooltip: "by 糜咔咔" },
    { filename: "sakura_NotLikeThis.webp", tooltip: "by QB" },
    { filename: "sakura_OFace.webp", tooltip: "by 水漾" },
    { filename: "sakura_Plz.webp", tooltip: "by 糜咔咔" },
    { filename: "sakura_Point.webp", tooltip: "by 糜咔咔" },
    { filename: "sakura_SB.webp", tooltip: "by 嵐洛" },
    { filename: "sakura_UCCU.webp", tooltip: "by 修更" },
    { filename: "sakura_Watermelon.webp", tooltip: "by 菜菜" },
    { filename: "sakura_What.webp", tooltip: "by 青歲" },
    { filename: "sakura_love.webp", tooltip: "by 桃星莉莉" },
  ];
  return (
    <>
      <p className={title({ size: "sm", color: "pink" })}>貼圖</p>
      <Spacer y={4} />
      <div className="grid sm:grid-cols-6 grid-cols-4 xs:gap-3 gap-2">
        {emoteImages.map((image, i) => (
          <Tooltip
            key={i}
            content={
              <div>
                <div className="text-base">{image.filename.split(".")[0]}</div>
                <div className="text-base">{image.tooltip}</div>
              </div>
            }
            delay={200}
            offset={-15}
          >
            <Image src={`emote/${image.filename}`} alt=""></Image>
          </Tooltip>
        ))}
      </div>
    </>
  );
}
