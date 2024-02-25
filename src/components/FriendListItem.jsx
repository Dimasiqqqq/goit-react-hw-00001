import css from "../components/FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<div className={css.card}>
			<img src={avatar} alt="Avatar" width="80" />
			<p className={css.name}>{name}</p>
			<p className={clsx(css.status, isOnline && css.statusonline)}>{isOnline ? "Online" : "Offline"}</p>
		</div>
	);
};

export default FriendListItem;