interface RegisterPageData {
	message: string;
}

export const getDataRegisterPage = (): Promise<RegisterPageData> => {
	return Promise.resolve({
		message: 'RegisterData',
	});
};
