import { TwitchIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  LinkIcon,
  Spacer,
} from "@nextui-org/react";

interface Profile {
  name: string;
  twitterId?: string;
  twitchId?: string;
  youtube?: string;
  link?: string;
}

export default function Recommend() {
  const recommendIllustrator: Profile[] = [
    {
      name: "奶加",
      twitterId: "hellojoyin",
      twitchId: "nanakyuu301",
      link: "https://nanakyuu.com/",
    },
    {
      name: "水漾漾漾漾",
      twitterId: "shuiyang_0730",
      twitchId: "shuiyangyang",
    },
    {
      name: "糜咔咔",
      twitterId: "mica_1130",
      twitchId: "mica1130",
    },
    {
      name: "修更シル",
      twitterId: "wwemndy",
      twitchId: "wwemndy",
    },
    {
      name: "白詰草",
      twitterId: "Rain76418135",
    },
  ];
  const recommendStreamer: Profile[] = [
    {
      name: "穆夏夏",
      twitchId: "musha0324",
    },
    {
      name: "自然",
      twitchId: "yb57152",
    },
    {
      name: "望結",
      twitchId: "miyusama0214",
    },
    {
      name: "有米米",
      twitchId: "yomi_cc",
    },
    {
      name: "紅茶拿鐵だよ",
      twitchId: "latteda_",
    },
    {
      name: "熊七",
      twitchId: "kuma7owo",
    },
    {
      name: "貓又飯糰",
      twitchId: "haer0248",
    },
  ];
  return (
    <>
      <p className={title({ size: "md", color: "pink" })}>繪師</p>
      <Spacer y={4} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
        {recommendIllustrator.map((data, i) => (
          <Card key={i}>
            <CardHeader>{data.name}</CardHeader>
            <Divider />
            <CardBody className="grid grid-cols-4">
              {socialMedia(data)}
            </CardBody>
          </Card>
        ))}
      </div>
      <Spacer y={6} />
      <p className={title({ size: "md", color: "pink" })}>實況主</p>
      <Spacer y={4} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
        {recommendStreamer.map((data, i) => (
          <Card key={i}>
            <CardHeader>{data.name}</CardHeader>
            <Divider />
            <CardBody className="grid grid-cols-4">
              {socialMedia(data)}
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}

function socialMedia(data: Profile) {
  return (
    <>
      {data.twitterId ? (
        <Link isExternal href={`https://twitter.com/${data.twitterId}`}>
          <Button
            className="text-[#1D9BF0]"
            radius="lg"
            variant="light"
            isIconOnly
          >
            <TwitterIcon />
          </Button>
        </Link>
      ) : null}
      {data.twitchId ? (
        <Link isExternal href={`https://twitch.tv/${data.twitchId}`}>
          <Button
            className="text-[#6441a4]"
            radius="lg"
            variant="light"
            isIconOnly
          >
            <TwitchIcon />
          </Button>
        </Link>
      ) : null}
      {data.youtube ? (
        <Link isExternal href={data.youtube}>
          <Button
            className="text-[#ff0000]"
            radius="lg"
            variant="light"
            isIconOnly
          >
            <YoutubeIcon />
          </Button>
        </Link>
      ) : null}
      {data.link ? (
        <Link isExternal href={data.link}>
          <Button
            className="text-bold text-xl"
            radius="lg"
            variant="light"
            isIconOnly
          >
            <LinkIcon />
          </Button>
        </Link>
      ) : null}
    </>
  );
}
