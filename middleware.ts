export { default } from "next-auth/middleware";

// add ALL desired page that need to be protected
export const config = { matcher: ["/auth/dashboard"] };
