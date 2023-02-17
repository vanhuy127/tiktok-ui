import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1676786400&x-signature=7fzJ4PnobXRJCJRt1E5PeSZ7pe0%3D"
        alt=""
      ></img>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van Huy</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("username")}>nguyenvanhuy</p>
      </div>
    </div>
  );
}
export default AccountItem;
