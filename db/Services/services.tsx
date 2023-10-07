import shield from "../../public/shield.png";
import trump from "../../public/trump.png";
import fight from "../../public/fight.png";
import farm from "../../public/farm.png";

export const services = [
  {
    id: 1,

    label: "mentorship",
    img: shield,
    // icon: ( <Trainer fill="#624C7B" w="17"/>),
    href: "/services/mentorship",
    title: "Forex Mentorship",
    body: "Online & Physical training sessions",
  },

  {
    id: 2,

    label: "guidance from our Pros",
    img: trump,
    // icon: (<Running fill="#624C7B" w="25"/>),
    href: "/services/account-management",
    title: "Account Management",
    body: "our investment plans and prop firm services",
  },
  {
    id: 3,

    label: "metro",
    img: fight,
    // icon: (<Boxing fill="#624C7B" w="22"/>),
    href: "/blog/bot",
    title: "Metro Trading Bot",
    body: "Are you tired of sleepless nights, hitting drawdowns, blowing accounts, losing ridiculous amount of money? Then the B'pips academy METRO trading bot is for you",
  },
];
