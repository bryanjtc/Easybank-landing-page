import styles from "../../styles/inviteButton.module.css";
import React from "react";

class InviteButton extends React.Component {
  btnClick() {
    window.open("/", "_self");
  }
  render() {
    return (
      <button
        type="button"
        className={styles.invite_button}
        onClick={this.btnClick.bind(this)}
      >
        Request Invite
      </button>
    );
  }
}

export default InviteButton;
