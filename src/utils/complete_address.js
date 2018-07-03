import reduce from 'lodash.reduce';

export function buildCompleteAddressInHash(hash, name, value) {
    if (
        /address1/ig.test(name)
    ) {
        const root = name.replace(/address1/ig, '') + 'CompleteAddress';
        hash[root] ?
            hash[root]['address1'] = value :
            hash[root] = {
                'address1': value
            }
    }
    if (
        /address2/ig.test(name)
    ) {
        const root = name.replace(/address2/ig, '') + 'CompleteAddress';
        hash[root] ?
            hash[root]['address2'] = value :
            hash[root] = {
                'address2': value
            }
    }
    if (
        /city/ig.test(name)
    ) {
        const root = name.replace(/city/ig, '') + 'CompleteAddress';
        hash[root] ?
            hash[root]['city'] = value :
            hash[root] = {
                'city': value
            }
    }
    if (
        /province/ig.test(name)
    ) {
        const root = name.replace(/province/ig, '') + 'CompleteAddress';
        hash[root] ?
            hash[root]['province'] = value :
            hash[root] = {
                'province': value
            }
    }
    if (
        /country/ig.test(name)
    ) {
        const root = name.replace(/country/ig, '') + 'CompleteAddress';
        hash[root] ?
            hash[root]['country'] = value :
            hash[root] = {
                'country': value
            }
    }
    if (
        /postcode/ig.test(name)
    ) {
        const root = name.replace(/postcode/ig, '') + 'CompleteAddress';
        hash[root] ?
            hash[root]['postcode'] = value :
            hash[root] = {
                'postcode': value
            }
    }

    return hash;
}

export function reduceHashofHashesToHashOfStrings(hashOfHashes) {
    return reduce(
        hashOfHashes,
        (hashOfStrings, value, key) => {
            hashOfStrings[key] = addressHashToString(value)
            return hashOfStrings;
        }, {}
    )
}

export function addressHashToString(hash) {
    return [
        hash['address1'],
        hash['address2'],
        hash['city'],
        hash['province'],
        hash['country'],
        hash['postcode'],
    ].filter(Boolean).join(', ')
}