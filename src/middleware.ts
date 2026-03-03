import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only protect admin routes
    if (pathname.startsWith('/admin')) {
        const isAuthenticated = request.cookies.get('pixup_admin_auth');

        // Normalize path to ignore trailing slashes for the check
        const normalizedPath = pathname.replace(/\/$/, "");

        // If it's not the root admin page and not authenticated
        if (!isAuthenticated && normalizedPath !== '/admin') {
            // Redirect to the main admin login page
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/:path*'],
};
