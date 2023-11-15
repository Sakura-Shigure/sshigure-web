import { subtitle, title } from "@/components/primitives";
import { Link, Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <p className="text-default-500">
        你闖入ㄌ這個酷酷的關於頁面，是想要找些什麼嗎?
      </p>
      <Spacer y={10} />
      <h1 className="h-10 lg:h-14 text-3xl lg:text-5xl bg-clip-text text-transparent bg-cover bg-gradient-to-b from-[#FF5980] to-[#EF9222]">
        時雨櫻 Sakura Shigure
      </h1>
      <p className="text-md text-default-300">↑這是我自己都很少叫的本名</p>
      <Spacer y={5} />
      <p className="text-xl text-default-800">可以叫我櫻餅，會一點點的程式</p>
      <p className="text-base text-default-800">
        目前比較熟悉做純靜態網站跟Discord機器人
        <br />
        有時候也會在Twitch開台 (希望可以一星期一次)
        <br />
        整天都活在Discord上，歡迎加好友
        <br />
        都要活網了，當然要做一下自己的人設，所以就這樣這隻ㄌㄌ跑出來了
        <br />
        但我本體是史萊姆，窩才不要女裝
        <br />
      </p>
      <p className="text-base">#且看且珍惜 世事難料</p>
      <Spacer y={10} />
      <p className="leading-loose text-default-600">
        比較完整的小小作品: <br />
        <Link
          isExternal
          href="https://discord-bot.syntony666.com/"
          showAnchorIcon
        >
          自製Discord機器人的使用手冊
        </Link>
        <br />
        <Link isExternal href="https://nanakyuu.com/" showAnchorIcon>
          奶加的委託頁面
        </Link>
        <br />
        <Link href="" showAnchorIcon>
          本網頁也是親手製作
        </Link>
      </p>
    </>
  );
}
