
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Tokken
 * 
 */
export type Tokken = $Result.DefaultSelection<Prisma.$TokkenPayload>
/**
 * Model tools
 * 
 */
export type tools = $Result.DefaultSelection<Prisma.$toolsPayload>
/**
 * Model machine_cnc
 * 
 */
export type machine_cnc = $Result.DefaultSelection<Prisma.$machine_cncPayload>
/**
 * Model workOvernight
 * 
 */
export type workOvernight = $Result.DefaultSelection<Prisma.$workOvernightPayload>
/**
 * Model workStage
 * 
 */
export type workStage = $Result.DefaultSelection<Prisma.$workStagePayload>
/**
 * Model FileUpload
 * 
 */
export type FileUpload = $Result.DefaultSelection<Prisma.$FileUploadPayload>
/**
 * Model Learning
 * 
 */
export type Learning = $Result.DefaultSelection<Prisma.$LearningPayload>
/**
 * Model ContentLearning
 * 
 */
export type ContentLearning = $Result.DefaultSelection<Prisma.$ContentLearningPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FileType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type FileType = (typeof FileType)[keyof typeof FileType]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AuthMethod: {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE',
  GITHUB: 'GITHUB'
};

export type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod]


export const TokkenType: {
  VERIFICATION: 'VERIFICATION',
  RESET_PASSWORD: 'RESET_PASSWORD',
  TWO_FACTOR_AUTH: 'TWO_FACTOR_AUTH'
};

export type TokkenType = (typeof TokkenType)[keyof typeof TokkenType]

}

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AuthMethod = $Enums.AuthMethod

export const AuthMethod: typeof $Enums.AuthMethod

export type TokkenType = $Enums.TokkenType

export const TokkenType: typeof $Enums.TokkenType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokken`: Exposes CRUD operations for the **Tokken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokkens
    * const tokkens = await prisma.tokken.findMany()
    * ```
    */
  get tokken(): Prisma.TokkenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tools`: Exposes CRUD operations for the **tools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tools.findMany()
    * ```
    */
  get tools(): Prisma.toolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.machine_cnc`: Exposes CRUD operations for the **machine_cnc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Machine_cncs
    * const machine_cncs = await prisma.machine_cnc.findMany()
    * ```
    */
  get machine_cnc(): Prisma.machine_cncDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workOvernight`: Exposes CRUD operations for the **workOvernight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkOvernights
    * const workOvernights = await prisma.workOvernight.findMany()
    * ```
    */
  get workOvernight(): Prisma.workOvernightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workStage`: Exposes CRUD operations for the **workStage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkStages
    * const workStages = await prisma.workStage.findMany()
    * ```
    */
  get workStage(): Prisma.workStageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileUpload`: Exposes CRUD operations for the **FileUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileUploads
    * const fileUploads = await prisma.fileUpload.findMany()
    * ```
    */
  get fileUpload(): Prisma.FileUploadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learning`: Exposes CRUD operations for the **Learning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Learnings
    * const learnings = await prisma.learning.findMany()
    * ```
    */
  get learning(): Prisma.LearningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentLearning`: Exposes CRUD operations for the **ContentLearning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentLearnings
    * const contentLearnings = await prisma.contentLearning.findMany()
    * ```
    */
  get contentLearning(): Prisma.ContentLearningDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Tokken: 'Tokken',
    tools: 'tools',
    machine_cnc: 'machine_cnc',
    workOvernight: 'workOvernight',
    workStage: 'workStage',
    FileUpload: 'FileUpload',
    Learning: 'Learning',
    ContentLearning: 'ContentLearning'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "tokken" | "tools" | "machine_cnc" | "workOvernight" | "workStage" | "fileUpload" | "learning" | "contentLearning"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Tokken: {
        payload: Prisma.$TokkenPayload<ExtArgs>
        fields: Prisma.TokkenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokkenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokkenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>
          }
          findFirst: {
            args: Prisma.TokkenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokkenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>
          }
          findMany: {
            args: Prisma.TokkenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>[]
          }
          create: {
            args: Prisma.TokkenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>
          }
          createMany: {
            args: Prisma.TokkenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokkenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>[]
          }
          delete: {
            args: Prisma.TokkenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>
          }
          update: {
            args: Prisma.TokkenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>
          }
          deleteMany: {
            args: Prisma.TokkenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokkenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokkenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>[]
          }
          upsert: {
            args: Prisma.TokkenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokkenPayload>
          }
          aggregate: {
            args: Prisma.TokkenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokken>
          }
          groupBy: {
            args: Prisma.TokkenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokkenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokkenCountArgs<ExtArgs>
            result: $Utils.Optional<TokkenCountAggregateOutputType> | number
          }
        }
      }
      tools: {
        payload: Prisma.$toolsPayload<ExtArgs>
        fields: Prisma.toolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.toolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.toolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          findFirst: {
            args: Prisma.toolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.toolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          findMany: {
            args: Prisma.toolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>[]
          }
          create: {
            args: Prisma.toolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          createMany: {
            args: Prisma.toolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.toolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>[]
          }
          delete: {
            args: Prisma.toolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          update: {
            args: Prisma.toolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          deleteMany: {
            args: Prisma.toolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.toolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.toolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>[]
          }
          upsert: {
            args: Prisma.toolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$toolsPayload>
          }
          aggregate: {
            args: Prisma.ToolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTools>
          }
          groupBy: {
            args: Prisma.toolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.toolsCountArgs<ExtArgs>
            result: $Utils.Optional<ToolsCountAggregateOutputType> | number
          }
        }
      }
      machine_cnc: {
        payload: Prisma.$machine_cncPayload<ExtArgs>
        fields: Prisma.machine_cncFieldRefs
        operations: {
          findUnique: {
            args: Prisma.machine_cncFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.machine_cncFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>
          }
          findFirst: {
            args: Prisma.machine_cncFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.machine_cncFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>
          }
          findMany: {
            args: Prisma.machine_cncFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>[]
          }
          create: {
            args: Prisma.machine_cncCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>
          }
          createMany: {
            args: Prisma.machine_cncCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.machine_cncCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>[]
          }
          delete: {
            args: Prisma.machine_cncDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>
          }
          update: {
            args: Prisma.machine_cncUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>
          }
          deleteMany: {
            args: Prisma.machine_cncDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.machine_cncUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.machine_cncUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>[]
          }
          upsert: {
            args: Prisma.machine_cncUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machine_cncPayload>
          }
          aggregate: {
            args: Prisma.Machine_cncAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachine_cnc>
          }
          groupBy: {
            args: Prisma.machine_cncGroupByArgs<ExtArgs>
            result: $Utils.Optional<Machine_cncGroupByOutputType>[]
          }
          count: {
            args: Prisma.machine_cncCountArgs<ExtArgs>
            result: $Utils.Optional<Machine_cncCountAggregateOutputType> | number
          }
        }
      }
      workOvernight: {
        payload: Prisma.$workOvernightPayload<ExtArgs>
        fields: Prisma.workOvernightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workOvernightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workOvernightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>
          }
          findFirst: {
            args: Prisma.workOvernightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workOvernightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>
          }
          findMany: {
            args: Prisma.workOvernightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>[]
          }
          create: {
            args: Prisma.workOvernightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>
          }
          createMany: {
            args: Prisma.workOvernightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workOvernightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>[]
          }
          delete: {
            args: Prisma.workOvernightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>
          }
          update: {
            args: Prisma.workOvernightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>
          }
          deleteMany: {
            args: Prisma.workOvernightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workOvernightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workOvernightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>[]
          }
          upsert: {
            args: Prisma.workOvernightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workOvernightPayload>
          }
          aggregate: {
            args: Prisma.WorkOvernightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkOvernight>
          }
          groupBy: {
            args: Prisma.workOvernightGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkOvernightGroupByOutputType>[]
          }
          count: {
            args: Prisma.workOvernightCountArgs<ExtArgs>
            result: $Utils.Optional<WorkOvernightCountAggregateOutputType> | number
          }
        }
      }
      workStage: {
        payload: Prisma.$workStagePayload<ExtArgs>
        fields: Prisma.workStageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workStageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workStageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>
          }
          findFirst: {
            args: Prisma.workStageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workStageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>
          }
          findMany: {
            args: Prisma.workStageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>[]
          }
          create: {
            args: Prisma.workStageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>
          }
          createMany: {
            args: Prisma.workStageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workStageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>[]
          }
          delete: {
            args: Prisma.workStageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>
          }
          update: {
            args: Prisma.workStageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>
          }
          deleteMany: {
            args: Prisma.workStageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workStageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workStageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>[]
          }
          upsert: {
            args: Prisma.workStageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workStagePayload>
          }
          aggregate: {
            args: Prisma.WorkStageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkStage>
          }
          groupBy: {
            args: Prisma.workStageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkStageGroupByOutputType>[]
          }
          count: {
            args: Prisma.workStageCountArgs<ExtArgs>
            result: $Utils.Optional<WorkStageCountAggregateOutputType> | number
          }
        }
      }
      FileUpload: {
        payload: Prisma.$FileUploadPayload<ExtArgs>
        fields: Prisma.FileUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findFirst: {
            args: Prisma.FileUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findMany: {
            args: Prisma.FileUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          create: {
            args: Prisma.FileUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          createMany: {
            args: Prisma.FileUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          delete: {
            args: Prisma.FileUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          update: {
            args: Prisma.FileUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          deleteMany: {
            args: Prisma.FileUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          upsert: {
            args: Prisma.FileUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          aggregate: {
            args: Prisma.FileUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileUpload>
          }
          groupBy: {
            args: Prisma.FileUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileUploadCountArgs<ExtArgs>
            result: $Utils.Optional<FileUploadCountAggregateOutputType> | number
          }
        }
      }
      Learning: {
        payload: Prisma.$LearningPayload<ExtArgs>
        fields: Prisma.LearningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>
          }
          findFirst: {
            args: Prisma.LearningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>
          }
          findMany: {
            args: Prisma.LearningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>[]
          }
          create: {
            args: Prisma.LearningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>
          }
          createMany: {
            args: Prisma.LearningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>[]
          }
          delete: {
            args: Prisma.LearningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>
          }
          update: {
            args: Prisma.LearningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>
          }
          deleteMany: {
            args: Prisma.LearningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>[]
          }
          upsert: {
            args: Prisma.LearningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPayload>
          }
          aggregate: {
            args: Prisma.LearningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearning>
          }
          groupBy: {
            args: Prisma.LearningGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningCountArgs<ExtArgs>
            result: $Utils.Optional<LearningCountAggregateOutputType> | number
          }
        }
      }
      ContentLearning: {
        payload: Prisma.$ContentLearningPayload<ExtArgs>
        fields: Prisma.ContentLearningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentLearningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentLearningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>
          }
          findFirst: {
            args: Prisma.ContentLearningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentLearningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>
          }
          findMany: {
            args: Prisma.ContentLearningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>[]
          }
          create: {
            args: Prisma.ContentLearningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>
          }
          createMany: {
            args: Prisma.ContentLearningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentLearningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>[]
          }
          delete: {
            args: Prisma.ContentLearningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>
          }
          update: {
            args: Prisma.ContentLearningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>
          }
          deleteMany: {
            args: Prisma.ContentLearningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentLearningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentLearningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>[]
          }
          upsert: {
            args: Prisma.ContentLearningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentLearningPayload>
          }
          aggregate: {
            args: Prisma.ContentLearningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentLearning>
          }
          groupBy: {
            args: Prisma.ContentLearningGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentLearningGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentLearningCountArgs<ExtArgs>
            result: $Utils.Optional<ContentLearningCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    tokken?: TokkenOmit
    tools?: toolsOmit
    machine_cnc?: machine_cncOmit
    workOvernight?: workOvernightOmit
    workStage?: workStageOmit
    fileUpload?: FileUploadOmit
    learning?: LearningOmit
    contentLearning?: ContentLearningOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type ToolsCountOutputType
   */

  export type ToolsCountOutputType = {
    files: number
  }

  export type ToolsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ToolsCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * ToolsCountOutputType without action
   */
  export type ToolsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolsCountOutputType
     */
    select?: ToolsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToolsCountOutputType without action
   */
  export type ToolsCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Count Type Machine_cncCountOutputType
   */

  export type Machine_cncCountOutputType = {
    files: number
    workOvernights: number
  }

  export type Machine_cncCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | Machine_cncCountOutputTypeCountFilesArgs
    workOvernights?: boolean | Machine_cncCountOutputTypeCountWorkOvernightsArgs
  }

  // Custom InputTypes
  /**
   * Machine_cncCountOutputType without action
   */
  export type Machine_cncCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine_cncCountOutputType
     */
    select?: Machine_cncCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Machine_cncCountOutputType without action
   */
  export type Machine_cncCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }

  /**
   * Machine_cncCountOutputType without action
   */
  export type Machine_cncCountOutputTypeCountWorkOvernightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workOvernightWhereInput
  }


  /**
   * Count Type WorkOvernightCountOutputType
   */

  export type WorkOvernightCountOutputType = {
    stages: number
    files: number
  }

  export type WorkOvernightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | WorkOvernightCountOutputTypeCountStagesArgs
    files?: boolean | WorkOvernightCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * WorkOvernightCountOutputType without action
   */
  export type WorkOvernightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOvernightCountOutputType
     */
    select?: WorkOvernightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkOvernightCountOutputType without action
   */
  export type WorkOvernightCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workStageWhereInput
  }

  /**
   * WorkOvernightCountOutputType without action
   */
  export type WorkOvernightCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Count Type WorkStageCountOutputType
   */

  export type WorkStageCountOutputType = {
    files: number
  }

  export type WorkStageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | WorkStageCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * WorkStageCountOutputType without action
   */
  export type WorkStageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkStageCountOutputType
     */
    select?: WorkStageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkStageCountOutputType without action
   */
  export type WorkStageCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Count Type LearningCountOutputType
   */

  export type LearningCountOutputType = {
    content: number
  }

  export type LearningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | LearningCountOutputTypeCountContentArgs
  }

  // Custom InputTypes
  /**
   * LearningCountOutputType without action
   */
  export type LearningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningCountOutputType
     */
    select?: LearningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LearningCountOutputType without action
   */
  export type LearningCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentLearningWhereInput
  }


  /**
   * Count Type ContentLearningCountOutputType
   */

  export type ContentLearningCountOutputType = {
    files: number
  }

  export type ContentLearningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ContentLearningCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * ContentLearningCountOutputType without action
   */
  export type ContentLearningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearningCountOutputType
     */
    select?: ContentLearningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentLearningCountOutputType without action
   */
  export type ContentLearningCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    picture: string | null
    role: $Enums.UserRole | null
    password: string | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    authMethod: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    picture: string | null
    role: $Enums.UserRole | null
    password: string | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    authMethod: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    picture: number
    role: number
    password: number
    isVerified: number
    isTwoFactorEnabled: number
    authMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    picture?: true
    role?: true
    password?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    authMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    picture?: true
    role?: true
    password?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    authMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    picture?: true
    role?: true
    password?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    authMethod?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    picture: string | null
    role: $Enums.UserRole
    password: string
    isVerified: boolean
    isTwoFactorEnabled: boolean
    authMethod: $Enums.AuthMethod
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "picture" | "role" | "password" | "isVerified" | "isTwoFactorEnabled" | "authMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      picture: string | null
      role: $Enums.UserRole
      password: string
      isVerified: boolean
      isTwoFactorEnabled: boolean
      authMethod: $Enums.AuthMethod
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly authMethod: FieldRef<"User", 'AuthMethod'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    expiresAt: number | null
    userId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    expiresAt: number | null
    userId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    provider: string | null
    providerAccountId: string | null
    type: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    provider: string | null
    providerAccountId: string | null
    type: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    provider: number
    providerAccountId: number
    type: number
    refreshToken: number
    accessToken: number
    expiresAt: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    expiresAt?: true
    userId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    expiresAt?: true
    userId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    type?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    type?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    type?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    provider: string
    providerAccountId: string
    type: string
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    type?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    type?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    type?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    type?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerAccountId" | "type" | "refreshToken" | "accessToken" | "expiresAt" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provider: string
      providerAccountId: string
      type: string
      refreshToken: string | null
      accessToken: string | null
      expiresAt: number | null
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Tokken
   */

  export type AggregateTokken = {
    _count: TokkenCountAggregateOutputType | null
    _avg: TokkenAvgAggregateOutputType | null
    _sum: TokkenSumAggregateOutputType | null
    _min: TokkenMinAggregateOutputType | null
    _max: TokkenMaxAggregateOutputType | null
  }

  export type TokkenAvgAggregateOutputType = {
    id: number | null
  }

  export type TokkenSumAggregateOutputType = {
    id: number | null
  }

  export type TokkenMinAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    type: $Enums.TokkenType | null
    expiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokkenMaxAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    type: $Enums.TokkenType | null
    expiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokkenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    type: number
    expiresIn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokkenAvgAggregateInputType = {
    id?: true
  }

  export type TokkenSumAggregateInputType = {
    id?: true
  }

  export type TokkenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokkenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokkenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokkenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokken to aggregate.
     */
    where?: TokkenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokkens to fetch.
     */
    orderBy?: TokkenOrderByWithRelationInput | TokkenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokkenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokkens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokkens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokkens
    **/
    _count?: true | TokkenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokkenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokkenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokkenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokkenMaxAggregateInputType
  }

  export type GetTokkenAggregateType<T extends TokkenAggregateArgs> = {
        [P in keyof T & keyof AggregateTokken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokken[P]>
      : GetScalarType<T[P], AggregateTokken[P]>
  }




  export type TokkenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokkenWhereInput
    orderBy?: TokkenOrderByWithAggregationInput | TokkenOrderByWithAggregationInput[]
    by: TokkenScalarFieldEnum[] | TokkenScalarFieldEnum
    having?: TokkenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokkenCountAggregateInputType | true
    _avg?: TokkenAvgAggregateInputType
    _sum?: TokkenSumAggregateInputType
    _min?: TokkenMinAggregateInputType
    _max?: TokkenMaxAggregateInputType
  }

  export type TokkenGroupByOutputType = {
    id: number
    email: string
    token: string
    type: $Enums.TokkenType
    expiresIn: Date
    createdAt: Date
    updatedAt: Date
    _count: TokkenCountAggregateOutputType | null
    _avg: TokkenAvgAggregateOutputType | null
    _sum: TokkenSumAggregateOutputType | null
    _min: TokkenMinAggregateOutputType | null
    _max: TokkenMaxAggregateOutputType | null
  }

  type GetTokkenGroupByPayload<T extends TokkenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokkenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokkenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokkenGroupByOutputType[P]>
            : GetScalarType<T[P], TokkenGroupByOutputType[P]>
        }
      >
    >


  export type TokkenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tokken"]>

  export type TokkenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tokken"]>

  export type TokkenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tokken"]>

  export type TokkenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokkenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "type" | "expiresIn" | "createdAt" | "updatedAt", ExtArgs["result"]["tokken"]>

  export type $TokkenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      token: string
      type: $Enums.TokkenType
      expiresIn: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tokken"]>
    composites: {}
  }

  type TokkenGetPayload<S extends boolean | null | undefined | TokkenDefaultArgs> = $Result.GetResult<Prisma.$TokkenPayload, S>

  type TokkenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokkenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokkenCountAggregateInputType | true
    }

  export interface TokkenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokken'], meta: { name: 'Tokken' } }
    /**
     * Find zero or one Tokken that matches the filter.
     * @param {TokkenFindUniqueArgs} args - Arguments to find a Tokken
     * @example
     * // Get one Tokken
     * const tokken = await prisma.tokken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokkenFindUniqueArgs>(args: SelectSubset<T, TokkenFindUniqueArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokkenFindUniqueOrThrowArgs} args - Arguments to find a Tokken
     * @example
     * // Get one Tokken
     * const tokken = await prisma.tokken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokkenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokkenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokkenFindFirstArgs} args - Arguments to find a Tokken
     * @example
     * // Get one Tokken
     * const tokken = await prisma.tokken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokkenFindFirstArgs>(args?: SelectSubset<T, TokkenFindFirstArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokkenFindFirstOrThrowArgs} args - Arguments to find a Tokken
     * @example
     * // Get one Tokken
     * const tokken = await prisma.tokken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokkenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokkenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokkens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokkenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokkens
     * const tokkens = await prisma.tokken.findMany()
     * 
     * // Get first 10 Tokkens
     * const tokkens = await prisma.tokken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokkenWithIdOnly = await prisma.tokken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokkenFindManyArgs>(args?: SelectSubset<T, TokkenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokken.
     * @param {TokkenCreateArgs} args - Arguments to create a Tokken.
     * @example
     * // Create one Tokken
     * const Tokken = await prisma.tokken.create({
     *   data: {
     *     // ... data to create a Tokken
     *   }
     * })
     * 
     */
    create<T extends TokkenCreateArgs>(args: SelectSubset<T, TokkenCreateArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokkens.
     * @param {TokkenCreateManyArgs} args - Arguments to create many Tokkens.
     * @example
     * // Create many Tokkens
     * const tokken = await prisma.tokken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokkenCreateManyArgs>(args?: SelectSubset<T, TokkenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokkens and returns the data saved in the database.
     * @param {TokkenCreateManyAndReturnArgs} args - Arguments to create many Tokkens.
     * @example
     * // Create many Tokkens
     * const tokken = await prisma.tokken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokkens and only return the `id`
     * const tokkenWithIdOnly = await prisma.tokken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokkenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokkenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokken.
     * @param {TokkenDeleteArgs} args - Arguments to delete one Tokken.
     * @example
     * // Delete one Tokken
     * const Tokken = await prisma.tokken.delete({
     *   where: {
     *     // ... filter to delete one Tokken
     *   }
     * })
     * 
     */
    delete<T extends TokkenDeleteArgs>(args: SelectSubset<T, TokkenDeleteArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokken.
     * @param {TokkenUpdateArgs} args - Arguments to update one Tokken.
     * @example
     * // Update one Tokken
     * const tokken = await prisma.tokken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokkenUpdateArgs>(args: SelectSubset<T, TokkenUpdateArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokkens.
     * @param {TokkenDeleteManyArgs} args - Arguments to filter Tokkens to delete.
     * @example
     * // Delete a few Tokkens
     * const { count } = await prisma.tokken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokkenDeleteManyArgs>(args?: SelectSubset<T, TokkenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokkens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokkenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokkens
     * const tokken = await prisma.tokken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokkenUpdateManyArgs>(args: SelectSubset<T, TokkenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokkens and returns the data updated in the database.
     * @param {TokkenUpdateManyAndReturnArgs} args - Arguments to update many Tokkens.
     * @example
     * // Update many Tokkens
     * const tokken = await prisma.tokken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokkens and only return the `id`
     * const tokkenWithIdOnly = await prisma.tokken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokkenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokkenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokken.
     * @param {TokkenUpsertArgs} args - Arguments to update or create a Tokken.
     * @example
     * // Update or create a Tokken
     * const tokken = await prisma.tokken.upsert({
     *   create: {
     *     // ... data to create a Tokken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokken we want to update
     *   }
     * })
     */
    upsert<T extends TokkenUpsertArgs>(args: SelectSubset<T, TokkenUpsertArgs<ExtArgs>>): Prisma__TokkenClient<$Result.GetResult<Prisma.$TokkenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokkens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokkenCountArgs} args - Arguments to filter Tokkens to count.
     * @example
     * // Count the number of Tokkens
     * const count = await prisma.tokken.count({
     *   where: {
     *     // ... the filter for the Tokkens we want to count
     *   }
     * })
    **/
    count<T extends TokkenCountArgs>(
      args?: Subset<T, TokkenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokkenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokkenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokkenAggregateArgs>(args: Subset<T, TokkenAggregateArgs>): Prisma.PrismaPromise<GetTokkenAggregateType<T>>

    /**
     * Group by Tokken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokkenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokkenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokkenGroupByArgs['orderBy'] }
        : { orderBy?: TokkenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokkenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokkenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokken model
   */
  readonly fields: TokkenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokkenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokken model
   */
  interface TokkenFieldRefs {
    readonly id: FieldRef<"Tokken", 'Int'>
    readonly email: FieldRef<"Tokken", 'String'>
    readonly token: FieldRef<"Tokken", 'String'>
    readonly type: FieldRef<"Tokken", 'TokkenType'>
    readonly expiresIn: FieldRef<"Tokken", 'DateTime'>
    readonly createdAt: FieldRef<"Tokken", 'DateTime'>
    readonly updatedAt: FieldRef<"Tokken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tokken findUnique
   */
  export type TokkenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * Filter, which Tokken to fetch.
     */
    where: TokkenWhereUniqueInput
  }

  /**
   * Tokken findUniqueOrThrow
   */
  export type TokkenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * Filter, which Tokken to fetch.
     */
    where: TokkenWhereUniqueInput
  }

  /**
   * Tokken findFirst
   */
  export type TokkenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * Filter, which Tokken to fetch.
     */
    where?: TokkenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokkens to fetch.
     */
    orderBy?: TokkenOrderByWithRelationInput | TokkenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokkens.
     */
    cursor?: TokkenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokkens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokkens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokkens.
     */
    distinct?: TokkenScalarFieldEnum | TokkenScalarFieldEnum[]
  }

  /**
   * Tokken findFirstOrThrow
   */
  export type TokkenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * Filter, which Tokken to fetch.
     */
    where?: TokkenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokkens to fetch.
     */
    orderBy?: TokkenOrderByWithRelationInput | TokkenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokkens.
     */
    cursor?: TokkenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokkens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokkens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokkens.
     */
    distinct?: TokkenScalarFieldEnum | TokkenScalarFieldEnum[]
  }

  /**
   * Tokken findMany
   */
  export type TokkenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * Filter, which Tokkens to fetch.
     */
    where?: TokkenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokkens to fetch.
     */
    orderBy?: TokkenOrderByWithRelationInput | TokkenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokkens.
     */
    cursor?: TokkenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokkens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokkens.
     */
    skip?: number
    distinct?: TokkenScalarFieldEnum | TokkenScalarFieldEnum[]
  }

  /**
   * Tokken create
   */
  export type TokkenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * The data needed to create a Tokken.
     */
    data: XOR<TokkenCreateInput, TokkenUncheckedCreateInput>
  }

  /**
   * Tokken createMany
   */
  export type TokkenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokkens.
     */
    data: TokkenCreateManyInput | TokkenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokken createManyAndReturn
   */
  export type TokkenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokkens.
     */
    data: TokkenCreateManyInput | TokkenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokken update
   */
  export type TokkenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * The data needed to update a Tokken.
     */
    data: XOR<TokkenUpdateInput, TokkenUncheckedUpdateInput>
    /**
     * Choose, which Tokken to update.
     */
    where: TokkenWhereUniqueInput
  }

  /**
   * Tokken updateMany
   */
  export type TokkenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokkens.
     */
    data: XOR<TokkenUpdateManyMutationInput, TokkenUncheckedUpdateManyInput>
    /**
     * Filter which Tokkens to update
     */
    where?: TokkenWhereInput
    /**
     * Limit how many Tokkens to update.
     */
    limit?: number
  }

  /**
   * Tokken updateManyAndReturn
   */
  export type TokkenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * The data used to update Tokkens.
     */
    data: XOR<TokkenUpdateManyMutationInput, TokkenUncheckedUpdateManyInput>
    /**
     * Filter which Tokkens to update
     */
    where?: TokkenWhereInput
    /**
     * Limit how many Tokkens to update.
     */
    limit?: number
  }

  /**
   * Tokken upsert
   */
  export type TokkenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * The filter to search for the Tokken to update in case it exists.
     */
    where: TokkenWhereUniqueInput
    /**
     * In case the Tokken found by the `where` argument doesn't exist, create a new Tokken with this data.
     */
    create: XOR<TokkenCreateInput, TokkenUncheckedCreateInput>
    /**
     * In case the Tokken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokkenUpdateInput, TokkenUncheckedUpdateInput>
  }

  /**
   * Tokken delete
   */
  export type TokkenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
    /**
     * Filter which Tokken to delete.
     */
    where: TokkenWhereUniqueInput
  }

  /**
   * Tokken deleteMany
   */
  export type TokkenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokkens to delete
     */
    where?: TokkenWhereInput
    /**
     * Limit how many Tokkens to delete.
     */
    limit?: number
  }

  /**
   * Tokken without action
   */
  export type TokkenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokken
     */
    select?: TokkenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokken
     */
    omit?: TokkenOmit<ExtArgs> | null
  }


  /**
   * Model tools
   */

  export type AggregateTools = {
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  export type ToolsAvgAggregateOutputType = {
    id: number | null
  }

  export type ToolsSumAggregateOutputType = {
    id: number | null
  }

  export type ToolsMinAggregateOutputType = {
    id: number | null
    name: string | null
    tool_id: string | null
    description: string | null
    size: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tool_id: string | null
    description: string | null
    size: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolsCountAggregateOutputType = {
    id: number
    name: number
    tool_id: number
    description: number
    size: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ToolsAvgAggregateInputType = {
    id?: true
  }

  export type ToolsSumAggregateInputType = {
    id?: true
  }

  export type ToolsMinAggregateInputType = {
    id?: true
    name?: true
    tool_id?: true
    description?: true
    size?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolsMaxAggregateInputType = {
    id?: true
    name?: true
    tool_id?: true
    description?: true
    size?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolsCountAggregateInputType = {
    id?: true
    name?: true
    tool_id?: true
    description?: true
    size?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ToolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to aggregate.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tools
    **/
    _count?: true | ToolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolsMaxAggregateInputType
  }

  export type GetToolsAggregateType<T extends ToolsAggregateArgs> = {
        [P in keyof T & keyof AggregateTools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTools[P]>
      : GetScalarType<T[P], AggregateTools[P]>
  }




  export type toolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolsWhereInput
    orderBy?: toolsOrderByWithAggregationInput | toolsOrderByWithAggregationInput[]
    by: ToolsScalarFieldEnum[] | ToolsScalarFieldEnum
    having?: toolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolsCountAggregateInputType | true
    _avg?: ToolsAvgAggregateInputType
    _sum?: ToolsSumAggregateInputType
    _min?: ToolsMinAggregateInputType
    _max?: ToolsMaxAggregateInputType
  }

  export type ToolsGroupByOutputType = {
    id: number
    name: string
    tool_id: string
    description: string | null
    size: string | null
    type: string | null
    createdAt: Date
    updatedAt: Date
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  type GetToolsGroupByPayload<T extends toolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolsGroupByOutputType[P]>
            : GetScalarType<T[P], ToolsGroupByOutputType[P]>
        }
      >
    >


  export type toolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tool_id?: boolean
    description?: boolean
    size?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | tools$filesArgs<ExtArgs>
    _count?: boolean | ToolsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tools"]>

  export type toolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tool_id?: boolean
    description?: boolean
    size?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tools"]>

  export type toolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tool_id?: boolean
    description?: boolean
    size?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tools"]>

  export type toolsSelectScalar = {
    id?: boolean
    name?: boolean
    tool_id?: boolean
    description?: boolean
    size?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type toolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tool_id" | "description" | "size" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["tools"]>
  export type toolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | tools$filesArgs<ExtArgs>
    _count?: boolean | ToolsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type toolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type toolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $toolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tools"
    objects: {
      files: Prisma.$FileUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tool_id: string
      description: string | null
      size: string | null
      type: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tools"]>
    composites: {}
  }

  type toolsGetPayload<S extends boolean | null | undefined | toolsDefaultArgs> = $Result.GetResult<Prisma.$toolsPayload, S>

  type toolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<toolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolsCountAggregateInputType | true
    }

  export interface toolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tools'], meta: { name: 'tools' } }
    /**
     * Find zero or one Tools that matches the filter.
     * @param {toolsFindUniqueArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends toolsFindUniqueArgs>(args: SelectSubset<T, toolsFindUniqueArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {toolsFindUniqueOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends toolsFindUniqueOrThrowArgs>(args: SelectSubset<T, toolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsFindFirstArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends toolsFindFirstArgs>(args?: SelectSubset<T, toolsFindFirstArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsFindFirstOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends toolsFindFirstOrThrowArgs>(args?: SelectSubset<T, toolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tools.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolsWithIdOnly = await prisma.tools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends toolsFindManyArgs>(args?: SelectSubset<T, toolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tools.
     * @param {toolsCreateArgs} args - Arguments to create a Tools.
     * @example
     * // Create one Tools
     * const Tools = await prisma.tools.create({
     *   data: {
     *     // ... data to create a Tools
     *   }
     * })
     * 
     */
    create<T extends toolsCreateArgs>(args: SelectSubset<T, toolsCreateArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tools.
     * @param {toolsCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends toolsCreateManyArgs>(args?: SelectSubset<T, toolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tools and returns the data saved in the database.
     * @param {toolsCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tools = await prisma.tools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends toolsCreateManyAndReturnArgs>(args?: SelectSubset<T, toolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tools.
     * @param {toolsDeleteArgs} args - Arguments to delete one Tools.
     * @example
     * // Delete one Tools
     * const Tools = await prisma.tools.delete({
     *   where: {
     *     // ... filter to delete one Tools
     *   }
     * })
     * 
     */
    delete<T extends toolsDeleteArgs>(args: SelectSubset<T, toolsDeleteArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tools.
     * @param {toolsUpdateArgs} args - Arguments to update one Tools.
     * @example
     * // Update one Tools
     * const tools = await prisma.tools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends toolsUpdateArgs>(args: SelectSubset<T, toolsUpdateArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tools.
     * @param {toolsDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends toolsDeleteManyArgs>(args?: SelectSubset<T, toolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends toolsUpdateManyArgs>(args: SelectSubset<T, toolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {toolsUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tools and only return the `id`
     * const toolsWithIdOnly = await prisma.tools.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends toolsUpdateManyAndReturnArgs>(args: SelectSubset<T, toolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tools.
     * @param {toolsUpsertArgs} args - Arguments to update or create a Tools.
     * @example
     * // Update or create a Tools
     * const tools = await prisma.tools.upsert({
     *   create: {
     *     // ... data to create a Tools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tools we want to update
     *   }
     * })
     */
    upsert<T extends toolsUpsertArgs>(args: SelectSubset<T, toolsUpsertArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tools.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends toolsCountArgs>(
      args?: Subset<T, toolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToolsAggregateArgs>(args: Subset<T, ToolsAggregateArgs>): Prisma.PrismaPromise<GetToolsAggregateType<T>>

    /**
     * Group by Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends toolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: toolsGroupByArgs['orderBy'] }
        : { orderBy?: toolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, toolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tools model
   */
  readonly fields: toolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__toolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends tools$filesArgs<ExtArgs> = {}>(args?: Subset<T, tools$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tools model
   */
  interface toolsFieldRefs {
    readonly id: FieldRef<"tools", 'Int'>
    readonly name: FieldRef<"tools", 'String'>
    readonly tool_id: FieldRef<"tools", 'String'>
    readonly description: FieldRef<"tools", 'String'>
    readonly size: FieldRef<"tools", 'String'>
    readonly type: FieldRef<"tools", 'String'>
    readonly createdAt: FieldRef<"tools", 'DateTime'>
    readonly updatedAt: FieldRef<"tools", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tools findUnique
   */
  export type toolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools findUniqueOrThrow
   */
  export type toolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools findFirst
   */
  export type toolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tools.
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * tools findFirstOrThrow
   */
  export type toolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tools.
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * tools findMany
   */
  export type toolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter, which tools to fetch.
     */
    where?: toolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tools to fetch.
     */
    orderBy?: toolsOrderByWithRelationInput | toolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tools.
     */
    cursor?: toolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tools.
     */
    skip?: number
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }

  /**
   * tools create
   */
  export type toolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * The data needed to create a tools.
     */
    data: XOR<toolsCreateInput, toolsUncheckedCreateInput>
  }

  /**
   * tools createMany
   */
  export type toolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tools.
     */
    data: toolsCreateManyInput | toolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tools createManyAndReturn
   */
  export type toolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * The data used to create many tools.
     */
    data: toolsCreateManyInput | toolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tools update
   */
  export type toolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * The data needed to update a tools.
     */
    data: XOR<toolsUpdateInput, toolsUncheckedUpdateInput>
    /**
     * Choose, which tools to update.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools updateMany
   */
  export type toolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tools.
     */
    data: XOR<toolsUpdateManyMutationInput, toolsUncheckedUpdateManyInput>
    /**
     * Filter which tools to update
     */
    where?: toolsWhereInput
    /**
     * Limit how many tools to update.
     */
    limit?: number
  }

  /**
   * tools updateManyAndReturn
   */
  export type toolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * The data used to update tools.
     */
    data: XOR<toolsUpdateManyMutationInput, toolsUncheckedUpdateManyInput>
    /**
     * Filter which tools to update
     */
    where?: toolsWhereInput
    /**
     * Limit how many tools to update.
     */
    limit?: number
  }

  /**
   * tools upsert
   */
  export type toolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * The filter to search for the tools to update in case it exists.
     */
    where: toolsWhereUniqueInput
    /**
     * In case the tools found by the `where` argument doesn't exist, create a new tools with this data.
     */
    create: XOR<toolsCreateInput, toolsUncheckedCreateInput>
    /**
     * In case the tools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toolsUpdateInput, toolsUncheckedUpdateInput>
  }

  /**
   * tools delete
   */
  export type toolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    /**
     * Filter which tools to delete.
     */
    where: toolsWhereUniqueInput
  }

  /**
   * tools deleteMany
   */
  export type toolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to delete
     */
    where?: toolsWhereInput
    /**
     * Limit how many tools to delete.
     */
    limit?: number
  }

  /**
   * tools.files
   */
  export type tools$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * tools without action
   */
  export type toolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
  }


  /**
   * Model machine_cnc
   */

  export type AggregateMachine_cnc = {
    _count: Machine_cncCountAggregateOutputType | null
    _avg: Machine_cncAvgAggregateOutputType | null
    _sum: Machine_cncSumAggregateOutputType | null
    _min: Machine_cncMinAggregateOutputType | null
    _max: Machine_cncMaxAggregateOutputType | null
  }

  export type Machine_cncAvgAggregateOutputType = {
    id: number | null
  }

  export type Machine_cncSumAggregateOutputType = {
    id: number | null
  }

  export type Machine_cncMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Machine_cncMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Machine_cncCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Machine_cncAvgAggregateInputType = {
    id?: true
  }

  export type Machine_cncSumAggregateInputType = {
    id?: true
  }

  export type Machine_cncMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Machine_cncMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Machine_cncCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Machine_cncAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which machine_cnc to aggregate.
     */
    where?: machine_cncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machine_cncs to fetch.
     */
    orderBy?: machine_cncOrderByWithRelationInput | machine_cncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: machine_cncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machine_cncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machine_cncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned machine_cncs
    **/
    _count?: true | Machine_cncCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Machine_cncAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Machine_cncSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Machine_cncMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Machine_cncMaxAggregateInputType
  }

  export type GetMachine_cncAggregateType<T extends Machine_cncAggregateArgs> = {
        [P in keyof T & keyof AggregateMachine_cnc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachine_cnc[P]>
      : GetScalarType<T[P], AggregateMachine_cnc[P]>
  }




  export type machine_cncGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: machine_cncWhereInput
    orderBy?: machine_cncOrderByWithAggregationInput | machine_cncOrderByWithAggregationInput[]
    by: Machine_cncScalarFieldEnum[] | Machine_cncScalarFieldEnum
    having?: machine_cncScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Machine_cncCountAggregateInputType | true
    _avg?: Machine_cncAvgAggregateInputType
    _sum?: Machine_cncSumAggregateInputType
    _min?: Machine_cncMinAggregateInputType
    _max?: Machine_cncMaxAggregateInputType
  }

  export type Machine_cncGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: Machine_cncCountAggregateOutputType | null
    _avg: Machine_cncAvgAggregateOutputType | null
    _sum: Machine_cncSumAggregateOutputType | null
    _min: Machine_cncMinAggregateOutputType | null
    _max: Machine_cncMaxAggregateOutputType | null
  }

  type GetMachine_cncGroupByPayload<T extends machine_cncGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Machine_cncGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Machine_cncGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Machine_cncGroupByOutputType[P]>
            : GetScalarType<T[P], Machine_cncGroupByOutputType[P]>
        }
      >
    >


  export type machine_cncSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | machine_cnc$filesArgs<ExtArgs>
    workOvernights?: boolean | machine_cnc$workOvernightsArgs<ExtArgs>
    _count?: boolean | Machine_cncCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machine_cnc"]>

  export type machine_cncSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["machine_cnc"]>

  export type machine_cncSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["machine_cnc"]>

  export type machine_cncSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type machine_cncOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["machine_cnc"]>
  export type machine_cncInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | machine_cnc$filesArgs<ExtArgs>
    workOvernights?: boolean | machine_cnc$workOvernightsArgs<ExtArgs>
    _count?: boolean | Machine_cncCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type machine_cncIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type machine_cncIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $machine_cncPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "machine_cnc"
    objects: {
      files: Prisma.$FileUploadPayload<ExtArgs>[]
      workOvernights: Prisma.$workOvernightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["machine_cnc"]>
    composites: {}
  }

  type machine_cncGetPayload<S extends boolean | null | undefined | machine_cncDefaultArgs> = $Result.GetResult<Prisma.$machine_cncPayload, S>

  type machine_cncCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<machine_cncFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Machine_cncCountAggregateInputType | true
    }

  export interface machine_cncDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['machine_cnc'], meta: { name: 'machine_cnc' } }
    /**
     * Find zero or one Machine_cnc that matches the filter.
     * @param {machine_cncFindUniqueArgs} args - Arguments to find a Machine_cnc
     * @example
     * // Get one Machine_cnc
     * const machine_cnc = await prisma.machine_cnc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends machine_cncFindUniqueArgs>(args: SelectSubset<T, machine_cncFindUniqueArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Machine_cnc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {machine_cncFindUniqueOrThrowArgs} args - Arguments to find a Machine_cnc
     * @example
     * // Get one Machine_cnc
     * const machine_cnc = await prisma.machine_cnc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends machine_cncFindUniqueOrThrowArgs>(args: SelectSubset<T, machine_cncFindUniqueOrThrowArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machine_cnc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machine_cncFindFirstArgs} args - Arguments to find a Machine_cnc
     * @example
     * // Get one Machine_cnc
     * const machine_cnc = await prisma.machine_cnc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends machine_cncFindFirstArgs>(args?: SelectSubset<T, machine_cncFindFirstArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machine_cnc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machine_cncFindFirstOrThrowArgs} args - Arguments to find a Machine_cnc
     * @example
     * // Get one Machine_cnc
     * const machine_cnc = await prisma.machine_cnc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends machine_cncFindFirstOrThrowArgs>(args?: SelectSubset<T, machine_cncFindFirstOrThrowArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Machine_cncs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machine_cncFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Machine_cncs
     * const machine_cncs = await prisma.machine_cnc.findMany()
     * 
     * // Get first 10 Machine_cncs
     * const machine_cncs = await prisma.machine_cnc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machine_cncWithIdOnly = await prisma.machine_cnc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends machine_cncFindManyArgs>(args?: SelectSubset<T, machine_cncFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Machine_cnc.
     * @param {machine_cncCreateArgs} args - Arguments to create a Machine_cnc.
     * @example
     * // Create one Machine_cnc
     * const Machine_cnc = await prisma.machine_cnc.create({
     *   data: {
     *     // ... data to create a Machine_cnc
     *   }
     * })
     * 
     */
    create<T extends machine_cncCreateArgs>(args: SelectSubset<T, machine_cncCreateArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Machine_cncs.
     * @param {machine_cncCreateManyArgs} args - Arguments to create many Machine_cncs.
     * @example
     * // Create many Machine_cncs
     * const machine_cnc = await prisma.machine_cnc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends machine_cncCreateManyArgs>(args?: SelectSubset<T, machine_cncCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Machine_cncs and returns the data saved in the database.
     * @param {machine_cncCreateManyAndReturnArgs} args - Arguments to create many Machine_cncs.
     * @example
     * // Create many Machine_cncs
     * const machine_cnc = await prisma.machine_cnc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Machine_cncs and only return the `id`
     * const machine_cncWithIdOnly = await prisma.machine_cnc.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends machine_cncCreateManyAndReturnArgs>(args?: SelectSubset<T, machine_cncCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Machine_cnc.
     * @param {machine_cncDeleteArgs} args - Arguments to delete one Machine_cnc.
     * @example
     * // Delete one Machine_cnc
     * const Machine_cnc = await prisma.machine_cnc.delete({
     *   where: {
     *     // ... filter to delete one Machine_cnc
     *   }
     * })
     * 
     */
    delete<T extends machine_cncDeleteArgs>(args: SelectSubset<T, machine_cncDeleteArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Machine_cnc.
     * @param {machine_cncUpdateArgs} args - Arguments to update one Machine_cnc.
     * @example
     * // Update one Machine_cnc
     * const machine_cnc = await prisma.machine_cnc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends machine_cncUpdateArgs>(args: SelectSubset<T, machine_cncUpdateArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Machine_cncs.
     * @param {machine_cncDeleteManyArgs} args - Arguments to filter Machine_cncs to delete.
     * @example
     * // Delete a few Machine_cncs
     * const { count } = await prisma.machine_cnc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends machine_cncDeleteManyArgs>(args?: SelectSubset<T, machine_cncDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machine_cncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machine_cncUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Machine_cncs
     * const machine_cnc = await prisma.machine_cnc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends machine_cncUpdateManyArgs>(args: SelectSubset<T, machine_cncUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machine_cncs and returns the data updated in the database.
     * @param {machine_cncUpdateManyAndReturnArgs} args - Arguments to update many Machine_cncs.
     * @example
     * // Update many Machine_cncs
     * const machine_cnc = await prisma.machine_cnc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Machine_cncs and only return the `id`
     * const machine_cncWithIdOnly = await prisma.machine_cnc.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends machine_cncUpdateManyAndReturnArgs>(args: SelectSubset<T, machine_cncUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Machine_cnc.
     * @param {machine_cncUpsertArgs} args - Arguments to update or create a Machine_cnc.
     * @example
     * // Update or create a Machine_cnc
     * const machine_cnc = await prisma.machine_cnc.upsert({
     *   create: {
     *     // ... data to create a Machine_cnc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Machine_cnc we want to update
     *   }
     * })
     */
    upsert<T extends machine_cncUpsertArgs>(args: SelectSubset<T, machine_cncUpsertArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Machine_cncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machine_cncCountArgs} args - Arguments to filter Machine_cncs to count.
     * @example
     * // Count the number of Machine_cncs
     * const count = await prisma.machine_cnc.count({
     *   where: {
     *     // ... the filter for the Machine_cncs we want to count
     *   }
     * })
    **/
    count<T extends machine_cncCountArgs>(
      args?: Subset<T, machine_cncCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Machine_cncCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Machine_cnc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Machine_cncAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Machine_cncAggregateArgs>(args: Subset<T, Machine_cncAggregateArgs>): Prisma.PrismaPromise<GetMachine_cncAggregateType<T>>

    /**
     * Group by Machine_cnc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machine_cncGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends machine_cncGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: machine_cncGroupByArgs['orderBy'] }
        : { orderBy?: machine_cncGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, machine_cncGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachine_cncGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the machine_cnc model
   */
  readonly fields: machine_cncFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for machine_cnc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__machine_cncClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends machine_cnc$filesArgs<ExtArgs> = {}>(args?: Subset<T, machine_cnc$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workOvernights<T extends machine_cnc$workOvernightsArgs<ExtArgs> = {}>(args?: Subset<T, machine_cnc$workOvernightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the machine_cnc model
   */
  interface machine_cncFieldRefs {
    readonly id: FieldRef<"machine_cnc", 'Int'>
    readonly name: FieldRef<"machine_cnc", 'String'>
    readonly description: FieldRef<"machine_cnc", 'String'>
    readonly createdAt: FieldRef<"machine_cnc", 'DateTime'>
    readonly updatedAt: FieldRef<"machine_cnc", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * machine_cnc findUnique
   */
  export type machine_cncFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * Filter, which machine_cnc to fetch.
     */
    where: machine_cncWhereUniqueInput
  }

  /**
   * machine_cnc findUniqueOrThrow
   */
  export type machine_cncFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * Filter, which machine_cnc to fetch.
     */
    where: machine_cncWhereUniqueInput
  }

  /**
   * machine_cnc findFirst
   */
  export type machine_cncFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * Filter, which machine_cnc to fetch.
     */
    where?: machine_cncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machine_cncs to fetch.
     */
    orderBy?: machine_cncOrderByWithRelationInput | machine_cncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for machine_cncs.
     */
    cursor?: machine_cncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machine_cncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machine_cncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of machine_cncs.
     */
    distinct?: Machine_cncScalarFieldEnum | Machine_cncScalarFieldEnum[]
  }

  /**
   * machine_cnc findFirstOrThrow
   */
  export type machine_cncFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * Filter, which machine_cnc to fetch.
     */
    where?: machine_cncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machine_cncs to fetch.
     */
    orderBy?: machine_cncOrderByWithRelationInput | machine_cncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for machine_cncs.
     */
    cursor?: machine_cncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machine_cncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machine_cncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of machine_cncs.
     */
    distinct?: Machine_cncScalarFieldEnum | Machine_cncScalarFieldEnum[]
  }

  /**
   * machine_cnc findMany
   */
  export type machine_cncFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * Filter, which machine_cncs to fetch.
     */
    where?: machine_cncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machine_cncs to fetch.
     */
    orderBy?: machine_cncOrderByWithRelationInput | machine_cncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing machine_cncs.
     */
    cursor?: machine_cncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machine_cncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machine_cncs.
     */
    skip?: number
    distinct?: Machine_cncScalarFieldEnum | Machine_cncScalarFieldEnum[]
  }

  /**
   * machine_cnc create
   */
  export type machine_cncCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * The data needed to create a machine_cnc.
     */
    data: XOR<machine_cncCreateInput, machine_cncUncheckedCreateInput>
  }

  /**
   * machine_cnc createMany
   */
  export type machine_cncCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many machine_cncs.
     */
    data: machine_cncCreateManyInput | machine_cncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * machine_cnc createManyAndReturn
   */
  export type machine_cncCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * The data used to create many machine_cncs.
     */
    data: machine_cncCreateManyInput | machine_cncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * machine_cnc update
   */
  export type machine_cncUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * The data needed to update a machine_cnc.
     */
    data: XOR<machine_cncUpdateInput, machine_cncUncheckedUpdateInput>
    /**
     * Choose, which machine_cnc to update.
     */
    where: machine_cncWhereUniqueInput
  }

  /**
   * machine_cnc updateMany
   */
  export type machine_cncUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update machine_cncs.
     */
    data: XOR<machine_cncUpdateManyMutationInput, machine_cncUncheckedUpdateManyInput>
    /**
     * Filter which machine_cncs to update
     */
    where?: machine_cncWhereInput
    /**
     * Limit how many machine_cncs to update.
     */
    limit?: number
  }

  /**
   * machine_cnc updateManyAndReturn
   */
  export type machine_cncUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * The data used to update machine_cncs.
     */
    data: XOR<machine_cncUpdateManyMutationInput, machine_cncUncheckedUpdateManyInput>
    /**
     * Filter which machine_cncs to update
     */
    where?: machine_cncWhereInput
    /**
     * Limit how many machine_cncs to update.
     */
    limit?: number
  }

  /**
   * machine_cnc upsert
   */
  export type machine_cncUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * The filter to search for the machine_cnc to update in case it exists.
     */
    where: machine_cncWhereUniqueInput
    /**
     * In case the machine_cnc found by the `where` argument doesn't exist, create a new machine_cnc with this data.
     */
    create: XOR<machine_cncCreateInput, machine_cncUncheckedCreateInput>
    /**
     * In case the machine_cnc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<machine_cncUpdateInput, machine_cncUncheckedUpdateInput>
  }

  /**
   * machine_cnc delete
   */
  export type machine_cncDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    /**
     * Filter which machine_cnc to delete.
     */
    where: machine_cncWhereUniqueInput
  }

  /**
   * machine_cnc deleteMany
   */
  export type machine_cncDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which machine_cncs to delete
     */
    where?: machine_cncWhereInput
    /**
     * Limit how many machine_cncs to delete.
     */
    limit?: number
  }

  /**
   * machine_cnc.files
   */
  export type machine_cnc$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * machine_cnc.workOvernights
   */
  export type machine_cnc$workOvernightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    where?: workOvernightWhereInput
    orderBy?: workOvernightOrderByWithRelationInput | workOvernightOrderByWithRelationInput[]
    cursor?: workOvernightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkOvernightScalarFieldEnum | WorkOvernightScalarFieldEnum[]
  }

  /**
   * machine_cnc without action
   */
  export type machine_cncDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
  }


  /**
   * Model workOvernight
   */

  export type AggregateWorkOvernight = {
    _count: WorkOvernightCountAggregateOutputType | null
    _avg: WorkOvernightAvgAggregateOutputType | null
    _sum: WorkOvernightSumAggregateOutputType | null
    _min: WorkOvernightMinAggregateOutputType | null
    _max: WorkOvernightMaxAggregateOutputType | null
  }

  export type WorkOvernightAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    leftToMake: number | null
    machineId: number | null
  }

  export type WorkOvernightSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    leftToMake: number | null
    machineId: number | null
  }

  export type WorkOvernightMinAggregateOutputType = {
    id: number | null
    name: string | null
    rt: string | null
    quantity: number | null
    madeBy: string | null
    leftToMake: number | null
    productionTime: string | null
    isArchived: boolean | null
    archivedAt: Date | null
    machineId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkOvernightMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rt: string | null
    quantity: number | null
    madeBy: string | null
    leftToMake: number | null
    productionTime: string | null
    isArchived: boolean | null
    archivedAt: Date | null
    machineId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkOvernightCountAggregateOutputType = {
    id: number
    name: number
    rt: number
    quantity: number
    madeBy: number
    leftToMake: number
    productionTime: number
    isArchived: number
    archivedAt: number
    machineId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkOvernightAvgAggregateInputType = {
    id?: true
    quantity?: true
    leftToMake?: true
    machineId?: true
  }

  export type WorkOvernightSumAggregateInputType = {
    id?: true
    quantity?: true
    leftToMake?: true
    machineId?: true
  }

  export type WorkOvernightMinAggregateInputType = {
    id?: true
    name?: true
    rt?: true
    quantity?: true
    madeBy?: true
    leftToMake?: true
    productionTime?: true
    isArchived?: true
    archivedAt?: true
    machineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkOvernightMaxAggregateInputType = {
    id?: true
    name?: true
    rt?: true
    quantity?: true
    madeBy?: true
    leftToMake?: true
    productionTime?: true
    isArchived?: true
    archivedAt?: true
    machineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkOvernightCountAggregateInputType = {
    id?: true
    name?: true
    rt?: true
    quantity?: true
    madeBy?: true
    leftToMake?: true
    productionTime?: true
    isArchived?: true
    archivedAt?: true
    machineId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkOvernightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workOvernight to aggregate.
     */
    where?: workOvernightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workOvernights to fetch.
     */
    orderBy?: workOvernightOrderByWithRelationInput | workOvernightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workOvernightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workOvernights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workOvernights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workOvernights
    **/
    _count?: true | WorkOvernightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkOvernightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkOvernightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkOvernightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkOvernightMaxAggregateInputType
  }

  export type GetWorkOvernightAggregateType<T extends WorkOvernightAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkOvernight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkOvernight[P]>
      : GetScalarType<T[P], AggregateWorkOvernight[P]>
  }




  export type workOvernightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workOvernightWhereInput
    orderBy?: workOvernightOrderByWithAggregationInput | workOvernightOrderByWithAggregationInput[]
    by: WorkOvernightScalarFieldEnum[] | WorkOvernightScalarFieldEnum
    having?: workOvernightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkOvernightCountAggregateInputType | true
    _avg?: WorkOvernightAvgAggregateInputType
    _sum?: WorkOvernightSumAggregateInputType
    _min?: WorkOvernightMinAggregateInputType
    _max?: WorkOvernightMaxAggregateInputType
  }

  export type WorkOvernightGroupByOutputType = {
    id: number
    name: string | null
    rt: string
    quantity: number
    madeBy: string | null
    leftToMake: number
    productionTime: string | null
    isArchived: boolean
    archivedAt: Date | null
    machineId: number
    createdAt: Date
    updatedAt: Date
    _count: WorkOvernightCountAggregateOutputType | null
    _avg: WorkOvernightAvgAggregateOutputType | null
    _sum: WorkOvernightSumAggregateOutputType | null
    _min: WorkOvernightMinAggregateOutputType | null
    _max: WorkOvernightMaxAggregateOutputType | null
  }

  type GetWorkOvernightGroupByPayload<T extends workOvernightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkOvernightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkOvernightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkOvernightGroupByOutputType[P]>
            : GetScalarType<T[P], WorkOvernightGroupByOutputType[P]>
        }
      >
    >


  export type workOvernightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rt?: boolean
    quantity?: boolean
    madeBy?: boolean
    leftToMake?: boolean
    productionTime?: boolean
    isArchived?: boolean
    archivedAt?: boolean
    machineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    machine?: boolean | machine_cncDefaultArgs<ExtArgs>
    stages?: boolean | workOvernight$stagesArgs<ExtArgs>
    files?: boolean | workOvernight$filesArgs<ExtArgs>
    _count?: boolean | WorkOvernightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workOvernight"]>

  export type workOvernightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rt?: boolean
    quantity?: boolean
    madeBy?: boolean
    leftToMake?: boolean
    productionTime?: boolean
    isArchived?: boolean
    archivedAt?: boolean
    machineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    machine?: boolean | machine_cncDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workOvernight"]>

  export type workOvernightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rt?: boolean
    quantity?: boolean
    madeBy?: boolean
    leftToMake?: boolean
    productionTime?: boolean
    isArchived?: boolean
    archivedAt?: boolean
    machineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    machine?: boolean | machine_cncDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workOvernight"]>

  export type workOvernightSelectScalar = {
    id?: boolean
    name?: boolean
    rt?: boolean
    quantity?: boolean
    madeBy?: boolean
    leftToMake?: boolean
    productionTime?: boolean
    isArchived?: boolean
    archivedAt?: boolean
    machineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type workOvernightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rt" | "quantity" | "madeBy" | "leftToMake" | "productionTime" | "isArchived" | "archivedAt" | "machineId" | "createdAt" | "updatedAt", ExtArgs["result"]["workOvernight"]>
  export type workOvernightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machine?: boolean | machine_cncDefaultArgs<ExtArgs>
    stages?: boolean | workOvernight$stagesArgs<ExtArgs>
    files?: boolean | workOvernight$filesArgs<ExtArgs>
    _count?: boolean | WorkOvernightCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workOvernightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machine?: boolean | machine_cncDefaultArgs<ExtArgs>
  }
  export type workOvernightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machine?: boolean | machine_cncDefaultArgs<ExtArgs>
  }

  export type $workOvernightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workOvernight"
    objects: {
      machine: Prisma.$machine_cncPayload<ExtArgs>
      stages: Prisma.$workStagePayload<ExtArgs>[]
      files: Prisma.$FileUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      rt: string
      quantity: number
      madeBy: string | null
      leftToMake: number
      productionTime: string | null
      isArchived: boolean
      archivedAt: Date | null
      machineId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workOvernight"]>
    composites: {}
  }

  type workOvernightGetPayload<S extends boolean | null | undefined | workOvernightDefaultArgs> = $Result.GetResult<Prisma.$workOvernightPayload, S>

  type workOvernightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workOvernightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkOvernightCountAggregateInputType | true
    }

  export interface workOvernightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workOvernight'], meta: { name: 'workOvernight' } }
    /**
     * Find zero or one WorkOvernight that matches the filter.
     * @param {workOvernightFindUniqueArgs} args - Arguments to find a WorkOvernight
     * @example
     * // Get one WorkOvernight
     * const workOvernight = await prisma.workOvernight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workOvernightFindUniqueArgs>(args: SelectSubset<T, workOvernightFindUniqueArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkOvernight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workOvernightFindUniqueOrThrowArgs} args - Arguments to find a WorkOvernight
     * @example
     * // Get one WorkOvernight
     * const workOvernight = await prisma.workOvernight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workOvernightFindUniqueOrThrowArgs>(args: SelectSubset<T, workOvernightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOvernight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workOvernightFindFirstArgs} args - Arguments to find a WorkOvernight
     * @example
     * // Get one WorkOvernight
     * const workOvernight = await prisma.workOvernight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workOvernightFindFirstArgs>(args?: SelectSubset<T, workOvernightFindFirstArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOvernight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workOvernightFindFirstOrThrowArgs} args - Arguments to find a WorkOvernight
     * @example
     * // Get one WorkOvernight
     * const workOvernight = await prisma.workOvernight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workOvernightFindFirstOrThrowArgs>(args?: SelectSubset<T, workOvernightFindFirstOrThrowArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkOvernights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workOvernightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkOvernights
     * const workOvernights = await prisma.workOvernight.findMany()
     * 
     * // Get first 10 WorkOvernights
     * const workOvernights = await prisma.workOvernight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workOvernightWithIdOnly = await prisma.workOvernight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workOvernightFindManyArgs>(args?: SelectSubset<T, workOvernightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkOvernight.
     * @param {workOvernightCreateArgs} args - Arguments to create a WorkOvernight.
     * @example
     * // Create one WorkOvernight
     * const WorkOvernight = await prisma.workOvernight.create({
     *   data: {
     *     // ... data to create a WorkOvernight
     *   }
     * })
     * 
     */
    create<T extends workOvernightCreateArgs>(args: SelectSubset<T, workOvernightCreateArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkOvernights.
     * @param {workOvernightCreateManyArgs} args - Arguments to create many WorkOvernights.
     * @example
     * // Create many WorkOvernights
     * const workOvernight = await prisma.workOvernight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workOvernightCreateManyArgs>(args?: SelectSubset<T, workOvernightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkOvernights and returns the data saved in the database.
     * @param {workOvernightCreateManyAndReturnArgs} args - Arguments to create many WorkOvernights.
     * @example
     * // Create many WorkOvernights
     * const workOvernight = await prisma.workOvernight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkOvernights and only return the `id`
     * const workOvernightWithIdOnly = await prisma.workOvernight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workOvernightCreateManyAndReturnArgs>(args?: SelectSubset<T, workOvernightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkOvernight.
     * @param {workOvernightDeleteArgs} args - Arguments to delete one WorkOvernight.
     * @example
     * // Delete one WorkOvernight
     * const WorkOvernight = await prisma.workOvernight.delete({
     *   where: {
     *     // ... filter to delete one WorkOvernight
     *   }
     * })
     * 
     */
    delete<T extends workOvernightDeleteArgs>(args: SelectSubset<T, workOvernightDeleteArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkOvernight.
     * @param {workOvernightUpdateArgs} args - Arguments to update one WorkOvernight.
     * @example
     * // Update one WorkOvernight
     * const workOvernight = await prisma.workOvernight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workOvernightUpdateArgs>(args: SelectSubset<T, workOvernightUpdateArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkOvernights.
     * @param {workOvernightDeleteManyArgs} args - Arguments to filter WorkOvernights to delete.
     * @example
     * // Delete a few WorkOvernights
     * const { count } = await prisma.workOvernight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workOvernightDeleteManyArgs>(args?: SelectSubset<T, workOvernightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOvernights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workOvernightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkOvernights
     * const workOvernight = await prisma.workOvernight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workOvernightUpdateManyArgs>(args: SelectSubset<T, workOvernightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOvernights and returns the data updated in the database.
     * @param {workOvernightUpdateManyAndReturnArgs} args - Arguments to update many WorkOvernights.
     * @example
     * // Update many WorkOvernights
     * const workOvernight = await prisma.workOvernight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkOvernights and only return the `id`
     * const workOvernightWithIdOnly = await prisma.workOvernight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workOvernightUpdateManyAndReturnArgs>(args: SelectSubset<T, workOvernightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkOvernight.
     * @param {workOvernightUpsertArgs} args - Arguments to update or create a WorkOvernight.
     * @example
     * // Update or create a WorkOvernight
     * const workOvernight = await prisma.workOvernight.upsert({
     *   create: {
     *     // ... data to create a WorkOvernight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkOvernight we want to update
     *   }
     * })
     */
    upsert<T extends workOvernightUpsertArgs>(args: SelectSubset<T, workOvernightUpsertArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkOvernights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workOvernightCountArgs} args - Arguments to filter WorkOvernights to count.
     * @example
     * // Count the number of WorkOvernights
     * const count = await prisma.workOvernight.count({
     *   where: {
     *     // ... the filter for the WorkOvernights we want to count
     *   }
     * })
    **/
    count<T extends workOvernightCountArgs>(
      args?: Subset<T, workOvernightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkOvernightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkOvernight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOvernightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkOvernightAggregateArgs>(args: Subset<T, WorkOvernightAggregateArgs>): Prisma.PrismaPromise<GetWorkOvernightAggregateType<T>>

    /**
     * Group by WorkOvernight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workOvernightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workOvernightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workOvernightGroupByArgs['orderBy'] }
        : { orderBy?: workOvernightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workOvernightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOvernightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workOvernight model
   */
  readonly fields: workOvernightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workOvernight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workOvernightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machine<T extends machine_cncDefaultArgs<ExtArgs> = {}>(args?: Subset<T, machine_cncDefaultArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stages<T extends workOvernight$stagesArgs<ExtArgs> = {}>(args?: Subset<T, workOvernight$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends workOvernight$filesArgs<ExtArgs> = {}>(args?: Subset<T, workOvernight$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workOvernight model
   */
  interface workOvernightFieldRefs {
    readonly id: FieldRef<"workOvernight", 'Int'>
    readonly name: FieldRef<"workOvernight", 'String'>
    readonly rt: FieldRef<"workOvernight", 'String'>
    readonly quantity: FieldRef<"workOvernight", 'Int'>
    readonly madeBy: FieldRef<"workOvernight", 'String'>
    readonly leftToMake: FieldRef<"workOvernight", 'Int'>
    readonly productionTime: FieldRef<"workOvernight", 'String'>
    readonly isArchived: FieldRef<"workOvernight", 'Boolean'>
    readonly archivedAt: FieldRef<"workOvernight", 'DateTime'>
    readonly machineId: FieldRef<"workOvernight", 'Int'>
    readonly createdAt: FieldRef<"workOvernight", 'DateTime'>
    readonly updatedAt: FieldRef<"workOvernight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workOvernight findUnique
   */
  export type workOvernightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * Filter, which workOvernight to fetch.
     */
    where: workOvernightWhereUniqueInput
  }

  /**
   * workOvernight findUniqueOrThrow
   */
  export type workOvernightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * Filter, which workOvernight to fetch.
     */
    where: workOvernightWhereUniqueInput
  }

  /**
   * workOvernight findFirst
   */
  export type workOvernightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * Filter, which workOvernight to fetch.
     */
    where?: workOvernightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workOvernights to fetch.
     */
    orderBy?: workOvernightOrderByWithRelationInput | workOvernightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workOvernights.
     */
    cursor?: workOvernightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workOvernights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workOvernights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workOvernights.
     */
    distinct?: WorkOvernightScalarFieldEnum | WorkOvernightScalarFieldEnum[]
  }

  /**
   * workOvernight findFirstOrThrow
   */
  export type workOvernightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * Filter, which workOvernight to fetch.
     */
    where?: workOvernightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workOvernights to fetch.
     */
    orderBy?: workOvernightOrderByWithRelationInput | workOvernightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workOvernights.
     */
    cursor?: workOvernightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workOvernights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workOvernights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workOvernights.
     */
    distinct?: WorkOvernightScalarFieldEnum | WorkOvernightScalarFieldEnum[]
  }

  /**
   * workOvernight findMany
   */
  export type workOvernightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * Filter, which workOvernights to fetch.
     */
    where?: workOvernightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workOvernights to fetch.
     */
    orderBy?: workOvernightOrderByWithRelationInput | workOvernightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workOvernights.
     */
    cursor?: workOvernightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workOvernights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workOvernights.
     */
    skip?: number
    distinct?: WorkOvernightScalarFieldEnum | WorkOvernightScalarFieldEnum[]
  }

  /**
   * workOvernight create
   */
  export type workOvernightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * The data needed to create a workOvernight.
     */
    data: XOR<workOvernightCreateInput, workOvernightUncheckedCreateInput>
  }

  /**
   * workOvernight createMany
   */
  export type workOvernightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workOvernights.
     */
    data: workOvernightCreateManyInput | workOvernightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workOvernight createManyAndReturn
   */
  export type workOvernightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * The data used to create many workOvernights.
     */
    data: workOvernightCreateManyInput | workOvernightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workOvernight update
   */
  export type workOvernightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * The data needed to update a workOvernight.
     */
    data: XOR<workOvernightUpdateInput, workOvernightUncheckedUpdateInput>
    /**
     * Choose, which workOvernight to update.
     */
    where: workOvernightWhereUniqueInput
  }

  /**
   * workOvernight updateMany
   */
  export type workOvernightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workOvernights.
     */
    data: XOR<workOvernightUpdateManyMutationInput, workOvernightUncheckedUpdateManyInput>
    /**
     * Filter which workOvernights to update
     */
    where?: workOvernightWhereInput
    /**
     * Limit how many workOvernights to update.
     */
    limit?: number
  }

  /**
   * workOvernight updateManyAndReturn
   */
  export type workOvernightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * The data used to update workOvernights.
     */
    data: XOR<workOvernightUpdateManyMutationInput, workOvernightUncheckedUpdateManyInput>
    /**
     * Filter which workOvernights to update
     */
    where?: workOvernightWhereInput
    /**
     * Limit how many workOvernights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workOvernight upsert
   */
  export type workOvernightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * The filter to search for the workOvernight to update in case it exists.
     */
    where: workOvernightWhereUniqueInput
    /**
     * In case the workOvernight found by the `where` argument doesn't exist, create a new workOvernight with this data.
     */
    create: XOR<workOvernightCreateInput, workOvernightUncheckedCreateInput>
    /**
     * In case the workOvernight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workOvernightUpdateInput, workOvernightUncheckedUpdateInput>
  }

  /**
   * workOvernight delete
   */
  export type workOvernightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    /**
     * Filter which workOvernight to delete.
     */
    where: workOvernightWhereUniqueInput
  }

  /**
   * workOvernight deleteMany
   */
  export type workOvernightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workOvernights to delete
     */
    where?: workOvernightWhereInput
    /**
     * Limit how many workOvernights to delete.
     */
    limit?: number
  }

  /**
   * workOvernight.stages
   */
  export type workOvernight$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    where?: workStageWhereInput
    orderBy?: workStageOrderByWithRelationInput | workStageOrderByWithRelationInput[]
    cursor?: workStageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkStageScalarFieldEnum | WorkStageScalarFieldEnum[]
  }

  /**
   * workOvernight.files
   */
  export type workOvernight$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * workOvernight without action
   */
  export type workOvernightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
  }


  /**
   * Model workStage
   */

  export type AggregateWorkStage = {
    _count: WorkStageCountAggregateOutputType | null
    _avg: WorkStageAvgAggregateOutputType | null
    _sum: WorkStageSumAggregateOutputType | null
    _min: WorkStageMinAggregateOutputType | null
    _max: WorkStageMaxAggregateOutputType | null
  }

  export type WorkStageAvgAggregateOutputType = {
    id: number | null
    stepNumber: number | null
    workId: number | null
  }

  export type WorkStageSumAggregateOutputType = {
    id: number | null
    stepNumber: number | null
    workId: number | null
  }

  export type WorkStageMinAggregateOutputType = {
    id: number | null
    stepNumber: number | null
    description: string | null
    workId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkStageMaxAggregateOutputType = {
    id: number | null
    stepNumber: number | null
    description: string | null
    workId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkStageCountAggregateOutputType = {
    id: number
    stepNumber: number
    description: number
    workId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkStageAvgAggregateInputType = {
    id?: true
    stepNumber?: true
    workId?: true
  }

  export type WorkStageSumAggregateInputType = {
    id?: true
    stepNumber?: true
    workId?: true
  }

  export type WorkStageMinAggregateInputType = {
    id?: true
    stepNumber?: true
    description?: true
    workId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkStageMaxAggregateInputType = {
    id?: true
    stepNumber?: true
    description?: true
    workId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkStageCountAggregateInputType = {
    id?: true
    stepNumber?: true
    description?: true
    workId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkStageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workStage to aggregate.
     */
    where?: workStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workStages to fetch.
     */
    orderBy?: workStageOrderByWithRelationInput | workStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workStages
    **/
    _count?: true | WorkStageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkStageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkStageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkStageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkStageMaxAggregateInputType
  }

  export type GetWorkStageAggregateType<T extends WorkStageAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkStage[P]>
      : GetScalarType<T[P], AggregateWorkStage[P]>
  }




  export type workStageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workStageWhereInput
    orderBy?: workStageOrderByWithAggregationInput | workStageOrderByWithAggregationInput[]
    by: WorkStageScalarFieldEnum[] | WorkStageScalarFieldEnum
    having?: workStageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkStageCountAggregateInputType | true
    _avg?: WorkStageAvgAggregateInputType
    _sum?: WorkStageSumAggregateInputType
    _min?: WorkStageMinAggregateInputType
    _max?: WorkStageMaxAggregateInputType
  }

  export type WorkStageGroupByOutputType = {
    id: number
    stepNumber: number
    description: string | null
    workId: number
    createdAt: Date
    updatedAt: Date
    _count: WorkStageCountAggregateOutputType | null
    _avg: WorkStageAvgAggregateOutputType | null
    _sum: WorkStageSumAggregateOutputType | null
    _min: WorkStageMinAggregateOutputType | null
    _max: WorkStageMaxAggregateOutputType | null
  }

  type GetWorkStageGroupByPayload<T extends workStageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkStageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkStageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkStageGroupByOutputType[P]>
            : GetScalarType<T[P], WorkStageGroupByOutputType[P]>
        }
      >
    >


  export type workStageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | workOvernightDefaultArgs<ExtArgs>
    files?: boolean | workStage$filesArgs<ExtArgs>
    _count?: boolean | WorkStageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workStage"]>

  export type workStageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | workOvernightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workStage"]>

  export type workStageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | workOvernightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workStage"]>

  export type workStageSelectScalar = {
    id?: boolean
    stepNumber?: boolean
    description?: boolean
    workId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type workStageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stepNumber" | "description" | "workId" | "createdAt" | "updatedAt", ExtArgs["result"]["workStage"]>
  export type workStageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | workOvernightDefaultArgs<ExtArgs>
    files?: boolean | workStage$filesArgs<ExtArgs>
    _count?: boolean | WorkStageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workStageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | workOvernightDefaultArgs<ExtArgs>
  }
  export type workStageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | workOvernightDefaultArgs<ExtArgs>
  }

  export type $workStagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workStage"
    objects: {
      work: Prisma.$workOvernightPayload<ExtArgs>
      files: Prisma.$FileUploadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stepNumber: number
      description: string | null
      workId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workStage"]>
    composites: {}
  }

  type workStageGetPayload<S extends boolean | null | undefined | workStageDefaultArgs> = $Result.GetResult<Prisma.$workStagePayload, S>

  type workStageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workStageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkStageCountAggregateInputType | true
    }

  export interface workStageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workStage'], meta: { name: 'workStage' } }
    /**
     * Find zero or one WorkStage that matches the filter.
     * @param {workStageFindUniqueArgs} args - Arguments to find a WorkStage
     * @example
     * // Get one WorkStage
     * const workStage = await prisma.workStage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workStageFindUniqueArgs>(args: SelectSubset<T, workStageFindUniqueArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkStage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workStageFindUniqueOrThrowArgs} args - Arguments to find a WorkStage
     * @example
     * // Get one WorkStage
     * const workStage = await prisma.workStage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workStageFindUniqueOrThrowArgs>(args: SelectSubset<T, workStageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkStage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workStageFindFirstArgs} args - Arguments to find a WorkStage
     * @example
     * // Get one WorkStage
     * const workStage = await prisma.workStage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workStageFindFirstArgs>(args?: SelectSubset<T, workStageFindFirstArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkStage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workStageFindFirstOrThrowArgs} args - Arguments to find a WorkStage
     * @example
     * // Get one WorkStage
     * const workStage = await prisma.workStage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workStageFindFirstOrThrowArgs>(args?: SelectSubset<T, workStageFindFirstOrThrowArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkStages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workStageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkStages
     * const workStages = await prisma.workStage.findMany()
     * 
     * // Get first 10 WorkStages
     * const workStages = await prisma.workStage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workStageWithIdOnly = await prisma.workStage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workStageFindManyArgs>(args?: SelectSubset<T, workStageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkStage.
     * @param {workStageCreateArgs} args - Arguments to create a WorkStage.
     * @example
     * // Create one WorkStage
     * const WorkStage = await prisma.workStage.create({
     *   data: {
     *     // ... data to create a WorkStage
     *   }
     * })
     * 
     */
    create<T extends workStageCreateArgs>(args: SelectSubset<T, workStageCreateArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkStages.
     * @param {workStageCreateManyArgs} args - Arguments to create many WorkStages.
     * @example
     * // Create many WorkStages
     * const workStage = await prisma.workStage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workStageCreateManyArgs>(args?: SelectSubset<T, workStageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkStages and returns the data saved in the database.
     * @param {workStageCreateManyAndReturnArgs} args - Arguments to create many WorkStages.
     * @example
     * // Create many WorkStages
     * const workStage = await prisma.workStage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkStages and only return the `id`
     * const workStageWithIdOnly = await prisma.workStage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workStageCreateManyAndReturnArgs>(args?: SelectSubset<T, workStageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkStage.
     * @param {workStageDeleteArgs} args - Arguments to delete one WorkStage.
     * @example
     * // Delete one WorkStage
     * const WorkStage = await prisma.workStage.delete({
     *   where: {
     *     // ... filter to delete one WorkStage
     *   }
     * })
     * 
     */
    delete<T extends workStageDeleteArgs>(args: SelectSubset<T, workStageDeleteArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkStage.
     * @param {workStageUpdateArgs} args - Arguments to update one WorkStage.
     * @example
     * // Update one WorkStage
     * const workStage = await prisma.workStage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workStageUpdateArgs>(args: SelectSubset<T, workStageUpdateArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkStages.
     * @param {workStageDeleteManyArgs} args - Arguments to filter WorkStages to delete.
     * @example
     * // Delete a few WorkStages
     * const { count } = await prisma.workStage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workStageDeleteManyArgs>(args?: SelectSubset<T, workStageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workStageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkStages
     * const workStage = await prisma.workStage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workStageUpdateManyArgs>(args: SelectSubset<T, workStageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkStages and returns the data updated in the database.
     * @param {workStageUpdateManyAndReturnArgs} args - Arguments to update many WorkStages.
     * @example
     * // Update many WorkStages
     * const workStage = await prisma.workStage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkStages and only return the `id`
     * const workStageWithIdOnly = await prisma.workStage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workStageUpdateManyAndReturnArgs>(args: SelectSubset<T, workStageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkStage.
     * @param {workStageUpsertArgs} args - Arguments to update or create a WorkStage.
     * @example
     * // Update or create a WorkStage
     * const workStage = await prisma.workStage.upsert({
     *   create: {
     *     // ... data to create a WorkStage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkStage we want to update
     *   }
     * })
     */
    upsert<T extends workStageUpsertArgs>(args: SelectSubset<T, workStageUpsertArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workStageCountArgs} args - Arguments to filter WorkStages to count.
     * @example
     * // Count the number of WorkStages
     * const count = await prisma.workStage.count({
     *   where: {
     *     // ... the filter for the WorkStages we want to count
     *   }
     * })
    **/
    count<T extends workStageCountArgs>(
      args?: Subset<T, workStageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkStageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkStageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkStageAggregateArgs>(args: Subset<T, WorkStageAggregateArgs>): Prisma.PrismaPromise<GetWorkStageAggregateType<T>>

    /**
     * Group by WorkStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workStageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workStageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workStageGroupByArgs['orderBy'] }
        : { orderBy?: workStageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workStageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workStage model
   */
  readonly fields: workStageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workStage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workStageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends workOvernightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workOvernightDefaultArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    files<T extends workStage$filesArgs<ExtArgs> = {}>(args?: Subset<T, workStage$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workStage model
   */
  interface workStageFieldRefs {
    readonly id: FieldRef<"workStage", 'Int'>
    readonly stepNumber: FieldRef<"workStage", 'Int'>
    readonly description: FieldRef<"workStage", 'String'>
    readonly workId: FieldRef<"workStage", 'Int'>
    readonly createdAt: FieldRef<"workStage", 'DateTime'>
    readonly updatedAt: FieldRef<"workStage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workStage findUnique
   */
  export type workStageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * Filter, which workStage to fetch.
     */
    where: workStageWhereUniqueInput
  }

  /**
   * workStage findUniqueOrThrow
   */
  export type workStageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * Filter, which workStage to fetch.
     */
    where: workStageWhereUniqueInput
  }

  /**
   * workStage findFirst
   */
  export type workStageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * Filter, which workStage to fetch.
     */
    where?: workStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workStages to fetch.
     */
    orderBy?: workStageOrderByWithRelationInput | workStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workStages.
     */
    cursor?: workStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workStages.
     */
    distinct?: WorkStageScalarFieldEnum | WorkStageScalarFieldEnum[]
  }

  /**
   * workStage findFirstOrThrow
   */
  export type workStageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * Filter, which workStage to fetch.
     */
    where?: workStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workStages to fetch.
     */
    orderBy?: workStageOrderByWithRelationInput | workStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workStages.
     */
    cursor?: workStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workStages.
     */
    distinct?: WorkStageScalarFieldEnum | WorkStageScalarFieldEnum[]
  }

  /**
   * workStage findMany
   */
  export type workStageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * Filter, which workStages to fetch.
     */
    where?: workStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workStages to fetch.
     */
    orderBy?: workStageOrderByWithRelationInput | workStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workStages.
     */
    cursor?: workStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workStages.
     */
    skip?: number
    distinct?: WorkStageScalarFieldEnum | WorkStageScalarFieldEnum[]
  }

  /**
   * workStage create
   */
  export type workStageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * The data needed to create a workStage.
     */
    data: XOR<workStageCreateInput, workStageUncheckedCreateInput>
  }

  /**
   * workStage createMany
   */
  export type workStageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workStages.
     */
    data: workStageCreateManyInput | workStageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workStage createManyAndReturn
   */
  export type workStageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * The data used to create many workStages.
     */
    data: workStageCreateManyInput | workStageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workStage update
   */
  export type workStageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * The data needed to update a workStage.
     */
    data: XOR<workStageUpdateInput, workStageUncheckedUpdateInput>
    /**
     * Choose, which workStage to update.
     */
    where: workStageWhereUniqueInput
  }

  /**
   * workStage updateMany
   */
  export type workStageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workStages.
     */
    data: XOR<workStageUpdateManyMutationInput, workStageUncheckedUpdateManyInput>
    /**
     * Filter which workStages to update
     */
    where?: workStageWhereInput
    /**
     * Limit how many workStages to update.
     */
    limit?: number
  }

  /**
   * workStage updateManyAndReturn
   */
  export type workStageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * The data used to update workStages.
     */
    data: XOR<workStageUpdateManyMutationInput, workStageUncheckedUpdateManyInput>
    /**
     * Filter which workStages to update
     */
    where?: workStageWhereInput
    /**
     * Limit how many workStages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workStage upsert
   */
  export type workStageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * The filter to search for the workStage to update in case it exists.
     */
    where: workStageWhereUniqueInput
    /**
     * In case the workStage found by the `where` argument doesn't exist, create a new workStage with this data.
     */
    create: XOR<workStageCreateInput, workStageUncheckedCreateInput>
    /**
     * In case the workStage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workStageUpdateInput, workStageUncheckedUpdateInput>
  }

  /**
   * workStage delete
   */
  export type workStageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    /**
     * Filter which workStage to delete.
     */
    where: workStageWhereUniqueInput
  }

  /**
   * workStage deleteMany
   */
  export type workStageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workStages to delete
     */
    where?: workStageWhereInput
    /**
     * Limit how many workStages to delete.
     */
    limit?: number
  }

  /**
   * workStage.files
   */
  export type workStage$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * workStage without action
   */
  export type workStageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
  }


  /**
   * Model FileUpload
   */

  export type AggregateFileUpload = {
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  export type FileUploadAvgAggregateOutputType = {
    id: number | null
    size: number | null
    toolId: number | null
    machineId: number | null
    workId: number | null
    stageId: number | null
    contentLearningId: number | null
  }

  export type FileUploadSumAggregateOutputType = {
    id: number | null
    size: number | null
    toolId: number | null
    machineId: number | null
    workId: number | null
    stageId: number | null
    contentLearningId: number | null
  }

  export type FileUploadMinAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    path: string | null
    mimeType: string | null
    size: number | null
    type: $Enums.FileType | null
    toolId: number | null
    machineId: number | null
    workId: number | null
    stageId: number | null
    contentLearningId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileUploadMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    path: string | null
    mimeType: string | null
    size: number | null
    type: $Enums.FileType | null
    toolId: number | null
    machineId: number | null
    workId: number | null
    stageId: number | null
    contentLearningId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileUploadCountAggregateOutputType = {
    id: number
    filename: number
    originalName: number
    path: number
    mimeType: number
    size: number
    type: number
    toolId: number
    machineId: number
    workId: number
    stageId: number
    contentLearningId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileUploadAvgAggregateInputType = {
    id?: true
    size?: true
    toolId?: true
    machineId?: true
    workId?: true
    stageId?: true
    contentLearningId?: true
  }

  export type FileUploadSumAggregateInputType = {
    id?: true
    size?: true
    toolId?: true
    machineId?: true
    workId?: true
    stageId?: true
    contentLearningId?: true
  }

  export type FileUploadMinAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    path?: true
    mimeType?: true
    size?: true
    type?: true
    toolId?: true
    machineId?: true
    workId?: true
    stageId?: true
    contentLearningId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileUploadMaxAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    path?: true
    mimeType?: true
    size?: true
    type?: true
    toolId?: true
    machineId?: true
    workId?: true
    stageId?: true
    contentLearningId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileUploadCountAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    path?: true
    mimeType?: true
    size?: true
    type?: true
    toolId?: true
    machineId?: true
    workId?: true
    stageId?: true
    contentLearningId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUpload to aggregate.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileUploads
    **/
    _count?: true | FileUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadMaxAggregateInputType
  }

  export type GetFileUploadAggregateType<T extends FileUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateFileUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileUpload[P]>
      : GetScalarType<T[P], AggregateFileUpload[P]>
  }




  export type FileUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithAggregationInput | FileUploadOrderByWithAggregationInput[]
    by: FileUploadScalarFieldEnum[] | FileUploadScalarFieldEnum
    having?: FileUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileUploadCountAggregateInputType | true
    _avg?: FileUploadAvgAggregateInputType
    _sum?: FileUploadSumAggregateInputType
    _min?: FileUploadMinAggregateInputType
    _max?: FileUploadMaxAggregateInputType
  }

  export type FileUploadGroupByOutputType = {
    id: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId: number | null
    machineId: number | null
    workId: number | null
    stageId: number | null
    contentLearningId: number | null
    createdAt: Date
    updatedAt: Date
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  type GetFileUploadGroupByPayload<T extends FileUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
            : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
        }
      >
    >


  export type FileUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    type?: boolean
    toolId?: boolean
    machineId?: boolean
    workId?: boolean
    stageId?: boolean
    contentLearningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tool?: boolean | FileUpload$toolArgs<ExtArgs>
    machine?: boolean | FileUpload$machineArgs<ExtArgs>
    work?: boolean | FileUpload$workArgs<ExtArgs>
    stage?: boolean | FileUpload$stageArgs<ExtArgs>
    contentLearning?: boolean | FileUpload$contentLearningArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    type?: boolean
    toolId?: boolean
    machineId?: boolean
    workId?: boolean
    stageId?: boolean
    contentLearningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tool?: boolean | FileUpload$toolArgs<ExtArgs>
    machine?: boolean | FileUpload$machineArgs<ExtArgs>
    work?: boolean | FileUpload$workArgs<ExtArgs>
    stage?: boolean | FileUpload$stageArgs<ExtArgs>
    contentLearning?: boolean | FileUpload$contentLearningArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    type?: boolean
    toolId?: boolean
    machineId?: boolean
    workId?: boolean
    stageId?: boolean
    contentLearningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tool?: boolean | FileUpload$toolArgs<ExtArgs>
    machine?: boolean | FileUpload$machineArgs<ExtArgs>
    work?: boolean | FileUpload$workArgs<ExtArgs>
    stage?: boolean | FileUpload$stageArgs<ExtArgs>
    contentLearning?: boolean | FileUpload$contentLearningArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectScalar = {
    id?: boolean
    filename?: boolean
    originalName?: boolean
    path?: boolean
    mimeType?: boolean
    size?: boolean
    type?: boolean
    toolId?: boolean
    machineId?: boolean
    workId?: boolean
    stageId?: boolean
    contentLearningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "originalName" | "path" | "mimeType" | "size" | "type" | "toolId" | "machineId" | "workId" | "stageId" | "contentLearningId" | "createdAt" | "updatedAt", ExtArgs["result"]["fileUpload"]>
  export type FileUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | FileUpload$toolArgs<ExtArgs>
    machine?: boolean | FileUpload$machineArgs<ExtArgs>
    work?: boolean | FileUpload$workArgs<ExtArgs>
    stage?: boolean | FileUpload$stageArgs<ExtArgs>
    contentLearning?: boolean | FileUpload$contentLearningArgs<ExtArgs>
  }
  export type FileUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | FileUpload$toolArgs<ExtArgs>
    machine?: boolean | FileUpload$machineArgs<ExtArgs>
    work?: boolean | FileUpload$workArgs<ExtArgs>
    stage?: boolean | FileUpload$stageArgs<ExtArgs>
    contentLearning?: boolean | FileUpload$contentLearningArgs<ExtArgs>
  }
  export type FileUploadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | FileUpload$toolArgs<ExtArgs>
    machine?: boolean | FileUpload$machineArgs<ExtArgs>
    work?: boolean | FileUpload$workArgs<ExtArgs>
    stage?: boolean | FileUpload$stageArgs<ExtArgs>
    contentLearning?: boolean | FileUpload$contentLearningArgs<ExtArgs>
  }

  export type $FileUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileUpload"
    objects: {
      tool: Prisma.$toolsPayload<ExtArgs> | null
      machine: Prisma.$machine_cncPayload<ExtArgs> | null
      work: Prisma.$workOvernightPayload<ExtArgs> | null
      stage: Prisma.$workStagePayload<ExtArgs> | null
      contentLearning: Prisma.$ContentLearningPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      originalName: string
      path: string
      mimeType: string
      size: number
      type: $Enums.FileType
      toolId: number | null
      machineId: number | null
      workId: number | null
      stageId: number | null
      contentLearningId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileUpload"]>
    composites: {}
  }

  type FileUploadGetPayload<S extends boolean | null | undefined | FileUploadDefaultArgs> = $Result.GetResult<Prisma.$FileUploadPayload, S>

  type FileUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileUploadCountAggregateInputType | true
    }

  export interface FileUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileUpload'], meta: { name: 'FileUpload' } }
    /**
     * Find zero or one FileUpload that matches the filter.
     * @param {FileUploadFindUniqueArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadFindUniqueArgs>(args: SelectSubset<T, FileUploadFindUniqueArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileUploadFindUniqueOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, FileUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadFindFirstArgs>(args?: SelectSubset<T, FileUploadFindFirstArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, FileUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploads
     * const fileUploads = await prisma.fileUpload.findMany()
     * 
     * // Get first 10 FileUploads
     * const fileUploads = await prisma.fileUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileUploadFindManyArgs>(args?: SelectSubset<T, FileUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileUpload.
     * @param {FileUploadCreateArgs} args - Arguments to create a FileUpload.
     * @example
     * // Create one FileUpload
     * const FileUpload = await prisma.fileUpload.create({
     *   data: {
     *     // ... data to create a FileUpload
     *   }
     * })
     * 
     */
    create<T extends FileUploadCreateArgs>(args: SelectSubset<T, FileUploadCreateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileUploads.
     * @param {FileUploadCreateManyArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileUploadCreateManyArgs>(args?: SelectSubset<T, FileUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileUploads and returns the data saved in the database.
     * @param {FileUploadCreateManyAndReturnArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, FileUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileUpload.
     * @param {FileUploadDeleteArgs} args - Arguments to delete one FileUpload.
     * @example
     * // Delete one FileUpload
     * const FileUpload = await prisma.fileUpload.delete({
     *   where: {
     *     // ... filter to delete one FileUpload
     *   }
     * })
     * 
     */
    delete<T extends FileUploadDeleteArgs>(args: SelectSubset<T, FileUploadDeleteArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileUpload.
     * @param {FileUploadUpdateArgs} args - Arguments to update one FileUpload.
     * @example
     * // Update one FileUpload
     * const fileUpload = await prisma.fileUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUploadUpdateArgs>(args: SelectSubset<T, FileUploadUpdateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileUploads.
     * @param {FileUploadDeleteManyArgs} args - Arguments to filter FileUploads to delete.
     * @example
     * // Delete a few FileUploads
     * const { count } = await prisma.fileUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileUploadDeleteManyArgs>(args?: SelectSubset<T, FileUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUploadUpdateManyArgs>(args: SelectSubset<T, FileUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads and returns the data updated in the database.
     * @param {FileUploadUpdateManyAndReturnArgs} args - Arguments to update many FileUploads.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileUpload.
     * @param {FileUploadUpsertArgs} args - Arguments to update or create a FileUpload.
     * @example
     * // Update or create a FileUpload
     * const fileUpload = await prisma.fileUpload.upsert({
     *   create: {
     *     // ... data to create a FileUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUpload we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadUpsertArgs>(args: SelectSubset<T, FileUploadUpsertArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadCountArgs} args - Arguments to filter FileUploads to count.
     * @example
     * // Count the number of FileUploads
     * const count = await prisma.fileUpload.count({
     *   where: {
     *     // ... the filter for the FileUploads we want to count
     *   }
     * })
    **/
    count<T extends FileUploadCountArgs>(
      args?: Subset<T, FileUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileUploadAggregateArgs>(args: Subset<T, FileUploadAggregateArgs>): Prisma.PrismaPromise<GetFileUploadAggregateType<T>>

    /**
     * Group by FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileUploadGroupByArgs['orderBy'] }
        : { orderBy?: FileUploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileUpload model
   */
  readonly fields: FileUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends FileUpload$toolArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$toolArgs<ExtArgs>>): Prisma__toolsClient<$Result.GetResult<Prisma.$toolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    machine<T extends FileUpload$machineArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$machineArgs<ExtArgs>>): Prisma__machine_cncClient<$Result.GetResult<Prisma.$machine_cncPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    work<T extends FileUpload$workArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$workArgs<ExtArgs>>): Prisma__workOvernightClient<$Result.GetResult<Prisma.$workOvernightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stage<T extends FileUpload$stageArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$stageArgs<ExtArgs>>): Prisma__workStageClient<$Result.GetResult<Prisma.$workStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contentLearning<T extends FileUpload$contentLearningArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$contentLearningArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileUpload model
   */
  interface FileUploadFieldRefs {
    readonly id: FieldRef<"FileUpload", 'Int'>
    readonly filename: FieldRef<"FileUpload", 'String'>
    readonly originalName: FieldRef<"FileUpload", 'String'>
    readonly path: FieldRef<"FileUpload", 'String'>
    readonly mimeType: FieldRef<"FileUpload", 'String'>
    readonly size: FieldRef<"FileUpload", 'Int'>
    readonly type: FieldRef<"FileUpload", 'FileType'>
    readonly toolId: FieldRef<"FileUpload", 'Int'>
    readonly machineId: FieldRef<"FileUpload", 'Int'>
    readonly workId: FieldRef<"FileUpload", 'Int'>
    readonly stageId: FieldRef<"FileUpload", 'Int'>
    readonly contentLearningId: FieldRef<"FileUpload", 'Int'>
    readonly createdAt: FieldRef<"FileUpload", 'DateTime'>
    readonly updatedAt: FieldRef<"FileUpload", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileUpload findUnique
   */
  export type FileUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findUniqueOrThrow
   */
  export type FileUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findFirst
   */
  export type FileUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findFirstOrThrow
   */
  export type FileUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findMany
   */
  export type FileUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUploads to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload create
   */
  export type FileUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a FileUpload.
     */
    data: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
  }

  /**
   * FileUpload createMany
   */
  export type FileUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUpload createManyAndReturn
   */
  export type FileUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload update
   */
  export type FileUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a FileUpload.
     */
    data: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
    /**
     * Choose, which FileUpload to update.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload updateMany
   */
  export type FileUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
  }

  /**
   * FileUpload updateManyAndReturn
   */
  export type FileUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload upsert
   */
  export type FileUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the FileUpload to update in case it exists.
     */
    where: FileUploadWhereUniqueInput
    /**
     * In case the FileUpload found by the `where` argument doesn't exist, create a new FileUpload with this data.
     */
    create: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
    /**
     * In case the FileUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
  }

  /**
   * FileUpload delete
   */
  export type FileUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter which FileUpload to delete.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload deleteMany
   */
  export type FileUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploads to delete
     */
    where?: FileUploadWhereInput
    /**
     * Limit how many FileUploads to delete.
     */
    limit?: number
  }

  /**
   * FileUpload.tool
   */
  export type FileUpload$toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tools
     */
    select?: toolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tools
     */
    omit?: toolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: toolsInclude<ExtArgs> | null
    where?: toolsWhereInput
  }

  /**
   * FileUpload.machine
   */
  export type FileUpload$machineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machine_cnc
     */
    select?: machine_cncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machine_cnc
     */
    omit?: machine_cncOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: machine_cncInclude<ExtArgs> | null
    where?: machine_cncWhereInput
  }

  /**
   * FileUpload.work
   */
  export type FileUpload$workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workOvernight
     */
    select?: workOvernightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workOvernight
     */
    omit?: workOvernightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workOvernightInclude<ExtArgs> | null
    where?: workOvernightWhereInput
  }

  /**
   * FileUpload.stage
   */
  export type FileUpload$stageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workStage
     */
    select?: workStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workStage
     */
    omit?: workStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workStageInclude<ExtArgs> | null
    where?: workStageWhereInput
  }

  /**
   * FileUpload.contentLearning
   */
  export type FileUpload$contentLearningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    where?: ContentLearningWhereInput
  }

  /**
   * FileUpload without action
   */
  export type FileUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
  }


  /**
   * Model Learning
   */

  export type AggregateLearning = {
    _count: LearningCountAggregateOutputType | null
    _avg: LearningAvgAggregateOutputType | null
    _sum: LearningSumAggregateOutputType | null
    _min: LearningMinAggregateOutputType | null
    _max: LearningMaxAggregateOutputType | null
  }

  export type LearningAvgAggregateOutputType = {
    id: number | null
  }

  export type LearningSumAggregateOutputType = {
    id: number | null
  }

  export type LearningMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningAvgAggregateInputType = {
    id?: true
  }

  export type LearningSumAggregateInputType = {
    id?: true
  }

  export type LearningMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Learning to aggregate.
     */
    where?: LearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Learnings to fetch.
     */
    orderBy?: LearningOrderByWithRelationInput | LearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Learnings
    **/
    _count?: true | LearningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningMaxAggregateInputType
  }

  export type GetLearningAggregateType<T extends LearningAggregateArgs> = {
        [P in keyof T & keyof AggregateLearning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearning[P]>
      : GetScalarType<T[P], AggregateLearning[P]>
  }




  export type LearningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningWhereInput
    orderBy?: LearningOrderByWithAggregationInput | LearningOrderByWithAggregationInput[]
    by: LearningScalarFieldEnum[] | LearningScalarFieldEnum
    having?: LearningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningCountAggregateInputType | true
    _avg?: LearningAvgAggregateInputType
    _sum?: LearningSumAggregateInputType
    _min?: LearningMinAggregateInputType
    _max?: LearningMaxAggregateInputType
  }

  export type LearningGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    _count: LearningCountAggregateOutputType | null
    _avg: LearningAvgAggregateOutputType | null
    _sum: LearningSumAggregateOutputType | null
    _min: LearningMinAggregateOutputType | null
    _max: LearningMaxAggregateOutputType | null
  }

  type GetLearningGroupByPayload<T extends LearningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningGroupByOutputType[P]>
            : GetScalarType<T[P], LearningGroupByOutputType[P]>
        }
      >
    >


  export type LearningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | Learning$contentArgs<ExtArgs>
    _count?: boolean | LearningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learning"]>

  export type LearningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["learning"]>

  export type LearningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["learning"]>

  export type LearningSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["learning"]>
  export type LearningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | Learning$contentArgs<ExtArgs>
    _count?: boolean | LearningCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LearningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LearningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LearningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Learning"
    objects: {
      content: Prisma.$ContentLearningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learning"]>
    composites: {}
  }

  type LearningGetPayload<S extends boolean | null | undefined | LearningDefaultArgs> = $Result.GetResult<Prisma.$LearningPayload, S>

  type LearningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningCountAggregateInputType | true
    }

  export interface LearningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Learning'], meta: { name: 'Learning' } }
    /**
     * Find zero or one Learning that matches the filter.
     * @param {LearningFindUniqueArgs} args - Arguments to find a Learning
     * @example
     * // Get one Learning
     * const learning = await prisma.learning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningFindUniqueArgs>(args: SelectSubset<T, LearningFindUniqueArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Learning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningFindUniqueOrThrowArgs} args - Arguments to find a Learning
     * @example
     * // Get one Learning
     * const learning = await prisma.learning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Learning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningFindFirstArgs} args - Arguments to find a Learning
     * @example
     * // Get one Learning
     * const learning = await prisma.learning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningFindFirstArgs>(args?: SelectSubset<T, LearningFindFirstArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Learning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningFindFirstOrThrowArgs} args - Arguments to find a Learning
     * @example
     * // Get one Learning
     * const learning = await prisma.learning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Learnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Learnings
     * const learnings = await prisma.learning.findMany()
     * 
     * // Get first 10 Learnings
     * const learnings = await prisma.learning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningWithIdOnly = await prisma.learning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningFindManyArgs>(args?: SelectSubset<T, LearningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Learning.
     * @param {LearningCreateArgs} args - Arguments to create a Learning.
     * @example
     * // Create one Learning
     * const Learning = await prisma.learning.create({
     *   data: {
     *     // ... data to create a Learning
     *   }
     * })
     * 
     */
    create<T extends LearningCreateArgs>(args: SelectSubset<T, LearningCreateArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Learnings.
     * @param {LearningCreateManyArgs} args - Arguments to create many Learnings.
     * @example
     * // Create many Learnings
     * const learning = await prisma.learning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningCreateManyArgs>(args?: SelectSubset<T, LearningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Learnings and returns the data saved in the database.
     * @param {LearningCreateManyAndReturnArgs} args - Arguments to create many Learnings.
     * @example
     * // Create many Learnings
     * const learning = await prisma.learning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Learnings and only return the `id`
     * const learningWithIdOnly = await prisma.learning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Learning.
     * @param {LearningDeleteArgs} args - Arguments to delete one Learning.
     * @example
     * // Delete one Learning
     * const Learning = await prisma.learning.delete({
     *   where: {
     *     // ... filter to delete one Learning
     *   }
     * })
     * 
     */
    delete<T extends LearningDeleteArgs>(args: SelectSubset<T, LearningDeleteArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Learning.
     * @param {LearningUpdateArgs} args - Arguments to update one Learning.
     * @example
     * // Update one Learning
     * const learning = await prisma.learning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningUpdateArgs>(args: SelectSubset<T, LearningUpdateArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Learnings.
     * @param {LearningDeleteManyArgs} args - Arguments to filter Learnings to delete.
     * @example
     * // Delete a few Learnings
     * const { count } = await prisma.learning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningDeleteManyArgs>(args?: SelectSubset<T, LearningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Learnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Learnings
     * const learning = await prisma.learning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningUpdateManyArgs>(args: SelectSubset<T, LearningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Learnings and returns the data updated in the database.
     * @param {LearningUpdateManyAndReturnArgs} args - Arguments to update many Learnings.
     * @example
     * // Update many Learnings
     * const learning = await prisma.learning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Learnings and only return the `id`
     * const learningWithIdOnly = await prisma.learning.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Learning.
     * @param {LearningUpsertArgs} args - Arguments to update or create a Learning.
     * @example
     * // Update or create a Learning
     * const learning = await prisma.learning.upsert({
     *   create: {
     *     // ... data to create a Learning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Learning we want to update
     *   }
     * })
     */
    upsert<T extends LearningUpsertArgs>(args: SelectSubset<T, LearningUpsertArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Learnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningCountArgs} args - Arguments to filter Learnings to count.
     * @example
     * // Count the number of Learnings
     * const count = await prisma.learning.count({
     *   where: {
     *     // ... the filter for the Learnings we want to count
     *   }
     * })
    **/
    count<T extends LearningCountArgs>(
      args?: Subset<T, LearningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Learning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LearningAggregateArgs>(args: Subset<T, LearningAggregateArgs>): Prisma.PrismaPromise<GetLearningAggregateType<T>>

    /**
     * Group by Learning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LearningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningGroupByArgs['orderBy'] }
        : { orderBy?: LearningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LearningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Learning model
   */
  readonly fields: LearningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Learning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends Learning$contentArgs<ExtArgs> = {}>(args?: Subset<T, Learning$contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Learning model
   */
  interface LearningFieldRefs {
    readonly id: FieldRef<"Learning", 'Int'>
    readonly title: FieldRef<"Learning", 'String'>
    readonly createdAt: FieldRef<"Learning", 'DateTime'>
    readonly updatedAt: FieldRef<"Learning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Learning findUnique
   */
  export type LearningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * Filter, which Learning to fetch.
     */
    where: LearningWhereUniqueInput
  }

  /**
   * Learning findUniqueOrThrow
   */
  export type LearningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * Filter, which Learning to fetch.
     */
    where: LearningWhereUniqueInput
  }

  /**
   * Learning findFirst
   */
  export type LearningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * Filter, which Learning to fetch.
     */
    where?: LearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Learnings to fetch.
     */
    orderBy?: LearningOrderByWithRelationInput | LearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Learnings.
     */
    cursor?: LearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Learnings.
     */
    distinct?: LearningScalarFieldEnum | LearningScalarFieldEnum[]
  }

  /**
   * Learning findFirstOrThrow
   */
  export type LearningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * Filter, which Learning to fetch.
     */
    where?: LearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Learnings to fetch.
     */
    orderBy?: LearningOrderByWithRelationInput | LearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Learnings.
     */
    cursor?: LearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Learnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Learnings.
     */
    distinct?: LearningScalarFieldEnum | LearningScalarFieldEnum[]
  }

  /**
   * Learning findMany
   */
  export type LearningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * Filter, which Learnings to fetch.
     */
    where?: LearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Learnings to fetch.
     */
    orderBy?: LearningOrderByWithRelationInput | LearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Learnings.
     */
    cursor?: LearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Learnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Learnings.
     */
    skip?: number
    distinct?: LearningScalarFieldEnum | LearningScalarFieldEnum[]
  }

  /**
   * Learning create
   */
  export type LearningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * The data needed to create a Learning.
     */
    data: XOR<LearningCreateInput, LearningUncheckedCreateInput>
  }

  /**
   * Learning createMany
   */
  export type LearningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Learnings.
     */
    data: LearningCreateManyInput | LearningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Learning createManyAndReturn
   */
  export type LearningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * The data used to create many Learnings.
     */
    data: LearningCreateManyInput | LearningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Learning update
   */
  export type LearningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * The data needed to update a Learning.
     */
    data: XOR<LearningUpdateInput, LearningUncheckedUpdateInput>
    /**
     * Choose, which Learning to update.
     */
    where: LearningWhereUniqueInput
  }

  /**
   * Learning updateMany
   */
  export type LearningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Learnings.
     */
    data: XOR<LearningUpdateManyMutationInput, LearningUncheckedUpdateManyInput>
    /**
     * Filter which Learnings to update
     */
    where?: LearningWhereInput
    /**
     * Limit how many Learnings to update.
     */
    limit?: number
  }

  /**
   * Learning updateManyAndReturn
   */
  export type LearningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * The data used to update Learnings.
     */
    data: XOR<LearningUpdateManyMutationInput, LearningUncheckedUpdateManyInput>
    /**
     * Filter which Learnings to update
     */
    where?: LearningWhereInput
    /**
     * Limit how many Learnings to update.
     */
    limit?: number
  }

  /**
   * Learning upsert
   */
  export type LearningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * The filter to search for the Learning to update in case it exists.
     */
    where: LearningWhereUniqueInput
    /**
     * In case the Learning found by the `where` argument doesn't exist, create a new Learning with this data.
     */
    create: XOR<LearningCreateInput, LearningUncheckedCreateInput>
    /**
     * In case the Learning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningUpdateInput, LearningUncheckedUpdateInput>
  }

  /**
   * Learning delete
   */
  export type LearningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
    /**
     * Filter which Learning to delete.
     */
    where: LearningWhereUniqueInput
  }

  /**
   * Learning deleteMany
   */
  export type LearningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Learnings to delete
     */
    where?: LearningWhereInput
    /**
     * Limit how many Learnings to delete.
     */
    limit?: number
  }

  /**
   * Learning.content
   */
  export type Learning$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    where?: ContentLearningWhereInput
    orderBy?: ContentLearningOrderByWithRelationInput | ContentLearningOrderByWithRelationInput[]
    cursor?: ContentLearningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentLearningScalarFieldEnum | ContentLearningScalarFieldEnum[]
  }

  /**
   * Learning without action
   */
  export type LearningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning
     */
    select?: LearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Learning
     */
    omit?: LearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningInclude<ExtArgs> | null
  }


  /**
   * Model ContentLearning
   */

  export type AggregateContentLearning = {
    _count: ContentLearningCountAggregateOutputType | null
    _avg: ContentLearningAvgAggregateOutputType | null
    _sum: ContentLearningSumAggregateOutputType | null
    _min: ContentLearningMinAggregateOutputType | null
    _max: ContentLearningMaxAggregateOutputType | null
  }

  export type ContentLearningAvgAggregateOutputType = {
    id: number | null
    learningId: number | null
  }

  export type ContentLearningSumAggregateOutputType = {
    id: number | null
    learningId: number | null
  }

  export type ContentLearningMinAggregateOutputType = {
    id: number | null
    description: string | null
    learningId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentLearningMaxAggregateOutputType = {
    id: number | null
    description: string | null
    learningId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentLearningCountAggregateOutputType = {
    id: number
    description: number
    learningId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentLearningAvgAggregateInputType = {
    id?: true
    learningId?: true
  }

  export type ContentLearningSumAggregateInputType = {
    id?: true
    learningId?: true
  }

  export type ContentLearningMinAggregateInputType = {
    id?: true
    description?: true
    learningId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentLearningMaxAggregateInputType = {
    id?: true
    description?: true
    learningId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentLearningCountAggregateInputType = {
    id?: true
    description?: true
    learningId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentLearningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentLearning to aggregate.
     */
    where?: ContentLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentLearnings to fetch.
     */
    orderBy?: ContentLearningOrderByWithRelationInput | ContentLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentLearnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentLearnings
    **/
    _count?: true | ContentLearningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentLearningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentLearningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentLearningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentLearningMaxAggregateInputType
  }

  export type GetContentLearningAggregateType<T extends ContentLearningAggregateArgs> = {
        [P in keyof T & keyof AggregateContentLearning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentLearning[P]>
      : GetScalarType<T[P], AggregateContentLearning[P]>
  }




  export type ContentLearningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentLearningWhereInput
    orderBy?: ContentLearningOrderByWithAggregationInput | ContentLearningOrderByWithAggregationInput[]
    by: ContentLearningScalarFieldEnum[] | ContentLearningScalarFieldEnum
    having?: ContentLearningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentLearningCountAggregateInputType | true
    _avg?: ContentLearningAvgAggregateInputType
    _sum?: ContentLearningSumAggregateInputType
    _min?: ContentLearningMinAggregateInputType
    _max?: ContentLearningMaxAggregateInputType
  }

  export type ContentLearningGroupByOutputType = {
    id: number
    description: string
    learningId: number
    createdAt: Date
    updatedAt: Date
    _count: ContentLearningCountAggregateOutputType | null
    _avg: ContentLearningAvgAggregateOutputType | null
    _sum: ContentLearningSumAggregateOutputType | null
    _min: ContentLearningMinAggregateOutputType | null
    _max: ContentLearningMaxAggregateOutputType | null
  }

  type GetContentLearningGroupByPayload<T extends ContentLearningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentLearningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentLearningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentLearningGroupByOutputType[P]>
            : GetScalarType<T[P], ContentLearningGroupByOutputType[P]>
        }
      >
    >


  export type ContentLearningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    learningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | ContentLearning$filesArgs<ExtArgs>
    learning?: boolean | LearningDefaultArgs<ExtArgs>
    _count?: boolean | ContentLearningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentLearning"]>

  export type ContentLearningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    learningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    learning?: boolean | LearningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentLearning"]>

  export type ContentLearningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    learningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    learning?: boolean | LearningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentLearning"]>

  export type ContentLearningSelectScalar = {
    id?: boolean
    description?: boolean
    learningId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentLearningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "learningId" | "createdAt" | "updatedAt", ExtArgs["result"]["contentLearning"]>
  export type ContentLearningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | ContentLearning$filesArgs<ExtArgs>
    learning?: boolean | LearningDefaultArgs<ExtArgs>
    _count?: boolean | ContentLearningCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentLearningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learning?: boolean | LearningDefaultArgs<ExtArgs>
  }
  export type ContentLearningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learning?: boolean | LearningDefaultArgs<ExtArgs>
  }

  export type $ContentLearningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentLearning"
    objects: {
      files: Prisma.$FileUploadPayload<ExtArgs>[]
      learning: Prisma.$LearningPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      learningId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentLearning"]>
    composites: {}
  }

  type ContentLearningGetPayload<S extends boolean | null | undefined | ContentLearningDefaultArgs> = $Result.GetResult<Prisma.$ContentLearningPayload, S>

  type ContentLearningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentLearningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentLearningCountAggregateInputType | true
    }

  export interface ContentLearningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentLearning'], meta: { name: 'ContentLearning' } }
    /**
     * Find zero or one ContentLearning that matches the filter.
     * @param {ContentLearningFindUniqueArgs} args - Arguments to find a ContentLearning
     * @example
     * // Get one ContentLearning
     * const contentLearning = await prisma.contentLearning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentLearningFindUniqueArgs>(args: SelectSubset<T, ContentLearningFindUniqueArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentLearning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentLearningFindUniqueOrThrowArgs} args - Arguments to find a ContentLearning
     * @example
     * // Get one ContentLearning
     * const contentLearning = await prisma.contentLearning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentLearningFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentLearningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentLearning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentLearningFindFirstArgs} args - Arguments to find a ContentLearning
     * @example
     * // Get one ContentLearning
     * const contentLearning = await prisma.contentLearning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentLearningFindFirstArgs>(args?: SelectSubset<T, ContentLearningFindFirstArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentLearning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentLearningFindFirstOrThrowArgs} args - Arguments to find a ContentLearning
     * @example
     * // Get one ContentLearning
     * const contentLearning = await prisma.contentLearning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentLearningFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentLearningFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentLearnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentLearningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentLearnings
     * const contentLearnings = await prisma.contentLearning.findMany()
     * 
     * // Get first 10 ContentLearnings
     * const contentLearnings = await prisma.contentLearning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentLearningWithIdOnly = await prisma.contentLearning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentLearningFindManyArgs>(args?: SelectSubset<T, ContentLearningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentLearning.
     * @param {ContentLearningCreateArgs} args - Arguments to create a ContentLearning.
     * @example
     * // Create one ContentLearning
     * const ContentLearning = await prisma.contentLearning.create({
     *   data: {
     *     // ... data to create a ContentLearning
     *   }
     * })
     * 
     */
    create<T extends ContentLearningCreateArgs>(args: SelectSubset<T, ContentLearningCreateArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentLearnings.
     * @param {ContentLearningCreateManyArgs} args - Arguments to create many ContentLearnings.
     * @example
     * // Create many ContentLearnings
     * const contentLearning = await prisma.contentLearning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentLearningCreateManyArgs>(args?: SelectSubset<T, ContentLearningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentLearnings and returns the data saved in the database.
     * @param {ContentLearningCreateManyAndReturnArgs} args - Arguments to create many ContentLearnings.
     * @example
     * // Create many ContentLearnings
     * const contentLearning = await prisma.contentLearning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentLearnings and only return the `id`
     * const contentLearningWithIdOnly = await prisma.contentLearning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentLearningCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentLearningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentLearning.
     * @param {ContentLearningDeleteArgs} args - Arguments to delete one ContentLearning.
     * @example
     * // Delete one ContentLearning
     * const ContentLearning = await prisma.contentLearning.delete({
     *   where: {
     *     // ... filter to delete one ContentLearning
     *   }
     * })
     * 
     */
    delete<T extends ContentLearningDeleteArgs>(args: SelectSubset<T, ContentLearningDeleteArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentLearning.
     * @param {ContentLearningUpdateArgs} args - Arguments to update one ContentLearning.
     * @example
     * // Update one ContentLearning
     * const contentLearning = await prisma.contentLearning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentLearningUpdateArgs>(args: SelectSubset<T, ContentLearningUpdateArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentLearnings.
     * @param {ContentLearningDeleteManyArgs} args - Arguments to filter ContentLearnings to delete.
     * @example
     * // Delete a few ContentLearnings
     * const { count } = await prisma.contentLearning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentLearningDeleteManyArgs>(args?: SelectSubset<T, ContentLearningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentLearnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentLearningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentLearnings
     * const contentLearning = await prisma.contentLearning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentLearningUpdateManyArgs>(args: SelectSubset<T, ContentLearningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentLearnings and returns the data updated in the database.
     * @param {ContentLearningUpdateManyAndReturnArgs} args - Arguments to update many ContentLearnings.
     * @example
     * // Update many ContentLearnings
     * const contentLearning = await prisma.contentLearning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentLearnings and only return the `id`
     * const contentLearningWithIdOnly = await prisma.contentLearning.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentLearningUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentLearningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentLearning.
     * @param {ContentLearningUpsertArgs} args - Arguments to update or create a ContentLearning.
     * @example
     * // Update or create a ContentLearning
     * const contentLearning = await prisma.contentLearning.upsert({
     *   create: {
     *     // ... data to create a ContentLearning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentLearning we want to update
     *   }
     * })
     */
    upsert<T extends ContentLearningUpsertArgs>(args: SelectSubset<T, ContentLearningUpsertArgs<ExtArgs>>): Prisma__ContentLearningClient<$Result.GetResult<Prisma.$ContentLearningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentLearnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentLearningCountArgs} args - Arguments to filter ContentLearnings to count.
     * @example
     * // Count the number of ContentLearnings
     * const count = await prisma.contentLearning.count({
     *   where: {
     *     // ... the filter for the ContentLearnings we want to count
     *   }
     * })
    **/
    count<T extends ContentLearningCountArgs>(
      args?: Subset<T, ContentLearningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentLearningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentLearning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentLearningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentLearningAggregateArgs>(args: Subset<T, ContentLearningAggregateArgs>): Prisma.PrismaPromise<GetContentLearningAggregateType<T>>

    /**
     * Group by ContentLearning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentLearningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentLearningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentLearningGroupByArgs['orderBy'] }
        : { orderBy?: ContentLearningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentLearningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentLearningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentLearning model
   */
  readonly fields: ContentLearningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentLearning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentLearningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends ContentLearning$filesArgs<ExtArgs> = {}>(args?: Subset<T, ContentLearning$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learning<T extends LearningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LearningDefaultArgs<ExtArgs>>): Prisma__LearningClient<$Result.GetResult<Prisma.$LearningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentLearning model
   */
  interface ContentLearningFieldRefs {
    readonly id: FieldRef<"ContentLearning", 'Int'>
    readonly description: FieldRef<"ContentLearning", 'String'>
    readonly learningId: FieldRef<"ContentLearning", 'Int'>
    readonly createdAt: FieldRef<"ContentLearning", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentLearning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentLearning findUnique
   */
  export type ContentLearningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * Filter, which ContentLearning to fetch.
     */
    where: ContentLearningWhereUniqueInput
  }

  /**
   * ContentLearning findUniqueOrThrow
   */
  export type ContentLearningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * Filter, which ContentLearning to fetch.
     */
    where: ContentLearningWhereUniqueInput
  }

  /**
   * ContentLearning findFirst
   */
  export type ContentLearningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * Filter, which ContentLearning to fetch.
     */
    where?: ContentLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentLearnings to fetch.
     */
    orderBy?: ContentLearningOrderByWithRelationInput | ContentLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentLearnings.
     */
    cursor?: ContentLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentLearnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentLearnings.
     */
    distinct?: ContentLearningScalarFieldEnum | ContentLearningScalarFieldEnum[]
  }

  /**
   * ContentLearning findFirstOrThrow
   */
  export type ContentLearningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * Filter, which ContentLearning to fetch.
     */
    where?: ContentLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentLearnings to fetch.
     */
    orderBy?: ContentLearningOrderByWithRelationInput | ContentLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentLearnings.
     */
    cursor?: ContentLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentLearnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentLearnings.
     */
    distinct?: ContentLearningScalarFieldEnum | ContentLearningScalarFieldEnum[]
  }

  /**
   * ContentLearning findMany
   */
  export type ContentLearningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * Filter, which ContentLearnings to fetch.
     */
    where?: ContentLearningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentLearnings to fetch.
     */
    orderBy?: ContentLearningOrderByWithRelationInput | ContentLearningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentLearnings.
     */
    cursor?: ContentLearningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentLearnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentLearnings.
     */
    skip?: number
    distinct?: ContentLearningScalarFieldEnum | ContentLearningScalarFieldEnum[]
  }

  /**
   * ContentLearning create
   */
  export type ContentLearningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentLearning.
     */
    data: XOR<ContentLearningCreateInput, ContentLearningUncheckedCreateInput>
  }

  /**
   * ContentLearning createMany
   */
  export type ContentLearningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentLearnings.
     */
    data: ContentLearningCreateManyInput | ContentLearningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentLearning createManyAndReturn
   */
  export type ContentLearningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * The data used to create many ContentLearnings.
     */
    data: ContentLearningCreateManyInput | ContentLearningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentLearning update
   */
  export type ContentLearningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentLearning.
     */
    data: XOR<ContentLearningUpdateInput, ContentLearningUncheckedUpdateInput>
    /**
     * Choose, which ContentLearning to update.
     */
    where: ContentLearningWhereUniqueInput
  }

  /**
   * ContentLearning updateMany
   */
  export type ContentLearningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentLearnings.
     */
    data: XOR<ContentLearningUpdateManyMutationInput, ContentLearningUncheckedUpdateManyInput>
    /**
     * Filter which ContentLearnings to update
     */
    where?: ContentLearningWhereInput
    /**
     * Limit how many ContentLearnings to update.
     */
    limit?: number
  }

  /**
   * ContentLearning updateManyAndReturn
   */
  export type ContentLearningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * The data used to update ContentLearnings.
     */
    data: XOR<ContentLearningUpdateManyMutationInput, ContentLearningUncheckedUpdateManyInput>
    /**
     * Filter which ContentLearnings to update
     */
    where?: ContentLearningWhereInput
    /**
     * Limit how many ContentLearnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentLearning upsert
   */
  export type ContentLearningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentLearning to update in case it exists.
     */
    where: ContentLearningWhereUniqueInput
    /**
     * In case the ContentLearning found by the `where` argument doesn't exist, create a new ContentLearning with this data.
     */
    create: XOR<ContentLearningCreateInput, ContentLearningUncheckedCreateInput>
    /**
     * In case the ContentLearning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentLearningUpdateInput, ContentLearningUncheckedUpdateInput>
  }

  /**
   * ContentLearning delete
   */
  export type ContentLearningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
    /**
     * Filter which ContentLearning to delete.
     */
    where: ContentLearningWhereUniqueInput
  }

  /**
   * ContentLearning deleteMany
   */
  export type ContentLearningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentLearnings to delete
     */
    where?: ContentLearningWhereInput
    /**
     * Limit how many ContentLearnings to delete.
     */
    limit?: number
  }

  /**
   * ContentLearning.files
   */
  export type ContentLearning$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: FileUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * ContentLearning without action
   */
  export type ContentLearningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentLearning
     */
    select?: ContentLearningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentLearning
     */
    omit?: ContentLearningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentLearningInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    picture: 'picture',
    role: 'role',
    password: 'password',
    isVerified: 'isVerified',
    isTwoFactorEnabled: 'isTwoFactorEnabled',
    authMethod: 'authMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    type: 'type',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const TokkenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    type: 'type',
    expiresIn: 'expiresIn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokkenScalarFieldEnum = (typeof TokkenScalarFieldEnum)[keyof typeof TokkenScalarFieldEnum]


  export const ToolsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tool_id: 'tool_id',
    description: 'description',
    size: 'size',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ToolsScalarFieldEnum = (typeof ToolsScalarFieldEnum)[keyof typeof ToolsScalarFieldEnum]


  export const Machine_cncScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Machine_cncScalarFieldEnum = (typeof Machine_cncScalarFieldEnum)[keyof typeof Machine_cncScalarFieldEnum]


  export const WorkOvernightScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rt: 'rt',
    quantity: 'quantity',
    madeBy: 'madeBy',
    leftToMake: 'leftToMake',
    productionTime: 'productionTime',
    isArchived: 'isArchived',
    archivedAt: 'archivedAt',
    machineId: 'machineId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkOvernightScalarFieldEnum = (typeof WorkOvernightScalarFieldEnum)[keyof typeof WorkOvernightScalarFieldEnum]


  export const WorkStageScalarFieldEnum: {
    id: 'id',
    stepNumber: 'stepNumber',
    description: 'description',
    workId: 'workId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkStageScalarFieldEnum = (typeof WorkStageScalarFieldEnum)[keyof typeof WorkStageScalarFieldEnum]


  export const FileUploadScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    path: 'path',
    mimeType: 'mimeType',
    size: 'size',
    type: 'type',
    toolId: 'toolId',
    machineId: 'machineId',
    workId: 'workId',
    stageId: 'stageId',
    contentLearningId: 'contentLearningId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileUploadScalarFieldEnum = (typeof FileUploadScalarFieldEnum)[keyof typeof FileUploadScalarFieldEnum]


  export const LearningScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningScalarFieldEnum = (typeof LearningScalarFieldEnum)[keyof typeof LearningScalarFieldEnum]


  export const ContentLearningScalarFieldEnum: {
    id: 'id',
    description: 'description',
    learningId: 'learningId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentLearningScalarFieldEnum = (typeof ContentLearningScalarFieldEnum)[keyof typeof ContentLearningScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthMethod'
   */
  export type EnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod'>
    


  /**
   * Reference to a field of type 'AuthMethod[]'
   */
  export type ListEnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TokkenType'
   */
  export type EnumTokkenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokkenType'>
    


  /**
   * Reference to a field of type 'TokkenType[]'
   */
  export type ListEnumTokkenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokkenType[]'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    authMethod?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    authMethod?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    authMethod?: EnumAuthMethodWithAggregatesFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    userId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    type?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    userId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    type?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: IntNullableWithAggregatesFilter<"Account"> | number | null
    userId?: IntWithAggregatesFilter<"Account"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type TokkenWhereInput = {
    AND?: TokkenWhereInput | TokkenWhereInput[]
    OR?: TokkenWhereInput[]
    NOT?: TokkenWhereInput | TokkenWhereInput[]
    id?: IntFilter<"Tokken"> | number
    email?: StringFilter<"Tokken"> | string
    token?: StringFilter<"Tokken"> | string
    type?: EnumTokkenTypeFilter<"Tokken"> | $Enums.TokkenType
    expiresIn?: DateTimeFilter<"Tokken"> | Date | string
    createdAt?: DateTimeFilter<"Tokken"> | Date | string
    updatedAt?: DateTimeFilter<"Tokken"> | Date | string
  }

  export type TokkenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokkenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: TokkenWhereInput | TokkenWhereInput[]
    OR?: TokkenWhereInput[]
    NOT?: TokkenWhereInput | TokkenWhereInput[]
    email?: StringFilter<"Tokken"> | string
    type?: EnumTokkenTypeFilter<"Tokken"> | $Enums.TokkenType
    expiresIn?: DateTimeFilter<"Tokken"> | Date | string
    createdAt?: DateTimeFilter<"Tokken"> | Date | string
    updatedAt?: DateTimeFilter<"Tokken"> | Date | string
  }, "id" | "token">

  export type TokkenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokkenCountOrderByAggregateInput
    _avg?: TokkenAvgOrderByAggregateInput
    _max?: TokkenMaxOrderByAggregateInput
    _min?: TokkenMinOrderByAggregateInput
    _sum?: TokkenSumOrderByAggregateInput
  }

  export type TokkenScalarWhereWithAggregatesInput = {
    AND?: TokkenScalarWhereWithAggregatesInput | TokkenScalarWhereWithAggregatesInput[]
    OR?: TokkenScalarWhereWithAggregatesInput[]
    NOT?: TokkenScalarWhereWithAggregatesInput | TokkenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tokken"> | number
    email?: StringWithAggregatesFilter<"Tokken"> | string
    token?: StringWithAggregatesFilter<"Tokken"> | string
    type?: EnumTokkenTypeWithAggregatesFilter<"Tokken"> | $Enums.TokkenType
    expiresIn?: DateTimeWithAggregatesFilter<"Tokken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Tokken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tokken"> | Date | string
  }

  export type toolsWhereInput = {
    AND?: toolsWhereInput | toolsWhereInput[]
    OR?: toolsWhereInput[]
    NOT?: toolsWhereInput | toolsWhereInput[]
    id?: IntFilter<"tools"> | number
    name?: StringFilter<"tools"> | string
    tool_id?: StringFilter<"tools"> | string
    description?: StringNullableFilter<"tools"> | string | null
    size?: StringNullableFilter<"tools"> | string | null
    type?: StringNullableFilter<"tools"> | string | null
    createdAt?: DateTimeFilter<"tools"> | Date | string
    updatedAt?: DateTimeFilter<"tools"> | Date | string
    files?: FileUploadListRelationFilter
  }

  export type toolsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tool_id?: SortOrder
    description?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: FileUploadOrderByRelationAggregateInput
  }

  export type toolsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tool_id?: string
    AND?: toolsWhereInput | toolsWhereInput[]
    OR?: toolsWhereInput[]
    NOT?: toolsWhereInput | toolsWhereInput[]
    name?: StringFilter<"tools"> | string
    description?: StringNullableFilter<"tools"> | string | null
    size?: StringNullableFilter<"tools"> | string | null
    type?: StringNullableFilter<"tools"> | string | null
    createdAt?: DateTimeFilter<"tools"> | Date | string
    updatedAt?: DateTimeFilter<"tools"> | Date | string
    files?: FileUploadListRelationFilter
  }, "id" | "tool_id">

  export type toolsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tool_id?: SortOrder
    description?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: toolsCountOrderByAggregateInput
    _avg?: toolsAvgOrderByAggregateInput
    _max?: toolsMaxOrderByAggregateInput
    _min?: toolsMinOrderByAggregateInput
    _sum?: toolsSumOrderByAggregateInput
  }

  export type toolsScalarWhereWithAggregatesInput = {
    AND?: toolsScalarWhereWithAggregatesInput | toolsScalarWhereWithAggregatesInput[]
    OR?: toolsScalarWhereWithAggregatesInput[]
    NOT?: toolsScalarWhereWithAggregatesInput | toolsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tools"> | number
    name?: StringWithAggregatesFilter<"tools"> | string
    tool_id?: StringWithAggregatesFilter<"tools"> | string
    description?: StringNullableWithAggregatesFilter<"tools"> | string | null
    size?: StringNullableWithAggregatesFilter<"tools"> | string | null
    type?: StringNullableWithAggregatesFilter<"tools"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"tools"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tools"> | Date | string
  }

  export type machine_cncWhereInput = {
    AND?: machine_cncWhereInput | machine_cncWhereInput[]
    OR?: machine_cncWhereInput[]
    NOT?: machine_cncWhereInput | machine_cncWhereInput[]
    id?: IntFilter<"machine_cnc"> | number
    name?: StringFilter<"machine_cnc"> | string
    description?: StringNullableFilter<"machine_cnc"> | string | null
    createdAt?: DateTimeFilter<"machine_cnc"> | Date | string
    updatedAt?: DateTimeFilter<"machine_cnc"> | Date | string
    files?: FileUploadListRelationFilter
    workOvernights?: WorkOvernightListRelationFilter
  }

  export type machine_cncOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: FileUploadOrderByRelationAggregateInput
    workOvernights?: workOvernightOrderByRelationAggregateInput
  }

  export type machine_cncWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: machine_cncWhereInput | machine_cncWhereInput[]
    OR?: machine_cncWhereInput[]
    NOT?: machine_cncWhereInput | machine_cncWhereInput[]
    name?: StringFilter<"machine_cnc"> | string
    description?: StringNullableFilter<"machine_cnc"> | string | null
    createdAt?: DateTimeFilter<"machine_cnc"> | Date | string
    updatedAt?: DateTimeFilter<"machine_cnc"> | Date | string
    files?: FileUploadListRelationFilter
    workOvernights?: WorkOvernightListRelationFilter
  }, "id">

  export type machine_cncOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: machine_cncCountOrderByAggregateInput
    _avg?: machine_cncAvgOrderByAggregateInput
    _max?: machine_cncMaxOrderByAggregateInput
    _min?: machine_cncMinOrderByAggregateInput
    _sum?: machine_cncSumOrderByAggregateInput
  }

  export type machine_cncScalarWhereWithAggregatesInput = {
    AND?: machine_cncScalarWhereWithAggregatesInput | machine_cncScalarWhereWithAggregatesInput[]
    OR?: machine_cncScalarWhereWithAggregatesInput[]
    NOT?: machine_cncScalarWhereWithAggregatesInput | machine_cncScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"machine_cnc"> | number
    name?: StringWithAggregatesFilter<"machine_cnc"> | string
    description?: StringNullableWithAggregatesFilter<"machine_cnc"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"machine_cnc"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"machine_cnc"> | Date | string
  }

  export type workOvernightWhereInput = {
    AND?: workOvernightWhereInput | workOvernightWhereInput[]
    OR?: workOvernightWhereInput[]
    NOT?: workOvernightWhereInput | workOvernightWhereInput[]
    id?: IntFilter<"workOvernight"> | number
    name?: StringNullableFilter<"workOvernight"> | string | null
    rt?: StringFilter<"workOvernight"> | string
    quantity?: IntFilter<"workOvernight"> | number
    madeBy?: StringNullableFilter<"workOvernight"> | string | null
    leftToMake?: IntFilter<"workOvernight"> | number
    productionTime?: StringNullableFilter<"workOvernight"> | string | null
    isArchived?: BoolFilter<"workOvernight"> | boolean
    archivedAt?: DateTimeNullableFilter<"workOvernight"> | Date | string | null
    machineId?: IntFilter<"workOvernight"> | number
    createdAt?: DateTimeFilter<"workOvernight"> | Date | string
    updatedAt?: DateTimeFilter<"workOvernight"> | Date | string
    machine?: XOR<Machine_cncScalarRelationFilter, machine_cncWhereInput>
    stages?: WorkStageListRelationFilter
    files?: FileUploadListRelationFilter
  }

  export type workOvernightOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    rt?: SortOrder
    quantity?: SortOrder
    madeBy?: SortOrderInput | SortOrder
    leftToMake?: SortOrder
    productionTime?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    machineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    machine?: machine_cncOrderByWithRelationInput
    stages?: workStageOrderByRelationAggregateInput
    files?: FileUploadOrderByRelationAggregateInput
  }

  export type workOvernightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rt?: string
    AND?: workOvernightWhereInput | workOvernightWhereInput[]
    OR?: workOvernightWhereInput[]
    NOT?: workOvernightWhereInput | workOvernightWhereInput[]
    name?: StringNullableFilter<"workOvernight"> | string | null
    quantity?: IntFilter<"workOvernight"> | number
    madeBy?: StringNullableFilter<"workOvernight"> | string | null
    leftToMake?: IntFilter<"workOvernight"> | number
    productionTime?: StringNullableFilter<"workOvernight"> | string | null
    isArchived?: BoolFilter<"workOvernight"> | boolean
    archivedAt?: DateTimeNullableFilter<"workOvernight"> | Date | string | null
    machineId?: IntFilter<"workOvernight"> | number
    createdAt?: DateTimeFilter<"workOvernight"> | Date | string
    updatedAt?: DateTimeFilter<"workOvernight"> | Date | string
    machine?: XOR<Machine_cncScalarRelationFilter, machine_cncWhereInput>
    stages?: WorkStageListRelationFilter
    files?: FileUploadListRelationFilter
  }, "id" | "rt">

  export type workOvernightOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    rt?: SortOrder
    quantity?: SortOrder
    madeBy?: SortOrderInput | SortOrder
    leftToMake?: SortOrder
    productionTime?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    machineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: workOvernightCountOrderByAggregateInput
    _avg?: workOvernightAvgOrderByAggregateInput
    _max?: workOvernightMaxOrderByAggregateInput
    _min?: workOvernightMinOrderByAggregateInput
    _sum?: workOvernightSumOrderByAggregateInput
  }

  export type workOvernightScalarWhereWithAggregatesInput = {
    AND?: workOvernightScalarWhereWithAggregatesInput | workOvernightScalarWhereWithAggregatesInput[]
    OR?: workOvernightScalarWhereWithAggregatesInput[]
    NOT?: workOvernightScalarWhereWithAggregatesInput | workOvernightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workOvernight"> | number
    name?: StringNullableWithAggregatesFilter<"workOvernight"> | string | null
    rt?: StringWithAggregatesFilter<"workOvernight"> | string
    quantity?: IntWithAggregatesFilter<"workOvernight"> | number
    madeBy?: StringNullableWithAggregatesFilter<"workOvernight"> | string | null
    leftToMake?: IntWithAggregatesFilter<"workOvernight"> | number
    productionTime?: StringNullableWithAggregatesFilter<"workOvernight"> | string | null
    isArchived?: BoolWithAggregatesFilter<"workOvernight"> | boolean
    archivedAt?: DateTimeNullableWithAggregatesFilter<"workOvernight"> | Date | string | null
    machineId?: IntWithAggregatesFilter<"workOvernight"> | number
    createdAt?: DateTimeWithAggregatesFilter<"workOvernight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"workOvernight"> | Date | string
  }

  export type workStageWhereInput = {
    AND?: workStageWhereInput | workStageWhereInput[]
    OR?: workStageWhereInput[]
    NOT?: workStageWhereInput | workStageWhereInput[]
    id?: IntFilter<"workStage"> | number
    stepNumber?: IntFilter<"workStage"> | number
    description?: StringNullableFilter<"workStage"> | string | null
    workId?: IntFilter<"workStage"> | number
    createdAt?: DateTimeFilter<"workStage"> | Date | string
    updatedAt?: DateTimeFilter<"workStage"> | Date | string
    work?: XOR<WorkOvernightScalarRelationFilter, workOvernightWhereInput>
    files?: FileUploadListRelationFilter
  }

  export type workStageOrderByWithRelationInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: workOvernightOrderByWithRelationInput
    files?: FileUploadOrderByRelationAggregateInput
  }

  export type workStageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workStageWhereInput | workStageWhereInput[]
    OR?: workStageWhereInput[]
    NOT?: workStageWhereInput | workStageWhereInput[]
    stepNumber?: IntFilter<"workStage"> | number
    description?: StringNullableFilter<"workStage"> | string | null
    workId?: IntFilter<"workStage"> | number
    createdAt?: DateTimeFilter<"workStage"> | Date | string
    updatedAt?: DateTimeFilter<"workStage"> | Date | string
    work?: XOR<WorkOvernightScalarRelationFilter, workOvernightWhereInput>
    files?: FileUploadListRelationFilter
  }, "id">

  export type workStageOrderByWithAggregationInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: workStageCountOrderByAggregateInput
    _avg?: workStageAvgOrderByAggregateInput
    _max?: workStageMaxOrderByAggregateInput
    _min?: workStageMinOrderByAggregateInput
    _sum?: workStageSumOrderByAggregateInput
  }

  export type workStageScalarWhereWithAggregatesInput = {
    AND?: workStageScalarWhereWithAggregatesInput | workStageScalarWhereWithAggregatesInput[]
    OR?: workStageScalarWhereWithAggregatesInput[]
    NOT?: workStageScalarWhereWithAggregatesInput | workStageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workStage"> | number
    stepNumber?: IntWithAggregatesFilter<"workStage"> | number
    description?: StringNullableWithAggregatesFilter<"workStage"> | string | null
    workId?: IntWithAggregatesFilter<"workStage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"workStage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"workStage"> | Date | string
  }

  export type FileUploadWhereInput = {
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    id?: IntFilter<"FileUpload"> | number
    filename?: StringFilter<"FileUpload"> | string
    originalName?: StringFilter<"FileUpload"> | string
    path?: StringFilter<"FileUpload"> | string
    mimeType?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    type?: EnumFileTypeFilter<"FileUpload"> | $Enums.FileType
    toolId?: IntNullableFilter<"FileUpload"> | number | null
    machineId?: IntNullableFilter<"FileUpload"> | number | null
    workId?: IntNullableFilter<"FileUpload"> | number | null
    stageId?: IntNullableFilter<"FileUpload"> | number | null
    contentLearningId?: IntNullableFilter<"FileUpload"> | number | null
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    tool?: XOR<ToolsNullableScalarRelationFilter, toolsWhereInput> | null
    machine?: XOR<Machine_cncNullableScalarRelationFilter, machine_cncWhereInput> | null
    work?: XOR<WorkOvernightNullableScalarRelationFilter, workOvernightWhereInput> | null
    stage?: XOR<WorkStageNullableScalarRelationFilter, workStageWhereInput> | null
    contentLearning?: XOR<ContentLearningNullableScalarRelationFilter, ContentLearningWhereInput> | null
  }

  export type FileUploadOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    type?: SortOrder
    toolId?: SortOrderInput | SortOrder
    machineId?: SortOrderInput | SortOrder
    workId?: SortOrderInput | SortOrder
    stageId?: SortOrderInput | SortOrder
    contentLearningId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tool?: toolsOrderByWithRelationInput
    machine?: machine_cncOrderByWithRelationInput
    work?: workOvernightOrderByWithRelationInput
    stage?: workStageOrderByWithRelationInput
    contentLearning?: ContentLearningOrderByWithRelationInput
  }

  export type FileUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    filename?: StringFilter<"FileUpload"> | string
    originalName?: StringFilter<"FileUpload"> | string
    path?: StringFilter<"FileUpload"> | string
    mimeType?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    type?: EnumFileTypeFilter<"FileUpload"> | $Enums.FileType
    toolId?: IntNullableFilter<"FileUpload"> | number | null
    machineId?: IntNullableFilter<"FileUpload"> | number | null
    workId?: IntNullableFilter<"FileUpload"> | number | null
    stageId?: IntNullableFilter<"FileUpload"> | number | null
    contentLearningId?: IntNullableFilter<"FileUpload"> | number | null
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    tool?: XOR<ToolsNullableScalarRelationFilter, toolsWhereInput> | null
    machine?: XOR<Machine_cncNullableScalarRelationFilter, machine_cncWhereInput> | null
    work?: XOR<WorkOvernightNullableScalarRelationFilter, workOvernightWhereInput> | null
    stage?: XOR<WorkStageNullableScalarRelationFilter, workStageWhereInput> | null
    contentLearning?: XOR<ContentLearningNullableScalarRelationFilter, ContentLearningWhereInput> | null
  }, "id">

  export type FileUploadOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    type?: SortOrder
    toolId?: SortOrderInput | SortOrder
    machineId?: SortOrderInput | SortOrder
    workId?: SortOrderInput | SortOrder
    stageId?: SortOrderInput | SortOrder
    contentLearningId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileUploadCountOrderByAggregateInput
    _avg?: FileUploadAvgOrderByAggregateInput
    _max?: FileUploadMaxOrderByAggregateInput
    _min?: FileUploadMinOrderByAggregateInput
    _sum?: FileUploadSumOrderByAggregateInput
  }

  export type FileUploadScalarWhereWithAggregatesInput = {
    AND?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    OR?: FileUploadScalarWhereWithAggregatesInput[]
    NOT?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FileUpload"> | number
    filename?: StringWithAggregatesFilter<"FileUpload"> | string
    originalName?: StringWithAggregatesFilter<"FileUpload"> | string
    path?: StringWithAggregatesFilter<"FileUpload"> | string
    mimeType?: StringWithAggregatesFilter<"FileUpload"> | string
    size?: IntWithAggregatesFilter<"FileUpload"> | number
    type?: EnumFileTypeWithAggregatesFilter<"FileUpload"> | $Enums.FileType
    toolId?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    machineId?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    workId?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    stageId?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    contentLearningId?: IntNullableWithAggregatesFilter<"FileUpload"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
  }

  export type LearningWhereInput = {
    AND?: LearningWhereInput | LearningWhereInput[]
    OR?: LearningWhereInput[]
    NOT?: LearningWhereInput | LearningWhereInput[]
    id?: IntFilter<"Learning"> | number
    title?: StringFilter<"Learning"> | string
    createdAt?: DateTimeFilter<"Learning"> | Date | string
    updatedAt?: DateTimeFilter<"Learning"> | Date | string
    content?: ContentLearningListRelationFilter
  }

  export type LearningOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: ContentLearningOrderByRelationAggregateInput
  }

  export type LearningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LearningWhereInput | LearningWhereInput[]
    OR?: LearningWhereInput[]
    NOT?: LearningWhereInput | LearningWhereInput[]
    title?: StringFilter<"Learning"> | string
    createdAt?: DateTimeFilter<"Learning"> | Date | string
    updatedAt?: DateTimeFilter<"Learning"> | Date | string
    content?: ContentLearningListRelationFilter
  }, "id">

  export type LearningOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningCountOrderByAggregateInput
    _avg?: LearningAvgOrderByAggregateInput
    _max?: LearningMaxOrderByAggregateInput
    _min?: LearningMinOrderByAggregateInput
    _sum?: LearningSumOrderByAggregateInput
  }

  export type LearningScalarWhereWithAggregatesInput = {
    AND?: LearningScalarWhereWithAggregatesInput | LearningScalarWhereWithAggregatesInput[]
    OR?: LearningScalarWhereWithAggregatesInput[]
    NOT?: LearningScalarWhereWithAggregatesInput | LearningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Learning"> | number
    title?: StringWithAggregatesFilter<"Learning"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Learning"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Learning"> | Date | string
  }

  export type ContentLearningWhereInput = {
    AND?: ContentLearningWhereInput | ContentLearningWhereInput[]
    OR?: ContentLearningWhereInput[]
    NOT?: ContentLearningWhereInput | ContentLearningWhereInput[]
    id?: IntFilter<"ContentLearning"> | number
    description?: StringFilter<"ContentLearning"> | string
    learningId?: IntFilter<"ContentLearning"> | number
    createdAt?: DateTimeFilter<"ContentLearning"> | Date | string
    updatedAt?: DateTimeFilter<"ContentLearning"> | Date | string
    files?: FileUploadListRelationFilter
    learning?: XOR<LearningScalarRelationFilter, LearningWhereInput>
  }

  export type ContentLearningOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    learningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: FileUploadOrderByRelationAggregateInput
    learning?: LearningOrderByWithRelationInput
  }

  export type ContentLearningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContentLearningWhereInput | ContentLearningWhereInput[]
    OR?: ContentLearningWhereInput[]
    NOT?: ContentLearningWhereInput | ContentLearningWhereInput[]
    description?: StringFilter<"ContentLearning"> | string
    learningId?: IntFilter<"ContentLearning"> | number
    createdAt?: DateTimeFilter<"ContentLearning"> | Date | string
    updatedAt?: DateTimeFilter<"ContentLearning"> | Date | string
    files?: FileUploadListRelationFilter
    learning?: XOR<LearningScalarRelationFilter, LearningWhereInput>
  }, "id">

  export type ContentLearningOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    learningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentLearningCountOrderByAggregateInput
    _avg?: ContentLearningAvgOrderByAggregateInput
    _max?: ContentLearningMaxOrderByAggregateInput
    _min?: ContentLearningMinOrderByAggregateInput
    _sum?: ContentLearningSumOrderByAggregateInput
  }

  export type ContentLearningScalarWhereWithAggregatesInput = {
    AND?: ContentLearningScalarWhereWithAggregatesInput | ContentLearningScalarWhereWithAggregatesInput[]
    OR?: ContentLearningScalarWhereWithAggregatesInput[]
    NOT?: ContentLearningScalarWhereWithAggregatesInput | ContentLearningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContentLearning"> | number
    description?: StringWithAggregatesFilter<"ContentLearning"> | string
    learningId?: IntWithAggregatesFilter<"ContentLearning"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContentLearning"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentLearning"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    picture?: string | null
    role?: $Enums.UserRole
    password: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    picture?: string | null
    role?: $Enums.UserRole
    password: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    picture?: string | null
    role?: $Enums.UserRole
    password: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    provider: string
    providerAccountId: string
    type: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    provider: string
    providerAccountId: string
    type: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: number
    provider: string
    providerAccountId: string
    type: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokkenCreateInput = {
    email: string
    token: string
    type: $Enums.TokkenType
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokkenUncheckedCreateInput = {
    id?: number
    email: string
    token: string
    type: $Enums.TokkenType
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokkenUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokkenTypeFieldUpdateOperationsInput | $Enums.TokkenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokkenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokkenTypeFieldUpdateOperationsInput | $Enums.TokkenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokkenCreateManyInput = {
    id?: number
    email: string
    token: string
    type: $Enums.TokkenType
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokkenUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokkenTypeFieldUpdateOperationsInput | $Enums.TokkenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokkenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokkenTypeFieldUpdateOperationsInput | $Enums.TokkenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toolsCreateInput = {
    name: string
    tool_id: string
    description?: string | null
    size?: string | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadCreateNestedManyWithoutToolInput
  }

  export type toolsUncheckedCreateInput = {
    id?: number
    name: string
    tool_id: string
    description?: string | null
    size?: string | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutToolInput
  }

  export type toolsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tool_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUpdateManyWithoutToolNestedInput
  }

  export type toolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tool_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutToolNestedInput
  }

  export type toolsCreateManyInput = {
    id?: number
    name: string
    tool_id: string
    description?: string | null
    size?: string | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type toolsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tool_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tool_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type machine_cncCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadCreateNestedManyWithoutMachineInput
    workOvernights?: workOvernightCreateNestedManyWithoutMachineInput
  }

  export type machine_cncUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutMachineInput
    workOvernights?: workOvernightUncheckedCreateNestedManyWithoutMachineInput
  }

  export type machine_cncUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUpdateManyWithoutMachineNestedInput
    workOvernights?: workOvernightUpdateManyWithoutMachineNestedInput
  }

  export type machine_cncUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutMachineNestedInput
    workOvernights?: workOvernightUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type machine_cncCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type machine_cncUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type machine_cncUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workOvernightCreateInput = {
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machine: machine_cncCreateNestedOneWithoutWorkOvernightsInput
    stages?: workStageCreateNestedManyWithoutWorkInput
    files?: FileUploadCreateNestedManyWithoutWorkInput
  }

  export type workOvernightUncheckedCreateInput = {
    id?: number
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    machineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: workStageUncheckedCreateNestedManyWithoutWorkInput
    files?: FileUploadUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workOvernightUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: machine_cncUpdateOneRequiredWithoutWorkOvernightsNestedInput
    stages?: workStageUpdateManyWithoutWorkNestedInput
    files?: FileUploadUpdateManyWithoutWorkNestedInput
  }

  export type workOvernightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    machineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: workStageUncheckedUpdateManyWithoutWorkNestedInput
    files?: FileUploadUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type workOvernightCreateManyInput = {
    id?: number
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    machineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workOvernightUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workOvernightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    machineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workStageCreateInput = {
    stepNumber: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work: workOvernightCreateNestedOneWithoutStagesInput
    files?: FileUploadCreateNestedManyWithoutStageInput
  }

  export type workStageUncheckedCreateInput = {
    id?: number
    stepNumber: number
    description?: string | null
    workId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutStageInput
  }

  export type workStageUpdateInput = {
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: workOvernightUpdateOneRequiredWithoutStagesNestedInput
    files?: FileUploadUpdateManyWithoutStageNestedInput
  }

  export type workStageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutStageNestedInput
  }

  export type workStageCreateManyInput = {
    id?: number
    stepNumber: number
    description?: string | null
    workId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workStageUpdateManyMutationInput = {
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workStageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateInput = {
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    tool?: toolsCreateNestedOneWithoutFilesInput
    machine?: machine_cncCreateNestedOneWithoutFilesInput
    work?: workOvernightCreateNestedOneWithoutFilesInput
    stage?: workStageCreateNestedOneWithoutFilesInput
    contentLearning?: ContentLearningCreateNestedOneWithoutFilesInput
  }

  export type FileUploadUncheckedCreateInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    workId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: toolsUpdateOneWithoutFilesNestedInput
    machine?: machine_cncUpdateOneWithoutFilesNestedInput
    work?: workOvernightUpdateOneWithoutFilesNestedInput
    stage?: workStageUpdateOneWithoutFilesNestedInput
    contentLearning?: ContentLearningUpdateOneWithoutFilesNestedInput
  }

  export type FileUploadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateManyInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    workId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentLearningCreateNestedManyWithoutLearningInput
  }

  export type LearningUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentLearningUncheckedCreateNestedManyWithoutLearningInput
  }

  export type LearningUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentLearningUpdateManyWithoutLearningNestedInput
  }

  export type LearningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentLearningUncheckedUpdateManyWithoutLearningNestedInput
  }

  export type LearningCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentLearningCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadCreateNestedManyWithoutContentLearningInput
    learning: LearningCreateNestedOneWithoutContentInput
  }

  export type ContentLearningUncheckedCreateInput = {
    id?: number
    description: string
    learningId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutContentLearningInput
  }

  export type ContentLearningUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUpdateManyWithoutContentLearningNestedInput
    learning?: LearningUpdateOneRequiredWithoutContentNestedInput
  }

  export type ContentLearningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    learningId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutContentLearningNestedInput
  }

  export type ContentLearningCreateManyInput = {
    id?: number
    description: string
    learningId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentLearningUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentLearningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    learningId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    authMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    type?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    type?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    type?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTokkenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokkenType | EnumTokkenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokkenTypeFilter<$PrismaModel> | $Enums.TokkenType
  }

  export type TokkenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokkenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokkenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokkenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokkenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTokkenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokkenType | EnumTokkenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokkenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokkenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokkenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokkenTypeFilter<$PrismaModel>
  }

  export type FileUploadListRelationFilter = {
    every?: FileUploadWhereInput
    some?: FileUploadWhereInput
    none?: FileUploadWhereInput
  }

  export type FileUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type toolsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tool_id?: SortOrder
    description?: SortOrder
    size?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type toolsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type toolsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tool_id?: SortOrder
    description?: SortOrder
    size?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type toolsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tool_id?: SortOrder
    description?: SortOrder
    size?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type toolsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkOvernightListRelationFilter = {
    every?: workOvernightWhereInput
    some?: workOvernightWhereInput
    none?: workOvernightWhereInput
  }

  export type workOvernightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type machine_cncCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type machine_cncAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type machine_cncMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type machine_cncMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type machine_cncSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Machine_cncScalarRelationFilter = {
    is?: machine_cncWhereInput
    isNot?: machine_cncWhereInput
  }

  export type WorkStageListRelationFilter = {
    every?: workStageWhereInput
    some?: workStageWhereInput
    none?: workStageWhereInput
  }

  export type workStageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workOvernightCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rt?: SortOrder
    quantity?: SortOrder
    madeBy?: SortOrder
    leftToMake?: SortOrder
    productionTime?: SortOrder
    isArchived?: SortOrder
    archivedAt?: SortOrder
    machineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workOvernightAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    leftToMake?: SortOrder
    machineId?: SortOrder
  }

  export type workOvernightMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rt?: SortOrder
    quantity?: SortOrder
    madeBy?: SortOrder
    leftToMake?: SortOrder
    productionTime?: SortOrder
    isArchived?: SortOrder
    archivedAt?: SortOrder
    machineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workOvernightMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rt?: SortOrder
    quantity?: SortOrder
    madeBy?: SortOrder
    leftToMake?: SortOrder
    productionTime?: SortOrder
    isArchived?: SortOrder
    archivedAt?: SortOrder
    machineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workOvernightSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    leftToMake?: SortOrder
    machineId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkOvernightScalarRelationFilter = {
    is?: workOvernightWhereInput
    isNot?: workOvernightWhereInput
  }

  export type workStageCountOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workStageAvgOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    workId?: SortOrder
  }

  export type workStageMaxOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workStageMinOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workStageSumOrderByAggregateInput = {
    id?: SortOrder
    stepNumber?: SortOrder
    workId?: SortOrder
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type ToolsNullableScalarRelationFilter = {
    is?: toolsWhereInput | null
    isNot?: toolsWhereInput | null
  }

  export type Machine_cncNullableScalarRelationFilter = {
    is?: machine_cncWhereInput | null
    isNot?: machine_cncWhereInput | null
  }

  export type WorkOvernightNullableScalarRelationFilter = {
    is?: workOvernightWhereInput | null
    isNot?: workOvernightWhereInput | null
  }

  export type WorkStageNullableScalarRelationFilter = {
    is?: workStageWhereInput | null
    isNot?: workStageWhereInput | null
  }

  export type ContentLearningNullableScalarRelationFilter = {
    is?: ContentLearningWhereInput | null
    isNot?: ContentLearningWhereInput | null
  }

  export type FileUploadCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    type?: SortOrder
    toolId?: SortOrder
    machineId?: SortOrder
    workId?: SortOrder
    stageId?: SortOrder
    contentLearningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    toolId?: SortOrder
    machineId?: SortOrder
    workId?: SortOrder
    stageId?: SortOrder
    contentLearningId?: SortOrder
  }

  export type FileUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    type?: SortOrder
    toolId?: SortOrder
    machineId?: SortOrder
    workId?: SortOrder
    stageId?: SortOrder
    contentLearningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    type?: SortOrder
    toolId?: SortOrder
    machineId?: SortOrder
    workId?: SortOrder
    stageId?: SortOrder
    contentLearningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    toolId?: SortOrder
    machineId?: SortOrder
    workId?: SortOrder
    stageId?: SortOrder
    contentLearningId?: SortOrder
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type ContentLearningListRelationFilter = {
    every?: ContentLearningWhereInput
    some?: ContentLearningWhereInput
    none?: ContentLearningWhereInput
  }

  export type ContentLearningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LearningMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LearningScalarRelationFilter = {
    is?: LearningWhereInput
    isNot?: LearningWhereInput
  }

  export type ContentLearningCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    learningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentLearningAvgOrderByAggregateInput = {
    id?: SortOrder
    learningId?: SortOrder
  }

  export type ContentLearningMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    learningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentLearningMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    learningId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentLearningSumOrderByAggregateInput = {
    id?: SortOrder
    learningId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAuthMethodFieldUpdateOperationsInput = {
    set?: $Enums.AuthMethod
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type EnumTokkenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokkenType
  }

  export type FileUploadCreateNestedManyWithoutToolInput = {
    create?: XOR<FileUploadCreateWithoutToolInput, FileUploadUncheckedCreateWithoutToolInput> | FileUploadCreateWithoutToolInput[] | FileUploadUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutToolInput | FileUploadCreateOrConnectWithoutToolInput[]
    createMany?: FileUploadCreateManyToolInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<FileUploadCreateWithoutToolInput, FileUploadUncheckedCreateWithoutToolInput> | FileUploadCreateWithoutToolInput[] | FileUploadUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutToolInput | FileUploadCreateOrConnectWithoutToolInput[]
    createMany?: FileUploadCreateManyToolInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type FileUploadUpdateManyWithoutToolNestedInput = {
    create?: XOR<FileUploadCreateWithoutToolInput, FileUploadUncheckedCreateWithoutToolInput> | FileUploadCreateWithoutToolInput[] | FileUploadUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutToolInput | FileUploadCreateOrConnectWithoutToolInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutToolInput | FileUploadUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: FileUploadCreateManyToolInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutToolInput | FileUploadUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutToolInput | FileUploadUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<FileUploadCreateWithoutToolInput, FileUploadUncheckedCreateWithoutToolInput> | FileUploadCreateWithoutToolInput[] | FileUploadUncheckedCreateWithoutToolInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutToolInput | FileUploadCreateOrConnectWithoutToolInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutToolInput | FileUploadUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: FileUploadCreateManyToolInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutToolInput | FileUploadUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutToolInput | FileUploadUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type FileUploadCreateNestedManyWithoutMachineInput = {
    create?: XOR<FileUploadCreateWithoutMachineInput, FileUploadUncheckedCreateWithoutMachineInput> | FileUploadCreateWithoutMachineInput[] | FileUploadUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutMachineInput | FileUploadCreateOrConnectWithoutMachineInput[]
    createMany?: FileUploadCreateManyMachineInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type workOvernightCreateNestedManyWithoutMachineInput = {
    create?: XOR<workOvernightCreateWithoutMachineInput, workOvernightUncheckedCreateWithoutMachineInput> | workOvernightCreateWithoutMachineInput[] | workOvernightUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: workOvernightCreateOrConnectWithoutMachineInput | workOvernightCreateOrConnectWithoutMachineInput[]
    createMany?: workOvernightCreateManyMachineInputEnvelope
    connect?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<FileUploadCreateWithoutMachineInput, FileUploadUncheckedCreateWithoutMachineInput> | FileUploadCreateWithoutMachineInput[] | FileUploadUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutMachineInput | FileUploadCreateOrConnectWithoutMachineInput[]
    createMany?: FileUploadCreateManyMachineInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type workOvernightUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<workOvernightCreateWithoutMachineInput, workOvernightUncheckedCreateWithoutMachineInput> | workOvernightCreateWithoutMachineInput[] | workOvernightUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: workOvernightCreateOrConnectWithoutMachineInput | workOvernightCreateOrConnectWithoutMachineInput[]
    createMany?: workOvernightCreateManyMachineInputEnvelope
    connect?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
  }

  export type FileUploadUpdateManyWithoutMachineNestedInput = {
    create?: XOR<FileUploadCreateWithoutMachineInput, FileUploadUncheckedCreateWithoutMachineInput> | FileUploadCreateWithoutMachineInput[] | FileUploadUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutMachineInput | FileUploadCreateOrConnectWithoutMachineInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutMachineInput | FileUploadUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: FileUploadCreateManyMachineInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutMachineInput | FileUploadUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutMachineInput | FileUploadUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type workOvernightUpdateManyWithoutMachineNestedInput = {
    create?: XOR<workOvernightCreateWithoutMachineInput, workOvernightUncheckedCreateWithoutMachineInput> | workOvernightCreateWithoutMachineInput[] | workOvernightUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: workOvernightCreateOrConnectWithoutMachineInput | workOvernightCreateOrConnectWithoutMachineInput[]
    upsert?: workOvernightUpsertWithWhereUniqueWithoutMachineInput | workOvernightUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: workOvernightCreateManyMachineInputEnvelope
    set?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    disconnect?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    delete?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    connect?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    update?: workOvernightUpdateWithWhereUniqueWithoutMachineInput | workOvernightUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: workOvernightUpdateManyWithWhereWithoutMachineInput | workOvernightUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: workOvernightScalarWhereInput | workOvernightScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutMachineNestedInput = {
    create?: XOR<FileUploadCreateWithoutMachineInput, FileUploadUncheckedCreateWithoutMachineInput> | FileUploadCreateWithoutMachineInput[] | FileUploadUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutMachineInput | FileUploadCreateOrConnectWithoutMachineInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutMachineInput | FileUploadUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: FileUploadCreateManyMachineInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutMachineInput | FileUploadUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutMachineInput | FileUploadUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type workOvernightUncheckedUpdateManyWithoutMachineNestedInput = {
    create?: XOR<workOvernightCreateWithoutMachineInput, workOvernightUncheckedCreateWithoutMachineInput> | workOvernightCreateWithoutMachineInput[] | workOvernightUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: workOvernightCreateOrConnectWithoutMachineInput | workOvernightCreateOrConnectWithoutMachineInput[]
    upsert?: workOvernightUpsertWithWhereUniqueWithoutMachineInput | workOvernightUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: workOvernightCreateManyMachineInputEnvelope
    set?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    disconnect?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    delete?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    connect?: workOvernightWhereUniqueInput | workOvernightWhereUniqueInput[]
    update?: workOvernightUpdateWithWhereUniqueWithoutMachineInput | workOvernightUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: workOvernightUpdateManyWithWhereWithoutMachineInput | workOvernightUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: workOvernightScalarWhereInput | workOvernightScalarWhereInput[]
  }

  export type machine_cncCreateNestedOneWithoutWorkOvernightsInput = {
    create?: XOR<machine_cncCreateWithoutWorkOvernightsInput, machine_cncUncheckedCreateWithoutWorkOvernightsInput>
    connectOrCreate?: machine_cncCreateOrConnectWithoutWorkOvernightsInput
    connect?: machine_cncWhereUniqueInput
  }

  export type workStageCreateNestedManyWithoutWorkInput = {
    create?: XOR<workStageCreateWithoutWorkInput, workStageUncheckedCreateWithoutWorkInput> | workStageCreateWithoutWorkInput[] | workStageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workStageCreateOrConnectWithoutWorkInput | workStageCreateOrConnectWithoutWorkInput[]
    createMany?: workStageCreateManyWorkInputEnvelope
    connect?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
  }

  export type FileUploadCreateNestedManyWithoutWorkInput = {
    create?: XOR<FileUploadCreateWithoutWorkInput, FileUploadUncheckedCreateWithoutWorkInput> | FileUploadCreateWithoutWorkInput[] | FileUploadUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutWorkInput | FileUploadCreateOrConnectWithoutWorkInput[]
    createMany?: FileUploadCreateManyWorkInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type workStageUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<workStageCreateWithoutWorkInput, workStageUncheckedCreateWithoutWorkInput> | workStageCreateWithoutWorkInput[] | workStageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workStageCreateOrConnectWithoutWorkInput | workStageCreateOrConnectWithoutWorkInput[]
    createMany?: workStageCreateManyWorkInputEnvelope
    connect?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<FileUploadCreateWithoutWorkInput, FileUploadUncheckedCreateWithoutWorkInput> | FileUploadCreateWithoutWorkInput[] | FileUploadUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutWorkInput | FileUploadCreateOrConnectWithoutWorkInput[]
    createMany?: FileUploadCreateManyWorkInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type machine_cncUpdateOneRequiredWithoutWorkOvernightsNestedInput = {
    create?: XOR<machine_cncCreateWithoutWorkOvernightsInput, machine_cncUncheckedCreateWithoutWorkOvernightsInput>
    connectOrCreate?: machine_cncCreateOrConnectWithoutWorkOvernightsInput
    upsert?: machine_cncUpsertWithoutWorkOvernightsInput
    connect?: machine_cncWhereUniqueInput
    update?: XOR<XOR<machine_cncUpdateToOneWithWhereWithoutWorkOvernightsInput, machine_cncUpdateWithoutWorkOvernightsInput>, machine_cncUncheckedUpdateWithoutWorkOvernightsInput>
  }

  export type workStageUpdateManyWithoutWorkNestedInput = {
    create?: XOR<workStageCreateWithoutWorkInput, workStageUncheckedCreateWithoutWorkInput> | workStageCreateWithoutWorkInput[] | workStageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workStageCreateOrConnectWithoutWorkInput | workStageCreateOrConnectWithoutWorkInput[]
    upsert?: workStageUpsertWithWhereUniqueWithoutWorkInput | workStageUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: workStageCreateManyWorkInputEnvelope
    set?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    disconnect?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    delete?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    connect?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    update?: workStageUpdateWithWhereUniqueWithoutWorkInput | workStageUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: workStageUpdateManyWithWhereWithoutWorkInput | workStageUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: workStageScalarWhereInput | workStageScalarWhereInput[]
  }

  export type FileUploadUpdateManyWithoutWorkNestedInput = {
    create?: XOR<FileUploadCreateWithoutWorkInput, FileUploadUncheckedCreateWithoutWorkInput> | FileUploadCreateWithoutWorkInput[] | FileUploadUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutWorkInput | FileUploadCreateOrConnectWithoutWorkInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutWorkInput | FileUploadUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: FileUploadCreateManyWorkInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutWorkInput | FileUploadUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutWorkInput | FileUploadUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type workStageUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<workStageCreateWithoutWorkInput, workStageUncheckedCreateWithoutWorkInput> | workStageCreateWithoutWorkInput[] | workStageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workStageCreateOrConnectWithoutWorkInput | workStageCreateOrConnectWithoutWorkInput[]
    upsert?: workStageUpsertWithWhereUniqueWithoutWorkInput | workStageUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: workStageCreateManyWorkInputEnvelope
    set?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    disconnect?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    delete?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    connect?: workStageWhereUniqueInput | workStageWhereUniqueInput[]
    update?: workStageUpdateWithWhereUniqueWithoutWorkInput | workStageUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: workStageUpdateManyWithWhereWithoutWorkInput | workStageUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: workStageScalarWhereInput | workStageScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<FileUploadCreateWithoutWorkInput, FileUploadUncheckedCreateWithoutWorkInput> | FileUploadCreateWithoutWorkInput[] | FileUploadUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutWorkInput | FileUploadCreateOrConnectWithoutWorkInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutWorkInput | FileUploadUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: FileUploadCreateManyWorkInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutWorkInput | FileUploadUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutWorkInput | FileUploadUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type workOvernightCreateNestedOneWithoutStagesInput = {
    create?: XOR<workOvernightCreateWithoutStagesInput, workOvernightUncheckedCreateWithoutStagesInput>
    connectOrCreate?: workOvernightCreateOrConnectWithoutStagesInput
    connect?: workOvernightWhereUniqueInput
  }

  export type FileUploadCreateNestedManyWithoutStageInput = {
    create?: XOR<FileUploadCreateWithoutStageInput, FileUploadUncheckedCreateWithoutStageInput> | FileUploadCreateWithoutStageInput[] | FileUploadUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutStageInput | FileUploadCreateOrConnectWithoutStageInput[]
    createMany?: FileUploadCreateManyStageInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutStageInput = {
    create?: XOR<FileUploadCreateWithoutStageInput, FileUploadUncheckedCreateWithoutStageInput> | FileUploadCreateWithoutStageInput[] | FileUploadUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutStageInput | FileUploadCreateOrConnectWithoutStageInput[]
    createMany?: FileUploadCreateManyStageInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type workOvernightUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<workOvernightCreateWithoutStagesInput, workOvernightUncheckedCreateWithoutStagesInput>
    connectOrCreate?: workOvernightCreateOrConnectWithoutStagesInput
    upsert?: workOvernightUpsertWithoutStagesInput
    connect?: workOvernightWhereUniqueInput
    update?: XOR<XOR<workOvernightUpdateToOneWithWhereWithoutStagesInput, workOvernightUpdateWithoutStagesInput>, workOvernightUncheckedUpdateWithoutStagesInput>
  }

  export type FileUploadUpdateManyWithoutStageNestedInput = {
    create?: XOR<FileUploadCreateWithoutStageInput, FileUploadUncheckedCreateWithoutStageInput> | FileUploadCreateWithoutStageInput[] | FileUploadUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutStageInput | FileUploadCreateOrConnectWithoutStageInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutStageInput | FileUploadUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: FileUploadCreateManyStageInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutStageInput | FileUploadUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutStageInput | FileUploadUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutStageNestedInput = {
    create?: XOR<FileUploadCreateWithoutStageInput, FileUploadUncheckedCreateWithoutStageInput> | FileUploadCreateWithoutStageInput[] | FileUploadUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutStageInput | FileUploadCreateOrConnectWithoutStageInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutStageInput | FileUploadUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: FileUploadCreateManyStageInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutStageInput | FileUploadUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutStageInput | FileUploadUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type toolsCreateNestedOneWithoutFilesInput = {
    create?: XOR<toolsCreateWithoutFilesInput, toolsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: toolsCreateOrConnectWithoutFilesInput
    connect?: toolsWhereUniqueInput
  }

  export type machine_cncCreateNestedOneWithoutFilesInput = {
    create?: XOR<machine_cncCreateWithoutFilesInput, machine_cncUncheckedCreateWithoutFilesInput>
    connectOrCreate?: machine_cncCreateOrConnectWithoutFilesInput
    connect?: machine_cncWhereUniqueInput
  }

  export type workOvernightCreateNestedOneWithoutFilesInput = {
    create?: XOR<workOvernightCreateWithoutFilesInput, workOvernightUncheckedCreateWithoutFilesInput>
    connectOrCreate?: workOvernightCreateOrConnectWithoutFilesInput
    connect?: workOvernightWhereUniqueInput
  }

  export type workStageCreateNestedOneWithoutFilesInput = {
    create?: XOR<workStageCreateWithoutFilesInput, workStageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: workStageCreateOrConnectWithoutFilesInput
    connect?: workStageWhereUniqueInput
  }

  export type ContentLearningCreateNestedOneWithoutFilesInput = {
    create?: XOR<ContentLearningCreateWithoutFilesInput, ContentLearningUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ContentLearningCreateOrConnectWithoutFilesInput
    connect?: ContentLearningWhereUniqueInput
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType
  }

  export type toolsUpdateOneWithoutFilesNestedInput = {
    create?: XOR<toolsCreateWithoutFilesInput, toolsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: toolsCreateOrConnectWithoutFilesInput
    upsert?: toolsUpsertWithoutFilesInput
    disconnect?: toolsWhereInput | boolean
    delete?: toolsWhereInput | boolean
    connect?: toolsWhereUniqueInput
    update?: XOR<XOR<toolsUpdateToOneWithWhereWithoutFilesInput, toolsUpdateWithoutFilesInput>, toolsUncheckedUpdateWithoutFilesInput>
  }

  export type machine_cncUpdateOneWithoutFilesNestedInput = {
    create?: XOR<machine_cncCreateWithoutFilesInput, machine_cncUncheckedCreateWithoutFilesInput>
    connectOrCreate?: machine_cncCreateOrConnectWithoutFilesInput
    upsert?: machine_cncUpsertWithoutFilesInput
    disconnect?: machine_cncWhereInput | boolean
    delete?: machine_cncWhereInput | boolean
    connect?: machine_cncWhereUniqueInput
    update?: XOR<XOR<machine_cncUpdateToOneWithWhereWithoutFilesInput, machine_cncUpdateWithoutFilesInput>, machine_cncUncheckedUpdateWithoutFilesInput>
  }

  export type workOvernightUpdateOneWithoutFilesNestedInput = {
    create?: XOR<workOvernightCreateWithoutFilesInput, workOvernightUncheckedCreateWithoutFilesInput>
    connectOrCreate?: workOvernightCreateOrConnectWithoutFilesInput
    upsert?: workOvernightUpsertWithoutFilesInput
    disconnect?: workOvernightWhereInput | boolean
    delete?: workOvernightWhereInput | boolean
    connect?: workOvernightWhereUniqueInput
    update?: XOR<XOR<workOvernightUpdateToOneWithWhereWithoutFilesInput, workOvernightUpdateWithoutFilesInput>, workOvernightUncheckedUpdateWithoutFilesInput>
  }

  export type workStageUpdateOneWithoutFilesNestedInput = {
    create?: XOR<workStageCreateWithoutFilesInput, workStageUncheckedCreateWithoutFilesInput>
    connectOrCreate?: workStageCreateOrConnectWithoutFilesInput
    upsert?: workStageUpsertWithoutFilesInput
    disconnect?: workStageWhereInput | boolean
    delete?: workStageWhereInput | boolean
    connect?: workStageWhereUniqueInput
    update?: XOR<XOR<workStageUpdateToOneWithWhereWithoutFilesInput, workStageUpdateWithoutFilesInput>, workStageUncheckedUpdateWithoutFilesInput>
  }

  export type ContentLearningUpdateOneWithoutFilesNestedInput = {
    create?: XOR<ContentLearningCreateWithoutFilesInput, ContentLearningUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ContentLearningCreateOrConnectWithoutFilesInput
    upsert?: ContentLearningUpsertWithoutFilesInput
    disconnect?: ContentLearningWhereInput | boolean
    delete?: ContentLearningWhereInput | boolean
    connect?: ContentLearningWhereUniqueInput
    update?: XOR<XOR<ContentLearningUpdateToOneWithWhereWithoutFilesInput, ContentLearningUpdateWithoutFilesInput>, ContentLearningUncheckedUpdateWithoutFilesInput>
  }

  export type ContentLearningCreateNestedManyWithoutLearningInput = {
    create?: XOR<ContentLearningCreateWithoutLearningInput, ContentLearningUncheckedCreateWithoutLearningInput> | ContentLearningCreateWithoutLearningInput[] | ContentLearningUncheckedCreateWithoutLearningInput[]
    connectOrCreate?: ContentLearningCreateOrConnectWithoutLearningInput | ContentLearningCreateOrConnectWithoutLearningInput[]
    createMany?: ContentLearningCreateManyLearningInputEnvelope
    connect?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
  }

  export type ContentLearningUncheckedCreateNestedManyWithoutLearningInput = {
    create?: XOR<ContentLearningCreateWithoutLearningInput, ContentLearningUncheckedCreateWithoutLearningInput> | ContentLearningCreateWithoutLearningInput[] | ContentLearningUncheckedCreateWithoutLearningInput[]
    connectOrCreate?: ContentLearningCreateOrConnectWithoutLearningInput | ContentLearningCreateOrConnectWithoutLearningInput[]
    createMany?: ContentLearningCreateManyLearningInputEnvelope
    connect?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
  }

  export type ContentLearningUpdateManyWithoutLearningNestedInput = {
    create?: XOR<ContentLearningCreateWithoutLearningInput, ContentLearningUncheckedCreateWithoutLearningInput> | ContentLearningCreateWithoutLearningInput[] | ContentLearningUncheckedCreateWithoutLearningInput[]
    connectOrCreate?: ContentLearningCreateOrConnectWithoutLearningInput | ContentLearningCreateOrConnectWithoutLearningInput[]
    upsert?: ContentLearningUpsertWithWhereUniqueWithoutLearningInput | ContentLearningUpsertWithWhereUniqueWithoutLearningInput[]
    createMany?: ContentLearningCreateManyLearningInputEnvelope
    set?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    disconnect?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    delete?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    connect?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    update?: ContentLearningUpdateWithWhereUniqueWithoutLearningInput | ContentLearningUpdateWithWhereUniqueWithoutLearningInput[]
    updateMany?: ContentLearningUpdateManyWithWhereWithoutLearningInput | ContentLearningUpdateManyWithWhereWithoutLearningInput[]
    deleteMany?: ContentLearningScalarWhereInput | ContentLearningScalarWhereInput[]
  }

  export type ContentLearningUncheckedUpdateManyWithoutLearningNestedInput = {
    create?: XOR<ContentLearningCreateWithoutLearningInput, ContentLearningUncheckedCreateWithoutLearningInput> | ContentLearningCreateWithoutLearningInput[] | ContentLearningUncheckedCreateWithoutLearningInput[]
    connectOrCreate?: ContentLearningCreateOrConnectWithoutLearningInput | ContentLearningCreateOrConnectWithoutLearningInput[]
    upsert?: ContentLearningUpsertWithWhereUniqueWithoutLearningInput | ContentLearningUpsertWithWhereUniqueWithoutLearningInput[]
    createMany?: ContentLearningCreateManyLearningInputEnvelope
    set?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    disconnect?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    delete?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    connect?: ContentLearningWhereUniqueInput | ContentLearningWhereUniqueInput[]
    update?: ContentLearningUpdateWithWhereUniqueWithoutLearningInput | ContentLearningUpdateWithWhereUniqueWithoutLearningInput[]
    updateMany?: ContentLearningUpdateManyWithWhereWithoutLearningInput | ContentLearningUpdateManyWithWhereWithoutLearningInput[]
    deleteMany?: ContentLearningScalarWhereInput | ContentLearningScalarWhereInput[]
  }

  export type FileUploadCreateNestedManyWithoutContentLearningInput = {
    create?: XOR<FileUploadCreateWithoutContentLearningInput, FileUploadUncheckedCreateWithoutContentLearningInput> | FileUploadCreateWithoutContentLearningInput[] | FileUploadUncheckedCreateWithoutContentLearningInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutContentLearningInput | FileUploadCreateOrConnectWithoutContentLearningInput[]
    createMany?: FileUploadCreateManyContentLearningInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type LearningCreateNestedOneWithoutContentInput = {
    create?: XOR<LearningCreateWithoutContentInput, LearningUncheckedCreateWithoutContentInput>
    connectOrCreate?: LearningCreateOrConnectWithoutContentInput
    connect?: LearningWhereUniqueInput
  }

  export type FileUploadUncheckedCreateNestedManyWithoutContentLearningInput = {
    create?: XOR<FileUploadCreateWithoutContentLearningInput, FileUploadUncheckedCreateWithoutContentLearningInput> | FileUploadCreateWithoutContentLearningInput[] | FileUploadUncheckedCreateWithoutContentLearningInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutContentLearningInput | FileUploadCreateOrConnectWithoutContentLearningInput[]
    createMany?: FileUploadCreateManyContentLearningInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type FileUploadUpdateManyWithoutContentLearningNestedInput = {
    create?: XOR<FileUploadCreateWithoutContentLearningInput, FileUploadUncheckedCreateWithoutContentLearningInput> | FileUploadCreateWithoutContentLearningInput[] | FileUploadUncheckedCreateWithoutContentLearningInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutContentLearningInput | FileUploadCreateOrConnectWithoutContentLearningInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutContentLearningInput | FileUploadUpsertWithWhereUniqueWithoutContentLearningInput[]
    createMany?: FileUploadCreateManyContentLearningInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutContentLearningInput | FileUploadUpdateWithWhereUniqueWithoutContentLearningInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutContentLearningInput | FileUploadUpdateManyWithWhereWithoutContentLearningInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type LearningUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<LearningCreateWithoutContentInput, LearningUncheckedCreateWithoutContentInput>
    connectOrCreate?: LearningCreateOrConnectWithoutContentInput
    upsert?: LearningUpsertWithoutContentInput
    connect?: LearningWhereUniqueInput
    update?: XOR<XOR<LearningUpdateToOneWithWhereWithoutContentInput, LearningUpdateWithoutContentInput>, LearningUncheckedUpdateWithoutContentInput>
  }

  export type FileUploadUncheckedUpdateManyWithoutContentLearningNestedInput = {
    create?: XOR<FileUploadCreateWithoutContentLearningInput, FileUploadUncheckedCreateWithoutContentLearningInput> | FileUploadCreateWithoutContentLearningInput[] | FileUploadUncheckedCreateWithoutContentLearningInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutContentLearningInput | FileUploadCreateOrConnectWithoutContentLearningInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutContentLearningInput | FileUploadUpsertWithWhereUniqueWithoutContentLearningInput[]
    createMany?: FileUploadCreateManyContentLearningInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutContentLearningInput | FileUploadUpdateWithWhereUniqueWithoutContentLearningInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutContentLearningInput | FileUploadUpdateManyWithWhereWithoutContentLearningInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTokkenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokkenType | EnumTokkenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokkenTypeFilter<$PrismaModel> | $Enums.TokkenType
  }

  export type NestedEnumTokkenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokkenType | EnumTokkenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokkenType[] | ListEnumTokkenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokkenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokkenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokkenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokkenTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    provider: string
    providerAccountId: string
    type: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    provider: string
    providerAccountId: string
    type: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    userId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    email: string
    name?: string | null
    picture?: string | null
    role?: $Enums.UserRole
    password: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    email: string
    name?: string | null
    picture?: string | null
    role?: $Enums.UserRole
    password: string
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    authMethod?: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    authMethod?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateWithoutToolInput = {
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    machine?: machine_cncCreateNestedOneWithoutFilesInput
    work?: workOvernightCreateNestedOneWithoutFilesInput
    stage?: workStageCreateNestedOneWithoutFilesInput
    contentLearning?: ContentLearningCreateNestedOneWithoutFilesInput
  }

  export type FileUploadUncheckedCreateWithoutToolInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    machineId?: number | null
    workId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadCreateOrConnectWithoutToolInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutToolInput, FileUploadUncheckedCreateWithoutToolInput>
  }

  export type FileUploadCreateManyToolInputEnvelope = {
    data: FileUploadCreateManyToolInput | FileUploadCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type FileUploadUpsertWithWhereUniqueWithoutToolInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutToolInput, FileUploadUncheckedUpdateWithoutToolInput>
    create: XOR<FileUploadCreateWithoutToolInput, FileUploadUncheckedCreateWithoutToolInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutToolInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutToolInput, FileUploadUncheckedUpdateWithoutToolInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutToolInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutToolInput>
  }

  export type FileUploadScalarWhereInput = {
    AND?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    OR?: FileUploadScalarWhereInput[]
    NOT?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    id?: IntFilter<"FileUpload"> | number
    filename?: StringFilter<"FileUpload"> | string
    originalName?: StringFilter<"FileUpload"> | string
    path?: StringFilter<"FileUpload"> | string
    mimeType?: StringFilter<"FileUpload"> | string
    size?: IntFilter<"FileUpload"> | number
    type?: EnumFileTypeFilter<"FileUpload"> | $Enums.FileType
    toolId?: IntNullableFilter<"FileUpload"> | number | null
    machineId?: IntNullableFilter<"FileUpload"> | number | null
    workId?: IntNullableFilter<"FileUpload"> | number | null
    stageId?: IntNullableFilter<"FileUpload"> | number | null
    contentLearningId?: IntNullableFilter<"FileUpload"> | number | null
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
  }

  export type FileUploadCreateWithoutMachineInput = {
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    tool?: toolsCreateNestedOneWithoutFilesInput
    work?: workOvernightCreateNestedOneWithoutFilesInput
    stage?: workStageCreateNestedOneWithoutFilesInput
    contentLearning?: ContentLearningCreateNestedOneWithoutFilesInput
  }

  export type FileUploadUncheckedCreateWithoutMachineInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    workId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadCreateOrConnectWithoutMachineInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutMachineInput, FileUploadUncheckedCreateWithoutMachineInput>
  }

  export type FileUploadCreateManyMachineInputEnvelope = {
    data: FileUploadCreateManyMachineInput | FileUploadCreateManyMachineInput[]
    skipDuplicates?: boolean
  }

  export type workOvernightCreateWithoutMachineInput = {
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: workStageCreateNestedManyWithoutWorkInput
    files?: FileUploadCreateNestedManyWithoutWorkInput
  }

  export type workOvernightUncheckedCreateWithoutMachineInput = {
    id?: number
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: workStageUncheckedCreateNestedManyWithoutWorkInput
    files?: FileUploadUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workOvernightCreateOrConnectWithoutMachineInput = {
    where: workOvernightWhereUniqueInput
    create: XOR<workOvernightCreateWithoutMachineInput, workOvernightUncheckedCreateWithoutMachineInput>
  }

  export type workOvernightCreateManyMachineInputEnvelope = {
    data: workOvernightCreateManyMachineInput | workOvernightCreateManyMachineInput[]
    skipDuplicates?: boolean
  }

  export type FileUploadUpsertWithWhereUniqueWithoutMachineInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutMachineInput, FileUploadUncheckedUpdateWithoutMachineInput>
    create: XOR<FileUploadCreateWithoutMachineInput, FileUploadUncheckedCreateWithoutMachineInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutMachineInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutMachineInput, FileUploadUncheckedUpdateWithoutMachineInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutMachineInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutMachineInput>
  }

  export type workOvernightUpsertWithWhereUniqueWithoutMachineInput = {
    where: workOvernightWhereUniqueInput
    update: XOR<workOvernightUpdateWithoutMachineInput, workOvernightUncheckedUpdateWithoutMachineInput>
    create: XOR<workOvernightCreateWithoutMachineInput, workOvernightUncheckedCreateWithoutMachineInput>
  }

  export type workOvernightUpdateWithWhereUniqueWithoutMachineInput = {
    where: workOvernightWhereUniqueInput
    data: XOR<workOvernightUpdateWithoutMachineInput, workOvernightUncheckedUpdateWithoutMachineInput>
  }

  export type workOvernightUpdateManyWithWhereWithoutMachineInput = {
    where: workOvernightScalarWhereInput
    data: XOR<workOvernightUpdateManyMutationInput, workOvernightUncheckedUpdateManyWithoutMachineInput>
  }

  export type workOvernightScalarWhereInput = {
    AND?: workOvernightScalarWhereInput | workOvernightScalarWhereInput[]
    OR?: workOvernightScalarWhereInput[]
    NOT?: workOvernightScalarWhereInput | workOvernightScalarWhereInput[]
    id?: IntFilter<"workOvernight"> | number
    name?: StringNullableFilter<"workOvernight"> | string | null
    rt?: StringFilter<"workOvernight"> | string
    quantity?: IntFilter<"workOvernight"> | number
    madeBy?: StringNullableFilter<"workOvernight"> | string | null
    leftToMake?: IntFilter<"workOvernight"> | number
    productionTime?: StringNullableFilter<"workOvernight"> | string | null
    isArchived?: BoolFilter<"workOvernight"> | boolean
    archivedAt?: DateTimeNullableFilter<"workOvernight"> | Date | string | null
    machineId?: IntFilter<"workOvernight"> | number
    createdAt?: DateTimeFilter<"workOvernight"> | Date | string
    updatedAt?: DateTimeFilter<"workOvernight"> | Date | string
  }

  export type machine_cncCreateWithoutWorkOvernightsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadCreateNestedManyWithoutMachineInput
  }

  export type machine_cncUncheckedCreateWithoutWorkOvernightsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutMachineInput
  }

  export type machine_cncCreateOrConnectWithoutWorkOvernightsInput = {
    where: machine_cncWhereUniqueInput
    create: XOR<machine_cncCreateWithoutWorkOvernightsInput, machine_cncUncheckedCreateWithoutWorkOvernightsInput>
  }

  export type workStageCreateWithoutWorkInput = {
    stepNumber: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadCreateNestedManyWithoutStageInput
  }

  export type workStageUncheckedCreateWithoutWorkInput = {
    id?: number
    stepNumber: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutStageInput
  }

  export type workStageCreateOrConnectWithoutWorkInput = {
    where: workStageWhereUniqueInput
    create: XOR<workStageCreateWithoutWorkInput, workStageUncheckedCreateWithoutWorkInput>
  }

  export type workStageCreateManyWorkInputEnvelope = {
    data: workStageCreateManyWorkInput | workStageCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type FileUploadCreateWithoutWorkInput = {
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    tool?: toolsCreateNestedOneWithoutFilesInput
    machine?: machine_cncCreateNestedOneWithoutFilesInput
    stage?: workStageCreateNestedOneWithoutFilesInput
    contentLearning?: ContentLearningCreateNestedOneWithoutFilesInput
  }

  export type FileUploadUncheckedCreateWithoutWorkInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadCreateOrConnectWithoutWorkInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutWorkInput, FileUploadUncheckedCreateWithoutWorkInput>
  }

  export type FileUploadCreateManyWorkInputEnvelope = {
    data: FileUploadCreateManyWorkInput | FileUploadCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type machine_cncUpsertWithoutWorkOvernightsInput = {
    update: XOR<machine_cncUpdateWithoutWorkOvernightsInput, machine_cncUncheckedUpdateWithoutWorkOvernightsInput>
    create: XOR<machine_cncCreateWithoutWorkOvernightsInput, machine_cncUncheckedCreateWithoutWorkOvernightsInput>
    where?: machine_cncWhereInput
  }

  export type machine_cncUpdateToOneWithWhereWithoutWorkOvernightsInput = {
    where?: machine_cncWhereInput
    data: XOR<machine_cncUpdateWithoutWorkOvernightsInput, machine_cncUncheckedUpdateWithoutWorkOvernightsInput>
  }

  export type machine_cncUpdateWithoutWorkOvernightsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUpdateManyWithoutMachineNestedInput
  }

  export type machine_cncUncheckedUpdateWithoutWorkOvernightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type workStageUpsertWithWhereUniqueWithoutWorkInput = {
    where: workStageWhereUniqueInput
    update: XOR<workStageUpdateWithoutWorkInput, workStageUncheckedUpdateWithoutWorkInput>
    create: XOR<workStageCreateWithoutWorkInput, workStageUncheckedCreateWithoutWorkInput>
  }

  export type workStageUpdateWithWhereUniqueWithoutWorkInput = {
    where: workStageWhereUniqueInput
    data: XOR<workStageUpdateWithoutWorkInput, workStageUncheckedUpdateWithoutWorkInput>
  }

  export type workStageUpdateManyWithWhereWithoutWorkInput = {
    where: workStageScalarWhereInput
    data: XOR<workStageUpdateManyMutationInput, workStageUncheckedUpdateManyWithoutWorkInput>
  }

  export type workStageScalarWhereInput = {
    AND?: workStageScalarWhereInput | workStageScalarWhereInput[]
    OR?: workStageScalarWhereInput[]
    NOT?: workStageScalarWhereInput | workStageScalarWhereInput[]
    id?: IntFilter<"workStage"> | number
    stepNumber?: IntFilter<"workStage"> | number
    description?: StringNullableFilter<"workStage"> | string | null
    workId?: IntFilter<"workStage"> | number
    createdAt?: DateTimeFilter<"workStage"> | Date | string
    updatedAt?: DateTimeFilter<"workStage"> | Date | string
  }

  export type FileUploadUpsertWithWhereUniqueWithoutWorkInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutWorkInput, FileUploadUncheckedUpdateWithoutWorkInput>
    create: XOR<FileUploadCreateWithoutWorkInput, FileUploadUncheckedCreateWithoutWorkInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutWorkInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutWorkInput, FileUploadUncheckedUpdateWithoutWorkInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutWorkInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutWorkInput>
  }

  export type workOvernightCreateWithoutStagesInput = {
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machine: machine_cncCreateNestedOneWithoutWorkOvernightsInput
    files?: FileUploadCreateNestedManyWithoutWorkInput
  }

  export type workOvernightUncheckedCreateWithoutStagesInput = {
    id?: number
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    machineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workOvernightCreateOrConnectWithoutStagesInput = {
    where: workOvernightWhereUniqueInput
    create: XOR<workOvernightCreateWithoutStagesInput, workOvernightUncheckedCreateWithoutStagesInput>
  }

  export type FileUploadCreateWithoutStageInput = {
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    tool?: toolsCreateNestedOneWithoutFilesInput
    machine?: machine_cncCreateNestedOneWithoutFilesInput
    work?: workOvernightCreateNestedOneWithoutFilesInput
    contentLearning?: ContentLearningCreateNestedOneWithoutFilesInput
  }

  export type FileUploadUncheckedCreateWithoutStageInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    workId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadCreateOrConnectWithoutStageInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutStageInput, FileUploadUncheckedCreateWithoutStageInput>
  }

  export type FileUploadCreateManyStageInputEnvelope = {
    data: FileUploadCreateManyStageInput | FileUploadCreateManyStageInput[]
    skipDuplicates?: boolean
  }

  export type workOvernightUpsertWithoutStagesInput = {
    update: XOR<workOvernightUpdateWithoutStagesInput, workOvernightUncheckedUpdateWithoutStagesInput>
    create: XOR<workOvernightCreateWithoutStagesInput, workOvernightUncheckedCreateWithoutStagesInput>
    where?: workOvernightWhereInput
  }

  export type workOvernightUpdateToOneWithWhereWithoutStagesInput = {
    where?: workOvernightWhereInput
    data: XOR<workOvernightUpdateWithoutStagesInput, workOvernightUncheckedUpdateWithoutStagesInput>
  }

  export type workOvernightUpdateWithoutStagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: machine_cncUpdateOneRequiredWithoutWorkOvernightsNestedInput
    files?: FileUploadUpdateManyWithoutWorkNestedInput
  }

  export type workOvernightUncheckedUpdateWithoutStagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    machineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type FileUploadUpsertWithWhereUniqueWithoutStageInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutStageInput, FileUploadUncheckedUpdateWithoutStageInput>
    create: XOR<FileUploadCreateWithoutStageInput, FileUploadUncheckedCreateWithoutStageInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutStageInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutStageInput, FileUploadUncheckedUpdateWithoutStageInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutStageInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutStageInput>
  }

  export type toolsCreateWithoutFilesInput = {
    name: string
    tool_id: string
    description?: string | null
    size?: string | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type toolsUncheckedCreateWithoutFilesInput = {
    id?: number
    name: string
    tool_id: string
    description?: string | null
    size?: string | null
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type toolsCreateOrConnectWithoutFilesInput = {
    where: toolsWhereUniqueInput
    create: XOR<toolsCreateWithoutFilesInput, toolsUncheckedCreateWithoutFilesInput>
  }

  export type machine_cncCreateWithoutFilesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workOvernights?: workOvernightCreateNestedManyWithoutMachineInput
  }

  export type machine_cncUncheckedCreateWithoutFilesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workOvernights?: workOvernightUncheckedCreateNestedManyWithoutMachineInput
  }

  export type machine_cncCreateOrConnectWithoutFilesInput = {
    where: machine_cncWhereUniqueInput
    create: XOR<machine_cncCreateWithoutFilesInput, machine_cncUncheckedCreateWithoutFilesInput>
  }

  export type workOvernightCreateWithoutFilesInput = {
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    machine: machine_cncCreateNestedOneWithoutWorkOvernightsInput
    stages?: workStageCreateNestedManyWithoutWorkInput
  }

  export type workOvernightUncheckedCreateWithoutFilesInput = {
    id?: number
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    machineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: workStageUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workOvernightCreateOrConnectWithoutFilesInput = {
    where: workOvernightWhereUniqueInput
    create: XOR<workOvernightCreateWithoutFilesInput, workOvernightUncheckedCreateWithoutFilesInput>
  }

  export type workStageCreateWithoutFilesInput = {
    stepNumber: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    work: workOvernightCreateNestedOneWithoutStagesInput
  }

  export type workStageUncheckedCreateWithoutFilesInput = {
    id?: number
    stepNumber: number
    description?: string | null
    workId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workStageCreateOrConnectWithoutFilesInput = {
    where: workStageWhereUniqueInput
    create: XOR<workStageCreateWithoutFilesInput, workStageUncheckedCreateWithoutFilesInput>
  }

  export type ContentLearningCreateWithoutFilesInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    learning: LearningCreateNestedOneWithoutContentInput
  }

  export type ContentLearningUncheckedCreateWithoutFilesInput = {
    id?: number
    description: string
    learningId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentLearningCreateOrConnectWithoutFilesInput = {
    where: ContentLearningWhereUniqueInput
    create: XOR<ContentLearningCreateWithoutFilesInput, ContentLearningUncheckedCreateWithoutFilesInput>
  }

  export type toolsUpsertWithoutFilesInput = {
    update: XOR<toolsUpdateWithoutFilesInput, toolsUncheckedUpdateWithoutFilesInput>
    create: XOR<toolsCreateWithoutFilesInput, toolsUncheckedCreateWithoutFilesInput>
    where?: toolsWhereInput
  }

  export type toolsUpdateToOneWithWhereWithoutFilesInput = {
    where?: toolsWhereInput
    data: XOR<toolsUpdateWithoutFilesInput, toolsUncheckedUpdateWithoutFilesInput>
  }

  export type toolsUpdateWithoutFilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tool_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toolsUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tool_id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type machine_cncUpsertWithoutFilesInput = {
    update: XOR<machine_cncUpdateWithoutFilesInput, machine_cncUncheckedUpdateWithoutFilesInput>
    create: XOR<machine_cncCreateWithoutFilesInput, machine_cncUncheckedCreateWithoutFilesInput>
    where?: machine_cncWhereInput
  }

  export type machine_cncUpdateToOneWithWhereWithoutFilesInput = {
    where?: machine_cncWhereInput
    data: XOR<machine_cncUpdateWithoutFilesInput, machine_cncUncheckedUpdateWithoutFilesInput>
  }

  export type machine_cncUpdateWithoutFilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOvernights?: workOvernightUpdateManyWithoutMachineNestedInput
  }

  export type machine_cncUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOvernights?: workOvernightUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type workOvernightUpsertWithoutFilesInput = {
    update: XOR<workOvernightUpdateWithoutFilesInput, workOvernightUncheckedUpdateWithoutFilesInput>
    create: XOR<workOvernightCreateWithoutFilesInput, workOvernightUncheckedCreateWithoutFilesInput>
    where?: workOvernightWhereInput
  }

  export type workOvernightUpdateToOneWithWhereWithoutFilesInput = {
    where?: workOvernightWhereInput
    data: XOR<workOvernightUpdateWithoutFilesInput, workOvernightUncheckedUpdateWithoutFilesInput>
  }

  export type workOvernightUpdateWithoutFilesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: machine_cncUpdateOneRequiredWithoutWorkOvernightsNestedInput
    stages?: workStageUpdateManyWithoutWorkNestedInput
  }

  export type workOvernightUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    machineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: workStageUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type workStageUpsertWithoutFilesInput = {
    update: XOR<workStageUpdateWithoutFilesInput, workStageUncheckedUpdateWithoutFilesInput>
    create: XOR<workStageCreateWithoutFilesInput, workStageUncheckedCreateWithoutFilesInput>
    where?: workStageWhereInput
  }

  export type workStageUpdateToOneWithWhereWithoutFilesInput = {
    where?: workStageWhereInput
    data: XOR<workStageUpdateWithoutFilesInput, workStageUncheckedUpdateWithoutFilesInput>
  }

  export type workStageUpdateWithoutFilesInput = {
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: workOvernightUpdateOneRequiredWithoutStagesNestedInput
  }

  export type workStageUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentLearningUpsertWithoutFilesInput = {
    update: XOR<ContentLearningUpdateWithoutFilesInput, ContentLearningUncheckedUpdateWithoutFilesInput>
    create: XOR<ContentLearningCreateWithoutFilesInput, ContentLearningUncheckedCreateWithoutFilesInput>
    where?: ContentLearningWhereInput
  }

  export type ContentLearningUpdateToOneWithWhereWithoutFilesInput = {
    where?: ContentLearningWhereInput
    data: XOR<ContentLearningUpdateWithoutFilesInput, ContentLearningUncheckedUpdateWithoutFilesInput>
  }

  export type ContentLearningUpdateWithoutFilesInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learning?: LearningUpdateOneRequiredWithoutContentNestedInput
  }

  export type ContentLearningUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    learningId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentLearningCreateWithoutLearningInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadCreateNestedManyWithoutContentLearningInput
  }

  export type ContentLearningUncheckedCreateWithoutLearningInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUploadUncheckedCreateNestedManyWithoutContentLearningInput
  }

  export type ContentLearningCreateOrConnectWithoutLearningInput = {
    where: ContentLearningWhereUniqueInput
    create: XOR<ContentLearningCreateWithoutLearningInput, ContentLearningUncheckedCreateWithoutLearningInput>
  }

  export type ContentLearningCreateManyLearningInputEnvelope = {
    data: ContentLearningCreateManyLearningInput | ContentLearningCreateManyLearningInput[]
    skipDuplicates?: boolean
  }

  export type ContentLearningUpsertWithWhereUniqueWithoutLearningInput = {
    where: ContentLearningWhereUniqueInput
    update: XOR<ContentLearningUpdateWithoutLearningInput, ContentLearningUncheckedUpdateWithoutLearningInput>
    create: XOR<ContentLearningCreateWithoutLearningInput, ContentLearningUncheckedCreateWithoutLearningInput>
  }

  export type ContentLearningUpdateWithWhereUniqueWithoutLearningInput = {
    where: ContentLearningWhereUniqueInput
    data: XOR<ContentLearningUpdateWithoutLearningInput, ContentLearningUncheckedUpdateWithoutLearningInput>
  }

  export type ContentLearningUpdateManyWithWhereWithoutLearningInput = {
    where: ContentLearningScalarWhereInput
    data: XOR<ContentLearningUpdateManyMutationInput, ContentLearningUncheckedUpdateManyWithoutLearningInput>
  }

  export type ContentLearningScalarWhereInput = {
    AND?: ContentLearningScalarWhereInput | ContentLearningScalarWhereInput[]
    OR?: ContentLearningScalarWhereInput[]
    NOT?: ContentLearningScalarWhereInput | ContentLearningScalarWhereInput[]
    id?: IntFilter<"ContentLearning"> | number
    description?: StringFilter<"ContentLearning"> | string
    learningId?: IntFilter<"ContentLearning"> | number
    createdAt?: DateTimeFilter<"ContentLearning"> | Date | string
    updatedAt?: DateTimeFilter<"ContentLearning"> | Date | string
  }

  export type FileUploadCreateWithoutContentLearningInput = {
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
    tool?: toolsCreateNestedOneWithoutFilesInput
    machine?: machine_cncCreateNestedOneWithoutFilesInput
    work?: workOvernightCreateNestedOneWithoutFilesInput
    stage?: workStageCreateNestedOneWithoutFilesInput
  }

  export type FileUploadUncheckedCreateWithoutContentLearningInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    workId?: number | null
    stageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadCreateOrConnectWithoutContentLearningInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutContentLearningInput, FileUploadUncheckedCreateWithoutContentLearningInput>
  }

  export type FileUploadCreateManyContentLearningInputEnvelope = {
    data: FileUploadCreateManyContentLearningInput | FileUploadCreateManyContentLearningInput[]
    skipDuplicates?: boolean
  }

  export type LearningCreateWithoutContentInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningUncheckedCreateWithoutContentInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningCreateOrConnectWithoutContentInput = {
    where: LearningWhereUniqueInput
    create: XOR<LearningCreateWithoutContentInput, LearningUncheckedCreateWithoutContentInput>
  }

  export type FileUploadUpsertWithWhereUniqueWithoutContentLearningInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutContentLearningInput, FileUploadUncheckedUpdateWithoutContentLearningInput>
    create: XOR<FileUploadCreateWithoutContentLearningInput, FileUploadUncheckedCreateWithoutContentLearningInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutContentLearningInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutContentLearningInput, FileUploadUncheckedUpdateWithoutContentLearningInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutContentLearningInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutContentLearningInput>
  }

  export type LearningUpsertWithoutContentInput = {
    update: XOR<LearningUpdateWithoutContentInput, LearningUncheckedUpdateWithoutContentInput>
    create: XOR<LearningCreateWithoutContentInput, LearningUncheckedCreateWithoutContentInput>
    where?: LearningWhereInput
  }

  export type LearningUpdateToOneWithWhereWithoutContentInput = {
    where?: LearningWhereInput
    data: XOR<LearningUpdateWithoutContentInput, LearningUncheckedUpdateWithoutContentInput>
  }

  export type LearningUpdateWithoutContentInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningUncheckedUpdateWithoutContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: number
    provider: string
    providerAccountId: string
    type: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateManyToolInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    machineId?: number | null
    workId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadUpdateWithoutToolInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: machine_cncUpdateOneWithoutFilesNestedInput
    work?: workOvernightUpdateOneWithoutFilesNestedInput
    stage?: workStageUpdateOneWithoutFilesNestedInput
    contentLearning?: ContentLearningUpdateOneWithoutFilesNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutToolInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyWithoutToolInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateManyMachineInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    workId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workOvernightCreateManyMachineInput = {
    id?: number
    name?: string | null
    rt: string
    quantity: number
    madeBy?: string | null
    leftToMake: number
    productionTime?: string | null
    isArchived?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadUpdateWithoutMachineInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: toolsUpdateOneWithoutFilesNestedInput
    work?: workOvernightUpdateOneWithoutFilesNestedInput
    stage?: workStageUpdateOneWithoutFilesNestedInput
    contentLearning?: ContentLearningUpdateOneWithoutFilesNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyWithoutMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workOvernightUpdateWithoutMachineInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: workStageUpdateManyWithoutWorkNestedInput
    files?: FileUploadUpdateManyWithoutWorkNestedInput
  }

  export type workOvernightUncheckedUpdateWithoutMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: workStageUncheckedUpdateManyWithoutWorkNestedInput
    files?: FileUploadUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type workOvernightUncheckedUpdateManyWithoutMachineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    madeBy?: NullableStringFieldUpdateOperationsInput | string | null
    leftToMake?: IntFieldUpdateOperationsInput | number
    productionTime?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workStageCreateManyWorkInput = {
    id?: number
    stepNumber: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadCreateManyWorkInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    stageId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workStageUpdateWithoutWorkInput = {
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUpdateManyWithoutStageNestedInput
  }

  export type workStageUncheckedUpdateWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutStageNestedInput
  }

  export type workStageUncheckedUpdateManyWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUpdateWithoutWorkInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: toolsUpdateOneWithoutFilesNestedInput
    machine?: machine_cncUpdateOneWithoutFilesNestedInput
    stage?: workStageUpdateOneWithoutFilesNestedInput
    contentLearning?: ContentLearningUpdateOneWithoutFilesNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateManyStageInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    workId?: number | null
    contentLearningId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadUpdateWithoutStageInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: toolsUpdateOneWithoutFilesNestedInput
    machine?: machine_cncUpdateOneWithoutFilesNestedInput
    work?: workOvernightUpdateOneWithoutFilesNestedInput
    contentLearning?: ContentLearningUpdateOneWithoutFilesNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutStageInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyWithoutStageInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    contentLearningId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentLearningCreateManyLearningInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentLearningUpdateWithoutLearningInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUpdateManyWithoutContentLearningNestedInput
  }

  export type ContentLearningUncheckedUpdateWithoutLearningInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUploadUncheckedUpdateManyWithoutContentLearningNestedInput
  }

  export type ContentLearningUncheckedUpdateManyWithoutLearningInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateManyContentLearningInput = {
    id?: number
    filename: string
    originalName: string
    path: string
    mimeType: string
    size: number
    type: $Enums.FileType
    toolId?: number | null
    machineId?: number | null
    workId?: number | null
    stageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadUpdateWithoutContentLearningInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: toolsUpdateOneWithoutFilesNestedInput
    machine?: machine_cncUpdateOneWithoutFilesNestedInput
    work?: workOvernightUpdateOneWithoutFilesNestedInput
    stage?: workStageUpdateOneWithoutFilesNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutContentLearningInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyWithoutContentLearningInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    toolId?: NullableIntFieldUpdateOperationsInput | number | null
    machineId?: NullableIntFieldUpdateOperationsInput | number | null
    workId?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}