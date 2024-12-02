import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./root";
import { appRouter } from "./root";
import { createTRPCContext } from "./trpc";
/**
 * Create a server-side caller for the tRPC API
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
declare const createCaller: import("@trpc/server/unstable-core-do-not-import").RouterCaller<{
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
                id: number;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                createdById: string;
            };
        }>;
        getLatest: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                id: number;
                name: string;
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
}>>;
/**
 * Inference helpers for input types
 * @example
 * type PostByIdInput = RouterInputs['post']['byId']
 *      ^? { id: number }
 **/
type RouterInputs = inferRouterInputs<AppRouter>;
/**
 * Inference helpers for output types
 * @example
 * type AllPostsOutput = RouterOutputs['post']['all']
 *      ^? Post[]
 **/
type RouterOutputs = inferRouterOutputs<AppRouter>;
export { createTRPCContext, appRouter, createCaller };
export type { AppRouter, RouterInputs, RouterOutputs };
//# sourceMappingURL=index.d.ts.map