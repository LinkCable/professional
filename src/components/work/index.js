import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { usePrerenderData } from '@preact/prerender-data-provider';

const Work = (props) => {
	const [data] = props;
	return (
		<div class={style.works}>
			<p class={style.pageTitle}>Stuff I've worked on:</p>
			{ getWorks(data) }
		</div>
	);
};

function getWorks(data, isLoading) {
	if (isLoading) {
		return (
			<article class={style.loadingPlaceholder}>
				<p class={`${style.worktitle} loading`}>&nbsp;</p>
			</article>
		);
	}
	if (data && data.data) {
		const { data: works } = data;
		return (
			<>
				{works.edges.map(work => (
				<Link href={work.details.url}>
						<p>{work.details.title}</p>						
				</Link>
			))}
			</>
		);
	}
}


export default Work;
