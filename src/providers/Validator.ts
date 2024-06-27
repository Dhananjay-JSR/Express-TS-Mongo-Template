import zod from "zod"
export const envSchema = zod.object({
	PORT: zod.string(),
	MONGODB_URL: zod.string(),
	APP_DESCRIPTION: zod.string(),
	CORS_ENABLED: zod.string().optional()
});