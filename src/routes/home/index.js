import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";
import Work from "../../components/work";

const Home = () => {
	/*
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<p class={style.bio}>
				I'm Phil.
			</p>
			<p class={style.bio}>
				A product designer.
			</p>
			<Work/>	
		</div>
	);
};

export default Home;
