interface LoginPageData {
	message: string;
}

export const getDataLoginPage = (): Promise<LoginPageData> => {
	return Promise.resolve({
		message: 'LoginData',
	});
};
