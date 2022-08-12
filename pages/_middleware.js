import { NextResponse } from 'next/server';

export const middleware = (request) => {
	const token = request.cookies['access_token'];
	const isAdminRoutes =
		request.nextUrl.pathname.startsWith('/admin') &&
		request.nextUrl.pathname !== '/admin';

	if (!token && isAdminRoutes) {
		return NextResponse.redirect(new URL('/admin', request.url));
	}
};
