import React, { JSX, lazy, Suspense } from 'react';
import {
	// ActionFunctionArgs,
	LoaderFunctionArgs,
	useLoaderData,
} from 'react-router';
import { getDataRegisterPage } from '@/api/RegisterPage';

const LazyRegisterPage = lazy(() =>
	import('./RegisterPage').then((module) => ({ default: module.RegisterPage }))
);

const RegisterPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyRegisterPage data={data} {...props} />
		</Suspense>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	try {
		const data = await getDataRegisterPage();
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

export default { loader, element: <RegisterPage /> };
