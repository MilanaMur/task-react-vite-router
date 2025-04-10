interface MainPageData {
	message: string;
}

export const getDataMainPage = (): Promise<MainPageData> => {
	return Promise.resolve({
		message: 'MainData',
	});
};
