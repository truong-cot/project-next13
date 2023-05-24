import BaseLayout from '~/components/layouts/BaseLayout';
import styles from './Page.module.scss';

export default function Home() {
	return (
		<BaseLayout>
			<main className={styles.main}>
				<h1>Page Home</h1>
			</main>
		</BaseLayout>
	);
}
