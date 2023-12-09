declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MAIN_URL: string
			MAIN_PAGE: string
			END_PAGE: string
		}
	}
}

export {}
