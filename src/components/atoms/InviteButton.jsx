import React from "react";
import "../../styles/inviteButton.css";

class InviteButton extends React.Component {
  btnClick() {
    window.open("/", "_self");
  }
  render() {
    return (
      <button
        type="button"
        className="invite_button"
        onClick={this.btnClick.bind(this)}
      >
        Request Invite
      </button>
    );
  }
}

export default InviteButton;