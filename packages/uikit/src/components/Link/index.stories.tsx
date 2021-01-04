import React from "react";
import { PancakeRoundIcon } from "../Svg";
import { Link, LinkExternal } from "./index";

export default {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <div>
        <Link href="/">Default</Link>
      </div>
      <div>
        <Link href="/" color="text">
          Custom color
        </Link>
      </div>
      <div>
        <Link external href="/">
          External
        </Link>
      </div>
      <div>
        <Link href="/">
          With icon
          <PancakeRoundIcon />
        </Link>
      </div>
      <div>
        <LinkExternal href="/">LinkExternal</LinkExternal>
      </div>
    </div>
  );
};
