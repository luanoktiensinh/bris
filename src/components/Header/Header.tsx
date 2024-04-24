import { HeaderBanner } from "./Banner";
import { HeaderPanel } from "./Panel";
import styles from './Header.module.scss';
import { Logo } from "./Logo";
import { HeaderSearch } from "./Search";
import { CardModal } from "./CardModal";
import { HeaderActionAccount } from "../Actions";
import { HeaderActionWishlist } from "../Actions/Wishlist";
import { HeaderActionMiniCart } from "../Actions/MiniCart";
import { MegaMenuToggler } from "../MegaMenu/Toggler";
import { MegaMenu } from "../MegaMenu";
import { MegaMenuMobile } from "../MegaMenu/Mobile";
const Header = () => {
    return (
        <header className={styles.root}>
            <HeaderBanner />
            <HeaderPanel />
            <div className="container">
                <div className={styles.main}>
                    <MegaMenuToggler />
                    <Logo classes={styles.logo}/>
                    <HeaderSearch classes={styles.search}/>
                    <CardModal
                        classes={styles.card}
                        icon="/images/icon-delivery.png"
                        title="DELIVERTY POSTCODE"
                        value="Set your postcode"
                    />
                    <CardModal
                        classes={styles.card}
                        icon="/images/icon-region.png"
                        title="SELECT STORE"
                        value="Choose your store"
                    />
                    <div className={styles.space} />
                    <HeaderActionAccount />
                    <HeaderActionWishlist />
                    <HeaderActionMiniCart />
                </div>
                <MegaMenu />
            </div>
            <MegaMenuMobile />
        </header>
    );
};
export default Header;