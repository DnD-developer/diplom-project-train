declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MAIN_URL: string
			MAIN_PAGE: string
			END_PAGE: string
			LEARN_MORE: string
			TICKETS_PAGE: string
			PASSENGERS_PAGE: string
			PAY_PAGE: string
			CHECK_PAGE: string
		}
	}
}

export {}
