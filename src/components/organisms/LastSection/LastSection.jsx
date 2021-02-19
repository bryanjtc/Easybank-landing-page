import React from "react";
import "../../../styles/lastSection/lastSection.css";
import ImageCurrency from "../../../images/image-currency.jpg";
import ImageRestaurant from "../../../images/image-restaurant.jpg";
import ImagePlane from "../../../images/image-plane.jpg";
import ImageConfetti from "../../../images/image-confetti.jpg";
import Text from "../../atoms/Text.jsx";
import LastSectionList from "./LastSectionList.jsx";

class LastSection extends React.Component {
  LastSectionItems = {
    data: [
      {
        ID: "60b3c74a-d8b8-41b8-9949-2ac639d3144b",
        LinkSource: "/",
        ImageSource: ImageCurrency,
        ImageAlt: "Image currency",
        TextValueAuthor: "By Claire Robinson",
        TextValueTitle: "Receive money in any currency with no fees",
        TextValueDescription:
          "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      },
      {
        ID: "15d5f125-0de0-4a5d-9617-a49aca68593c",
        LinkSource: "/",
        ImageSource: ImageRestaurant,
        ImageAlt: "Image Restaurant",
        TextValueAuthor: "By Wilson Hutton",
        TextValueTitle: "Treat yourself without worrying about money",
        TextValueDescription:
          "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      },
      {
        ID: "ef88eac3-a92e-4121-8870-3e1cb7fb6ea3",
        LinkSource: "/",
        ImageSource: ImagePlane,
        ImageAlt: "Image Plane",
        TextValueAuthor: "By Wilson Hutton",
        TextValueTitle: "Take your Easybank card wherever you go",
        TextValueDescription:
          "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      },
      {
        ID: "4b3130c1-6d6f-41ce-8813-77eed2253164",
        LinkSource: "/",
        ImageSource: ImageConfetti,
        ImageAlt: "Image Confetti",
        TextValueAuthor: "By Claire Robinson",
        TextValueTitle: "Our invite-only Beta accounts are now live!",
        TextValueDescription:
          "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      },
    ],
  };
  render() {
    return (
      <section className="last_section">
        <Text TextType="title" TextValue="Lastest Articles" />
        <LastSectionList LastSectionItems={this.LastSectionItems.data} />
      </section>
    );
  }
}

export default LastSection;
