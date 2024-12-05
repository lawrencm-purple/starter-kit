/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export declare const appRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        session: import("next-auth").Session | null;
        db: import("@prisma/client").PrismaClient<{
            log: ("query" | "warn" | "error")[];
        }, never, import("@prisma/client/runtime/library").DefaultArgs>;
        token: string | null;
    };
    meta: object;
    errorShape: {
        data: {
            zodError: import("zod").typeToFlattenedError<any, string> | null;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        message: string;
        code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    post: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            session: import("next-auth").Session | null;
            db: import("@prisma/client").PrismaClient<{
                log: ("query" | "warn" | "error")[];
            }, never, import("@prisma/client/runtime/library").DefaultArgs>;
            token: string | null;
        };
        meta: object;
        errorShape: {
            data: {
                zodError: import("zod").typeToFlattenedError<any, string> | null;
                code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: true;
    }, {
        hello: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                text: string;
            };
            output: {
                greeting: string;
            };
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
            };
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                createdById: string;
            };
        }>;
        getLatest: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                createdById: string;
            } | null;
        }>;
        getSecretMessage: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: string;
        }>;
    }>;
    cms: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            session: import("next-auth").Session | null;
            db: import("@prisma/client").PrismaClient<{
                log: ("query" | "warn" | "error")[];
            }, never, import("@prisma/client/runtime/library").DefaultArgs>;
            token: string | null;
        };
        meta: object;
        errorShape: {
            data: {
                zodError: import("zod").typeToFlattenedError<any, string> | null;
                code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: true;
    }, {
        getLayout: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                slug: string;
            };
            output: {
                story: {
                    content?: any;
                };
            };
        }>;
    }>;
}>>;
export type AppRouter = typeof appRouter;
/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export declare const createCaller: import("@trpc/server/unstable-core-do-not-import").RouterCaller<{
    ctx: {
        session: import("next-auth").Session | null;
        db: import("@prisma/client").PrismaClient<{
            log: ("query" | "warn" | "error")[];
        }, never, import("@prisma/client/runtime/library").DefaultArgs>;
        token: string | null;
    };
    meta: object;
    errorShape: {
        data: {
            zodError: import("zod").typeToFlattenedError<any, string> | null;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        message: string;
        code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    post: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            session: import("next-auth").Session | null;
            db: import("@prisma/client").PrismaClient<{
                log: ("query" | "warn" | "error")[];
            }, never, import("@prisma/client/runtime/library").DefaultArgs>;
            token: string | null;
        };
        meta: object;
        errorShape: {
            data: {
                zodError: import("zod").typeToFlattenedError<any, string> | null;
                code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: true;
    }, {
        hello: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                text: string;
            };
            output: {
                greeting: string;
            };
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
            };
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                createdById: string;
            };
        }>;
        getLatest: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                createdById: string;
            } | null;
        }>;
        getSecretMessage: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: string;
        }>;
    }>;
    cms: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            session: import("next-auth").Session | null;
            db: import("@prisma/client").PrismaClient<{
                log: ("query" | "warn" | "error")[];
            }, never, import("@prisma/client/runtime/library").DefaultArgs>;
            token: string | null;
        };
        meta: object;
        errorShape: {
            data: {
                zodError: import("zod").typeToFlattenedError<any, string> | null;
                code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_KEY;
                httpStatus: number;
                path?: string;
                stack?: string;
            };
            message: string;
            code: import("@trpc/server/unstable-core-do-not-import").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: true;
    }, {
        getLayout: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                slug: string;
            };
            output: {
                story: {
                    content?: any;
                };
            };
        }>;
    }>;
}>>;
//# sourceMappingURL=root.d.ts.map