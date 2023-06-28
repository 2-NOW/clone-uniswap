import { ListItem } from "./list-item";
import { MoreButton } from "./more-button";

export const Menu = () => {
  // TODO: add hover effect
  // TODO: add active effect

  return (
    <ul className="flex items-center">
      {[
        {
          label: "Swap",
          href: "/",
        },
        {
          label: "Tokens",
          href: "https://app.uniswap.org/#/tokens/ethereum_goerli",
        },
        {
          label: "NFTs",
          href: "https://app.uniswap.org/#/nfts",
        },
      ].map(({ label, href }) => (
        <ListItem
          key={`${label}-${href}`}
          label={label}
          href={href}
          isExternal={href.includes("https://")}
          style={{
            list: "my-1 px-3.5 py-2",
            link: "text-white hover:text-gray-400",
          }}
        />
      ))}

      <li className="mr-1">
        <MoreButton />
      </li>
    </ul>
  );
};
