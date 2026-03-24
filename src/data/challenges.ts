export type Problem = {
  id: number;
  title: string;
  problems: {
    id: number;
    header: string;
    content: string;
  }[];
};

export const PROBLEM_CONTENT: Problem[] = [
  {
    id: 1,
    title:
      "There exists a cultural stigma around mental health among Africans.",
    problems: [
      {
        id: 1,
        header: "How does this affect Africans?",
        content:
          "This issue can affect Africans by discouraging them from seeking help for mental health concerns, leading to untreated conditions, social isolation, and barriers to accessing necessary support and resources. This can also perpetuate misunderstandings about mental health and contribute to the stigmatization of individuals experiencing mental health challenges",
      },
      {
        id: 2,
        header: "How is AuraRest solving this?",
        content:
          "AuraRest prioritizes mental health education, awareness programs, and community engagement. This includes implementing culturally sensitive mental health programs, outreaches, and webinars that challenge stereotypes, promote understanding, and encourage open dialogue about mental health. We also collaborate with government bodies, healthcare providers, community leaders, and NGOs so as to combat mental health stigma in African societies.",
      },
    ],
  },
  {
    id: 2,
    title:
      "Language barriers hinder Africans from accessing mental health services..",
    problems: [
      {
        id: 1,
        header: "How does this affect Africans?",
        content:
          "It hinders effective communication between individuals seeking help and mental health professionals, leading to misunderstandings, misdiagnoses, and limited access to appropriate care and support. This barrier can exacerbate existing mental health issues and prevent individuals from receiving the help they need to thrive.",
      },
      {
        id: 2,
        header: "How is AuraRest solving this?",
        content:
          "AuraRest caters to diverse audiences by offering the application, chatbot and virtual therapy in various languages and local dialects, increasing accessibility and inclusivity",
      },
    ],
  },
  {
    id: 3,
    title: "Africans know that they need mental support but it is expensive.",
    problems: [
      {
        id: 1,
        header: "How does this affect Africans?",
        content:
          "High therapy costs hinder mental health support in Africa, with a WHO study revealing that only 1% of Africans with mental illness receive effective treatment",
      },
      {
        id: 2,
        header: "How is AuraRest solving this?",
        content:
          "Individuals can sign up on the AuraRest mobile application and receive mental aid for free with Pal, an AI Companion ready to listen and give immediate support or book a therapy session at an affordable subscription fee, in contrast to traditional therapy expenses.",
      },
    ],
  },
];
