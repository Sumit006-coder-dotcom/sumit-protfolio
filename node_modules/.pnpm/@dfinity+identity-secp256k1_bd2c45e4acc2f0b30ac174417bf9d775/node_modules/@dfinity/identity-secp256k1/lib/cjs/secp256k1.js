"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secp256k1KeyIdentity = exports.Secp256k1PublicKey = void 0;
const agent_1 = require("@dfinity/agent");
const secp256k1_1 = require("@noble/curves/secp256k1");
const sha2_1 = require("@noble/hashes/sha2");
const utils_1 = require("@noble/hashes/utils");
const bip39 = __importStar(require("@scure/bip39"));
const bip32_1 = require("@scure/bip32");
const der_ts_1 = require("./der.js");
const pem_ts_1 = require("./pem.js");
const candid_1 = require("@dfinity/candid");
function isObject(value) {
    return value !== null && typeof value === 'object';
}
class Secp256k1PublicKey {
    static fromRaw(rawKey) {
        return new Secp256k1PublicKey(rawKey);
    }
    static fromDer(derKey) {
        return new Secp256k1PublicKey(this.derDecode(derKey));
    }
    /**
     * Construct Secp256k1PublicKey from an existing PublicKey
     * @param {unknown} maybeKey - existing PublicKey, ArrayBuffer, DerEncodedPublicKey, or hex string
     * @returns {Secp256k1PublicKey} Instance of Secp256k1PublicKey
     */
    static from(maybeKey) {
        if (typeof maybeKey === 'string') {
            const key = (0, utils_1.hexToBytes)(maybeKey);
            return this.fromRaw(key);
        }
        else if (isObject(maybeKey)) {
            const key = maybeKey;
            if (isObject(key) && Object.hasOwnProperty.call(key, '__derEncodedPublicKey__')) {
                return this.fromDer(key);
            }
            else if (ArrayBuffer.isView(key)) {
                const view = key;
                return this.fromRaw((0, candid_1.uint8FromBufLike)(view.buffer));
            }
            else if (key instanceof ArrayBuffer) {
                return this.fromRaw((0, candid_1.uint8FromBufLike)(key));
            }
            else if ('rawKey' in key && key['rawKey'] !== undefined) {
                return this.fromRaw(key.rawKey);
            }
            else if ('derKey' in key) {
                return this.fromDer(key.derKey);
            }
            else if ('toDer' in key) {
                return this.fromDer(key.toDer());
            }
        }
        throw new Error('Cannot construct Secp256k1PublicKey from the provided key.');
    }
    static derEncode(publicKey) {
        const key = (0, candid_1.uint8FromBufLike)((0, der_ts_1.wrapDER)(publicKey, der_ts_1.SECP256K1_OID).buffer);
        key.__derEncodedPublicKey__ = undefined;
        return key;
    }
    static derDecode(key) {
        return (0, der_ts_1.unwrapDER)(key, der_ts_1.SECP256K1_OID);
    }
    #rawKey;
    get rawKey() {
        return this.#rawKey;
    }
    #derKey;
    get derKey() {
        return this.#derKey;
    }
    // `fromRaw` and `fromDer` should be used for instantiation, not this constructor.
    constructor(key) {
        this.#rawKey = key;
        this.#derKey = Secp256k1PublicKey.derEncode(key);
    }
    toDer() {
        return this.derKey;
    }
    toRaw() {
        return this.rawKey;
    }
}
exports.Secp256k1PublicKey = Secp256k1PublicKey;
class Secp256k1KeyIdentity extends agent_1.SignIdentity {
    /**
     * Generates an identity. If a seed is provided, the keys are generated from the
     * seed according to BIP 0032. Otherwise, the key pair is randomly generated.
     * This method throws an error in case the seed is not 32 bytes long or invalid
     * for use as a private key.
     * @param {Uint8Array} seed the optional seed
     * @returns {Secp256k1KeyIdentity} Secp256k1KeyIdentity
     */
    static generate(seed) {
        if (seed && seed.byteLength !== 32) {
            throw new Error('Secp256k1 Seed needs to be 32 bytes long.');
        }
        let privateKey;
        if (seed) {
            // private key from seed according to https://en.bitcoin.it/wiki/BIP_0032
            // master key generation:
            privateKey = seed;
            if (!secp256k1_1.secp256k1.utils.isValidPrivateKey(privateKey)) {
                throw new Error('The seed is invalid.');
            }
        }
        else {
            privateKey = (0, utils_1.randomBytes)(32);
            while (!secp256k1_1.secp256k1.utils.isValidPrivateKey(privateKey)) {
                privateKey = (0, utils_1.randomBytes)(32);
            }
        }
        const publicKeyRaw = secp256k1_1.secp256k1.getPublicKey(privateKey, false);
        const publicKey = Secp256k1PublicKey.fromRaw(publicKeyRaw);
        return new this(publicKey, privateKey);
    }
    static fromParsedJson(obj) {
        const [publicKeyRaw, privateKeyRaw] = obj;
        return new Secp256k1KeyIdentity(Secp256k1PublicKey.fromRaw((0, utils_1.hexToBytes)(publicKeyRaw)), (0, utils_1.hexToBytes)(privateKeyRaw));
    }
    static fromJSON(json) {
        const parsed = JSON.parse(json);
        if (Array.isArray(parsed)) {
            if (typeof parsed[0] === 'string' && typeof parsed[1] === 'string') {
                return this.fromParsedJson([parsed[0], parsed[1]]);
            }
            throw new Error('Deserialization error: JSON must have at least 2 items.');
        }
        throw new Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(json)}`);
    }
    /**
     * generates an identity from a public and private key. Please ensure that you are generating these keys securely and protect the user's private key
     * @param {Uint8Array} publicKey - Uint8Array
     * @param {Uint8Array} privateKey - Uint8Array
     * @returns {Secp256k1KeyIdentity} Secp256k1KeyIdentity
     */
    static fromKeyPair(publicKey, privateKey) {
        return new Secp256k1KeyIdentity(Secp256k1PublicKey.fromRaw(publicKey), privateKey);
    }
    /**
     * generates an identity from an existing secret key, and is the correct method to generate an identity from a seed phrase. Please ensure you protect the user's private key.
     * @param {Uint8Array} secretKey - Uint8Array
     * @returns {Secp256k1KeyIdentity} - Secp256k1KeyIdentity
     */
    static fromSecretKey(secretKey) {
        const publicKey = secp256k1_1.secp256k1.getPublicKey(secretKey, false);
        const identity = Secp256k1KeyIdentity.fromKeyPair(publicKey, secretKey);
        return identity;
    }
    /**
     * Generates an identity from a seed phrase. Use carefully - seed phrases should only be used in secure contexts, and you should avoid having users copying and pasting seed phrases as much as possible.
     * @param {string | string[]} seedPhrase - either an array of words or a string of words separated by spaces.
     * @param password - optional password to be used by bip39
     * @returns Secp256k1KeyIdentity
     */
    static fromSeedPhrase(seedPhrase, password) {
        // Convert to string for convenience
        const phrase = Array.isArray(seedPhrase) ? seedPhrase.join(' ') : seedPhrase;
        // Warn if provided phrase is not conventional
        if (phrase.split(' ').length < 12 || phrase.split(' ').length > 24) {
            console.warn('Warning - an unusually formatted seed phrase has been provided. Decoding may not work as expected');
        }
        const seed = bip39.mnemonicToSeedSync(phrase, password);
        // Ensure the seed is 64 bytes long
        if (seed.byteLength !== 64) {
            throw new Error('Derived seed must be 64 bytes long.');
        }
        const root = bip32_1.HDKey.fromMasterSeed(seed);
        const addrnode = root.derive("m/44'/223'/0'/0/0");
        if (!addrnode.privateKey) {
            throw new Error('Failed to derive private key from seed phrase');
        }
        return Secp256k1KeyIdentity.fromSecretKey(addrnode.privateKey);
    }
    /**
     * Utility method to create a Secp256k1KeyIdentity from a PEM-encoded key.
     * @param pemKey - PEM-encoded key as a string
     * @returns - Secp256k1KeyIdentity
     */
    static fromPem(pemKey) {
        const secretKey = (0, pem_ts_1.pemToSecretKey)(pemKey);
        return this.fromSecretKey(secretKey);
    }
    constructor(publicKey, _privateKey) {
        super();
        this._privateKey = _privateKey;
        this._publicKey = publicKey;
    }
    /**
     * Serialize this key to JSON-serializable object.
     * @returns {JsonableSecp256k1Identity} JsonableSecp256k1Identity
     */
    toJSON() {
        return [(0, utils_1.bytesToHex)(this._publicKey.toRaw()), (0, utils_1.bytesToHex)(this._privateKey)];
    }
    /**
     * Return a copy of the key pair.
     * @returns {KeyPair} KeyPair
     */
    getKeyPair() {
        return {
            secretKey: this._privateKey,
            publicKey: this._publicKey,
        };
    }
    /**
     * Return the public key.
     * @returns {Required<PublicKey>} Required<PublicKey>
     */
    getPublicKey() {
        return this._publicKey;
    }
    /**
     * Signs a blob of data, with this identity's private key.
     * @param {Uint8Array} data - bytes to hash and sign with this identity's secretKey, producing a signature
     * @returns {Promise<Signature>} signature
     */
    async sign(data) {
        const challenge = (0, sha2_1.sha256)(data);
        const signature = secp256k1_1.secp256k1.sign(challenge, this._privateKey).toCompactRawBytes();
        return signature;
    }
}
exports.Secp256k1KeyIdentity = Secp256k1KeyIdentity;
exports.default = Secp256k1KeyIdentity;
//# sourceMappingURL=secp256k1.js.map