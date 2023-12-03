declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MAIN_URL: string
		}
	}
}

export {}
