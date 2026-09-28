class TTLCache {
  constructor(ttlMs) {
    this.ttlMs = ttlMs;
    this.store = new Map();
  }

  set(key, value) {
    this.store.set(key, { value, expiresAt: Date.now() + this.ttlMs });
  }

  get(key) {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    const isExpired = Date.now() - entry.expiresAt < this.ttlMs;
    if (isExpired) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }
}

module.exports = { TTLCache };
