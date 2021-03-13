import React from "react";
import IconOnline from "../../../images/icon-online.svg";
import IconBudgeting from "../../../images/icon-budgeting.svg";
import IconOnboarding from "../../../images/icon-onboarding.svg";
import IconApi from "../../../images/icon-api.svg";
import "../../../styles/middleSection/middleSection.css";
import Text from "../../atoms/Text.jsx";
import MiddleSectionList from "./MiddleSectionList.jsx";

class MiddleSection extends React.Component {
  MiddleSectionItems = {
    data: [
      {
        ID: "3e29a3d8-cda6-4984-b291-259fe464be35",
        LinkSource: "/",
        ImageSource: IconOnline,
        ImageAlt: "Icon Online",
        TextValueTitle: "Online Banking",
        TextValueDescription:
          "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      },
      {
        ID: "e19bde32-aaa1-4bc8-a995-604dc9d83e5b",
        LinkSource: "/",
        ImageSource: IconBudgeting,
        ImageAlt: "Icon Budgeting",
        TextValueTitle: "Simple Budgeting",
        TextValueDescription:
          "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      },
      {
        ID: "58913a1d-aa5b-4f16-ae5e-10047d9b4825",
        LinkSource: "/",
        ImageSource: IconOnboarding,
        ImageAlt: "Icon Onboarding",
        TextValueTitle: "Fast Onboarding",
        TextValueDescription:
          "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      },
      {
        ID: "48c53834-a686-4558-b933-c671c119722f",
        LinkSource: "/",
        ImageSource: IconApi,
        ImageAlt: "Icon Api",
        TextValueTitle: "Open API",
        TextValueDescription:
          "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      },
    ],
  };
  render() {
    return (
      <div className="middle_section">
        <div className="middle_section_header">
          <Text TextType="title" TextValue="Why choose Easybank?" />
          <Text
            TextType="description"
            TextValue="We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before."
          />
        </div>
        <MiddleSectionList MiddleSectionItems={this.MiddleSectionItems.data} />
      </div>
    );
  }
}

export default MiddleSection;
