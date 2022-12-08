import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { useState, useEffect } from "react";

const Home = () => {
  const spamTexts = [
    "毎日、パソコンや携帯電話で作業を完了することができます，日給2,000円～5万円、仕事が多ければ多いほど日給が増えます",
    "こんにちは、はじめまして。私は今年21歳の留学生です。お金が足りない。アルバイトのセックスサービスです。もしあなたがセックスをしたいなら、年齢は30ぐらいで私を加えることができます。",
    "あなたの性欲を解き放つためにここに来てください♥😍👆",
    "＼大量募集／オープニング！採用率90%以上！座席は先着順です\nどこでも自由に働ける👆先着200名限定",
    "新しい無料副業、オンライン副業アルバイト，曰纟合は2000冈～5万冈，😲年齢：23代😲雑談禁止，次のアルバイト代理LINEで連絡しましょう！",
    "よろしくお願いします。私は今年21歳の学生です。お金が足りないので、アルバイトをしています。セックスをしたいなら、年齢30前後で連絡してください、",
    "株式は人生、通貨が世界に勝つ、為替レートは未来を繋がります。私たちは、高いリターンを得るために、投資と財務管理の新しい方法の研究に焦点を当てる、時代の大きな変化の下で富の秘訣は教師の手にあり、私たちはウォールストリートのプロの投資およびウェルスマネジメントチームです。\n伝統的な投資方法を変え、30%以上の毎月の安定収入になります。",
    "毎日パソコンや携帯電話で仕事を終えることができ、曰纟合は2000冈～5万冈、仕事が多ければ多いほど曰纟合が多くなる。連絡先！👉",
    '"""ネットアルバイト(限定版)募集中📌\n人数に限りがあります!\n主婦向け大学生向け\n初心者からサラリーマンまでご利用いただけます。🙎♀❣\n業務注文処理、オンライン注文管理📩📩\n設備:スマートフォン🏡パソコン\n(在宅勤務でも可)\n年齢:23歳以上\n言語:日本語\n時纟合は2000冈～5万冈\n勤務時間:1日1時間以内(短時間でも可)。\n何の費用もかからず、誰もが安心して働ける\n雑談禁止\n連絡先！',
    "このツイートをチェックしてね😍👆❤ありがとう",
    "私は学生で、日本に留学しています。私たちは一緒に……！",
    "サプライズがあるんだ!",
  ];
  const [input, setInput] = useState(
    spamTexts[Math.floor(Math.random() * spamTexts.length)]
  );
  const spamChars = [
    "\u200c",
    "\uff9e",
    "\u200b",
    "\u200d",
    "\u180d",
    "\u180c",
    "\uffa0",
    "\u18a6",
    "\u180e",
    "\u1802",
    "\u2061",
    "\u1808",
    "\u200a",
    "\u1c78",
    "\u2cff",
    "\u2b1d",
  ];
  const [separators, setSeparators] = useState(
    spamChars.map((v) => {
      return { value: v, rate: 5 };
    })
  );
  const [resultText, setResultText] = useState("");
  useEffect(() => {
    const array = [...input];
    const newArray: string[] = [];
    array.forEach((v) => {
      newArray.push(v);
      separators.forEach((s) => {
        if (Math.random() * 100 < s.rate) {
          newArray.push(s.value);
        }
      });
    });
    setResultText(newArray.join(""));
  }, [input, separators]);
  const [isCopiedOpen, setIsCopiedOpen] = useState(false);

  return (
    <Layout>
      <Head>
        <title>スパムDMメーカー</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="テキストをTwitterのスパムDM風に変換するツールです。"
        />
      </Head>
      <h1
        className="my-10 mx-4 text-center text-5xl text-gray-800"
        style={{ fontFamily: "Dela Gothic One" }}
      >
        <span className="inline-block">スパムDM</span>
        <span className="inline-block">メーカー</span>
      </h1>
      <p className="m-4 text-center text-gray-600">
        テキストをTwitterのスパムDM風に変換するツールです。
      </p>
      <div className="mx-auto my-20 max-w-xl px-8">
        <TextField
          label="変換したいテキスト"
          fullWidth
          multiline
          minRows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className="my-10 mx-auto flex max-w-sm bg-[#eff3f4] p-4 text-gray-700"
          style={{ borderRadius: "20px 20px 20px 6px" }}
        >
          <div className="w-[calc(100%-1em)]">{resultText}</div>
          <button
            title="コピー"
            className="ml-1 h-6 w-6 text-gray-400"
            onClick={(e) => {
              navigator.clipboard.writeText(resultText).then(() => {
                setIsCopiedOpen(true);
              });
            }}
          >
            <ContentCopyRoundedIcon />
          </button>
        </div>
        {separators.map((separator, i) => {
          return (
            <Stack direction="row" spacing={4} className="mt-6" key={i}>
              <TextField
                id="standard-basic"
                label="文字"
                variant="filled"
                value={separator.value}
                onChange={(e) =>
                  setSeparators((prev) => {
                    const newSeparators = [...prev];
                    newSeparators[i].value = e.target.value;
                    return newSeparators;
                  })
                }
              />
              <Slider
                aria-label="追加割合"
                value={separator.rate}
                onChange={(e, newValue) =>
                  setSeparators((prev) => {
                    const newSeparators = [...prev];
                    newSeparators[i].rate = newValue as number;
                    return newSeparators;
                  })
                }
                valueLabelDisplay="auto"
                style={{ marginTop: "15px" }}
                valueLabelFormat={(v) => `${v}%`}
                min={0}
                max={100}
              />
            </Stack>
          );
        })}
        <Button
          className="mt-8"
          onClick={() => {
            const newSeparators = [...separators];
            newSeparators.push({ value: "", rate: 10 });
            setSeparators(newSeparators);
          }}
        >
          文字をさらに追加
        </Button>
      </div>
      <Snackbar
        open={isCopiedOpen}
        autoHideDuration={2000}
        onClose={() => setIsCopiedOpen(false)}
        message="コピーしました"
        ContentProps={{
          className: "bg-[rgba(30,30,30,0.9)] text-white",
        }}
      />
    </Layout>
  );
};

export default Home;
