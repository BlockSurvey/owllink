import { useState } from "react";
import styles from "../../styles/NftFaq.module.css";

function FAQ() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  // Get faq's from constant.js
  const faq = [
    {
      question: "What is your token used for?",
      answer: `Each NFT represents the governance ownership in Owl Link Protocol. It is a governance token that yields from the revenue generated on the protocol.`,
    },
    {
      question: "How does your token improve your product?",
      answer: `It helps Owl Link bootstrap. The funds raised from the NFT sales will help to develop the protocol further. Owl Link’s NFT becomes a governance token for holders where every holder has a stake in project governance.`,
    },
    {
      question: "Why does your token have value to holders?",
      answer: `NFT holders will get a revenue share from the Owl Link profile mints. Currently at 10 STX per profile. Please see the revenue sharing table for details on distribution.`,
    },
    {
      question: "Why do people use your product (not your token)?",
      answer: `Owl Link is a bio link tool for Web 3. It is a decentralized bio link tool - a one-stop place link to tie social, institutional, and state-issued identities. Additionally, you can showcase your digital assets (NFTs like arts, certificates, and documents). Businesses can use Owl Link for onboarding, social KYC, and background verification (proof of identity).`,
    },
    {
      question: "What is the difference between identity and a passport?",
      answer: `A passport is a document that proves your identity. Identity is something you have, such as your name, Social Security number, or driver's license number. Owl Link passport is a feature that will be rolled out once we hit 100k users.`,
    },
    {
      question: "Does Owl Link focus on hard and soft identities?",
      answer: `Owl Link focuses on both hard and soft identities. The hard identity is anchored on the blockchain, immutable and unforgettable. Here it is your decentralized namespaces which you own. The soft identity is based on the user's profile, which is constantly evolving and updating.`,
    },
    {
      question:
        "How is the voting process being carried out with governance tokens?",
      answer: `We will follow quadratic voting with gated voting on ballot.gg.`,
    },
    {
      question: "Do we intend to buy back Owl Link NFTs at any time?",
      answer: `We won't do that right now. Even though it is an open market, we would also like to buy.`,
    },
    {
      question: "Does Owl Link NFT come with a vesting capsule?",
      answer: `No vesting is involved, and NFT will be sent to the owner immediately once it is minted.`,
    },
    {
      question:
        "Is the primary owner of NFT eligible for any reward distribution?",
      answer: `No, all the rewards will be distributed only to the current NFT holder.`,
    },
    {
      question: "Is it mandatory for an NFT holder to have a .BTC namespace?",
      answer: `No. We have started with .BTC namespace but we plan to support any namespaces on the Stacks blockchain like .crashpunk .stx to name a few.`,
    },
    {
      question: "How are we planning to expand the community for Owl Link?",
      answer: `Our goal is to build a strong and engaged community of users, developers, and businesses who can all benefit from Owl.Link as their super identity for the web 3. This will be achieved by continuing to develop and improve the platform after product-led growth, and by growing our user base through community-driven growth.`,
    },
    {
      question:
        "What is the originality of the Owl Link NFT project? How can you prove the legitimacy of a claim?",
      answer: `Many hackathon projects have been done on bio-link tool across various blockchains and are available on GitHub, but they have never been made live or productionized. Owl Link is a live application that has real users using it, and it extends the idea to make it a super identity. Whether a project is considered original depends on how innovative it is and how well it solves the problem it is trying to solve. A variety of methods can be used to demonstrate the legitimacy of a claim, including proving the existence of a problem, showing that the proposed solution is effective, and demonstrating the project has a solid team and community support.`,
    },
    {
      question: "How often does the community get updates on the roadmap?",
      answer: `A quarterly roadmap update will be provided to the community on the progress of the project. An updated roadmap will be shared if there are reprioritization, revisions, and new feature requests being absorbed for work.`,
    },
    {
      question:
        "Does the team have previous experience building? Have they built a successful project before?",
      answer: `We have been building DApps and Smart contracts on Stacks for the last 3 years. One of the most notable project is BlockSurvey.`,
    },
    {
      question:
        "Can you tell me more about the stability and continuity of Stacks Blockchain, on which Owl Link NFT operates?",
      answer: `The Stacks blockchain is a layer 1 cryptocurrency protocol that is the foundation of the Stack ecosystem. Stacks tokens were one of the first projects to launch on the Bitcoin blockchain and are currently the only project to offer a blockchain-based smart contract network with a native consensus mechanism that is anchored to the Bitcoin blockchain. We are looking forward to higher throughput and native Bitcoin writes with Stacks 2.1 which is due in Q4 of 2022. It's clear that Stacks is growing, and the narrative built around Bitcoin is game-changing, and we believe Web 2.0 audiences will be able to adapt to Web 3.0 with Stacks.`,
    },
    {
      question:
        "Does the NFT holder receive any other tangible benefits or accrue any other value? Is there any benefit to staking and locking up tokens other than monetary gains?",
      answer: `Other benefits may be offered to NFT holders, such as voting rights, access to advanced business features, and other privileges (as we come up with). Staking and locking up tokens may be required to participate in certain activities or to receive certain benefits.`,
    },
  ];

  return (
    <div>
      {faq.map((item, i) => (
        <div className={styles.items} key={item.question}>
          <div className={styles.faq_question} onClick={() => toggle(i)}>
            <p style={{ margin: 0 }}>{item.question}</p>
            <span>
              {selected == i ? (
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L9 1L17 9"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 9L17 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <div
            className={
              selected == i ? styles.faq_answer_show : styles.faq_answer
            }
          >
            <div className={styles.faq_answer_content}>
              <span dangerouslySetInnerHTML={{ __html: item.answer }}></span>
            </div>
          </div>
          <hr style={{ backgroundColor: "black", margin: 0 }}></hr>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
