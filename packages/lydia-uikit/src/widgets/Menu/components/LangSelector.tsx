import React from "react";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";
import { LangType } from "../types";
import MenuButton from "./MenuButton";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

interface Props {
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <>
    <a href="https://discord.gg/qHjhz9Mz5b">
      <Text color="textSubtle">Twitter</Text>
    </a>
    <a href="https://discord.gg/qHjhz9Mz5b">
      <Text color="textSubtle">Telegram</Text>
    </a>
    <a href="https://discord.gg/qHjhz9Mz5b">
      <Text color="textSubtle">Discord</Text>
    </a>
  </>
  // <Dropdown
  //   position="top-right"
  //   target={
  //     <a href="https://discord.gg/qHjhz9Mz5b">
  //       <Text color="textSubtle">Discord</Text>
  //     </a>
  //   }
  // >
  //   {/* {langs.map((lang) => (
  //     <MenuButton
  //       key={lang.code}
  //       fullWidth
  //       onClick={() => setLang(lang)}
  //       // Safari fix
  //       style={{ minHeight: "32px", height: "auto" }}
  //     >
  //       {lang.language}
  //     </MenuButton>
  //   ))} */}
  // </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
