import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "car_an_ba",
      text: "Nice pic",
      id: 1,
    },
    {
      user: "willvallgar",
      text: "Beemer boy",
      id: 2,
    },
    {
      user: "marta_hurtarte",
      text: "Cool photo",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "marta_hurtarte",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "willvallgar",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="cuaaas"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="car_an_ba"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="aliciakeys"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="marta_hurtarte"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="imarayulloa"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="willvallgar"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;