import React from "react";
import IconOnline from "../../../images/icon-online.svg";
import IconBudgeting from "../../../images/icon-budgeting.svg";
import IconOnboarding from "../../../images/icon-onboarding.svg";
import IconApi from "../../../images/icon-api.svg";
import "./styles/MiddleSection.css";
import Text from "../atoms/Text.jsx";
import { Link } from "react-router-dom";

class MiddleSection extends React.Component {
  render() {
    return (
      <section class="middle_section">
        <div class="middle_section_header">
          <Text TextType="title" TextValue="Why choose Easybank?" />
          <Text
            TextType="description"
            TextValue="We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before."
          />
        </div>
        <div class="content">
          <section class="content_item">
            <Link to="/">
              <img src={IconOnline} alt="Icon Online" />
            </Link>
            <Text TextType="subtitle" TextValue="Online Banking" />
            <Text
              TextType="description"
              TextValue="Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world."
            />
          </section>
          <section class="content_item">
            <Link to="/">
              <img src={IconBudgeting} alt="Icon Budgeting" />
            </Link>
            <Text TextType="subtitle" TextValue="Simple Budgeting" />
            <Text
              TextType="description"
              TextValue="See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits."
            />
          </section>
          <section class="content_item">
            <Link to="/">
              <img src={IconOnboarding} alt="Icon Onboarding" />
            </Link>
            <Text TextType="subtitle" TextValue="Fast Onboarding" />
            <Text
              TextType="description"
              TextValue="We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away."
            />
          </section>
          <section class="content_item">
            <Link to href="/">
              <img src={IconApi} alt="Icon API" />
            </Link>
            <Text TextType="subtitle" TextValue="Open API" />
            <Text
              TextType="description"
              TextValue="Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier."
            />
          </section>
        </div>
      </section>
    );
  }
}

export default MiddleSection;
