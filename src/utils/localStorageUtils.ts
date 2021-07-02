export class LocalStorageUtils {
  public static setValue<V>(key: Key<V>, value: V): void {
    localStorage.setItem(key.key, key.serialize(value));
  }

  public static getValue<V>(key: Key<V>): V | undefined {
    const value = localStorage.getItem(key.key);
    return value !== null ? key.deserialize(value) : undefined;
  }
}

export class Key<V> {
  public static NAME: Key<string> = new Key(
    "name",
    (v) => v,
    (v) => v
  );
  public static COUNT: Key<number> = new Key(
    "count",
    (v) => String(v),
    (v) => Number(v)
  );

  private constructor(
    public key: string,
    public serialize: (value: V) => string,
    public deserialize: (value: string) => V
  ) {}
}
