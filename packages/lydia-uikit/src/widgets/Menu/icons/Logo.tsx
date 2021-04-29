import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 300 50" {...props}>
      <defs>
        <text
          id="string"
          transform="matrix(1.0 0.0 0.0 1.0 62.0 4.0)"
          x="1.0"
          fontSize="38"
          y="36.0"
          fontFamily="ArialRoundedMTBold, Arial Rounded MT Bold"
          textDecoration="none"
          fill={textColor}
        >
          LydiaFinance
        </text>
      </defs>
      <use id="LydiaFinance" xlinkHref="#string" />
      <defs>
        <image
          id="image"
          width="53px"
          height="53px"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
      <use id="image-1" xlinkHref="#image" x="4px" y="0px" width="53px" height="53px" />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
