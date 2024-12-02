export const wait = async (ms = 200) =>
	await new Promise(resolve => setTimeout(resolve, ms))
