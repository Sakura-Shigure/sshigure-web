import { Image, Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="h-fit grid grid-cols-3">
        <div className="col-span-1 flex flex-col">
          <div>
            <Image src="/oc/logo.webp" alt=""></Image>
          </div>
          <Spacer y={4} />
          <div className="flex-1">
            <p className="md:text-3xl text-xl">我是櫻餅</p>
            <Spacer y={1} />
            <p className="md:text-lg text-xs">
              接受純靜態網站委託
              <br />
              及Discord客製機器人
              <br />
              或是其他軟體需求
              <br />
              也可詢問
            </p>
          </div>
          <div className="align-bottom">
            <Image src="/oc/slime.webp" alt=""></Image>
          </div>
        </div>
        <div className="col-span-2">
          <Image src="/oc/portrait.webp" alt=""></Image>
        </div>
      </div>
    </>
  );
}
