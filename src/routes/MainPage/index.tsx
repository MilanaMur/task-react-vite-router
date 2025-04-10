import React, { JSX, lazy, Suspense } from 'react';
import {
	// ActionFunctionArgs,
	LoaderFunctionArgs,
	useLoaderData,
} from 'react-router';
import { getDataMainPage } from '@/api/MainPage';

const LazyMainPage = lazy(() =>
	import('./MainPage').then((module) => ({ default: module.MainPage }))
);

const MainPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyMainPage data={data} {...props} />
		</Suspense>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	try {
		const data = await getDataMainPage();
		return data;
	} catch (error) {
		console.error('Error fetching data: ', error);
		// с фейк апи не вернётся ошибок, но пусть будет их обработчик для каноничности
	}
}

// т.к рабочего сервера нет, обработку сабмита будет производить клиент
// поэтому код ниже закоминчен

// async function action({ params, request }: ActionFunctionArgs) {
// 	try {
// 		const data = await request.formData();
// 		const payload = Object.fromEntries(data.entries()) as object;
// 		console.log('Payload:', payload);
// 	} catch (error) {
// 		console.error('Error in action:', error);
// 	}
// }

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default { loader, element: <MainPage /> };
