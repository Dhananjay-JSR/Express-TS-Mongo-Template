import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
	/**
	 * Makes env configs available for your app
	 * throughout the app's runtime
	 */
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, '../../.env') });

		const url = process.env.APP_URL || `http://localhost:${process.env.PORT || 3000}`;
		const port = process.env.PORT || 3000;
		const mongooseUrl = process.env.MONGODB_URL;
		const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
		const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';
		const name = process.env.APP_NAME || '<App_Name>';
		const year = (new Date()).getFullYear();
		const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
		const description = process.env.APP_DESCRIPTION || 'Here goes the app description';
		const isCORSEnabled = process.env.CORS_ENABLED || true;
		const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
		const apiPrefix = process.env.API_PREFIX || 'api';
		const logDays = process.env.LOG_DAYS || 20;
        const jwtSecretKey= process.env.JWT_SECRET_TOKEN_KEY
        const frontend_url=process.env.FRONTEND_URL
		return {
			apiPrefix,
			copyright,
			description,
			isCORSEnabled,
			jwtExpiresIn,
			logDays,
			maxUploadLimit,
			maxParameterLimit,
			mongooseUrl,
			name,
			port,
			url,
            jwtSecretKey,
            frontend_url
		};
	}
}

export default Locals;