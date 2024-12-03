import { z } from "zod";
export declare const postRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
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
            zodError: z.typeToFlattenedError<any, string> | null;
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
//# sourceMappingURL=post.d.ts.map