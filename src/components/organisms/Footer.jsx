import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section class="footer">
        <div class="row">
          <div class="col_footer">
            <div class="col_footer_start">
              <img
                src="%PUBLIC_URL%/logo-white.svg"
                alt="Logo_White"
                class="logo_white"
              />
              <div class="social_medias">
                <a href="/">
                  <img
                    src="%PUBLIC_URL%/icon-facebook.svg"
                    class="img_medias"
                    alt="facebook"
                  />
                </a>
                <a href="/">
                  <img
                    src="%PUBLIC_URL%/icon-youtube.svg"
                    class="img_medias"
                    alt="youtube"
                  />
                </a>
                <a href="/">
                  <img
                    src="%PUBLIC_URL%/icon-twitter.svg"
                    class="img_medias"
                    alt="twitter"
                  />
                </a>
                <a href="/">
                  <img
                    src="%PUBLIC_URL%/icon-pinterest.svg"
                    class="img_medias"
                    alt="pinterest"
                  />
                </a>
                <a href="/">
                  <img
                    src="%PUBLIC_URL%/icon-instagram.svg"
                    class="img_medias"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="col_footer">
            <div class="footer_options">
              <a href="/">About Us</a>
              <a href="/">Contact</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          <div class="col_footer">
            <div class="footer_options">
              <a href="/">Careers</a>
              <a href="/">Support</a>
              <a href="/">Blog</a>
            </div>
          </div>
          <div class="col_footer">
            <div class="col_footer_last">
              <input
                type="button"
                class="invite_button"
                value="Request Invite"
              />
              <p>© Easybank. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
