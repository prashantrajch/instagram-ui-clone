const API_KEY = "cSRFZaL9mafHmQSEMvKH2g==aUryNRnACTEwiugg";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY,
  },
};

const API_URL = "https://api.api-ninjas.com/v1/randomuser";

let PostsData = [
  {
    id: 1,
    userName: "prashant_raj_ch",
    profilePhoto: "https://picsum.photos/600/900/?random=2",
    likes: "5,360",
    comment: "641",
    postPhoto: "https://picsum.photos/600/900/?random=1",
    postHour: "12 H",
    caption: "tag somemone",
  },
  {
    id: 2,
    userName: "naughtyworld",
    profilePhoto: "https://picsum.photos/600/900/?random=1",
    likes: "1,036",
    comment: "12",
    postPhoto: "https://picsum.photos/600/900/?random=3",
    postHour: "12 m",
    caption: "@pragati_nagpal ji aaj to sabko ladoo khila hi do 😁",
  },
  {
    id: 3,
    userName: "flirtingchats",
    profilePhoto: "https://picsum.photos/600/900/?random=4",
    likes: "568",
    comment: "63",
    postPhoto: "https://picsum.photos/600/900/?random=5",
    postHour: "53 m",
    caption: "Jai siyaram",
  },
];

export default PostsData;
