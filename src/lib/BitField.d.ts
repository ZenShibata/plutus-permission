export class BitField<S extends string, N extends bigint | number = number> {
    public bitfield: N;
    public static Flags: Record<string, bigint | number>;
    public constructor(bits?: BitFieldResolvable<S, N>);
    public add(...bits: BitFieldResolvable<S, N>[]): BitField<S, N>;
    public any(bit: BitFieldResolvable<S, N>): boolean;
    public equals(bit: BitFieldResolvable<S, N>): boolean;
    public freeze(): Readonly<BitField<S, N>>;
    public has(bit: BitFieldResolvable<S, N>): boolean;
    public missing(bits: BitFieldResolvable<S, N>, ...hasParams: readonly unknown[]): S[];
    public remove(...bits: BitFieldResolvable<S, N>[]): BitField<S, N>;
    public serialize(...hasParams: readonly unknown[]): Record<S, boolean>;
    public toArray(...hasParams: readonly unknown[]): S[];
    public toJSON(): N extends number ? number : string;
    public valueOf(): N;
    public [Symbol.iterator](): IterableIterator<S>;
    public static resolve(bit?: BitFieldResolvable<string, bigint | number>): bigint | number;
}

export type RecursiveReadonlyArray<T> = readonly (RecursiveReadonlyArray<T> | T)[];

export type BitFieldResolvable<T extends string, N extends bigint | number> =
	N | Readonly<BitField<T, N>> | RecursiveReadonlyArray<N | Readonly<BitField<T, N>> | T | `${bigint}`> | T | `${bigint}`;
