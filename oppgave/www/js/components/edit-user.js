import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    if (this.user.uid)
      return html`
        <form action="api/updateUser.php" method="POST">
          <input type="hidden" name="uid" value="${this.user.uid}">

          <label for="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" value="${this.user.firstName}"><br>

          <label for="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" value="${this.user.lastName}"><br>

          <label for="uname">Username</label>
          <input type="text" id="uname" name="uname" value="${this.user.uname}"><br>

          <label for="oldpwd">Current password</label>
          <input type="password" id="oldpwd" name="oldpwd"><br>

          <label for="pwd">New password</label>
          <input type="password" id="pwd" name="pwd"><br>

          <input type="submit" value="Submit"><br>
        </form>
      `;
    else return "";
  }

}
customElements.define('edit-user', EditUser);
